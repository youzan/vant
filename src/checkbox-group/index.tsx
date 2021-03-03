import { PropType, watch } from 'vue';
import { createNamespace } from '../utils';
import { useChildren } from '@vant/use';
import { useExpose } from '../composables/use-expose';
import { useLinkField } from '../composables/use-link-field';
import { CheckerParent, CheckerDirection } from '../checkbox/Checker';

const [createComponent, bem] = createNamespace('checkbox-group');

export const CHECKBOX_GROUP_KEY = 'vanCheckboxGroup';

export type CheckboxGroupToggleAllOptions =
  | boolean
  | {
      checked?: boolean;
      skipDisabled?: boolean;
    };

export type CheckboxGroupProvide = CheckerParent & {
  props: {
    max: number | string;
    modelValue: unknown[];
  };
  updateValue: (value: unknown[]) => void;
};

export default createComponent({
  props: {
    max: [Number, String],
    disabled: Boolean,
    direction: String as PropType<CheckerDirection>,
    iconSize: [Number, String],
    checkedColor: String,
    modelValue: {
      type: Array as PropType<unknown[]>,
      default: () => [],
    },
  },

  emits: ['change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const { children, linkChildren } = useChildren(CHECKBOX_GROUP_KEY);

    const updateValue = (value: unknown[]) => emit('update:modelValue', value);

    const toggleAll = (options: CheckboxGroupToggleAllOptions = {}) => {
      if (typeof options === 'boolean') {
        options = { checked: options };
      }

      const { checked, skipDisabled } = options;

      const checkedChildren = children.filter((item: any) => {
        if (!item.props.bindGroup) {
          return false;
        }
        if (item.props.disabled && skipDisabled) {
          return item.checked.value;
        }
        return checked ?? !item.checked.value;
      });

      const names = checkedChildren.map((item: any) => item.name);
      updateValue(names);
    };

    watch(
      () => props.modelValue,
      (value) => emit('change', value)
    );

    useExpose({ toggleAll });
    useLinkField(() => props.modelValue);
    linkChildren({
      props,
      updateValue,
    });

    return () => <div class={bem([props.direction])}>{slots.default?.()}</div>;
  },
});
