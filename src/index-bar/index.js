import { ref, computed, watch, nextTick } from 'vue';

// Utils
import {
  isDef,
  isHidden,
  getScrollTop,
  getElementTop,
  preventDefault,
  createNamespace,
  getRootScrollTop,
  setRootScrollTop,
} from '../utils';

// Composition
import {
  useRect,
  useChildren,
  useScrollParent,
  useEventListener,
} from '@vant/use';
import { useTouch } from '../composition/use-touch';

export const INDEX_BAR_KEY = 'vanIndexBar';

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
      type: Array,
      default: genAlphabet,
    },
  },

  emits: ['select', 'change'],

  setup(props, { emit, slots }) {
    const root = ref();
    const activeAnchor = ref();

    const touch = useTouch();
    const scrollParent = useScrollParent(root);
    const { children, linkChildren } = useChildren(INDEX_BAR_KEY);

    linkChildren({ props });

    const sidebarStyle = computed(() => {
      if (isDef(props.zIndex)) {
        return {
          zIndex: 1 + props.zIndex,
        };
      }
    });

    const highlightStyle = computed(() => {
      if (props.highlightColor) {
        return {
          color: props.highlightColor,
        };
      }
    });

    const getScrollerRect = () => {
      if (scrollParent.value.getBoundingClientRect) {
        return useRect(scrollParent);
      }
      return {
        top: 0,
        left: 0,
      };
    };

    const getAnchorTop = (element, scrollParentRect) => {
      if (
        scrollParent.value === window ||
        scrollParent.value === document.body
      ) {
        return getElementTop(element);
      }

      const rect = useRect(element);
      return rect.top - scrollParentRect.top + getScrollTop(scrollParent);
    };

    const getActiveAnchor = (scrollTop, rects) => {
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
      const scrollTop = getScrollTop(scrollParent.value);
      const scrollParentRect = getScrollerRect();

      const rects = children.map((item) => ({
        height: item.height.value,
        top: getAnchorTop(item.$el, scrollParentRect),
      }));

      const active = getActiveAnchor(scrollTop, rects);

      activeAnchor.value = indexList[active];

      if (sticky) {
        children.forEach((item, index) => {
          const { state, height, $el } = item;
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
            state.top = activeItemTop + scrollParentRect.top - height.value;
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
            style={active ? highlightStyle.value : null}
            data-index={index}
          >
            {index}
          </span>
        );
      });

    const scrollToElement = (element) => {
      const { index } = element.dataset;
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

    const onClick = (event) => {
      scrollToElement(event.target);
    };

    let touchActiveIndex;
    const onTouchMove = (event) => {
      touch.move(event);

      if (touch.isVertical()) {
        preventDefault(event);

        const { clientX, clientY } = event.touches[0];
        const target = document.elementFromPoint(clientX, clientY);
        if (target) {
          const { index } = target.dataset;

          /* istanbul ignore else */
          if (touchActiveIndex !== index) {
            touchActiveIndex = index;
            scrollToElement(target);
          }
        }
      }
    };

    return () => (
      <div ref={root} class={bem()}>
        <div
          class={bem('sidebar')}
          style={sidebarStyle.value}
          onClick={onClick}
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
