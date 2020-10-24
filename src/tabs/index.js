import {
  ref,
  watch,
  computed,
  reactive,
  nextTick,
  onMounted,
  onActivated,
} from 'vue';

// Utils
import {
  isDef,
  addUnit,
  isHidden,
  unitToPx,
  getVisibleTop,
  getElementTop,
  createNamespace,
  getVisibleHeight,
  setRootScrollTop,
} from '../utils';
import { scrollLeftTo, scrollTopTo } from './utils';
import { BORDER_TOP_BOTTOM } from '../utils/constant';
import { callInterceptor } from '../utils/interceptor';

// Composition
import {
  useChildren,
  useWindowSize,
  useScrollParent,
  useEventListener,
} from '@vant/use';
import { route } from '../composition/use-route';
import { useRefs } from '../composition/use-refs';
import { useExpose } from '../composition/use-expose';

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
    let tabHeight;
    let lockScroll;
    let stickyFixed;

    const root = ref();
    const navRef = ref();
    const wrapRef = ref();

    const windowSize = useWindowSize();
    const scroller = useScrollParent(root);
    const [titleRefs, setTitleRefs] = useRefs();
    const { children, linkChildren } = useChildren(TABS_KEY);

    const state = reactive({
      inited: false,
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

    const getTabName = (tab, index) => tab.name ?? index;

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
        state.inited = true;
        tabHeight = getVisibleHeight(wrapRef.value);
        scrollIntoView(true);
      });
    };

    // update nav bar style
    const setLine = () => {
      const shouldAnimate = state.inited;

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
        if (!children[index].disabled) {
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
          emit('change', currentName.value, children[currentIndex].title);
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
        const target = children[state.currentIndex].$el;

        if (target) {
          const to = getElementTop(target, scroller.value) - scrollOffset.value;

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
      const { title, disabled } = children[index];
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
        route(item);
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
        const top = getVisibleTop(children[index].$el);

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
          dot={item.dot}
          type={props.type}
          badge={item.badge}
          title={item.title}
          color={props.color}
          style={item.titleStyle}
          isActive={index === state.currentIndex}
          disabled={item.disabled}
          scrollable={scrollable.value}
          renderTitle={item.$slots.title}
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

    watch(
      () => children.length,
      () => {
        setCurrentIndexByName(currentName.value || props.active);
        setLine();
        nextTick(() => {
          scrollIntoView(true);
        });
      }
    );

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

    linkChildren({
      emit,
      props,
      setLine,
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
          inited={state.inited}
          animated={props.animated}
          duration={props.duration}
          swipeable={props.swipeable}
          lazyRender={props.lazyRender}
          currentIndex={state.currentIndex}
          onChange={setCurrentIndex}
        >
          {slots.default?.()}
        </TabsContent>
      </div>
    );
  },
});
