import { watch } from 'vue';
import { createNamespace } from '../utils';
import { useChildren } from '@vant/use';

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
    const { linkChildren } = useChildren(SIDEBAR_KEY);

    const active = () => +props.modelValue;

    const setActive = (value) => {
      if (value !== active()) {
        emit('change', value);
      }
    };

    watch(active, setActive);

    linkChildren({
      emit,
      active,
      setActive,
    });

    return () => <div class={bem()}>{slots.default?.()}</div>;
  },
});
