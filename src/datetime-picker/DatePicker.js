import { createNamespace } from '../utils';
import { isDate } from '../utils/validate/date';
import { padZero } from '../utils/format/string';
import { times, sharedProps, getTrueValue, getMonthEndDay } from './utils';
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

  data() {
    return {
      currentDate: this.formatValue(this.modelValue),
    };
  },

  computed: {
    ranges() {
      const {
        maxYear,
        maxDate,
        maxMonth,
        maxHour,
        maxMinute,
      } = this.getBoundary('max', this.currentDate);

      const {
        minYear,
        minDate,
        minMonth,
        minHour,
        minMinute,
      } = this.getBoundary('min', this.currentDate);

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

      switch (this.type) {
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

      if (this.columnsOrder) {
        const columnsOrder = this.columnsOrder.concat(
          result.map((column) => column.type)
        );
        result.sort(
          (a, b) => columnsOrder.indexOf(a.type) - columnsOrder.indexOf(b.type)
        );
      }

      return result;
    },

    originColumns() {
      return this.ranges.map(({ type, range: rangeArr }) => {
        let values = times(rangeArr[1] - rangeArr[0] + 1, (index) => {
          const value = padZero(rangeArr[0] + index);
          return value;
        });

        if (this.filter) {
          values = this.filter(type, values);
        }

        return {
          type,
          values,
        };
      });
    },

    columns() {
      return this.originColumns.map((column) => ({
        values: column.values.map((value) =>
          this.formatter(column.type, value)
        ),
      }));
    },
  },

  watch: {
    filter: 'updateInnerValue',
    minDate: 'updateInnerValue',
    maxDate: 'updateInnerValue',
    columns: 'updateColumnValue',

    currentDate(val) {
      this.$emit('update:modelValue', val);
    },

    modelValue(val) {
      val = this.formatValue(val);

      if (val.valueOf() !== this.currentDate.valueOf()) {
        this.currentDate = val;
      }
    },
  },

  mounted() {
    this.updateColumnValue();

    this.$nextTick(() => {
      this.updateInnerValue();
    });
  },

  methods: {
    // @exposed-api
    getPicker() {
      return this.$refs.picker;
    },

    onConfirm() {
      this.$emit('confirm', this.currentDate);
    },

    onCancel() {
      this.$emit('cancel');
    },

    formatValue(value) {
      if (!isDate(value)) {
        value = this.minDate;
      }

      value = Math.max(value, this.minDate.getTime());
      value = Math.min(value, this.maxDate.getTime());

      return new Date(value);
    },

    getBoundary(type, value) {
      const boundary = this[`${type}Date`];
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
    },

    updateInnerValue() {
      const { type } = this;
      const indexes = this.getPicker().getIndexes();
      const getValue = (type) => {
        let index = 0;
        this.originColumns.forEach((column, columnIndex) => {
          if (type === column.type) {
            index = columnIndex;
          }
        });
        const { values } = this.originColumns[index];
        return getTrueValue(values[indexes[index]]);
      };

      let year;
      let month;
      let day;
      if (type === 'month-day') {
        year = this.currentDate.getFullYear();
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

      this.currentDate = this.formatValue(value);
    },

    onChange(picker) {
      this.updateInnerValue();

      this.$nextTick(() => {
        this.$nextTick(() => {
          this.$emit('change', picker);
        });
      });
    },

    updateColumnValue() {
      const value = this.currentDate;
      const { formatter } = this;

      const values = this.originColumns.map((column) => {
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

      this.$nextTick(() => {
        this.getPicker().setValues(values);
      });
    },
  },

  render() {
    const props = {};
    Object.keys(pickerProps).forEach((key) => {
      props[key] = this[key];
    });

    return (
      <Picker
        ref="picker"
        columns={this.columns}
        readonly={this.readonly}
        onChange={this.onChange}
        onConfirm={this.onConfirm}
        onCancel={this.onCancel}
        {...props}
      />
    );
  },
});
