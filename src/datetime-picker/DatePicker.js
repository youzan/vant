import { ref, watch, computed, nextTick, onMounted } from 'vue';

// Utils
import { isDate } from '../utils/validate/date';
import { pick, padZero, createNamespace } from '../utils';
import { times, sharedProps, getTrueValue, getMonthEndDay } from './utils';

// Composition
import { useExpose } from '../composition/use-expose';

// Components
import Picker from '../picker';
import { pickerProps } from '../picker/shared';

const currentYear = new Date().getFullYear();
const [createComponent] = createNamespace('date-picker');

export default createComponent({
  props: {
    ...sharedProps,
    type: {
      type: String,
      default: 'datetime',
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
  },

  emits: ['confirm', 'cancel', 'change', 'update:modelValue'],

  setup(props, { emit }) {
    const formatValue = (value) => {
      if (!isDate(value)) {
        value = props.minDate;
      }

      value = Math.max(value, props.minDate.getTime());
      value = Math.min(value, props.maxDate.getTime());

      return new Date(value);
    };

    const picker = ref();
    const currentDate = ref(formatValue(props.modelValue));

    const getBoundary = (type, value) => {
      const boundary = props[`${type}Date`];
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
        currentDate.value
      );

      const { minYear, minDate, minMonth, minHour, minMinute } = getBoundary(
        'min',
        currentDate.value
      );

      let result = [
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
        let values = times(rangeArr[1] - rangeArr[0] + 1, (index) => {
          const value = padZero(rangeArr[0] + index);
          return value;
        });

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
      const { value } = currentDate;
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
            // no default
            return null;
        }
      });

      nextTick(() => {
        picker.value.setValues(values);
      });
    };

    const updateInnerValue = () => {
      const { type } = props;
      const indexes = picker.value.getIndexes();

      const getValue = (type) => {
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
        year = currentDate.value.getFullYear();
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
      emit('confirm', currentDate.value);
    };

    const onCancel = () => {
      emit('cancel');
    };

    const onChange = () => {
      updateInnerValue();
      nextTick(() => {
        nextTick(() => {
          emit('change', currentDate.value);
        });
      });
    };

    onMounted(() => {
      updateColumnValue();
      nextTick(updateInnerValue);
    });

    watch(columns, updateColumnValue);

    watch(currentDate, (value) => {
      emit('update:modelValue', value);
    });

    watch(
      [() => props.filter, () => props.minDate, () => props.maxDate],
      updateInnerValue
    );

    watch(
      () => props.modelValue,
      (value) => {
        value = formatValue(value);

        if (value.valueOf() !== currentDate.value.valueOf()) {
          currentDate.value = value;
        }
      }
    );

    useExpose({
      getPicker: () => picker.value,
    });

    return () => (
      <Picker
        ref={picker}
        columns={columns.value}
        readonly={props.readonly}
        onChange={onChange}
        onCancel={onCancel}
        onConfirm={onConfirm}
        {...pick(props, Object.keys(pickerProps))}
      />
    );
  },
});
