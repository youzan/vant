import {
  ref,
  watch,
  computed,
  defineComponent,
  type PropType,
  type ExtractPropTypes,
} from 'vue';

// Utils
import { pick, extend, isDate, isSameValue, createNamespace } from '../utils';
import {
  genOptions,
  sharedProps,
  getMonthEndDay,
  pickerInheritKeys,
} from './utils';

// Components
import { Picker } from '../picker';

const currentYear = new Date().getFullYear();
const [name] = createNamespace('date-picker');

export type DatePickerColumnType = 'year' | 'month' | 'day';

const datePickerProps = extend({}, sharedProps, {
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
    const currentValues = ref<string[]>(props.modelValue);

    const genYearOptions = () => {
      const minYear = props.minDate.getFullYear();
      const maxYear = props.maxDate.getFullYear();
      return genOptions(
        minYear,
        maxYear,
        'year',
        props.formatter,
        props.filter
      );
    };

    const isMaxYear = (year: number) => year === props.maxDate.getFullYear();
    const isMaxMonth = (month: number) =>
      month === props.maxDate.getMonth() + 1;

    const getValue = (type: DatePickerColumnType) => {
      const { minDate, columnsType } = props;
      const index = columnsType.indexOf(type);
      const value = currentValues.value[index];
      if (value) {
        return +value;
      }

      switch (type) {
        case 'year':
          return minDate.getFullYear();
        case 'month':
          return minDate.getMonth() + 1;
        case 'day':
          return minDate.getDate();
      }
    };

    const genMonthOptions = () => {
      if (isMaxYear(getValue('year'))) {
        return genOptions(
          1,
          props.maxDate.getMonth() + 1,
          'month',
          props.formatter,
          props.filter
        );
      }
      return genOptions(1, 12, 'month', props.formatter, props.filter);
    };

    const genDayOptions = () => {
      const year = getValue('year');
      const month = getValue('month');

      let maxDate = getMonthEndDay(year, month);
      if (isMaxYear(year) && isMaxMonth(month)) {
        maxDate = props.maxDate.getDate();
      }

      return genOptions(1, maxDate, 'day', props.formatter, props.filter);
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

    watch(currentValues, (newValues) => {
      if (isSameValue(newValues, props.modelValue)) {
        emit('update:modelValue', newValues);
      }
    });

    watch(
      () => props.modelValue,
      (newValues) => {
        if (!isSameValue(newValues, currentValues.value)) {
          currentValues.value = newValues;
        }
      }
    );

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
