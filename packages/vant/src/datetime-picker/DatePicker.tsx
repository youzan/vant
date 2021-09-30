import {
  ref,
  watch,
  computed,
  nextTick,
  onMounted,
  defineComponent,
} from 'vue';

// Utils
import {
  pick,
  clamp,
  extend,
  isDate,
  padZero,
  makeStringProp,
  createNamespace,
} from '../utils';
import {
  times,
  pickerKeys,
  sharedProps,
  getTrueValue,
  getMonthEndDay,
} from './utils';

// Composables
import { useExpose } from '../composables/use-expose';

// Components
import { Picker, PickerInstance } from '../picker';

// Types
import { DatetimePickerColumnType, DatetimePickerType } from './types';

const currentYear = new Date().getFullYear();
const [name] = createNamespace('date-picker');

export default defineComponent({
  name,

  props: extend({}, sharedProps, {
    type: makeStringProp<DatetimePickerType>('datetime'),
    modelValue: Date,
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
  }),

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

    const picker = ref<PickerInstance>();
    const currentDate = ref(formatValue(props.modelValue));

    const getBoundary = (type: 'max' | 'min', value: Date) => {
      const boundary = props[`${type}Date` as const];
      const year = boundary.getFullYear();
      let month = 1;
      let date = 1;
      let hour = 0;
      let minute = 0;

      if (type === 'max') {
        month = 12;
        date = getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
        hour = 23;
        minute = 59;
      }

      if (value.getFullYear() === year) {
        month = boundary.getMonth() + 1;
        if (value.getMonth() + 1 === month) {
          date = boundary.getDate();
          if (value.getDate() === date) {
            hour = boundary.getHours();
            if (value.getHours() === hour) {
              minute = boundary.getMinutes();
            }
          }
        }
      }

      return {
        [`${type}Year`]: year,
        [`${type}Month`]: month,
        [`${type}Date`]: date,
        [`${type}Hour`]: hour,
        [`${type}Minute`]: minute,
      };
    };

    const ranges = computed(() => {
      const { maxYear, maxDate, maxMonth, maxHour, maxMinute } = getBoundary(
        'max',
        currentDate.value || props.minDate
      );

      const { minYear, minDate, minMonth, minHour, minMinute } = getBoundary(
        'min',
        currentDate.value || props.minDate
      );

      let result: Array<{ type: DatetimePickerColumnType; range: number[] }> = [
        {
          type: 'year',
          range: [minYear, maxYear],
        },
        {
          type: 'month',
          range: [minMonth, maxMonth],
        },
        {
          type: 'day',
          range: [minDate, maxDate],
        },
        {
          type: 'hour',
          range: [minHour, maxHour],
        },
        {
          type: 'minute',
          range: [minMinute, maxMinute],
        },
      ];

      switch (props.type) {
        case 'date':
          result = result.slice(0, 3);
          break;
        case 'year-month':
          result = result.slice(0, 2);
          break;
        case 'month-day':
          result = result.slice(1, 3);
          break;
        case 'datehour':
          result = result.slice(0, 4);
          break;
      }

      if (props.columnsOrder) {
        const columnsOrder = props.columnsOrder.concat(
          result.map((column) => column.type)
        );
        result.sort(
          (a, b) => columnsOrder.indexOf(a.type) - columnsOrder.indexOf(b.type)
        );
      }

      return result;
    });

    const originColumns = computed(() =>
      ranges.value.map(({ type, range: rangeArr }) => {
        let values = times(rangeArr[1] - rangeArr[0] + 1, (index) =>
          padZero(rangeArr[0] + index)
        );

        if (props.filter) {
          values = props.filter(type, values);
        }

        return {
          type,
          values,
        };
      })
    );

    const columns = computed(() =>
      originColumns.value.map((column) => ({
        values: column.values.map((value) =>
          props.formatter(column.type, value)
        ),
      }))
    );

    const updateColumnValue = () => {
      const value = currentDate.value || props.minDate;
      const { formatter } = props;

      const values = originColumns.value.map((column) => {
        switch (column.type) {
          case 'year':
            return formatter('year', `${value.getFullYear()}`);
          case 'month':
            return formatter('month', padZero(value.getMonth() + 1));
          case 'day':
            return formatter('day', padZero(value.getDate()));
          case 'hour':
            return formatter('hour', padZero(value.getHours()));
          case 'minute':
            return formatter('minute', padZero(value.getMinutes()));
          default:
            return '';
        }
      });

      nextTick(() => {
        picker.value?.setValues(values);
      });
    };

    const updateInnerValue = () => {
      const { type } = props;
      const indexes = picker.value!.getIndexes();

      const getValue = (type: DatetimePickerColumnType) => {
        let index = 0;
        originColumns.value.forEach((column, columnIndex) => {
          if (type === column.type) {
            index = columnIndex;
          }
        });
        const { values } = originColumns.value[index];
        return getTrueValue(values[indexes[index]]);
      };

      let year;
      let month;
      let day;
      if (type === 'month-day') {
        year = (currentDate.value || props.minDate).getFullYear();
        month = getValue('month');
        day = getValue('day');
      } else {
        year = getValue('year');
        month = getValue('month');
        day = type === 'year-month' ? 1 : getValue('day');
      }

      const maxDay = getMonthEndDay(year, month);
      day = day > maxDay ? maxDay : day;

      let hour = 0;
      let minute = 0;

      if (type === 'datehour') {
        hour = getValue('hour');
      }

      if (type === 'datetime') {
        hour = getValue('hour');
        minute = getValue('minute');
      }

      const value = new Date(year, month - 1, day, hour, minute);
      currentDate.value = formatValue(value);
    };

    const onConfirm = () => {
      emit('update:modelValue', currentDate.value);
      emit('confirm', currentDate.value);
    };

    const onCancel = () => emit('cancel');

    const onChange = () => {
      updateInnerValue();
      nextTick(() => {
        nextTick(() => emit('change', currentDate.value));
      });
    };

    onMounted(() => {
      updateColumnValue();
      nextTick(updateInnerValue);
    });

    watch(columns, updateColumnValue);

    watch(currentDate, (value, oldValue) =>
      emit('update:modelValue', oldValue ? value : null)
    );

    watch(() => [props.filter, props.maxDate], updateInnerValue);

    watch(
      () => props.minDate,
      () => {
        nextTick(updateInnerValue);
      }
    );

    watch(
      () => props.modelValue,
      (value) => {
        value = formatValue(value);

        if (value && value.valueOf() !== currentDate.value?.valueOf()) {
          currentDate.value = value;
        }
      }
    );

    useExpose({
      getPicker: () => picker.value,
    });

    return () => (
      <Picker
        v-slots={slots}
        ref={picker}
        columns={columns.value}
        onChange={onChange}
        onCancel={onCancel}
        onConfirm={onConfirm}
        {...pick(props, pickerKeys)}
      />
    );
  },
});
