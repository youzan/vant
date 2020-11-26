import { ref } from 'vue';
import { pick, createNamespace } from '../utils';
import { useExpose } from '../composables/use-expose';
import TimePicker from './TimePicker';
import DatePicker from './DatePicker';

const [createComponent, bem] = createNamespace('datetime-picker');

const timePickerProps = Object.keys(TimePicker.props);
const datePickerProps = Object.keys(DatePicker.props);

export default createComponent({
  props: {
    ...TimePicker.props,
    ...DatePicker.props,
  },

  setup(props, { attrs, slots }) {
    const root = ref();

    useExpose({
      getPicker: () => root.value?.getPicker(),
    });

    return () => {
      const isTimePicker = props.type === 'time';
      const Component = isTimePicker ? TimePicker : DatePicker;
      const inheritProps = pick(
        props,
        isTimePicker ? timePickerProps : datePickerProps
      );

      return (
        <Component
          v-slots={slots}
          ref={root}
          class={bem()}
          {...{ ...inheritProps, ...attrs }}
        />
      );
    };
  },
});
