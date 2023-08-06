import {
  computed,
  defineComponent,
  ref,
  watch,
  type ExtractPropTypes,
} from 'vue';

// Utils
import {
  addUnit,
  closest,
  createNamespace,
  makeArrayProp,
  makeNumericProp,
  truthProp,
  windowHeight,
} from '../utils';

// Composables
import { useEventListener } from '@vant/use';
import { useLockScroll } from '../composables/use-lock-scroll';
import { useTouch } from '../composables/use-touch';
import { useSyncPropRef } from '../composables/use-sync-prop-ref';

export const floatingPanelProps = {
  height: makeNumericProp(0),
  anchors: makeArrayProp<number>(),
  duration: makeNumericProp(0.2),
  contentDraggable: truthProp,
  safeAreaInsetBottom: truthProp,
};

export type FloatingPanelProps = ExtractPropTypes<typeof floatingPanelProps>;

const [name, bem] = createNamespace('floating-panel');

const DAMP = 0.2;

export default defineComponent({
  name,

  props: floatingPanelProps,

  emits: ['heightChange', 'update:height'],

  setup(props, { emit, slots }) {
    const rootRef = ref<HTMLDivElement>();
    const contentRef = ref<HTMLDivElement>();
    const height = useSyncPropRef(
      () => +props.height,
      (value) => emit('update:height', value),
    );

    const boundary = computed(() => ({
      min: props.anchors[0] ?? 100,
      max:
        props.anchors[props.anchors.length - 1] ??
        Math.round(windowHeight.value * 0.6),
    }));

    const anchors = computed(() =>
      props.anchors.length >= 2
        ? props.anchors
        : [boundary.value.min, boundary.value.max],
    );

    const dragging = ref(false);

    const rootStyle = computed(() => ({
      height: addUnit(boundary.value.max),
      transform: `translateY(calc(100% + ${addUnit(-height.value)}))`,
      transition: !dragging.value ? `transform ${props.duration}s` : 'none',
    }));

    const ease = (moveY: number): number => {
      const absDistance = Math.abs(moveY);
      const { min, max } = boundary.value;

      if (absDistance > max) {
        return -(max + (absDistance - max) * DAMP);
      }

      if (absDistance < min) {
        return -(min - (min - absDistance) * DAMP);
      }

      return moveY;
    };

    let startY: number,
      startScrollTop: number = -1,
      maxScroll: number = -1;
    const touch = useTouch();

    const onTouchstart = (e: TouchEvent) => {
      touch.start(e);
      dragging.value = true;
      startY = -height.value;
      moveCount = 0;
      moveCount = -1;
      startScrollTop = contentRef.value?.scrollTop || 0;
    };

    let moveCount = 0;
    const onTouchmove = (e: TouchEvent) => {
      moveCount += 1;
      touch.move(e);

      const target = e.target as Element;
      if (contentRef.value === target || contentRef.value?.contains(target)) {
        const { scrollTop } = contentRef.value;
        const ms = (maxScroll = Math.max(maxScroll, scrollTop));

        // starts scrolling at a position other than zero
        const isNotStartWithTop = startScrollTop > 0 && moveCount > 0;

        // starts scrolling down, then reverses the scrolling
        const isStartWithTopButInvert = moveCount > scrollTop && ms > 0;

        if (!props.contentDraggable) return;

        if (-startY < boundary.value.max) {
          if (e.cancelable) e.preventDefault();
          e.stopPropagation();
        } else if (!(scrollTop <= 0 && touch.deltaY.value > 0)) {
          return;
        } else if (isNotStartWithTop || isStartWithTopButInvert) {
          return;
        }
      }

      const moveY = touch.deltaY.value + startY;
      height.value = -ease(moveY);
    };

    const onTouchend = () => {
      moveCount = 0;
      maxScroll = -1;
      dragging.value = false;
      height.value = closest(anchors.value, height.value);

      if (height.value !== -startY) {
        emit('heightChange', { height: height.value });
      }
    };

    watch(
      boundary,
      () => {
        height.value = closest(anchors.value, height.value);
      },
      { immediate: true },
    );

    useLockScroll(rootRef, () => true);

    // useEventListener will set passive to `false` to eliminate the warning of Chrome
    useEventListener('touchmove', onTouchmove, { target: rootRef });

    return () => (
      <div
        class={[bem(), { 'van-safe-area-bottom': props.safeAreaInsetBottom }]}
        ref={rootRef}
        style={rootStyle.value}
        onTouchstartPassive={onTouchstart}
        onTouchend={onTouchend}
        onTouchcancel={onTouchend}
      >
        <div class={bem('header')}>
          <div class={bem('header-bar')} />
        </div>
        <div class={bem('content')} ref={contentRef}>
          {slots.default?.()}
        </div>
      </div>
    );
  },
});
