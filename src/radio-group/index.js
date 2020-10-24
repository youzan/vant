import { watch } from 'vue';
import { createNamespace } from '../utils';
import { useChildren } from '@vant/use';
import { useLinkField } from '../composition/use-link-field';

const [createComponent, bem] = createNamespace('radio-group');

export const RADIO_KEY = 'vanRadio';

export default createComponent({
  props: {
    disabled: Boolean,
    iconSize: [Number, String],
    direction: String,
    modelValue: null,
    checkedColor: String,
  },

  emits: ['change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const { linkChildren } = useChildren(RADIO_KEY);

    watch(
      () => props.modelValue,
      (value) => {
        emit('change', value);
      }
    );

    linkChildren({ emit, props });
    useLinkField(() => props.modelValue);

    return () => (
      <div class={bem([props.direction])} role="radiogroup">
        {slots.default?.()}
      </div>
    );
  },
});
