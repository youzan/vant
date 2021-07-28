import {
  watch,
  PropType,
  InjectionKey,
  defineComponent,
  ExtractPropTypes,
  ComponentPublicInstance,
} from 'vue';

// Utils
import { createNamespace } from '../utils';

// Composables
import { useChildren } from '@vant/use';
import { useExpose } from '../composables/use-expose';
import { useLinkField } from '../composables/use-link-field';

// Types
import { CheckerParent, CheckerDirection } from '../checkbox/Checker';

const [name, bem] = createNamespace('checkbox-group');

const props = {
  max: [Number, String],
  disabled: Boolean,
  direction: String as PropType<CheckerDirection>,
  iconSize: [Number, String],
  checkedColor: String,
  modelValue: {
    type: Array as PropType<unknown[]>,
    default: () => [],
  },
};

export type CheckboxGroupToggleAllOptions =
  | boolean
  | {
      checked?: boolean;
      skipDisabled?: boolean;
    };

type CheckboxGroupProps = ExtractPropTypes<typeof props>;

type CheckboxGroupExpose = {
  toggleAll: (options?: CheckboxGroupToggleAllOptions) => void;
};

export type CheckboxGroupInstance = ComponentPublicInstance<
  CheckboxGroupProps,
  CheckboxGroupExpose
>;

export type CheckboxGroupProvide = CheckerParent & {
  props: CheckboxGroupProps;
  updateValue: (value: unknown[]) => void;
};

export const CHECKBOX_GROUP_KEY: InjectionKey<CheckboxGroupProvide> = Symbol(
  name
);

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
    useLinkField(() => props.modelValue);
    linkChildren({
      props,
      updateValue,
    });

    return () => <div class={bem([props.direction])}>{slots.default?.()}</div>;
  },
});
