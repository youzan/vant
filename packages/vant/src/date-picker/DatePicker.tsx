import {
  ref,
  computed,
  defineComponent,
  type PropType,
  type ExtractPropTypes,
} from 'vue';

// Utils
import {
  pick,
  clamp,
  extend,
  isDate,
  padZero,
  createNamespace,
} from '../utils';
import {
  times,
  sharedProps,
  getMonthEndDay,
  pickerInheritKeys,
} from '../datetime-picker/utils';

// Components
import { Picker } from '../picker';

const currentYear = new Date().getFullYear();
const [name] = createNamespace('date-picker');

export type DatePickerColumnType = 'year' | 'month' | 'day';

const datePickerProps = extend({}, sharedProps, {
  modelValue: Date,
  columnsType: {
    type: Array as PropType<DatePickerColumnType[]>,
    default: () => ['year', 'month', 'day'],
  },
  minDate: {
    type: Date,
    default: () => new Date(currentYear - 10, 0, 1),
    validator: isDate,
  },
  maxDate: {
    type: Date,
    default: () => new Date(currentYear + 10, 11, 31),
    validator: isDate,
  },
});

export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>;

export default defineComponent({
  name,

  props: datePickerProps,

  emits: ['confirm', 'cancel', 'change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const currentValues = ref<string[]>([]);

    // const setValue = (type: DatePickerColumnType, newValue: string) => {
    //   const index = props.columnsType.indexOf(type);
    //   currentValues.value[index] = newValue;
    // };

    const getValue = (type: DatePickerColumnType) => {
      const index = props.columnsType.indexOf(type);
      return +currentValues.value[index];
    };

    const formatValue = (value: Date) => {
      const timestamp = clamp(
        value.getTime(),
        props.minDate.getTime(),
        props.maxDate.getTime()
      );

      const date = new Date(timestamp);
      return props.columnsType.map((type) => {
        switch (type) {
          case 'year':
            return String(date.getFullYear());
          case 'month':
            return padZero(date.getMonth() + 1);
          case 'day':
          default:
            return padZero(date.getDate());
        }
      });
    };

    if (props.modelValue) {
      currentValues.value = formatValue(props.modelValue);
    }

    const genOptions = (
      min: number,
      max: number,
      type: DatePickerColumnType
    ) => {
      const options = times(max - min + 1, (index) => {
        const value = padZero(min + index);
        return props.formatter(type, {
          text: value,
          value,
        });
      });
      return props.filter ? props.filter(type, options) : options;
    };

    const genYearOptions = () => {
      const minYear = props.minDate.getFullYear();
      const maxYear = props.maxDate.getFullYear();
      return genOptions(minYear, maxYear, 'year');
    };

    const isMaxYear = (year: number) => year === props.maxDate.getFullYear();
    const isMaxMonth = (month: number) =>
      month === props.maxDate.getMonth() + 1;

    const genMonthOptions = () => {
      if (isMaxYear(getValue('year'))) {
        return genOptions(1, props.maxDate.getMonth() + 1, 'month');
      }
      return genOptions(1, 12, 'month');
    };

    const genDayOptions = () => {
      const year = getValue('year');
      const month = getValue('month');

      let maxDate = getMonthEndDay(year, month);
      if (isMaxYear(year) && isMaxMonth(month)) {
        maxDate = props.maxDate.getDate();
      }

      return genOptions(1, maxDate, 'day');
    };

    const columns = computed(() =>
      props.columnsType.map((type) => {
        switch (type) {
          case 'year':
            return genYearOptions();
          case 'month':
            return genMonthOptions();
          case 'day':
            return genDayOptions();
          default:
            throw new Error(
              `[Vant] DatePicker: unsupported columns type: ${type}`
            );
        }
      })
    );

    // watch(currentValues, (value, oldValue) =>
    //   emit('update:modelValue', oldValue ? value : null)
    // );

    // watch(
    //   () => props.modelValue,
    //   (value) => {
    //     value = formatValue(value);

    //     if (value && value.valueOf() !== currentValues.value?.valueOf()) {
    //       currentValues.value = value;
    //     }
    //   }
    // );

    const onChange = (...args: unknown[]) => emit('change', ...args);
    const onCancel = (...args: unknown[]) => emit('cancel', ...args);
    const onConfirm = (...args: unknown[]) => emit('confirm', ...args);

    return () => (
      <Picker
        v-slots={slots}
        v-model={currentValues.value}
        columns={columns.value}
        onChange={onChange}
        onCancel={onCancel}
        onConfirm={onConfirm}
        {...pick(props, pickerInheritKeys)}
      />
    );
  },
});
