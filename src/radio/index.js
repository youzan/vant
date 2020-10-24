import { pick, createNamespace } from '../utils';
import { useParent } from '@vant/use';
import Checker, { checkerProps } from '../checkbox/Checker';
import { RADIO_KEY } from '../radio-group';

const [createComponent, bem] = createNamespace('radio');

export default createComponent({
  props: checkerProps,

  emits: ['update:modelValue'],

  setup(props, { emit, slots }) {
    const { parent } = useParent(RADIO_KEY);

    const checked = () => {
      const value = parent ? parent.props.modelValue : props.modelValue;
      return value === props.name;
    };

    const toggle = () => {
      const emitter = parent ? parent.emit : emit;
      emitter('update:modelValue', props.name);
    };

    return () => (
      <Checker
        v-slots={pick(slots, ['default', 'icon'])}
        bem={bem}
        role="radio"
        parent={parent}
        checked={checked()}
        onToggle={toggle}
        {...props}
      />
    );
  },
});
