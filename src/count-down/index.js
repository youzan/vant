import {
  ref,
  watch,
  computed,
  onActivated,
  onDeactivated,
  onBeforeUnmount,
} from 'vue';
import { createNamespace } from '../utils';
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

  emits: ['change', 'finish'],

  setup(props, { emit, slots }) {
    let rafId;
    let endTime;
    let counting;
    let keepAlived;

    const remain = ref(0);
    const timeData = computed(() => parseTimeData(remain.value));
    const timeText = computed(() => parseFormat(props.format, timeData.value));

    const pause = () => {
      counting = false;
      cancelRaf(rafId);
    };

    const getCurrentRemain = () => Math.max(endTime - Date.now(), 0);

    const setRemain = (value) => {
      remain.value = value;
      emit('change', timeData.value);

      if (value === 0) {
        pause();
        emit('finish');
      }
    };

    const microTick = () => {
      rafId = raf(() => {
        // in case of call reset immediately after finish
        if (counting) {
          setRemain(getCurrentRemain());

          if (remain.value > 0) {
            microTick();
          }
        }
      });
    };

    const macroTick = () => {
      rafId = raf(() => {
        // in case of call reset immediately after finish
        if (counting) {
          const currentRemain = getCurrentRemain();

          if (
            !isSameSecond(currentRemain, remain.value) ||
            currentRemain === 0
          ) {
            setRemain(currentRemain);
          }

          if (remain.value > 0) {
            macroTick();
          }
        }
      });
    };

    const tick = () => {
      if (props.millisecond) {
        microTick();
      } else {
        macroTick();
      }
    };

    const start = () => {
      if (!counting) {
        endTime = Date.now() + remain.value;
        counting = true;
        tick();
      }
    };

    const reset = () => {
      pause();
      remain.value = +props.time;

      if (props.autoStart) {
        start();
      }
    };

    watch(
      computed(() => props.time),
      reset,
      { immediate: true }
    );

    onActivated(() => {
      if (keepAlived) {
        counting = true;
        keepAlived = false;
        tick();
      }
    });

    onDeactivated(() => {
      if (counting) {
        pause();
        keepAlived = true;
      }
    });

    onBeforeUnmount(pause);

    return (vm) => {
      // @exposed-api
      vm.start = start;
      vm.reset = reset;
      vm.pause = pause;

      return (
        <div class={bem()}>
          {slots.default ? slots.default(timeData.value) : timeText.value}
        </div>
      );
    };
  },
});
