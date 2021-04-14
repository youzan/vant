import { watch, computed, defineComponent } from 'vue';

// Utils
import { truthProp, createNamespace } from '../utils';
import { parseFormat } from './utils';

// Composables
import { useCountDown } from '@vant/use';
import { useExpose } from '../composables/use-expose';

const [name, bem] = createNamespace('count-down');

export default defineComponent({
  name,

  props: {
    autoStart: truthProp,
    millisecond: Boolean,
    time: {
      type: [Number, String],
      default: 0,
    },
    format: {
      type: String,
      default: 'HH:mm:ss',
    },
  },

  emits: ['change', 'finish'],

  setup(props, { emit, slots }) {
    const { start, pause, reset, current } = useCountDown({
      time: +props.time,
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
      <div class={bem()}>
        {slots.default ? slots.default(current.value) : timeText.value}
      </div>
    );
  },
});
