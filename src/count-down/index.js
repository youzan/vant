import { createNamespace } from '../utils';
import { raf, cancelRaf } from '../utils/dom/raf';
import { isSameSecond, parseTimeData, parseFormat } from './utils';

const [createComponent, bem] = createNamespace('count-down');

export default createComponent({
  props: {
    millisecond: Boolean,
    time: {
      type: Number,
      default: 0
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    autoStart: {
      type: Boolean,
      default: true
    }
  },

  data() {
    this.counting = false;

    return {
      remainTime: 0
    };
  },

  computed: {
    timeData() {
      return parseTimeData(this.remainTime);
    },

    parsedTime() {
      return parseFormat(this.format, this.timeData);
    }
  },

  watch: {
    time: {
      immediate: true,
      handler() {
        this.reset();
      }
    }
  },

  methods: {
    start() {
      if (this.counting) {
        return;
      }

      this.counting = true;
      this.endTime = Date.now() + this.remainTime;
      this.tick();
    },

    pause() {
      this.counting = false;
      cancelRaf(this.rafId);
    },

    reset() {
      this.pause();
      this.remainTime = this.time;

      if (this.autoStart) {
        this.start();
      }
    },

    tick() {
      if (this.millisecond) {
        this.microTick();
      } else {
        this.macroTick();
      }
    },

    microTick() {
      this.rafId = raf(() => {
        this.setRemainTime(this.getRemainTime());

        if (this.remainTime !== 0) {
          this.microTick();
        }
      });
    },

    macroTick() {
      this.rafId = raf(() => {
        const remainTime = this.getRemainTime();

        if (!isSameSecond(remainTime, this.remainTime) || remainTime === 0) {
          this.setRemainTime(remainTime);
        }

        if (this.remainTime !== 0) {
          this.macroTick();
        }
      });
    },

    getRemainTime() {
      return Math.max(this.endTime - Date.now(), 0);
    },

    setRemainTime(remainTime) {
      this.remainTime = remainTime;

      if (remainTime === 0) {
        this.pause();
        this.$emit('finish');
      }
    }
  },

  render(h) {
    return <div class={bem()}>{this.slots('default', this.timeData) || this.parsedTime}</div>;
  }
});
