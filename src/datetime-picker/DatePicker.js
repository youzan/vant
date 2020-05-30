import { createNamespace, get } from '../utils';
import { isDate } from '../utils/validate/date';
import { padZero } from '../utils/format/string';
import { getTrueValue, getMonthEndDay } from './utils';
import { sharedProps, TimePickerMixin } from './shared';

const currentYear = new Date().getFullYear();
const [createComponent] = createNamespace('date-picker');

export default createComponent({
  mixins: [TimePickerMixin],

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

  watch: {
    filter: 'updateInnerValue',
    minDate: 'updateInnerValue',
    maxDate: 'updateInnerValue',

    value(val) {
      val = this.formatValue(val);

      if (val.valueOf() !== this.innerValue.valueOf()) {
        this.innerValue = val;
      }
    },
  },

  computed: {
    ranges() {
      const {
        maxYear,
        maxDate,
        maxMonth,
        maxHour,
        maxMinute,
      } = this.getBoundary('max', this.innerValue);

      const {
        minYear,
        minDate,
        minMonth,
        minHour,
        minMinute,
      } = this.getBoundary('min', this.innerValue);

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

      if (this.type === 'date') {
        result = result.slice(0, 3);
      }

      if (this.type === 'year-month') {
        result = result.slice(0, 2);
      }

      if (this.type === 'month-day') {
        result = result.slice(1, 3);
      }

      return result;
    },
  },

  methods: {
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
      const getValue = (index) => {
        const { values } = this.originColumns[index];
        return getTrueValue(values[indexes[index]]);
      };

      let year;
      let month;
      let day;

      if (type === 'month-day') {
        year = this.innerValue.getFullYear();
        month = getValue(0);
        day = getValue(1);
      } else {
        year = getValue(0);
        month = getValue(1);
        day = type === 'year-month' ? 1 : getValue(2);
      }

      const maxDay = getMonthEndDay(year, month);
      day = day > maxDay ? maxDay : day;

      let hour = 0;
      let minute = 0;

      if (type === 'datetime') {
        hour = getValue(3);
        minute = getValue(4);
      }

      const value = new Date(year, month - 1, day, hour, minute);

      this.innerValue = this.formatValue(value);
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
      const value = this.innerValue;
      const { formatter } = this;

      let values = [
        formatter('year', `${value.getFullYear()}`),
        formatter('month', padZero(value.getMonth() + 1)),
        formatter('day', padZero(value.getDate())),
      ];

      if (this.type === 'datetime') {
        values.push(
          formatter('hour', padZero(value.getHours())),
          formatter('minute', padZero(value.getMinutes()))
        );
      }

      if (this.type === 'year-month') {
        values = values.slice(0, 2);
      }

      if (this.type === 'month-day') {
        values = values.slice(1, 3);
      }

      this.$nextTick(() => {
        this.getPicker().setValues(values);
      });
    },
  },
});
