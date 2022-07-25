<template>
  <div v-if="isAppDesigner" :class="$style.root">{{ initialTime }}</div>
  <div v-else :class="$style.root">{{ crtTime }}</div>
</template>

<script>
class WebWorker {
  constructor(worker) {
    const code = worker.toString();
    const blob = new Blob([`(${code})()`]);
    return new Worker(URL.createObjectURL(blob));
  }
}

function work() {
  let timer = null;
  this.onmessage = (e) => {
    let { second, state } = e.data;
    if (state === "stop") {
      if (timer) {
        clearInterval(timer);
        this.postMessage(0);
        if (second === 0) this.postMessage(--second);
        timer = null;
      }
      this.lastPauseTime = undefined;
    } else if (state === "start") {
      if (timer) {
        clearInterval(timer);
      }
      timer = setInterval(() => {
        this.postMessage(--second);
      }, 1000);
    } else if (state === "pause") {
      if (!this.lastPauseTime) {
        clearInterval(timer);
        this.postMessage(--second);
        this.lastPauseTime = second;
      }
    } else if (state === 'continue') {
      if (this.lastPauseTime) {
        timer = setInterval(() => {
          this.postMessage(--second);
        }, 1000);
        this.lastPauseTime = undefined;
      }
    }
  }
}

export default {
  name: "van-count-down-new",
  props: {
    minute: { type: Number, default: 1 },
    reverse: { type: String, default: 'positive' },
    autostart: { type: Boolean, default: true },
  },
  data() {
    return {
      second: 60 * this.minute,
      worker: undefined,
      lastPauseTime: undefined,
    };
  },
  computed: {
    isAppDesigner() {
      return !!this.$env.VUE_APP_DESIGNER;
    },
    crtTime() {
      const { second } = this;
      const totalSecond = this.minute * 60;
      if (this.reverse === 'negative') {
        const min = String(Math.floor(second / 60)).padStart(2, "0");
        const sec = String(second % 60).padStart(2, "0");
        return `${min}:${sec}`;
      } else {
        const min = String(Math.floor((totalSecond - second) / 60)).padStart(2, "0");
        const sec = String((totalSecond - second) % 60).padStart(2, "0");
        return `${min}:${sec}`;
      }

    },
    initialTime() {
      const totalSecond = this.minute * 60;
      if (this.reverse === 'negative') {
        const min = String(Math.floor(totalSecond / 60)).padStart(2, "0");
        const sec = String(totalSecond % 60).padStart(2, "0");
        return `${min}:${sec}`;
      } else {
        return '00:00';
      }
    }
  },
  watch: {
    minute(min) {
      this.worker.postMessage({ state: "stop" });
      this.second = 60 * min;
      this.worker.postMessage({
        state: "start",
        second: this.second,
      });
    },
  },
  created() {
    const worker = new WebWorker(work);
    if (this.autostart) {
      worker.postMessage({
        state: "start",
        second: this.second,
      });
      this.$emit("start");

    }
    worker.onmessage = (e) => {
      if (e.data < 0) {
        worker.postMessage({ state: "stop" });
        this.$emit("stop");
        // console.log('end')
        return;
      }
      this.second = e.data;
    };

    this.$on("hook:beforeDestroy", () => {
      worker.postMessage({ state: "stop" });
    });

    this.worker = worker;
  },
  methods: {
    start() {
      this.$emit("start");
      this.worker.postMessage({
        state: "start",
        second: this.minute * 60,
      });
    },
    stop() {
      this.worker.postMessage({
        state: "stop",
        second: 0,
      });
    },
    pause() {
      this.$emit("pause");
      this.worker.postMessage({
        state: "pause",
        second: this.second,
      });
    },
    continue() {
      this.$emit("continue");
      this.worker.postMessage({
        state: "continue",
        second: this.second,
      });
    }
  },
};
</script>

<style module>
.root {
}
</style>
