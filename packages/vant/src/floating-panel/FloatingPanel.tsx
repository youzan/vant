import { computed, defineComponent, onMounted, ref } from 'vue';
import { useLockScroll } from '../composables/use-lock-scroll';
import { addUnit, createNamespace, makeArrayProp, truthProp } from '../utils';
import { useTouch } from '../composables/use-touch';

export const FloatingPanelProps = {
  anchors: makeArrayProp<number>(),
  allowSlidingContent: truthProp,
  safeAreaInsetBottom: truthProp,
};

const [name, bem] = createNamespace('floating-panel');

export default defineComponent({
  name,

  props: FloatingPanelProps,

  emits: ['heightChange'],

  setup(props, { emit, slots }) {
    const rootRef = ref<HTMLDivElement>();
    const headerRef = ref<HTMLDivElement>();

    useLockScroll(rootRef, () => true);

    const maxHeight =
      props.anchors[props.anchors.length - 1] ?? window.innerHeight * 0.8;
    const minHeight = props.anchors[0] ?? 100;

    const heightArr = computed(() =>
      props.anchors.length > 2 ? props.anchors : [minHeight, maxHeight]
    );

    let initHeight = -minHeight;
    const showHeight = ref(initHeight);

    const ease = (moveDistance: number): number => {
      const absDistance = Math.abs(moveDistance);
      const damp = 0.3;
      if (absDistance > maxHeight) {
        return -(maxHeight + (absDistance - maxHeight) * damp);
      }
      if (absDistance < minHeight) {
        return -(minHeight - (minHeight - absDistance) * damp);
      }
      return moveDistance;
    };

    const nearest = (arr: number[], target: number) =>
      arr.reduce((pre, cur) =>
        Math.abs(pre - target) < Math.abs(cur - target) ? pre : cur
      );

    const isTransition = ref(false);

    const touch = useTouch();
    const onTouchStart = (e: TouchEvent) => {
      isTransition.value = false;
      touch.start(e);
    };
    const onTouchMove = (e: TouchEvent) => {
      touch.move(e);
      const moveDistance = touch.deltaY.value + initHeight;
      showHeight.value = ease(moveDistance);
    };
    const onTouchEnd = () => {
      isTransition.value = true;

      const absHeight = Math.abs(showHeight.value);
      const nearHeight = nearest(heightArr.value, absHeight);
      showHeight.value = -nearHeight;

      if (showHeight.value !== initHeight) {
        emit('heightChange', nearHeight);
      }

      initHeight = showHeight.value;
    };

    onMounted(() => {
      const slidingWrapper = props.allowSlidingContent ? rootRef : headerRef;
      slidingWrapper.value?.addEventListener('touchstart', onTouchStart, {
        passive: true,
      });
      slidingWrapper.value?.addEventListener('touchmove', onTouchMove);
      slidingWrapper.value?.addEventListener('touchend', onTouchEnd);
      slidingWrapper.value?.addEventListener('touchcancel', onTouchEnd);
    });

    return () => (
      <div
        class={[bem(), { 'van-safe-area-bottom': props.safeAreaInsetBottom }]}
        ref={rootRef}
        style={{
          height: addUnit(maxHeight),
          transform: `translateY(calc(100% + ${addUnit(showHeight.value)}))`,
          transition: isTransition.value ? 'transform .3s' : 'none',
        }}
      >
        <div class={bem('header')} ref={headerRef}>
          <div class={bem('header-bar')}></div>
        </div>
        <div class={bem('content')}>{slots.default?.()}</div>
      </div>
    );
  },
});
