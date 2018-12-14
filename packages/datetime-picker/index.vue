<template>
  <picker
    ref="picker"
    :title="title"
    :columns="columns"
    :item-height="itemHeight"
    :show-toolbar="showToolbar"
    :visible-item-count="visibleItemCount"
    :confirm-button-text="confirmButtonText"
    :cancel-button-text="cancelButtonText"
    @change="onChange"
    @confirm="onConfirm"
    @cancel="$emit('cancel')"
  />
</template>

<script>
import Picker from '../picker';
import create from '../utils/create';
import { range } from '../utils';
import PickerMixin from '../mixins/picker';

const currentYear = new Date().getFullYear();
const isValidDate = date => Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());

export default create({
  name: 'datetime-picker',

  mixins: [PickerMixin],

  components: {
    Picker
  },

  props: {
    value: null,
    minHour: Number,
    minMinute: Number,
    type: {
      type: String,
      default: 'datetime'
    },
    showToolbar: {
      type: Boolean,
      default: true
    },
    format: {
      type: String,
      default: 'YYYY.MM.DD HH时 mm分'
    },
    formatter: {
      type: Function,
      default: (type, value) => value
    },
    minDate: {
      type: Date,
      default: () => new Date(currentYear - 10, 0, 1),
      validator: isValidDate
    },
    maxDate: {
      type: Date,
      default: () => new Date(currentYear + 10, 11, 31),
      validator: isValidDate
    },
    maxHour: {
      type: Number,
      default: 23
    },
    maxMinute: {
      type: Number,
      default: 59
    }
  },

  data() {
    return {
      innerValue: this.correctValue(this.value)
    };
  },

  watch: {
    value(val) {
      val = this.correctValue(val);
      const isEqual = this.type === 'time' ? val === this.innerValue : val.valueOf() === this.innerValue.valueOf();
      if (!isEqual) this.innerValue = val;
    },

    innerValue(val) {
      this.$emit('input', val);
    },

    columns() {
      this.updateColumnValue(this.innerValue);
    }
  },

  computed: {
    ranges() {
      if (this.type === 'time') {
        return [
          {
            type: 'hour',
            range: [this.minHour, this.maxHour]
          },
          {
            type: 'minute',
            range: [this.minMinute, this.maxMinute]
          }
        ];
      }

      const { maxYear, maxDate, maxMonth, maxHour, maxMinute } = this.getBoundary('max', this.innerValue);
      const { minYear, minDate, minMonth, minHour, minMinute } = this.getBoundary('min', this.innerValue);

      const result = [
        {
          type: 'year',
          range: [minYear, maxYear]
        },
        {
          type: 'month',
          range: [minMonth, maxMonth]
        },
        {
          type: 'day',
          range: [minDate, maxDate]
        },
        {
          type: 'hour',
          range: [minHour, maxHour]
        },
        {
          type: 'minute',
          range: [minMinute, maxMinute]
        }
      ];

      if (this.type === 'date') result.splice(3, 2);
      if (this.type === 'year-month') result.splice(2, 3);
      return result;
    },

    columns() {
      const results = this.ranges.map(({ type, range: rangeArr }) => {
        const values = this.times(rangeArr[1] - rangeArr[0] + 1, index => {
          let value = rangeArr[0] + index;
          value = value < 10 ? `0${value}` : `${value}`;
          return this.formatter(type, value);
        });

        return {
          values
        };
      });

      return results;
    }
  },

  methods: {
    pad(val) {
      return `00${val}`.slice(-2);
    },

    correctValue(value) {
      // validate value
      const isDateType = this.type !== 'time';
      if (isDateType && !isValidDate(value)) {
        value = this.minDate;
      } else if (!value) {
        const { minHour } = this;
        value = `${minHour > 10 ? minHour : '0' + minHour}:00`;
      }

      // time type
      if (!isDateType) {
        let [hour, minute] = value.split(':');
        hour = this.pad(range(hour, this.minHour, this.maxHour));
        minute = this.pad(range(minute, this.minMinute, this.maxMinute));

        return `${hour}:${minute}`;
      }

      // date type
      value = Math.max(value, this.minDate.getTime());
      value = Math.min(value, this.maxDate.getTime());

      return new Date(value);
    },

    times(n, iteratee) {
      let index = -1;
      const result = Array(n);

      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
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
        date = this.getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
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
        [`${type}Minute`]: minute
      };
    },

    getTrueValue(formattedValue) {
      if (!formattedValue) return;
      while (isNaN(parseInt(formattedValue, 10))) {
        formattedValue = formattedValue.slice(1);
      }
      return parseInt(formattedValue, 10);
    },

    getMonthEndDay(year, month) {
      return 32 - new Date(year, month - 1, 32).getDate();
    },

    onConfirm() {
      this.$emit('confirm', this.innerValue);
    },

    onChange(picker) {
      let value;

      if (this.type === 'time') {
        const indexes = picker.getIndexes();
        value = `${indexes[0] + this.minHour}:${indexes[1] + this.minMinute}`;
      } else {
        const values = picker.getValues();
        const year = this.getTrueValue(values[0]);
        const month = this.getTrueValue(values[1]);
        const maxDate = this.getMonthEndDay(year, month);
        let date = this.getTrueValue(values[2]);
        if (this.type === 'year-month') {
          date = 1;
        }
        date = date > maxDate ? maxDate : date;
        let hour = 0;
        let minute = 0;
        if (this.type === 'datetime') {
          hour = this.getTrueValue(values[3]);
          minute = this.getTrueValue(values[4]);
        }

        value = new Date(year, month - 1, date, hour, minute);
      }

      this.innerValue = this.correctValue(value);

      this.$nextTick(() => {
        this.$nextTick(() => {
          this.$emit('change', picker);
        });
      });
    },

    updateColumnValue(value) {
      let values = [];
      const { formatter, pad } = this;

      if (this.type === 'time') {
        const pair = value.split(':');
        values = [
          formatter('hour', pair[0]),
          formatter('minute', pair[1])
        ];
      } else {
        values = [
          formatter('year', `${value.getFullYear()}`),
          formatter('month', pad(value.getMonth() + 1)),
          formatter('day', pad(value.getDate()))
        ];
        if (this.type === 'datetime') {
          values.push(
            formatter('hour', pad(value.getHours())),
            formatter('minute', pad(value.getMinutes()))
          );
        }
        if (this.type === 'year-month') {
          values = values.slice(0, 2);
        }
      }

      this.$nextTick(() => {
        this.$refs.picker.setValues(values);
      });
    }
  },

  mounted() {
    this.updateColumnValue(this.innerValue);
  }
});
</script>
