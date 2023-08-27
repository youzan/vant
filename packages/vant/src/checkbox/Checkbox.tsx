import {
  watch,
  computed,
  defineComponent,
  type PropType,
  type ExtractPropTypes,
} from 'vue';

// Utils
import { pick, extend, truthProp, createNamespace } from '../utils';
import { CHECKBOX_GROUP_KEY } from '../checkbox-group/CheckboxGroup';

// Composables
import { useParent, useCustomFieldValue } from '@vant/use';
import { useExpose } from '../composables/use-expose';

// Components
import Checker, { checkerProps, type CheckerShape } from './Checker';

// Types
import type { CheckboxExpose } from './types';

const [name, bem] = createNamespace('checkbox');

export const checkboxProps = extend({}, checkerProps, {
  shape: String as PropType<CheckerShape>,
  bindGroup: truthProp,
  indeterminate: {
    type: Boolean as PropType<boolean | null>,
    default: null,
  },
});

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;

export default defineComponent({
  name,

  props: checkboxProps,

  emits: ['change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const { parent } = useParent(CHECKBOX_GROUP_KEY);

    const setParentValue = (checked: boolean) => {
      const { name } = props;
      const { max, modelValue } = parent!.props;
      const value = modelValue.slice();

      if (checked) {
        const overlimit = max && value.length >= +max;

        if (!overlimit && !value.includes(name)) {
          value.push(name);

          if (props.bindGroup) {
            parent!.updateValue(value);
          }
        }
      } else {
        const index = value.indexOf(name);

        if (index !== -1) {
          value.splice(index, 1);

          if (props.bindGroup) {
            parent!.updateValue(value);
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

      if (props.indeterminate !== null) emit('change', newValue);
    };

    watch(
      () => props.modelValue,
      (value) => {
        if (props.indeterminate === null) emit('change', value);
      },
    );

    useExpose<CheckboxExpose>({ toggle, props, checked });
    useCustomFieldValue(() => props.modelValue);

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
