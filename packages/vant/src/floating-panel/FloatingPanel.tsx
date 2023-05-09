import { ExtractPropTypes, computed, defineComponent, ref } from 'vue';
import { useLockScroll } from '../composables/use-lock-scroll';
import { addUnit, createNamespace, makeArrayProp, truthProp } from '../utils';
import { useTouch } from '../composables/use-touch';

export const floatingPanelProps = {
  anchors: makeArrayProp<number>(),
  allowDraggingContent: truthProp,
  safeAreaInsetBottom: truthProp,
};

export type FloatingPanelProps = ExtractPropTypes<typeof floatingPanelProps>;

const [name, bem] = createNamespace('floating-panel');

export default defineComponent({
  name,

  props: floatingPanelProps,

  emits: ['heightChange'],

  setup(props, { emit, slots }) {
    const rootRef = ref<HTMLDivElement>();
    const contentRef = ref<HTMLDivElement>();

    const maxHeight =
      props.anchors[props.anchors.length - 1] ?? window.innerHeight * 0.6;
    const minHeight = props.anchors[0] ?? 100;

    const heightArr = computed(() =>
      props.anchors.length >= 2 ? props.anchors : [minHeight, maxHeight]
    );

    let initHeight = -minHeight;
    const showHeight = ref(initHeight);

    const ease = (moveDistance: number): number => {
      const absDistance = Math.abs(moveDistance);
      const damp = 0.2;
      if (absDistance > maxHeight) {
        return -(maxHeight + (absDistance - maxHeight) * damp);
      }
      if (absDistance < minHeight) {
        return -(minHeight - (minHeight - absDistance) * damp);
      }
      return moveDistance;
    };

    const closest = (arr: number[], target: number) =>
      arr.reduce((pre, cur) =>
        Math.abs(pre - target) < Math.abs(cur - target) ? pre : cur
      );

    const isTransition = ref(false);
    const touch = useTouch();

    const onTouchstart = (e: TouchEvent) => {
      touch.start(e);
      isTransition.value = false;
    };

    const onTouchmove = (e: TouchEvent) => {
      touch.move(e);

      const target = e.target as Element;
      if (contentRef.value === target || contentRef.value?.contains(target)) {
        if (!props.allowDraggingContent) return;

        if (-initHeight < maxHeight) {
          if (e.cancelable) e.preventDefault();
          e.stopPropagation();
        } else if (
          !(contentRef.value.scrollTop <= 0 && touch.deltaY.value > 0)
        ) {
          return;
        }
      }

      const moveDistance = touch.deltaY.value + initHeight;
      showHeight.value = ease(moveDistance);
    };

    const onTouchend = () => {
      isTransition.value = true;
      const absHeight = Math.abs(showHeight.value);
      const closestHeight = closest(heightArr.value, absHeight);
      showHeight.value = -closestHeight;

      if (showHeight.value !== initHeight) {
        emit('heightChange', closestHeight);
      }

      initHeight = showHeight.value;
    };

    useLockScroll(rootRef, () => true);

    return () => (
      <div
        class={[bem(), { 'van-safe-area-bottom': props.safeAreaInsetBottom }]}
        ref={rootRef}
        style={{
          height: addUnit(maxHeight),
          transform: `translateY(calc(100% + ${addUnit(showHeight.value)}))`,
          transition: isTransition.value ? 'transform .3s' : 'none',
        }}
        onTouchstartPassive={onTouchstart}
        onTouchmove={onTouchmove}
        onTouchend={onTouchend}
        onTouchcancel={onTouchend}
      >
        <div class={bem('header')}>
          <div class={bem('header-bar')}></div>
        </div>
        <div class={bem('content')} ref={contentRef}>
          {slots.default?.()}
        </div>
      </div>
    );
  },
});
