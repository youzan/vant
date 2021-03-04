import { PropType } from 'vue';
import { createNamespace } from '../utils';
import { useChildren } from '@vant/use';

const [createComponent, bem] = createNamespace('steps');

export const STEPS_KEY = Symbol('Steps');

export type StepsDirection = 'horizontal' | 'vertical';

export type StepsProvide = {
  props: {
    active: number | string;
    direction: StepsDirection;
    activeIcon: string;
    finishIcon?: string;
    activeColor?: string;
    inactiveIcon?: string;
    inactiveColor?: string;
  };
  onClickStep: (index: number) => void;
};

export default createComponent({
  props: {
    finishIcon: String,
    activeColor: String,
    inactiveIcon: String,
    inactiveColor: String,
    active: {
      type: [Number, String],
      default: 0,
    },
    direction: {
      type: String as PropType<StepsDirection>,
      default: 'horizontal',
    },
    activeIcon: {
      type: String,
      default: 'checked',
    },
  },

  emits: ['click-step'],

  setup(props, { emit, slots }) {
    const { linkChildren } = useChildren(STEPS_KEY);

    const onClickStep = (index: number) => emit('click-step', index);

    linkChildren({
      props,
      onClickStep,
    });

    return () => (
      <div class={bem([props.direction])}>
        <div class={bem('items')}>{slots.default?.()}</div>
      </div>
    );
  },
});
