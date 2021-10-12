import {
  ref,
  watch,
  computed,
  nextTick,
  PropType,
  Teleport,
  onMounted,
  InjectionKey,
  CSSProperties,
  TeleportProps,
  defineComponent,
  ExtractPropTypes,
} from 'vue';

// Utils
import {
  isDef,
  isHidden,
  truthProp,
  numericProp,
  getScrollTop,
  preventDefault,
  makeNumberProp,
  createNamespace,
  getRootScrollTop,
  setRootScrollTop,
} from '../utils';

// Composables
import {
  useRect,
  useChildren,
  useScrollParent,
  useEventListener,
} from '@vant/use';
import { useTouch } from '../composables/use-touch';
import { useExpose } from '../composables/use-expose';

// Types
import { IndexBarProvide } from './types';

function genAlphabet() {
  const charCodeOfA = 'A'.charCodeAt(0);
  const indexList = Array(26)
    .fill('')
    .map((_, i) => String.fromCharCode(charCodeOfA + i));

  return indexList;
}

const [name, bem] = createNamespace('index-bar');

const props = {
  sticky: truthProp,
  zIndex: numericProp,
  teleport: [String, Object] as PropType<TeleportProps['to']>,
  highlightColor: String,
  stickyOffsetTop: makeNumberProp(0),
  indexList: {
    type: Array as PropType<string[]>,
    default: genAlphabet,
  },
};

export type IndexBarProps = ExtractPropTypes<typeof props>;

export const INDEX_BAR_KEY: InjectionKey<IndexBarProvide> = Symbol(name);

export default defineComponent({
  name,

  props,

  emits: ['select', 'change'],

  setup(props, { emit, slots }) {
    const root = ref<HTMLElement>();
    const activeAnchor = ref('');

    const touch = useTouch();
    const scrollParent = useScrollParent(root);
    const { children, linkChildren } = useChildren(INDEX_BAR_KEY);

    linkChildren({ props });

    const sidebarStyle = computed<CSSProperties | undefined>(() => {
      if (isDef(props.zIndex)) {
        return {
          zIndex: +props.zIndex + 1,
        };
      }
    });

    const highlightStyle = computed<CSSProperties | undefined>(() => {
      if (props.highlightColor) {
        return {
          color: props.highlightColor,
        };
      }
    });

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
      const scrollParentRect = useRect(scrollParent);

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

    const init = () => nextTick(onScroll);

    useEventListener('scroll', onScroll, { target: scrollParent });

    onMounted(init);

    watch(() => props.indexList, init);

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

    const scrollTo = (index: string | number) => {
      index = String(index);
      const match = children.find((item) => String(item.index) === index);

      if (match) {
        match.$el.scrollIntoView();

        if (props.sticky && props.stickyOffsetTop) {
          setRootScrollTop(getRootScrollTop() - props.stickyOffsetTop);
        }

        emit('select', match.index);
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

    const renderSidebar = () => (
      <div
        class={bem('sidebar')}
        style={sidebarStyle.value}
        onClick={onClickSidebar}
        onTouchstart={touch.start}
        onTouchmove={onTouchMove}
      >
        {renderIndexes()}
      </div>
    );

    useExpose({ scrollTo });

    return () => (
      <div ref={root} class={bem()}>
        {props.teleport ? (
          <Teleport to={props.teleport}>{renderSidebar()}</Teleport>
        ) : (
          renderSidebar()
        )}
        {slots.default?.()}
      </div>
    );
  },
});
