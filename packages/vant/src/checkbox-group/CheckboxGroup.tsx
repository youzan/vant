import {
  watch,
  PropType,
  InjectionKey,
  defineComponent,
  ExtractPropTypes,
} from 'vue';

// Utils
import { numericProp, createNamespace, makeArrayProp } from '../utils';

// Composables
import { useChildren, useCustomFieldValue } from '@vant/use';
import { useExpose } from '../composables/use-expose';

// Types
import type { CheckerDirection } from '../checkbox/Checker';
import type {
  CheckboxGroupExpose,
  CheckboxGroupProvide,
  CheckboxGroupToggleAllOptions,
} from './types';

const [name, bem] = createNamespace('checkbox-group');

const props = {
  max: numericProp,
  disabled: Boolean,
  iconSize: numericProp,
  direction: String as PropType<CheckerDirection>,
  modelValue: makeArrayProp<unknown>(),
  checkedColor: String,
};

export type CheckboxGroupProps = ExtractPropTypes<typeof props>;

export const CHECKBOX_GROUP_KEY: InjectionKey<CheckboxGroupProvide> =
  Symbol(name);

export default defineComponent({
  name,

  props,

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

    useExpose<CheckboxGroupExpose>({ toggleAll });
    useCustomFieldValue(() => props.modelValue);
    linkChildren({
      props,
      updateValue,
    });

    return () => <div class={bem([props.direction])}>{slots.default?.()}</div>;
  },
});
