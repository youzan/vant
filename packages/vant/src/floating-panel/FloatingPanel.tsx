import { computed, defineComponent, ref, type ExtractPropTypes } from 'vue';
import { useLockScroll } from '../composables/use-lock-scroll';
import { useTouch } from '../composables/use-touch';
import { addUnit, createNamespace, makeArrayProp, truthProp } from '../utils';
import { useWindowSize } from '@vant/use';

const { height: windowHeight } = useWindowSize();

export const floatingPanelProps = {
  anchors: makeArrayProp<number>(),
  contentDraggable: truthProp,
  safeAreaInsetBottom: truthProp,
};

export type FloatingPanelProps = ExtractPropTypes<typeof floatingPanelProps>;

const [name, bem] = createNamespace('floating-panel');

const DAMP = 0.2;

export default defineComponent({
  name,

  props: floatingPanelProps,

  emits: ['heightChange'],

  setup(props, { emit, slots }) {
    const rootRef = ref<HTMLDivElement>();
    const contentRef = ref<HTMLDivElement>();

    const boundary = computed(() => ({
      min: props.anchors[0] ?? 100,
      max:
        props.anchors[props.anchors.length - 1] ??
        Math.round(windowHeight.value * 0.6),
    }));

    const anchors = computed(() =>
      props.anchors.length >= 2
        ? props.anchors
        : [boundary.value.min, boundary.value.max]
    );

    const dragging = ref(false);
    const currentY = ref(-boundary.value.min);

    const rootStyle = computed(() => ({
      height: addUnit(boundary.value.max),
      transform: `translateY(calc(100% + ${addUnit(currentY.value)}))`,
      transition: !dragging.value ? 'transform .3s' : 'none',
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

    const closest = (arr: number[], target: number) =>
      arr.reduce((pre, cur) =>
        Math.abs(pre - target) < Math.abs(cur - target) ? pre : cur
      );

    let startY = currentY.value;
    const touch = useTouch();

    const onTouchstart = (e: TouchEvent) => {
      touch.start(e);
      dragging.value = true;
    };

    const onTouchmove = (e: TouchEvent) => {
      touch.move(e);

      const target = e.target as Element;
      if (contentRef.value === target || contentRef.value?.contains(target)) {
        if (!props.contentDraggable) return;

        if (-startY < boundary.value.max) {
          if (e.cancelable) e.preventDefault();
          e.stopPropagation();
        } else if (
          !(contentRef.value.scrollTop <= 0 && touch.deltaY.value > 0)
        ) {
          return;
        }
      }

      const moveY = touch.deltaY.value + startY;

      currentY.value = ease(moveY);
    };

    const onTouchend = () => {
      dragging.value = false;

      const height = Math.abs(currentY.value);
      const closestHeight = closest(anchors.value, height);
      currentY.value = -closestHeight;

      if (currentY.value !== startY) {
        emit('heightChange', closestHeight);
      }

      startY = currentY.value;
    };

    useLockScroll(rootRef, () => true);

    return () => (
      <div
        class={[bem(), { 'van-safe-area-bottom': props.safeAreaInsetBottom }]}
        ref={rootRef}
        style={rootStyle.value}
        onTouchstartPassive={onTouchstart}
        onTouchmove={onTouchmove}
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
