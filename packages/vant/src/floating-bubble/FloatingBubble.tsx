import {
  PropType,
  Teleport,
  TeleportProps,
  computed,
  defineComponent,
  nextTick,
  onMounted,
  ref,
  watch,
  onActivated,
  onDeactivated,
  type CSSProperties,
  type ExtractPropTypes,
} from 'vue';

import { useRect, useEventListener } from '@vant/use';
import { useTouch } from '../composables/use-touch';
import {
  addUnit,
  closest,
  createNamespace,
  makeNumberProp,
  makeStringProp,
  pick,
  windowWidth,
  windowHeight,
  TAP_OFFSET,
} from '../utils';

import Icon from '../icon';

export type FloatingBubbleAxis = 'x' | 'y' | 'xy' | 'lock';

export type FloatingBubbleMagnetic = 'x' | 'y';

export type FloatingBubbleOffset = {
  x: number;
  y: number;
};

export type FloatingBubbleBoundary = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

export const floatingBubbleProps = {
  axis: makeStringProp<FloatingBubbleAxis>('y'),
  magnetic: String as PropType<FloatingBubbleMagnetic>,
  icon: String,
  gap: makeNumberProp(24),
  offset: {
    type: Object as unknown as PropType<FloatingBubbleOffset>,
    default: () => ({ x: -1, y: -1 }),
  },
  teleport: {
    type: [String, Object] as PropType<TeleportProps['to']>,
    default: 'body',
  },
};

export type FloatingBubbleProps = ExtractPropTypes<typeof floatingBubbleProps>;

const [name, bem] = createNamespace('floating-bubble');

export default defineComponent({
  name,

  props: floatingBubbleProps,

  emits: ['click', 'update:offset', 'offsetChange'],

  setup(props, { slots, emit }) {
    const rootRef = ref<HTMLDivElement>();

    const state = ref({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    });

    const boundary = computed<FloatingBubbleBoundary>(() => ({
      top: props.gap,
      right: windowWidth.value - state.value.height - props.gap,
      bottom: windowHeight.value - state.value.width - props.gap,
      left: props.gap,
    }));

    const dragging = ref(false);
    let initialized = false;

    const rootStyle = computed(() => {
      const style: CSSProperties = {};

      const x = addUnit(state.value.x);
      const y = addUnit(state.value.y);
      style.transform = `translate3d(${x}, ${y}, 0)`;

      if (dragging.value || !initialized) {
        style.transition = 'none';
      }

      return style;
    });

    const updateState = () => {
      const { width, height } = useRect(rootRef.value!);
      const { offset } = props;
      state.value = {
        x: offset.x > -1 ? offset.x : windowWidth.value - width - props.gap,
        y: offset.y > -1 ? offset.y : windowHeight.value - height - props.gap,
        width,
        height,
      };
    };

    const touch = useTouch();
    let onlyTap = true;
    let prevX = 0;
    let prevY = 0;
    let touchStartTime: number;
    // Same as the default value of iOS double tap timeout
    const TAP_TIME = 250;

    const checkTap = () => {
      const deltaTime = Date.now() - touchStartTime;
      return (
        deltaTime < TAP_TIME &&
        touch.offsetX.value < TAP_OFFSET &&
        touch.offsetY.value < TAP_OFFSET
      );
    };

    const onTouchStart = (e: TouchEvent) => {
      touch.start(e);
      dragging.value = true;

      prevX = state.value.x;
      prevY = state.value.y;

      touchStartTime = Date.now();
    };

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();

      touch.move(e);

      if (props.axis === 'lock') return;

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

      if (checkTap()) {
        onlyTap = true;
      } else {
        onlyTap = false;
        const offset = pick(state.value, ['x', 'y']);
        emit('update:offset', offset);
      }
    };

    // useEventListener will set passive to `false` to eliminate the warning of Chrome
    useEventListener('touchmove', onTouchMove, {
      target: rootRef,
    });

    const onTouchEnd = () => {
      dragging.value = false;

      nextTick(() => {
        if (props.magnetic === 'x') {
          const nextX = closest(
            [boundary.value.left, boundary.value.right],
            state.value.x
          );
          state.value.x = nextX;
        }
        if (props.magnetic === 'y') {
          const nextY = closest(
            [boundary.value.top, boundary.value.bottom],
            state.value.y
          );
          state.value.y = nextY;
        }

        if (!onlyTap) {
          const offset = pick(state.value, ['x', 'y']);
          if (prevX !== offset.x || prevY !== offset.y) {
            emit('update:offset', offset);
            emit('offsetChange', offset);
          }
        }

        // compatible with desktop scenario
        setTimeout(() => {
          onlyTap = true;
        }, 0);

        touch.reset();
      });
    };

    const onClick = (e: MouseEvent) => {
      if (onlyTap) emit('click', e);
    };

    onMounted(() => {
      updateState();
      nextTick(() => {
        initialized = true;
      });
    });

    watch(
      [windowWidth, windowHeight, () => props.gap, () => props.offset],
      () => updateState(),
      { deep: true }
    );

    const show = ref(true);

    onActivated(() => {
      show.value = true;
    });

    onDeactivated(() => {
      if (props.teleport) {
        show.value = false;
      }
    });

    return () => {
      const Content = (
        <div
          class={bem()}
          ref={rootRef}
          onTouchstartPassive={onTouchStart}
          onTouchend={onTouchEnd}
          onTouchcancel={onTouchEnd}
          onClick={onClick}
          style={rootStyle.value}
          v-show={show.value}
        >
          {slots.default ? (
            slots.default()
          ) : (
            <Icon name={props.icon} class={bem('icon')} />
          )}
        </div>
      );
      return props.teleport ? (
        <Teleport to={props.teleport}>{Content}</Teleport>
      ) : (
        Content
      );
    };
  },
});
