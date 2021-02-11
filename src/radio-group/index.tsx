import { watch } from 'vue';
import { createNamespace } from '../utils';
import { useChildren } from '@vant/use';
import { useLinkField } from '../composables/use-link-field';
import { CheckerParent } from '../checkbox/Checker';

const [createComponent, bem] = createNamespace('radio-group');

export const RADIO_KEY = 'vanRadio';

export type RadioGroupProvide = CheckerParent & {
  props: {
    modelValue: any;
  };
  updateModelValue: (value: unknown) => void;
};

export default createComponent({
  props: {
    disabled: Boolean,
    iconSize: [Number, String],
    direction: String,
    modelValue: null as any,
    checkedColor: String,
  },

  emits: ['change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const { linkChildren } = useChildren(RADIO_KEY);

    const updateModelValue = (value: unknown) => {
      emit('update:modelValue', value);
    };

    watch(
      () => props.modelValue,
      (value) => {
        emit('change', value);
      }
    );

    linkChildren({
      props,
      updateModelValue,
    });

    useLinkField(() => props.modelValue);

    return () => (
      <div class={bem([props.direction])} role="radiogroup">
        {slots.default?.()}
      </div>
    );
  },
});
