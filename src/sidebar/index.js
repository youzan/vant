import { watch, provide, reactive } from 'vue';
import { createNamespace } from '../utils';

const [createComponent, bem] = createNamespace('sidebar');

export const SIDEBAR_KEY = 'vanSidebar';

export default createComponent({
  props: {
    modelValue: {
      type: [Number, String],
      default: 0,
    },
  },

  emits: ['change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const children = reactive([]);
    const active = () => +props.modelValue;
    const setActive = (value) => {
      if (value !== active()) {
        emit('change', value);
      }
    };

    watch(active, setActive);

    provide(SIDEBAR_KEY, {
      emit,
      active,
      children,
      setActive,
    });

    return () => <div class={bem()}>{slots.default?.()}</div>;
  },
});
