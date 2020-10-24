import { computed, watch } from 'vue';
import { createNamespace, pick } from '../utils';
import { useParent } from '@vant/use';
import { useExpose } from '../composition/use-expose';
import { useLinkField } from '../composition/use-link-field';
import Checker, { checkerProps } from './Checker';

const [createComponent, bem] = createNamespace('checkbox');

export const CHECKBOX_KEY = 'vanCheckbox';

export default createComponent({
  props: {
    ...checkerProps,
    // TODO
    bindGroup: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const { parent } = useParent(CHECKBOX_KEY);

    const setParentValue = (checked) => {
      const { name } = props;
      const { max, modelValue } = parent.props;
      const value = modelValue.slice();

      if (checked) {
        const overlimit = max && value.length >= max;

        if (!overlimit && value.indexOf(name) === -1) {
          value.push(name);
          parent.emit('update:modelValue', value);
        }
      } else {
        const index = value.indexOf(name);

        if (index !== -1) {
          value.splice(index, 1);
          parent.emit('update:modelValue', value);
        }
      }
    };

    const checked = computed(() => {
      if (parent) {
        return parent.props.modelValue.indexOf(props.name) !== -1;
      }
      return props.modelValue;
    });

    const toggle = (newValue = !checked.value) => {
      if (parent) {
        setParentValue(newValue);
      } else {
        emit('update:modelValue', newValue);
      }
    };

    watch(
      () => props.modelValue,
      (value) => {
        emit('change', value);
      }
    );

    useExpose({ toggle, checked });
    useLinkField(() => props.modelValue);

    return () => (
      <Checker
        v-slots={pick(slots, ['default', 'icon'])}
        bem={bem}
        role="checkbox"
        parent={parent}
        checked={checked.value}
        onToggle={toggle}
        {...props}
      />
    );
  },
});
