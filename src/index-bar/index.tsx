import { ref, watch, computed, nextTick, PropType, CSSProperties } from 'vue';

// Utils
import {
  isDef,
  isHidden,
  getScrollTop,
  preventDefault,
  createNamespace,
  getRootScrollTop,
  setRootScrollTop,
  ComponentInstance,
} from '../utils';

// Composition
import {
  useRect,
  useChildren,
  useScrollParent,
  useEventListener,
} from '@vant/use';
import { useTouch } from '../composables/use-touch';
import { useExpose } from '../composables/use-expose';

export const INDEX_BAR_KEY = 'vanIndexBar';

export type IndexBarProvide = {
  props: {
    sticky: boolean;
    zIndex?: number | string;
    highlightColor?: string;
  };
};

function genAlphabet() {
  const indexList = [];
  const charCodeOfA = 'A'.charCodeAt(0);

  for (let i = 0; i < 26; i++) {
    indexList.push(String.fromCharCode(charCodeOfA + i));
  }

  return indexList;
}

const [createComponent, bem] = createNamespace('index-bar');

export default createComponent({
  props: {
    zIndex: [Number, String],
    highlightColor: String,
    sticky: {
      type: Boolean,
      default: true,
    },
    stickyOffsetTop: {
      type: Number,
      default: 0,
    },
    indexList: {
      type: Array as PropType<string[]>,
      default: genAlphabet,
    },
  },

  emits: ['select', 'change'],

  setup(props, { emit, slots }) {
    const root = ref<HTMLElement>();
    const activeAnchor = ref();

    const touch = useTouch();
    const scrollParent = useScrollParent(root);
    const { children, linkChildren } = useChildren<ComponentInstance>(
      INDEX_BAR_KEY
    );

    linkChildren({ props });

    const sidebarStyle = computed(() => {
      if (isDef(props.zIndex)) {
        return {
          zIndex: +props.zIndex + 1,
        } as CSSProperties;
      }
    });

    const highlightStyle = computed(() => {
      if (props.highlightColor) {
        return {
          color: props.highlightColor,
        } as CSSProperties;
      }
    });

    const getScrollerRect = () => {
      if ('getBoundingClientRect' in scrollParent.value!) {
        return useRect(scrollParent);
      }
      return {
        top: 0,
        left: 0,
      };
    };

    const getActiveAnchor = (
      scrollTop: number,
      rects: Array<{ top: number; height: number }>
    ) => {
      for (let i = children.length - 1; i >= 0; i--) {
        const prevHeight = i > 0 ? rects[i - 1].height : 0;
        const reachTop = props.sticky ? prevHeight + props.stickyOffsetTop : 0;

        if (scrollTop + reachTop >= rects[i].top) {
          return i;
        }
      }

      return -1;
    };

    const onScroll = () => {
      if (isHidden(root)) {
        return;
      }

      const { sticky, indexList } = props;
      const scrollTop = getScrollTop(scrollParent.value!);
      const scrollParentRect = getScrollerRect();

      const rects = children.map((item) =>
        item.getRect(scrollParent.value, scrollParentRect)
      );

      const active = getActiveAnchor(scrollTop, rects);

      activeAnchor.value = indexList[active];

      if (sticky) {
        children.forEach((item, index) => {
          const { state, $el } = item;
          if (index === active || index === active - 1) {
            const rect = $el.getBoundingClientRect();
            state.left = rect.left;
            state.width = rect.width;
          } else {
            state.left = null;
            state.width = null;
          }

          if (index === active) {
            state.active = true;
            state.top =
              Math.max(props.stickyOffsetTop, rects[index].top - scrollTop) +
              scrollParentRect.top;
          } else if (index === active - 1) {
            const activeItemTop = rects[active].top - scrollTop;
            state.active = activeItemTop > 0;
            state.top =
              activeItemTop + scrollParentRect.top - rects[index].height;
          } else {
            state.active = false;
          }
        });
      }
    };

    useEventListener('scroll', onScroll, { target: scrollParent });

    watch(
      () => props.indexList,
      () => {
        nextTick(onScroll);
      }
    );

    watch(activeAnchor, (value) => {
      if (value) {
        emit('change', value);
      }
    });

    const renderIndexes = () =>
      props.indexList.map((index) => {
        const active = index === activeAnchor.value;
        return (
          <span
            class={bem('index', { active })}
            style={active ? highlightStyle.value : undefined}
            data-index={index}
          >
            {index}
          </span>
        );
      });

    const scrollTo = (index: string) => {
      if (!index) {
        return;
      }

      const match = children.filter((item) => String(item.index) === index);

      if (match[0]) {
        match[0].$el.scrollIntoView();

        if (props.sticky && props.stickyOffsetTop) {
          setRootScrollTop(getRootScrollTop() - props.stickyOffsetTop);
        }

        emit('select', match[0].index);
      }
    };

    const scrollToElement = (element: HTMLElement) => {
      const { index } = element.dataset;
      if (index) {
        scrollTo(index);
      }
    };

    const onClickSidebar = (event: MouseEvent) => {
      scrollToElement(event.target as HTMLElement);
    };

    let touchActiveIndex: string;

    const onTouchMove = (event: TouchEvent) => {
      touch.move(event);

      if (touch.isVertical()) {
        preventDefault(event);

        const { clientX, clientY } = event.touches[0];
        const target = document.elementFromPoint(
          clientX,
          clientY
        ) as HTMLElement;
        if (target) {
          const { index } = target.dataset;

          if (index && touchActiveIndex !== index) {
            touchActiveIndex = index;
            scrollToElement(target);
          }
        }
      }
    };

    useExpose({ scrollTo });

    return () => (
      <div ref={root} class={bem()}>
        <div
          class={bem('sidebar')}
          style={sidebarStyle.value}
          onClick={onClickSidebar}
          onTouchstart={touch.start}
          onTouchmove={onTouchMove}
        >
          {renderIndexes()}
        </div>
        {slots.default?.()}
      </div>
    );
  },
});
