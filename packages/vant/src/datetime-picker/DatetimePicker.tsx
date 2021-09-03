import { ref, defineComponent, ExtractPropTypes } from 'vue';
import { pick, extend, createNamespace } from '../utils';
import { useExpose } from '../composables/use-expose';
import TimePicker from './TimePicker';
import DatePicker from './DatePicker';
import { DatetimePickerInstance } from './types';

const [name, bem] = createNamespace('datetime-picker');

const timePickerProps = Object.keys(TimePicker.props);
const datePickerProps = Object.keys(DatePicker.props);
const props = extend({}, TimePicker.props, DatePicker.props, {
  modelValue: [String, Date],
});

export type DatetimePickerProps = ExtractPropTypes<typeof props>;

export default defineComponent({
  name,

  props,

  setup(props, { attrs, slots }) {
    const root = ref<DatetimePickerInstance>();

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
          {...inheritProps}
          {...attrs}
        />
      );
    };
  },
});
