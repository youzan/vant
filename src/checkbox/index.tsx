import { computed, watch } from 'vue';
import { createNamespace, pick } from '../utils';
import { useParent } from '@vant/use';
import { useExpose } from '../composables/use-expose';
import { useLinkField } from '../composables/use-link-field';
import Checker, { checkerProps } from './Checker';
import { CHECKBOX_GROUP_KEY, CheckboxGroupProvide } from '../checkbox-group';

const [createComponent, bem] = createNamespace('checkbox');

export default createComponent({
  props: {
    ...checkerProps,
    bindGroup: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const { parent } = useParent<CheckboxGroupProvide>(CHECKBOX_GROUP_KEY);

    const setParentValue = (checked: boolean) => {
      const { name } = props;
      const { max, modelValue } = parent!.props;
      const value = modelValue.slice();

      if (checked) {
        const overlimit = max && value.length >= max;

        if (!overlimit && value.indexOf(name) === -1) {
          value.push(name);

          if (props.bindGroup) {
            parent!.updateModelValue(value);
          }
        }
      } else {
        const index = value.indexOf(name);

        if (index !== -1) {
          value.splice(index, 1);

          if (props.bindGroup) {
            parent!.updateModelValue(value);
          }
        }
      }
    };

    const checked = computed(() => {
      if (parent && props.bindGroup) {
        return parent.props.modelValue.indexOf(props.name) !== -1;
      }
      return !!props.modelValue;
    });

    const toggle = (newValue = !checked.value) => {
      if (parent && props.bindGroup) {
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

    useExpose({ toggle, props, checked });
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
