import { watch, computed, PropType } from 'vue';
import { raf, cancelRaf } from '@vant/use';
import { isObject, getSizeStyle, createNamespace } from '../utils';
import { BLUE, WHITE } from '../utils/constant';

const [createComponent, bem] = createNamespace('circle');

let uid = 0;

function format(rate: string | number) {
  return Math.min(Math.max(+rate, 0), 100);
}

function getPath(clockwise: boolean, viewBoxSize: number) {
  const sweepFlag = clockwise ? 1 : 0;
  return `M ${viewBoxSize / 2} ${
    viewBoxSize / 2
  } m 0, -500 a 500, 500 0 1, ${sweepFlag} 0, 1000 a 500, 500 0 1, ${sweepFlag} 0, -1000`;
}

export default createComponent({
  props: {
    text: String,
    strokeLinecap: String as PropType<CanvasLineCap>,
    currentRate: {
      type: Number,
      default: 0,
    },
    speed: {
      type: [Number, String],
      default: 0,
    },
    size: {
      type: [Number, String],
      default: 100,
    },
    fill: {
      type: String,
      default: 'none',
    },
    rate: {
      type: [Number, String],
      default: 100,
    },
    layerColor: {
      type: String,
      default: WHITE,
    },
    color: {
      type: [String, Object],
      default: BLUE,
    },
    strokeWidth: {
      type: [Number, String],
      default: 40,
    },
    clockwise: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['update:currentRate'],

  setup(props, { emit, slots }) {
    const id = `van-circle-${uid++}`;

    const viewBoxSize = computed(() => +props.strokeWidth + 1000);

    const path = computed(() => getPath(props.clockwise, viewBoxSize.value));

    watch(
      () => props.rate,
      (rate) => {
        let rafId;
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
      const style = {
        fill: props.fill,
        stroke: props.layerColor,
        strokeWidth: `${props.strokeWidth}px`,
      };

      return <path class={bem('hover')} style={style} d={path.value} />;
    };

    const renderLayer = () => {
      const PERIMETER = 3140;
      const { color, strokeWidth, currentRate, strokeLinecap } = props;
      const offset = (PERIMETER * currentRate) / 100;
      const style = {
        stroke: `${color}`,
        strokeWidth: `${+strokeWidth + 1}px`,
        strokeLinecap,
        strokeDasharray: `${offset}px ${PERIMETER}px`,
      };

      return (
        <path
          d={path.value}
          style={style}
          class={bem('layer')}
          stroke={isObject(color) ? `url(#${id})` : color}
        />
      );
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
        <svg viewBox={`0 0 ${viewBoxSize.value} ${viewBoxSize.value}`}>
          {renderGradient()}
          {renderHover()}
          {renderLayer()}
        </svg>
        {renderText()}
      </div>
    );
  },
});
