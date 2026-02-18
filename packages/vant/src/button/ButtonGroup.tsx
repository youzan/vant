import {
  defineComponent,
  type PropType,
  type InjectionKey,
  type ExtractPropTypes,
} from 'vue';
import { createNamespace, makeStringProp } from '../utils';
import { useChildren } from '@vant/use';
import type { ButtonSize, ButtonType } from './types';

const [name, bem] = createNamespace('button-group');

export const buttonGroupProps = {
  type: makeStringProp<ButtonType>('primary'),
  size: String as PropType<ButtonSize>,
  round: Boolean,
};

export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>;

export type ButtonGroupProvide = {
  props: ButtonGroupProps;
};

export const BUTTON_GROUP_KEY: InjectionKey<ButtonGroupProvide> = Symbol(name);

export default defineComponent({
  name,

  props: buttonGroupProps,

  setup(props, { slots }) {
    const { linkChildren } = useChildren(BUTTON_GROUP_KEY);

    linkChildren({ props });

    return () => <div class={bem()}>{slots.default?.()}</div>;
  },
});
