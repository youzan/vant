import { watch } from 'vue';
import { createNamespace } from '../utils';
import { CHECKBOX_KEY } from '../checkbox';
import { useChildren } from '@vant/use';
import { useExpose } from '../composition/use-expose';
import { useLinkField } from '../composition/use-link-field';

const [createComponent, bem] = createNamespace('checkbox-group');

export default createComponent({
  props: {
    max: [Number, String],
    disabled: Boolean,
    direction: String,
    iconSize: [Number, String],
    checkedColor: String,
    modelValue: {
      type: Array,
      default: () => [],
    },
  },

  emits: ['change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const { children, linkChildren } = useChildren(CHECKBOX_KEY);

    const toggleAll = (checked) => {
      if (checked === false) {
        emit('update:modelValue', []);
      } else {
        const names = children
          .filter((item) => checked || !item.checked.value)
          .map((item) => item.name);
        emit('update:modelValue', names);
      }
    };

    watch(
      () => props.modelValue,
      (value) => {
        emit('change', value);
      }
    );

    useExpose({ toggleAll });
    useLinkField(() => props.modelValue);
    linkChildren({ emit, props });

    return () => <div class={bem([props.direction])}>{slots.default?.()}</div>;
  },
});
