import { watch, computed, PropType, CSSProperties, defineComponent } from 'vue';
import { raf, cancelRaf } from '@vant/use';
import {
  isObject,
  truthProp,
  numericProp,
  getSizeStyle,
  makeStringProp,
  makeNumberProp,
  makeNumericProp,
  createNamespace,
} from '../utils';

const [name, bem] = createNamespace('circle');

let uid = 0;

const format = (rate: string | number) => Math.min(Math.max(+rate, 0), 100);

function getPath(clockwise: boolean, viewBoxSize: number) {
  const sweepFlag = clockwise ? 1 : 0;
  return `M ${viewBoxSize / 2} ${
    viewBoxSize / 2
  } m 0, -500 a 500, 500 0 1, ${sweepFlag} 0, 1000 a 500, 500 0 1, ${sweepFlag} 0, -1000`;
}

export type CircleStartPosition = 'top' | 'right' | 'bottom' | 'left';

export default defineComponent({
  name,

  props: {
    text: String,
    size: numericProp,
    fill: makeStringProp('none'),
    rate: makeNumericProp(100),
    speed: makeNumericProp(0),
    color: [String, Object] as PropType<string | Record<string, string>>,
    clockwise: truthProp,
    layerColor: String,
    currentRate: makeNumberProp(0),
    strokeWidth: makeNumericProp(40),
    strokeLinecap: String as PropType<CanvasLineCap>,
    startPosition: makeStringProp<CircleStartPosition>('top'),
  },

  emits: ['update:currentRate'],

  setup(props, { emit, slots }) {
    const id = `van-circle-${uid++}`;

    const viewBoxSize = computed(() => +props.strokeWidth + 1000);

    const path = computed(() => getPath(props.clockwise, viewBoxSize.value));

    const svgStyle = computed(() => {
      const ROTATE_ANGLE_MAP: Record<CircleStartPosition, number> = {
        top: 0,
        right: 90,
        bottom: 180,
        left: 270,
      };

      const angleValue = ROTATE_ANGLE_MAP[props.startPosition];
      if (angleValue) {
        return {
          transform: `rotate(${angleValue}deg)`,
        };
      }
    });

    watch(
      () => props.rate,
      (rate) => {
        let rafId: number | undefined;

        const startTime = Date.now();
        const startRate = props.currentRate;
        const endRate = format(rate);
        const duration = Math.abs(
          ((startRate - endRate) * 1000) / +props.speed
        );

        const animate = () => {
          const now = Date.now();
          const progress = Math.min((now - startTime) / duration, 1);
          const rate = progress * (endRate - startRate) + startRate;

          emit('update:currentRate', format(parseFloat(rate.toFixed(1))));

          if (endRate > startRate ? rate < endRate : rate > endRate) {
            rafId = raf(animate);
          }
        };

        if (props.speed) {
          if (rafId) {
            cancelRaf(rafId);
          }
          rafId = raf(animate);
        } else {
          emit('update:currentRate', endRate);
        }
      },
      { immediate: true }
    );

    const renderHover = () => {
      const PERIMETER = 3140;
      const { strokeWidth, currentRate, strokeLinecap } = props;
      const offset = (PERIMETER * currentRate) / 100;
      const color = isObject(props.color) ? `url(#${id})` : props.color;

      const style: CSSProperties = {
        stroke: color,
        strokeWidth: `${+strokeWidth + 1}px`,
        strokeLinecap,
        strokeDasharray: `${offset}px ${PERIMETER}px`,
      };

      return (
        <path
          d={path.value}
          style={style}
          class={bem('hover')}
          stroke={color}
        />
      );
    };

    const renderLayer = () => {
      const style = {
        fill: props.fill,
        stroke: props.layerColor,
        strokeWidth: `${props.strokeWidth}px`,
      };

      return <path class={bem('layer')} style={style} d={path.value} />;
    };

    const renderGradient = () => {
      const { color } = props;

      if (!isObject(color)) {
        return;
      }

      const Stops = Object.keys(color)
        .sort((a, b) => parseFloat(a) - parseFloat(b))
        .map((key, index) => (
          <stop key={index} offset={key} stop-color={color[key]} />
        ));

      return (
        <defs>
          <linearGradient id={id} x1="100%" y1="0%" x2="0%" y2="0%">
            {Stops}
          </linearGradient>
        </defs>
      );
    };

    const renderText = () => {
      if (slots.default) {
        return slots.default();
      }
      if (props.text) {
        return <div class={bem('text')}>{props.text}</div>;
      }
    };

    return () => (
      <div class={bem()} style={getSizeStyle(props.size)}>
        <svg
          viewBox={`0 0 ${viewBoxSize.value} ${viewBoxSize.value}`}
          style={svgStyle.value}
        >
          {renderGradient()}
          {renderLayer()}
          {renderHover()}
        </svg>
        {renderText()}
      </div>
    );
  },
});
