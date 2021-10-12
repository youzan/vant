import {
  watch,
  PropType,
  InjectionKey,
  defineComponent,
  ExtractPropTypes,
} from 'vue';
import { unknownProp, numericProp, createNamespace } from '../utils';
import { useChildren, useCustomFieldValue } from '@vant/use';
import type { CheckerDirection } from '../checkbox/Checker';

const [name, bem] = createNamespace('radio-group');

export type RadioGroupDirection = CheckerDirection;

const props = {
  disabled: Boolean,
  iconSize: numericProp,
  direction: String as PropType<RadioGroupDirection>,
  modelValue: unknownProp,
  checkedColor: String,
};

export type RadioGroupProvide = {
  props: ExtractPropTypes<typeof props>;
  updateValue: (value: unknown) => void;
};

export const RADIO_KEY: InjectionKey<RadioGroupProvide> = Symbol(name);

export default defineComponent({
  name,

  props,

  emits: ['change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const { linkChildren } = useChildren(RADIO_KEY);

    const updateValue = (value: unknown) => emit('update:modelValue', value);

    watch(
      () => props.modelValue,
      (value) => emit('change', value)
    );

    linkChildren({
      props,
      updateValue,
    });

    useCustomFieldValue(() => props.modelValue);

    return () => (
      <div class={bem([props.direction])} role="radiogroup">
        {slots.default?.()}
      </div>
    );
  },
});
