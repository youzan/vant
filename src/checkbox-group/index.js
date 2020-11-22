import { watch } from 'vue';
import { createNamespace } from '../utils';
import { CHECKBOX_KEY } from '../checkbox';
import { useChildren } from '@vant/use';
import { useExpose } from '../composables/use-expose';
import { useLinkField } from '../composables/use-link-field';

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
          .filter((item) => {
            const willCheck = checked || !item.checked.value;
            return item.props.bindGroup && willCheck;
          })
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
