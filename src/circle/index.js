import { createNamespace, isObject, addUnit } from '../utils';
import { raf, cancelRaf } from '../utils/dom/raf';

const [createComponent, bem] = createNamespace('circle');

const PERIMETER = 3140;

let uid = 0;

function format(rate) {
  return Math.min(Math.max(rate, 0), 100);
}

function getPath(clockwise, viewBoxSize) {
  const sweepFlag = clockwise ? 1 : 0;
  return `M ${viewBoxSize / 2} ${
    viewBoxSize / 2
  } m 0, -500 a 500, 500 0 1, ${sweepFlag} 0, 1000 a 500, 500 0 1, ${sweepFlag} 0, -1000`;
}

export default createComponent({
  props: {
    text: String,
    size: [Number, String],
    color: [String, Object],
    layerColor: String,
    strokeLinecap: String,
    value: {
      type: Number,
      default: 0,
    },
    speed: {
      type: [Number, String],
      default: 0,
    },
    fill: {
      type: String,
      default: 'none',
    },
    rate: {
      type: [Number, String],
      default: 100,
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

  beforeCreate() {
    this.uid = `van-circle-gradient-${uid++}`;
  },

  computed: {
    style() {
      const size = addUnit(this.size);
      return {
        width: size,
        height: size,
      };
    },

    path() {
      return getPath(this.clockwise, this.viewBoxSize);
    },

    viewBoxSize() {
      return +this.strokeWidth + 1000;
    },

    layerStyle() {
      return {
        fill: `${this.fill}`,
        stroke: `${this.layerColor}`,
        strokeWidth: `${this.strokeWidth}px`,
      };
    },

    hoverStyle() {
      const offset = (PERIMETER * this.value) / 100;

      return {
        stroke: `${this.gradient ? `url(#${this.uid})` : this.color}`,
        strokeWidth: `${+this.strokeWidth + 1}px`,
        strokeLinecap: this.strokeLinecap,
        strokeDasharray: `${offset}px ${PERIMETER}px`,
      };
    },

    gradient() {
      return isObject(this.color);
    },

    LinearGradient() {
      if (!this.gradient) {
        return;
      }

      const Stops = Object.keys(this.color)
        .sort((a, b) => parseFloat(a) - parseFloat(b))
        .map((key, index) => (
          <stop key={index} offset={key} stop-color={this.color[key]} />
        ));

      return (
        <defs>
          <linearGradient id={this.uid} x1="100%" y1="0%" x2="0%" y2="0%">
            {Stops}
          </linearGradient>
        </defs>
      );
    },
  },

  watch: {
    rate: {
      handler(rate) {
        this.startTime = Date.now();
        this.startRate = this.value;
        this.endRate = format(rate);
        this.increase = this.endRate > this.startRate;
        this.duration = Math.abs(
          ((this.startRate - this.endRate) * 1000) / this.speed
        );

        if (this.speed) {
          cancelRaf(this.rafId);
          this.rafId = raf(this.animate);
        } else {
          this.$emit('input', this.endRate);
        }
      },
      immediate: true,
    },
  },

  methods: {
    animate() {
      const now = Date.now();
      const progress = Math.min((now - this.startTime) / this.duration, 1);
      const rate = progress * (this.endRate - this.startRate) + this.startRate;

      this.$emit('input', format(parseFloat(rate.toFixed(1))));

      if (this.increase ? rate < this.endRate : rate > this.endRate) {
        this.rafId = raf(this.animate);
      }
    },
  },

  render() {
    return (
      <div class={bem()} style={this.style}>
        <svg viewBox={`0 0 ${this.viewBoxSize} ${this.viewBoxSize}`}>
          {this.LinearGradient}
          <path class={bem('layer')} style={this.layerStyle} d={this.path} />
          <path d={this.path} class={bem('hover')} style={this.hoverStyle} />
        </svg>
        {this.slots() ||
          (this.text && <div class={bem('text')}>{this.text}</div>)}
      </div>
    );
  },
});
