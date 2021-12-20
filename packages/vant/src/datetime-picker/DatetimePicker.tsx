import { ref, defineComponent, type ExtractPropTypes } from 'vue';
import { pick, extend, createNamespace } from '../utils';
import { useExpose } from '../composables/use-expose';
import TimePicker from './TimePicker';
import DatePicker from './DatePicker';
import { DatetimePickerInstance } from './types';

const [name, bem] = createNamespace('datetime-picker');

const timePickerPropKeys = Object.keys(TimePicker.props);
const datePickerPropKeys = Object.keys(DatePicker.props);
const datetimePickerProps = extend({}, TimePicker.props, DatePicker.props, {
  modelValue: [String, Date],
});

export type DatetimePickerProps = ExtractPropTypes<typeof datetimePickerProps>;

export default defineComponent({
  name,

  props: datetimePickerProps,

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
        isTimePicker ? timePickerPropKeys : datePickerPropKeys
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
