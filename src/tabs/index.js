import {
  ref,
  watch,
  provide,
  computed,
  reactive,
  nextTick,
  onMounted,
  onActivated,
} from 'vue';

// Utils
import { createNamespace, isDef, addUnit } from '../utils';
import { scrollLeftTo, scrollTopTo } from './utils';
import { route } from '../composition/use-route';
import { isHidden } from '../utils/dom/style';
import { unitToPx } from '../utils/format/unit';
import { BORDER_TOP_BOTTOM } from '../utils/constant';
import { callInterceptor } from '../utils/interceptor';
import {
  getVisibleTop,
  getElementTop,
  getVisibleHeight,
  setRootScrollTop,
} from '../utils/dom/scroll';

// Composition
import { useRefs } from '../composition/use-refs';
import { useExpose } from '../composition/use-expose';
import { useWindowSize, useScrollParent, useEventListener } from '@vant/use';

// Components
import Sticky from '../sticky';
import TabsTitle from './TabsTitle';
import TabsContent from './TabsContent';

const [createComponent, bem] = createNamespace('tabs');

export const TABS_KEY = 'vanTabs';

export default createComponent({
  props: {
    color: String,
    border: Boolean,
    sticky: Boolean,
    animated: Boolean,
    swipeable: Boolean,
    scrollspy: Boolean,
    background: String,
    lineWidth: [Number, String],
    lineHeight: [Number, String],
    beforeChange: Function,
    titleActiveColor: String,
    titleInactiveColor: String,
    type: {
      type: String,
      default: 'line',
    },
    active: {
      type: [Number, String],
      default: 0,
    },
    ellipsis: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: [Number, String],
      default: 0.3,
    },
    offsetTop: {
      type: [Number, String],
      default: 0,
    },
    lazyRender: {
      type: Boolean,
      default: true,
    },
    swipeThreshold: {
      type: [Number, String],
      default: 5,
    },
  },

  emits: ['click', 'change', 'scroll', 'disabled', 'rendered', 'update:active'],

  setup(props, { emit, slots }) {
    let inited;
    let tabHeight;
    let lockScroll;
    let stickyFixed;

    const root = ref();
    const navRef = ref();
    const wrapRef = ref();

    const windowSize = useWindowSize();
    const scroller = useScrollParent(root);
    const [titleRefs, setTitleRefs] = useRefs();

    const children = reactive([]);
    const state = reactive({
      position: '',
      currentIndex: -1,
      lineStyle: {
        backgroundColor: props.color,
      },
    });

    // whether the nav is scrollable
    const scrollable = computed(
      () => children.length > props.swipeThreshold || !props.ellipsis
    );

    const navStyle = computed(() => ({
      borderColor: props.color,
      background: props.background,
    }));

    const getTabName = (tab, index) => tab.props.name ?? index;

    const currentName = computed(() => {
      const activeTab = children[state.currentIndex];

      if (activeTab) {
        return getTabName(activeTab, state.currentIndex);
      }
    });

    const offsetTopPx = computed(() => unitToPx(props.offsetTop));

    const scrollOffset = computed(() => {
      if (props.sticky) {
        return offsetTopPx.value + tabHeight;
      }
      return 0;
    });

    // scroll active tab into view
    const scrollIntoView = (immediate) => {
      const nav = navRef.value;
      const titles = titleRefs.value;

      if (!scrollable.value || !titles || !titles[state.currentIndex]) {
        return;
      }

      const title = titles[state.currentIndex].$el;
      const to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;

      scrollLeftTo(nav, to, immediate ? 0 : +props.duration);
    };

    const init = () => {
      nextTick(() => {
        inited = true;
        tabHeight = getVisibleHeight(wrapRef.value);
        scrollIntoView(true);
      });
    };

    // update nav bar style
    const setLine = () => {
      const shouldAnimate = inited;

      nextTick(() => {
        const titles = titleRefs.value;

        if (
          !titles ||
          !titles[state.currentIndex] ||
          props.type !== 'line' ||
          isHidden(root.value)
        ) {
          return;
        }

        const title = titles[state.currentIndex].$el;
        const { lineWidth, lineHeight } = props;
        const left = title.offsetLeft + title.offsetWidth / 2;

        const lineStyle = {
          width: addUnit(lineWidth),
          backgroundColor: props.color,
          transform: `translateX(${left}px) translateX(-50%)`,
        };

        if (shouldAnimate) {
          lineStyle.transitionDuration = `${props.duration}s`;
        }

        if (isDef(lineHeight)) {
          const height = addUnit(lineHeight);
          lineStyle.height = height;
          lineStyle.borderRadius = height;
        }

        state.lineStyle = lineStyle;
      });
    };

    const findAvailableTab = (index) => {
      const diff = index < state.currentIndex ? -1 : 1;

      while (index >= 0 && index < children.length) {
        if (!children[index].props.disabled) {
          return index;
        }

        index += diff;
      }
    };

    const setCurrentIndex = (currentIndex) => {
      currentIndex = findAvailableTab(currentIndex);

      if (isDef(currentIndex) && currentIndex !== state.currentIndex) {
        const shouldEmitChange = state.currentIndex !== null;
        state.currentIndex = currentIndex;
        emit('update:active', currentName.value);

        if (shouldEmitChange) {
          emit('change', currentName.value, children[currentIndex].props.title);
        }
      }
    };

    // correct the index of active tab
    const setCurrentIndexByName = (name) => {
      const matched = children.filter(
        (tab, index) => getTabName(tab, index) === name
      );

      const index = matched[0] ? children.indexOf(matched[0]) : 0;
      setCurrentIndex(index);
    };

    const scrollToCurrentContent = (immediate = false) => {
      if (props.scrollspy) {
        const target = children[state.currentIndex];
        const el = target?.getRoot();

        if (el) {
          const to = getElementTop(el, scroller.value) - scrollOffset.value;

          lockScroll = true;
          scrollTopTo(
            scroller.value,
            to,
            immediate ? 0 : +props.duration,
            () => {
              lockScroll = false;
            }
          );
        }
      }
    };

    // emit event when clicked
    const onClick = (item, index) => {
      const { title, disabled } = children[index].props;
      const name = getTabName(children[index], index);

      if (disabled) {
        emit('disabled', name, title);
      } else {
        callInterceptor({
          interceptor: props.beforeChange,
          args: [name],
          done: () => {
            setCurrentIndex(index);
            scrollToCurrentContent();
          },
        });

        emit('click', name, title);
        route(item.$router, item);
      }
    };

    const onStickyScroll = (params) => {
      stickyFixed = params.isFixed;
      emit('scroll', params);
    };

    const scrollTo = (name) => {
      nextTick(() => {
        setCurrentIndexByName(name);
        scrollToCurrentContent(true);
      });
    };

    const getCurrentIndexOnScroll = () => {
      for (let index = 0; index < children.length; index++) {
        const top = getVisibleTop(children[index].getRoot());

        if (top > scrollOffset.value) {
          return index === 0 ? 0 : index - 1;
        }
      }

      return children.length - 1;
    };

    const onScroll = () => {
      if (props.scrollspy && !lockScroll) {
        const index = getCurrentIndexOnScroll();
        setCurrentIndex(index);
      }
    };

    const renderNav = () =>
      children.map((item, index) => (
        <TabsTitle
          ref={setTitleRefs(index)}
          dot={item.props.dot}
          type={props.type}
          badge={item.props.badge}
          title={item.props.title}
          color={props.color}
          style={item.props.titleStyle}
          isActive={index === state.currentIndex}
          disabled={item.props.disabled}
          scrollable={scrollable.value}
          renderTitle={item.slots.title}
          activeColor={props.titleActiveColor}
          inactiveColor={props.titleInactiveColor}
          onClick={() => {
            onClick(item, index);
          }}
        />
      ));

    const renderHeader = () => {
      const { type, border } = props;
      return (
        <div
          ref={wrapRef}
          class={[
            bem('wrap', { scrollable: scrollable.value }),
            { [BORDER_TOP_BOTTOM]: type === 'line' && border },
          ]}
        >
          <div
            ref={navRef}
            role="tablist"
            class={bem('nav', [type, { complete: scrollable.value }])}
            style={navStyle.value}
          >
            {slots['nav-left']?.()}
            {renderNav()}
            {type === 'line' && (
              <div class={bem('line')} style={state.lineStyle} />
            )}
            {slots['nav-right']?.()}
          </div>
        </div>
      );
    };

    watch([() => props.color, windowSize.width], setLine);

    watch(
      () => props.active,
      (value) => {
        if (value !== currentName.value) {
          setCurrentIndexByName(name);
        }
      }
    );

    watch(children, () => {
      setCurrentIndexByName(currentName.value || props.active);
      setLine();
      nextTick(() => {
        scrollIntoView(true);
      });
    });

    watch(
      () => state.currentIndex,
      () => {
        scrollIntoView();
        setLine();

        // scroll to correct position
        if (stickyFixed && !props.scrollspy) {
          setRootScrollTop(
            Math.ceil(getElementTop(root.value) - offsetTopPx.value)
          );
        }
      }
    );

    onMounted(init);

    onActivated(() => {
      init();
      setLine();
    });

    useExpose({
      resize: setLine,
      scrollTo,
    });

    useEventListener('scroll', onScroll, { target: scroller.value });

    provide(TABS_KEY, {
      emit,
      props,
      setLine,
      children,
      currentName,
    });

    return () => (
      <div ref={root} class={bem([props.type])}>
        {props.sticky ? (
          <Sticky
            container={root.value}
            offsetTop={offsetTopPx.value}
            onScroll={onStickyScroll}
          >
            {renderHeader()}
          </Sticky>
        ) : (
          renderHeader()
        )}
        <TabsContent
          count={children.length}
          animated={props.animated}
          duration={props.duration}
          swipeable={props.swipeable}
          currentIndex={state.currentIndex}
          onChange={setCurrentIndex}
        >
          {slots.default?.()}
        </TabsContent>
      </div>
    );
  },
});
