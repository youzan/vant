import { provide, reactive } from 'vue';
import { createNamespace } from '../utils';

const [createComponent, bem] = createNamespace('steps');

export const STEPS_KEY = 'vanSteps';

export default createComponent({
  props: {
    activeColor: String,
    inactiveIcon: String,
    inactiveColor: String,
    active: {
      type: [Number, String],
      default: 0,
    },
    direction: {
      type: String,
      default: 'horizontal',
    },
    activeIcon: {
      type: String,
      default: 'checked',
    },
  },

  emits: ['click-step'],

  setup(props, { emit, slots }) {
    const children = reactive([]);

    provide(STEPS_KEY, {
      emit,
      props,
      children,
    });

    return () => (
      <div class={bem([props.direction])}>
        <div class={bem('items')}>{slots.default?.()}</div>
      </div>
    );
  },
});
