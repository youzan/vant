import {
  ref,
  watch,
  computed,
  defineComponent,
  type ExtractPropTypes,
} from 'vue';

// Utils
import {
  addUnit,
  closest,
  createNamespace,
  makeArrayProp,
  makeNumericProp,
  preventDefault,
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
  duration: makeNumericProp(0.3),
  magnetic: truthProp,
  draggable: truthProp,
  contentDraggable: truthProp,
  lockScroll: Boolean,
  safeAreaInsetBottom: truthProp,
};

export type FloatingPanelProps = ExtractPropTypes<typeof floatingPanelProps>;

const [name, bem] = createNamespace('floating-panel');

export default defineComponent({
  name,

  props: floatingPanelProps,

  emits: ['heightChange', 'update:height'],

  setup(props, { emit, slots }) {
    const DAMP = 0.2;
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
      transition: !dragging.value
        ? `transform ${props.duration}s cubic-bezier(0.18, 0.89, 0.32, 1.28)`
        : 'none',
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

    let startY: number;
    let maxScroll: number = -1;
    const touch = useTouch();

    const onTouchstart = (e: TouchEvent) => {
      if (!props.draggable) return;

      touch.start(e);
      dragging.value = true;
      startY = -height.value;
      maxScroll = -1;
    };

    const onTouchmove = (e: TouchEvent) => {
      if (!props.draggable) return;

      touch.move(e);

      const target = e.target as Element;
      if (contentRef.value === target || contentRef.value?.contains(target)) {
        const { scrollTop } = contentRef.value;
        // If maxScroll value more than zero, indicates that panel movement is not triggered from the top
        maxScroll = Math.max(maxScroll, scrollTop);

        if (!props.contentDraggable) return;

        if (-startY < boundary.value.max) {
          preventDefault(e, true);
        } else if (
          !(scrollTop <= 0 && touch.deltaY.value > 0) ||
          maxScroll > 0
        ) {
          return;
        }
      }

      const moveY = touch.deltaY.value + startY;
      height.value = -ease(moveY);
    };

    const onTouchend = () => {
      maxScroll = -1;

      if (!dragging.value) {
        return;
      }

      dragging.value = false;

      if (!props.draggable) {
        return;
      }

      if (props.magnetic) {
        height.value = closest(anchors.value, height.value);
      } else {
        const { min, max } = boundary.value;
        height.value = Math.max(min, Math.min(max, height.value));
      }

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

    useLockScroll(rootRef, () => props.lockScroll || dragging.value);

    // useEventListener will set passive to `false` to eliminate the warning of Chrome
    useEventListener('touchmove', onTouchmove, { target: rootRef });

    const renderHeader = () => {
      if (slots.header) {
        return slots.header();
      }

      if (!props.draggable) {
        return null;
      }

      return (
        <div class={bem('header')}>
          <div class={bem('header-bar')} />
        </div>
      );
    };

    return () => (
      <div
        class={[bem(), { 'van-safe-area-bottom': props.safeAreaInsetBottom }]}
        ref={rootRef}
        style={rootStyle.value}
        onTouchstartPassive={onTouchstart}
        onTouchend={onTouchend}
        onTouchcancel={onTouchend}
      >
        {renderHeader()}
        <div
          class={bem('content')}
          ref={contentRef}
          style={{ paddingBottom: addUnit(boundary.value.max - height.value) }}
        >
          {slots.default?.()}
        </div>
      </div>
    );
  },
});
