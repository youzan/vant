import { watch, defineComponent } from 'vue';
import { UnknownProp, createNamespace } from '../utils';
import { useChildren } from '@vant/use';
import { useLinkField } from '../composables/use-link-field';
import { CheckerParent } from '../checkbox/Checker';

const [name, bem] = createNamespace('radio-group');

export const RADIO_KEY = Symbol(name);

export type RadioGroupProvide = CheckerParent & {
  props: {
    modelValue: unknown;
  };
  updateValue: (value: unknown) => void;
};

export default defineComponent({
  name,

  props: {
    disabled: Boolean,
    iconSize: [Number, String],
    direction: String,
    modelValue: UnknownProp,
    checkedColor: String,
  },

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
