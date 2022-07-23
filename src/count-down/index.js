import { createNamespace, inBrowser } from '../utils';
import { raf, cancelRaf } from '../utils/dom/raf';
import { isSameSecond, parseTimeData, parseFormat } from './utils';

const [createComponent, bem] = createNamespace('count-down');

export default createComponent({
  props: {
    millisecond: Boolean,
    time: {
      type: [Number, String],
      default: 0,
    },
    format: {
      type: String,
      default: 'HH:mm:ss',
    },
    autoStart: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      remain: 0,
    };
  },

  computed: {
    timeData() {
      return parseTimeData(this.remain);
    },

    formattedTime() {
      return parseFormat(this.format, this.timeData);
    },
  },

  watch: {
    time: {
      immediate: true,
      handler: 'reset',
    },
  },

  activated() {
    if (this.keepAlivePaused) {
      this.counting = true;
      this.keepAlivePaused = false;
      this.tick();
    }
  },

  deactivated() {
    if (this.counting) {
      this.pause();
      this.keepAlivePaused = true;
    }
  },

  beforeDestroy() {
    this.pause();
  },

  methods: {
    // @exposed-api
    start() {
      if (this.counting) {
        return;
      }

      this.counting = true;
      this.endTime = Date.now() + this.remain;
      this.tick();
    },

    // @exposed-api
    pause() {
      this.counting = false;
      cancelRaf(this.rafId);
    },

    // @exposed-api
    reset() {
      this.pause();
      this.remain = +this.time;

      if (this.autoStart) {
        this.start();
      }
    },

    tick() {
      // should not start counting in server
      // see: https://github.com/vant-ui/vant/issues/7807
      if (!inBrowser) {
        return;
      }

      if (this.millisecond) {
        this.microTick();
      } else {
        this.macroTick();
      }
    },

    microTick() {
      this.rafId = raf(() => {
        /* istanbul ignore if */
        // in case of call reset immediately after finish
        if (!this.counting) {
          return;
        }

        this.setRemain(this.getRemain());

        if (this.remain > 0) {
          this.microTick();
        }
      });
    },

    macroTick() {
      this.rafId = raf(() => {
        /* istanbul ignore if */
        // in case of call reset immediately after finish
        if (!this.counting) {
          return;
        }

        const remain = this.getRemain();

        if (!isSameSecond(remain, this.remain) || remain === 0) {
          this.setRemain(remain);
        }

        if (this.remain > 0) {
          this.macroTick();
        }
      });
    },

    getRemain() {
      return Math.max(this.endTime - Date.now(), 0);
    },

    setRemain(remain) {
      this.remain = remain;
      this.$emit('change', this.timeData);

      if (remain === 0) {
        this.pause();
        this.$emit('finish');
      }
    },
  },

  render() {
    return (
      <div class={bem()}>
        {this.slots('default', this.timeData) || this.formattedTime}
      </div>
    );
  },
});
