import { defineComponent, type InjectionKey, type ExtractPropTypes } from 'vue';
import { makeNumericProp, createNamespace } from '../utils';
import { useChildren } from '@vant/use';

const [name, bem] = createNamespace('sidebar');

export type SidebarProvide = {
  getActive: () => number;
  setActive: (value: number) => void;
};

export const SIDEBAR_KEY: InjectionKey<SidebarProvide> = Symbol(name);

export const sidebarProps = {
  modelValue: makeNumericProp(0),
};

export type SidebarProps = ExtractPropTypes<typeof sidebarProps>;

export default defineComponent({
  name,

  props: sidebarProps,

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

    return () => (
      <div role="tablist" class={bem()}>
        {slots.default?.()}
      </div>
    );
  },
});
