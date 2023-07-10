import { defineComponent, type PropType, type ExtractPropTypes } from 'vue';

// Utils
import { pick, extend, createNamespace } from '../utils';
import { RADIO_KEY } from '../radio-group/RadioGroup';

// Composables
import { useParent } from '@vant/use';

// Components
import Checker, {
  checkerProps,
  type CheckerShape,
  type CheckerLabelPosition,
} from '../checkbox/Checker';

export type RadioShape = CheckerShape | 'dot';

export const radioProps = extend({}, checkerProps, {
  shape: String as PropType<RadioShape>,
});

export type RadioLabelPosition = CheckerLabelPosition;
export type RadioProps = ExtractPropTypes<typeof radioProps>;

const [name, bem] = createNamespace('radio');

export default defineComponent({
  name,

  props: radioProps,

  emits: ['update:modelValue'],

  setup(props, { emit, slots }) {
    const { parent } = useParent(RADIO_KEY);

    const checked = () => {
      const value = parent ? parent.props.modelValue : props.modelValue;
      return value === props.name;
    };

    const toggle = () => {
      if (parent) {
        parent.updateValue(props.name);
      } else {
        emit('update:modelValue', props.name);
      }
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
