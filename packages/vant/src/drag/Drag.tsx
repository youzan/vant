import {
  CSSProperties,
  ExtractPropTypes,
  computed,
  defineComponent,
  nextTick,
  onMounted,
  ref,
  watch,
  useAttrs,
} from 'vue';
import {
  addUnit,
  closest,
  createNamespace,
  extend,
  numericProp,
  pick,
  windowHeight,
  windowWidth,
} from '../utils';
import { useTouch } from '../composables/use-touch';
import { useRect, useEventListener } from '@vant/use';

const [name, bem] = createNamespace('drag');

export const dragProps = {
  axis: {
    type: String,
    default: 'xy',
  },
  magnetic: String,
  boundary: Object,
  zIndex: {
    type: numericProp,
    default: 10,
  },
};

export type DragProps = ExtractPropTypes<typeof dragProps>;

export default defineComponent({
  name,

  props: dragProps,

  emits: ['dragStart', 'drag', 'dragEnd', 'offsetChange'],

  setup(props, { slots, emit }) {
    const rootRef = ref<HTMLDivElement>();
    const attrs = useAttrs();
    const state = ref({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    });

    const boundary = computed(() => {
      if (props.boundary) {
        return props.boundary;
      } else {
        return {
          top: 0,
          right: windowWidth.value - state.value.width,
          bottom: windowHeight.value - state.value.height,
          left: 0,
        };
      }
    });

    const dragging = ref(false);

    const rootStyle = ref<CSSProperties>({});

    const updateState = () => {
      const { left, top, width, height } = useRect(rootRef.value!);
      state.value = {
        x: left,
        y: top,
        width,
        height,
      };
    };

    const touch = useTouch();
    let prevX = 0;
    let prevY = 0;

    const onTouchStart = (e: TouchEvent) => {
      touch.start(e);
      dragging.value = true;

      prevX = state.value.x;
      prevY = state.value.y;
      emit('dragStart', e);
    };

    const onTouchMove = (e: TouchEvent) => {
      emit('drag', e);
      e.preventDefault();

      touch.move(e);

      if (!touch.isTap.value) {
        if (props.axis === 'x' || props.axis === 'xy') {
          let nextX = prevX + touch.deltaX.value;
          if (nextX < boundary.value.left) nextX = boundary.value.left;
          if (nextX > boundary.value.right) nextX = boundary.value.right;
          state.value.x = nextX;
        }

        if (props.axis === 'y' || props.axis === 'xy') {
          let nextY = prevY + touch.deltaY.value;
          if (nextY < boundary.value.top) nextY = boundary.value.top;
          if (nextY > boundary.value.bottom) nextY = boundary.value.bottom;
          state.value.y = nextY;
        }

        const offset = pick(state.value, ['x', 'y']);
        emit('offsetChange', offset);
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      dragging.value = false;
      emit('dragEnd', e);
      nextTick(() => {
        if (props.magnetic === 'x') {
          const nextX = closest(
            [boundary.value.left, boundary.value.right],
            state.value.x,
          );
          state.value.x = nextX;
        }
        if (props.magnetic === 'y') {
          const nextY = closest(
            [boundary.value.top, boundary.value.bottom],
            state.value.y,
          );
          state.value.y = nextY;
        }

        if (!touch.isTap.value) {
          const offset = pick(state.value, ['x', 'y']);
          if (prevX !== offset.x || prevY !== offset.y) {
            emit('offsetChange', offset);
          }
        }
      });
    };

    useEventListener('touchmove', onTouchMove, {
      target: rootRef,
    });

    onMounted(() => {
      nextTick(() => {
        updateState();
      });
    });

    watch([windowWidth, windowHeight], updateState);

    watch(
      () => state.value,
      (val) => {
        nextTick(() => {
          const x = addUnit(val.x);
          const y = addUnit(val.y);
          rootStyle.value.top = y;
          rootStyle.value.left = x;
          rootStyle.value.zIndex = props.zIndex;
          if (dragging.value) {
            rootStyle.value.transition = 'none';
          } else {
            rootStyle.value.transition = 'left 0.3s, top 0.3s';
          }
        });
      },
      { immediate: true, deep: true },
    );

    return () => {
      return (
        <div
          ref={rootRef}
          class={bem()}
          style={extend((attrs.style as CSSProperties) || {}, rootStyle.value)}
          onTouchstartPassive={onTouchStart}
          onTouchend={onTouchEnd}
          onTouchcancel={onTouchEnd}
        >
          {slots.default?.()}
        </div>
      );
    };
  },
});
