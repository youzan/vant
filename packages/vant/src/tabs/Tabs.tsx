import {
  ref,
  watch,
  computed,
  reactive,
  nextTick,
  onActivated,
  defineComponent,
  type PropType,
  type InjectionKey,
  type CSSProperties,
  type ExtractPropTypes,
  type ComponentPublicInstance,
} from 'vue';

// Utils
import {
  isDef,
  addUnit,
  isHidden,
  unitToPx,
  truthProp,
  numericProp,
  windowWidth,
  getElementTop,
  makeStringProp,
  callInterceptor,
  createNamespace,
  makeNumericProp,
  setRootScrollTop,
  BORDER_TOP_BOTTOM,
  type Numeric,
  type Interceptor,
  type ComponentInstance,
} from '../utils';
import { scrollLeftTo, scrollTopTo } from './utils';

// Composables
import {
  useRect,
  useChildren,
  useScrollParent,
  useEventListener,
  onMountedOrActivated,
} from '@vant/use';
import { useId } from '../composables/use-id';
import { route, RouteProps } from '../composables/use-route';
import { useRefs } from '../composables/use-refs';
import { useExpose } from '../composables/use-expose';
import { onPopupReopen } from '../composables/on-popup-reopen';
import { useVisibilityChange } from '../composables/use-visibility-change';

// Components
import { Sticky } from '../sticky';
import TabsContent from './TabsContent';

// Types
import type { TabsProvide, TabsType } from './types';

const [name, bem] = createNamespace('tabs');

export const tabsProps = {
  type: makeStringProp<TabsType>('line'),
  color: String,
  border: Boolean,
  sticky: Boolean,
  shrink: Boolean,
  active: makeNumericProp(0),
  duration: makeNumericProp(0.3),
  animated: Boolean,
  ellipsis: truthProp,
  swipeable: Boolean,
  scrollspy: Boolean,
  offsetTop: makeNumericProp(0),
  background: String,
  lazyRender: truthProp,
  showHeader: truthProp,
  lineWidth: numericProp,
  lineHeight: numericProp,
  beforeChange: Function as PropType<Interceptor>,
  swipeThreshold: makeNumericProp(5),
  titleActiveColor: String,
  titleInactiveColor: String,
};

export type TabsProps = ExtractPropTypes<typeof tabsProps>;

export const TABS_KEY: InjectionKey<TabsProvide> = Symbol(name);

export default defineComponent({
  name,

  props: tabsProps,

  emits: ['change', 'scroll', 'rendered', 'clickTab', 'update:active'],

  setup(props, { emit, slots }) {
    let tabHeight: number;
    let lockScroll: boolean;
    let stickyFixed: boolean;
    let cancelScrollLeftToRaf: (() => void) | undefined;
    let cancelScrollTopToRaf: (() => void) | undefined;

    const root = ref<HTMLElement>();
    const navRef = ref<HTMLElement>();
    const wrapRef = ref<HTMLElement>();
    const contentRef = ref<ComponentInstance>();

    const id = useId();
    const scroller = useScrollParent(root);
    const [titleRefs, setTitleRefs] = useRefs<ComponentInstance>();
    const { children, linkChildren } = useChildren(TABS_KEY);

    const state = reactive({
      inited: false,
      position: '',
      lineStyle: {} as CSSProperties,
      currentIndex: -1,
    });

    // whether the nav is scrollable
    const scrollable = computed(
      () =>
        children.length > +props.swipeThreshold ||
        !props.ellipsis ||
        props.shrink,
    );

    const navStyle = computed(() => ({
      borderColor: props.color,
      background: props.background,
    }));

    const getTabName = (tab: ComponentInstance, index: number): Numeric =>
      tab.name ?? index;

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
    const scrollIntoView = (immediate?: boolean) => {
      const nav = navRef.value;
      const titles = titleRefs.value;

      if (!scrollable.value || !nav || !titles || !titles[state.currentIndex]) {
        return;
      }

      const title = titles[state.currentIndex].$el;
      const to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;

      if (cancelScrollLeftToRaf) cancelScrollLeftToRaf();
      cancelScrollLeftToRaf = scrollLeftTo(
        nav,
        to,
        immediate ? 0 : +props.duration,
      );
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
          isHidden(root.value!)
        ) {
          return;
        }

        const title = titles[state.currentIndex].$el;
        const { lineWidth, lineHeight } = props;
        const left = title.offsetLeft + title.offsetWidth / 2;

        const lineStyle: CSSProperties = {
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

    const findAvailableTab = (index: number) => {
      const diff = index < state.currentIndex ? -1 : 1;

      while (index >= 0 && index < children.length) {
        if (!children[index].disabled) {
          return index;
        }

        index += diff;
      }
    };

    const setCurrentIndex = (
      currentIndex: number,
      skipScrollIntoView?: boolean,
    ) => {
      const newIndex = findAvailableTab(currentIndex);

      if (!isDef(newIndex)) {
        return;
      }

      const newTab = children[newIndex];
      const newName = getTabName(newTab, newIndex);
      const shouldEmitChange = state.currentIndex !== null;

      if (state.currentIndex !== newIndex) {
        state.currentIndex = newIndex;

        if (!skipScrollIntoView) {
          scrollIntoView();
        }
        setLine();
      }

      if (newName !== props.active) {
        emit('update:active', newName);

        if (shouldEmitChange) {
          emit('change', newName, newTab.title);
        }
      }

      // scroll to correct position
      if (stickyFixed && !props.scrollspy) {
        setRootScrollTop(
          Math.ceil(getElementTop(root.value!) - offsetTopPx.value),
        );
      }
    };

    // correct the index of active tab
    const setCurrentIndexByName = (
      name: Numeric,
      skipScrollIntoView?: boolean,
    ) => {
      const matched = children.find(
        (tab, index) => getTabName(tab, index) === name,
      );

      const index = matched ? children.indexOf(matched) : 0;
      setCurrentIndex(index, skipScrollIntoView);
    };

    const scrollToCurrentContent = (immediate = false) => {
      if (props.scrollspy) {
        const target = children[state.currentIndex].$el;

        if (target && scroller.value) {
          const to = getElementTop(target, scroller.value) - scrollOffset.value;

          lockScroll = true;

          if (cancelScrollTopToRaf) cancelScrollTopToRaf();
          cancelScrollTopToRaf = scrollTopTo(
            scroller.value,
            to,
            immediate ? 0 : +props.duration,
            () => {
              lockScroll = false;
            },
          );
        }
      }
    };

    // emit event when clicked
    const onClickTab = (
      item: ComponentInstance,
      index: number,
      event: MouseEvent,
    ) => {
      const { title, disabled } = children[index];
      const name = getTabName(children[index], index);

      if (!disabled) {
        callInterceptor(props.beforeChange, {
          args: [name],
          done: () => {
            setCurrentIndex(index);
            scrollToCurrentContent();
          },
        });

        route(item as ComponentPublicInstance<RouteProps>);
      }

      emit('clickTab', {
        name,
        title,
        event,
        disabled,
      });
    };

    const onStickyScroll = (params: {
      isFixed: boolean;
      scrollTop: number;
    }) => {
      stickyFixed = params.isFixed;
      emit('scroll', params);
    };

    const scrollTo = (name: Numeric) => {
      nextTick(() => {
        setCurrentIndexByName(name);
        scrollToCurrentContent(true);
      });
    };

    const getCurrentIndexOnScroll = () => {
      for (let index = 0; index < children.length; index++) {
        const { top } = useRect(children[index].$el);

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

    const renderLine = () => {
      if (props.type === 'line' && children.length) {
        return <div class={bem('line')} style={state.lineStyle} />;
      }
    };

    const renderHeader = () => {
      const { type, border, sticky } = props;

      const Header = [
        <div
          ref={sticky ? undefined : wrapRef}
          class={[
            bem('wrap'),
            { [BORDER_TOP_BOTTOM]: type === 'line' && border },
          ]}
        >
          <div
            ref={navRef}
            role="tablist"
            class={bem('nav', [
              type,
              { shrink: props.shrink, complete: scrollable.value },
            ])}
            style={navStyle.value}
            aria-orientation="horizontal"
          >
            {slots['nav-left']?.()}
            {children.map((item) => item.renderTitle(onClickTab))}
            {renderLine()}
            {slots['nav-right']?.()}
          </div>
        </div>,
        slots['nav-bottom']?.(),
      ];

      if (sticky) {
        return <div ref={wrapRef}>{Header}</div>;
      }
      return Header;
    };

    const resize = () => {
      setLine();

      nextTick(() => {
        scrollIntoView(true);
        contentRef.value?.swipeRef.value?.resize();
      });
    };

    watch(
      () => [props.color, props.duration, props.lineWidth, props.lineHeight],
      setLine,
    );
    watch(windowWidth, resize);

    watch(
      () => props.active,
      (value) => {
        if (value !== currentName.value) {
          setCurrentIndexByName(value);
        }
      },
    );

    watch(
      () => children.length,
      () => {
        if (state.inited) {
          setCurrentIndexByName(props.active);
          setLine();
          nextTick(() => {
            scrollIntoView(true);
          });
        }
      },
    );

    const init = () => {
      setCurrentIndexByName(props.active, true);
      nextTick(() => {
        state.inited = true;
        if (wrapRef.value) {
          tabHeight = useRect(wrapRef.value).height;
        }
        scrollIntoView(true);
      });
    };

    const onRendered = (name: Numeric, title?: string) =>
      emit('rendered', name, title);

    useExpose({
      resize,
      scrollTo,
    });

    onActivated(setLine);
    onPopupReopen(setLine);
    onMountedOrActivated(init);
    useVisibilityChange(root, setLine);
    useEventListener('scroll', onScroll, {
      target: scroller,
      passive: true,
    });

    linkChildren({
      id,
      props,
      setLine,
      scrollable,
      onRendered,
      currentName,
      setTitleRefs,
      scrollIntoView,
    });

    return () => (
      <div ref={root} class={bem([props.type])}>
        {props.showHeader ? (
          props.sticky ? (
            <Sticky
              container={root.value}
              offsetTop={offsetTopPx.value}
              onScroll={onStickyScroll}
            >
              {renderHeader()}
            </Sticky>
          ) : (
            renderHeader()
          )
        ) : null}
        <TabsContent
          ref={contentRef}
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
