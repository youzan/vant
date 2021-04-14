import { watch, defineComponent, ExtractPropTypes } from 'vue';
import { unknownProp, createNamespace } from '../utils';
import { useChildren } from '@vant/use';
import { useLinkField } from '../composables/use-link-field';
import { CheckerParent } from '../checkbox/Checker';

const [name, bem] = createNamespace('radio-group');

export const RADIO_KEY = Symbol(name);

const props = {
  disabled: Boolean,
  iconSize: [Number, String],
  direction: String,
  modelValue: unknownProp,
  checkedColor: String,
};

export type RadioGroupProvide = CheckerParent & {
  props: ExtractPropTypes<typeof props>;
  updateValue: (value: unknown) => void;
};

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

    useLinkField(() => props.modelValue);

    return () => (
      <div class={bem([props.direction])} role="radiogroup">
        {slots.default?.()}
      </div>
    );
  },
});
