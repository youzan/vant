import {
  CSSProperties,
  ExtractPropTypes,
  PropType,
  Teleport,
  TeleportProps,
  computed,
  defineComponent,
  nextTick,
  onMounted,
  ref,
  watch,
} from 'vue';
import {
  addUnit,
  closest,
  createNamespace,
  makeNumberProp,
  makeStringProp,
  pick,
} from '../utils';
import Icon from '../icon';
import { useTouch } from '../composables/use-touch';
import { useRect, useWindowSize } from '@vant/use';

const [name, bem] = createNamespace('floating-bubble');

export type AxisType = 'x' | 'y' | 'xy';

export type MagneticType = 'x' | 'y';

export type OffsetType = {
  x: number;
  y: number;
};

export type BoundaryType = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

export const floatingBubbleProps = {
  axis: makeStringProp<AxisType>('y'),
  magnetic: String as PropType<MagneticType>,
  space: makeNumberProp(24),
  offset: {
    type: Object as unknown as PropType<OffsetType>,
    default: () => ({ x: -1, y: -1 }),
  },
  teleport: {
    type: [String, Object] as PropType<TeleportProps['to']>,
    default: 'body',
  },
};

export type FloatingBubbleProps = ExtractPropTypes<typeof floatingBubbleProps>;

const { width: windowWidth, height: windowHeight } = useWindowSize();

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

    const boundary = computed<BoundaryType>(() => ({
      top: props.space,
      right: windowWidth.value - state.value.height - props.space,
      bottom: windowHeight.value - state.value.width - props.space,
      left: props.space,
    }));

    const dragging = ref(false);
    let initialized = false;
    let moving = false;

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

    const updateState = async () => {
      const { width, height } = useRect(rootRef.value!);
      const { offset } = props;
      state.value = {
        x: offset.x > -1 ? offset.x : windowWidth.value - width - props.space,
        y: offset.y > -1 ? offset.y : windowHeight.value - height - props.space,
        width,
        height,
      };
    };

    const touch = useTouch();
    let prevX = 0;
    let prevY = 0;
    const onTouchstart = (e: TouchEvent) => {
      touch.start(e);
      dragging.value = true;

      prevX = state.value.x;
      prevY = state.value.y;
    };
    const onTouchmove = (e: TouchEvent) => {
      e.preventDefault();

      moving = true;
      touch.move(e);

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
    };
    const onTouchend = async () => {
      dragging.value = false;

      await nextTick();
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

      if (moving) {
        const offset = pick(state.value, ['x', 'y']);
        emit('update:offset', offset);
        emit('offsetChange', offset);
      }

      // compatible with desktop scenario
      setTimeout(() => {
        moving = false;
      }, 0);
    };

    const onClick = () => {
      if (moving) return;
      emit('click');
    };

    onMounted(() => {
      updateState();
      nextTick(() => {
        initialized = true;
      });
    });

    watch(
      [windowWidth, windowHeight, () => props.space, () => props.offset],
      () => updateState(),
      { deep: true }
    );

    return () => {
      const Content = (
        <div
          class={bem()}
          ref={rootRef}
          onTouchstart={onTouchstart}
          onTouchmove={onTouchmove}
          onTouchend={onTouchend}
          onTouchcancel={onTouchend}
          onClick={onClick}
          style={rootStyle.value}
        >
          {slots.default ? (
            slots.default()
          ) : (
            <Icon name="chat" class={bem('icon')} />
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
