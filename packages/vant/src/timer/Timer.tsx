import { watch, computed, defineComponent, type ExtractPropTypes } from 'vue';

// Utils
import {
  truthProp,
  makeStringProp,
  makeNumericProp,
  createNamespace,
} from '../utils';
import { parseFormat } from './utils';

// Composables
import { useTimer } from '@vant/use';
import { useExpose } from '../composables/use-expose';

const [name, bem] = createNamespace('timer');

export const timerProps = {
  time: makeNumericProp(0),
  maxTime: makeNumericProp(0),
  format: makeStringProp('HH:mm:ss'),
  autoStart: truthProp,
  millisecond: Boolean,
};

export type TimerProps = ExtractPropTypes<typeof timerProps>;

export default defineComponent({
  name,

  props: timerProps,

  emits: ['change', 'finish'],

  setup(props, { emit, slots }) {
    const { start, pause, reset, current } = useTimer({
      time: +props.time,
      maxTime: +props.maxTime,
      millisecond: props.millisecond,
      onChange: (current) => emit('change', current),
      onFinish: () => emit('finish'),
    });

    const timeText = computed(() => parseFormat(props.format, current.value));

    const resetTime = () => {
      reset(+props.time);

      if (props.autoStart) {
        start();
      }
    };

    watch(() => props.time, resetTime, { immediate: true });

    useExpose({
      start,
      pause,
      reset: resetTime,
    });

    return () => (
      <div role="timer" class={bem()}>
        {slots.default ? slots.default(current.value) : timeText.value}
      </div>
    );
  },
});
