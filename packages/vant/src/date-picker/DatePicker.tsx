import {
  ref,
  watch,
  computed,
  nextTick,
  defineComponent,
  type PropType,
  ExtractPropTypes,
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
  getTrueValue,
  getMonthEndDay,
  pickerInheritKeys,
} from '../datetime-picker/utils';

// Components
import { Picker, PickerOption } from '../picker';

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
    const formatValue = (value?: Date) => {
      if (isDate(value)) {
        const timestamp = clamp(
          value.getTime(),
          props.minDate.getTime(),
          props.maxDate.getTime()
        );
        return new Date(timestamp);
      }

      return undefined;
    };

    const currentDate = ref(formatValue(props.modelValue));

    const getBoundary = (type: 'max' | 'min', value: Date) => {
      const boundary = props[`${type}Date` as const];
      const year = boundary.getFullYear();
      let month = 1;
      let date = 1;

      if (type === 'max') {
        month = 12;
        date = getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
      }

      if (value.getFullYear() === year) {
        month = boundary.getMonth() + 1;

        if (value.getMonth() + 1 === month) {
          date = boundary.getDate();
        }
      }

      return {
        [`${type}Year`]: year,
        [`${type}Month`]: month,
        [`${type}Date`]: date,
      };
    };

    const ranges = computed(() => {
      const { maxYear, maxDate, maxMonth } = getBoundary(
        'max',
        currentDate.value || props.minDate
      );
      const { minYear, minDate, minMonth } = getBoundary(
        'min',
        currentDate.value || props.minDate
      );

      return props.columnsType.map((type) => {
        switch (type) {
          case 'year':
            return {
              type: 'year',
              range: [minYear, maxYear],
            };
          case 'month':
            return {
              type: 'month',
              range: [minMonth, maxMonth],
            };
          case 'day':
            return {
              type: 'day',
              range: [minDate, maxDate],
            };
          default:
            throw new Error(
              `[Vant] DatePicker: unsupported columns type: ${type}`
            );
        }
      });
    });

    const columns = computed(() =>
      ranges.value.map(({ type, range }) => {
        const options = times(
          range[1] - range[0] + 1,
          (index): PickerOption => {
            const value = padZero(range[0] + index);
            return props.formatter(type, {
              text: value,
              value,
            });
          }
        );

        if (props.filter) {
          return props.filter(type, options);
        }

        return options;
      })
    );

    // watch(currentDate, (value, oldValue) =>
    //   emit('update:modelValue', oldValue ? value : null)
    // );

    // watch(
    //   () => props.modelValue,
    //   (value) => {
    //     value = formatValue(value);

    //     if (value && value.valueOf() !== currentDate.value?.valueOf()) {
    //       currentDate.value = value;
    //     }
    //   }
    // );

    const onChange = (...args: unknown[]) => emit('change', ...args);
    const onCancel = (...args: unknown[]) => emit('cancel', ...args);
    const onConfirm = (...args: unknown[]) => emit('confirm', ...args);

    return () => (
      <Picker
        v-slots={slots}
        columns={columns.value}
        onChange={onChange}
        onCancel={onCancel}
        onConfirm={onConfirm}
        {...pick(props, pickerInheritKeys)}
      />
    );
  },
});
