import {
  ref,
  watch,
  computed,
  defineComponent,
  type ComponentPublicInstance,
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
  formatValueRange,
} from './utils';

// Composables
import { useExpose } from '../composables/use-expose';

// Components
import { Picker, PickerInstance } from '../picker';

const currentYear = new Date().getFullYear();
const [name] = createNamespace('date-picker');

export type DatePickerColumnType = 'year' | 'month' | 'day';

export const datePickerProps = extend({}, sharedProps, {
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

export type DatePickerExpose = {
  confirm: () => void;
  getSelectedDate: () => string[];
};

export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>;

export type DatePickerInstance = ComponentPublicInstance<
  DatePickerProps,
  DatePickerExpose
>;

export default defineComponent({
  name,

  props: datePickerProps,

  emits: ['confirm', 'cancel', 'change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const currentValues = ref<string[]>(props.modelValue);
    const updatedByExternalSources = ref(false);
    const pickerRef = ref<PickerInstance>();

    const genYearOptions = () => {
      const minYear = props.minDate.getFullYear();
      const maxYear = props.maxDate.getFullYear();
      return genOptions(
        minYear,
        maxYear,
        'year',
        props.formatter,
        props.filter,
      );
    };

    const isMinYear = (year: number) => year === props.minDate.getFullYear();
    const isMaxYear = (year: number) => year === props.maxDate.getFullYear();
    const isMinMonth = (month: number) =>
      month === props.minDate.getMonth() + 1;
    const isMaxMonth = (month: number) =>
      month === props.maxDate.getMonth() + 1;

    const getValue = (type: DatePickerColumnType) => {
      const { minDate, columnsType } = props;
      const index = columnsType.indexOf(type);
      const value = updatedByExternalSources.value
        ? props.modelValue[index]
        : currentValues.value[index];
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
      const year = getValue('year');
      const minMonth = isMinYear(year) ? props.minDate.getMonth() + 1 : 1;
      const maxMonth = isMaxYear(year) ? props.maxDate.getMonth() + 1 : 12;

      return genOptions(
        minMonth,
        maxMonth,
        'month',
        props.formatter,
        props.filter,
      );
    };

    const genDayOptions = () => {
      const year = getValue('year');
      const month = getValue('month');
      const minDate =
        isMinYear(year) && isMinMonth(month) ? props.minDate.getDate() : 1;
      const maxDate =
        isMaxYear(year) && isMaxMonth(month)
          ? props.maxDate.getDate()
          : getMonthEndDay(year, month);

      return genOptions(minDate, maxDate, 'day', props.formatter, props.filter);
    };

    const confirm = () => pickerRef.value?.confirm();

    const getSelectedDate = () => currentValues.value;

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
            if (process.env.NODE_ENV !== 'production') {
              throw new Error(
                `[Vant] DatePicker: unsupported columns type: ${type}`,
              );
            }
            return [];
        }
      }),
    );

    watch(currentValues, (newValues) => {
      if (!isSameValue(newValues, props.modelValue)) {
        emit('update:modelValue', newValues);
      }
    });

    watch(
      () => props.modelValue,
      (newValues, oldValues) => {
        updatedByExternalSources.value = isSameValue(
          oldValues,
          currentValues.value,
        );
        newValues = formatValueRange(newValues, columns.value);
        if (!isSameValue(newValues, currentValues.value)) {
          currentValues.value = newValues;
        }
        updatedByExternalSources.value = false;
      },
      {
        immediate: true,
      },
    );

    const onChange = (...args: unknown[]) => emit('change', ...args);
    const onCancel = (...args: unknown[]) => emit('cancel', ...args);
    const onConfirm = (...args: unknown[]) => emit('confirm', ...args);

    useExpose<DatePickerExpose>({ confirm, getSelectedDate });

    return () => (
      <Picker
        ref={pickerRef}
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
