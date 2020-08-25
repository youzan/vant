import { ref, watch, provide, computed } from 'vue';
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
    const children = ref([]);
    const index = ref(+props.modelValue);
    const active = computed(() => props.modelValue);

    const setIndex = (value) => {
      if (value !== index.value) {
        index.value = value;
        emit('change', value);
      }
    };

    watch(active, (val) => {
      setIndex(+val);
    });

    provide(SIDEBAR_KEY, {
      emit,
      active,
      children,
      setIndex,
    });

    return () => <div class={bem()}>{slots.default?.()}</div>;
  },
});
