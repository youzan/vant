import { defineComponent, InjectionKey } from 'vue';
import { makeNumericProp, createNamespace } from '../utils';
import { useChildren } from '@vant/use';

const [name, bem] = createNamespace('sidebar');

export type SidebarProvide = {
  getActive: () => number;
  setActive: (value: number) => void;
};

export const SIDEBAR_KEY: InjectionKey<SidebarProvide> = Symbol(name);

export default defineComponent({
  name,

  props: {
    modelValue: makeNumericProp(0),
  },

  emits: ['change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const { linkChildren } = useChildren(SIDEBAR_KEY);

    const getActive = () => +props.modelValue;

    const setActive = (value: number) => {
      if (value !== getActive()) {
        emit('update:modelValue', value);
        emit('change', value);
      }
    };

    linkChildren({
      getActive,
      setActive,
    });

    return () => <div class={bem()}>{slots.default?.()}</div>;
  },
});
