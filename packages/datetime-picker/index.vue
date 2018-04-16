<template>
  <picker
    ref="picker"
    :title="title"
    :columns="columns"
    :item-height="itemHeight"
    :show-toolbar="showToolbar"
    :visibie-item-height="visibleItemCount"
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

const currentYear = new Date().getFullYear();
const isValidDate = date => Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());

export default create({
  name: 'datetime-picker',

  components: {
    Picker
  },

  props: {
    value: {},
    title: String,
    itemHeight: Number,
    visibleItemCount: Number,
    confirmButtonText: String,
    cancelButtonText: String,
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
    minHour: {
      type: Number,
      default: 0
    },
    maxHour: {
      type: Number,
      default: 23
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
      this.updateColumnValue(val);
      this.$emit('input', val);
    }
  },

  computed: {
    ranges() {
      if (this.type === 'time') {
        return [
          [this.minHour, this.maxHour],
          [0, 59]
        ];
      }

      const { maxYear, maxDate, maxMonth, maxHour, maxMinute } = this.getBoundary('max', this.innerValue);
      const { minYear, minDate, minMonth, minHour, minMinute } = this.getBoundary('min', this.innerValue);

      const result = [
        [minYear, maxYear],
        [minMonth, maxMonth],
        [minDate, maxDate],
        [minHour, maxHour],
        [minMinute, maxMinute]
      ];

      if (this.type === 'date') result.splice(3, 2);
      if (this.type === 'year-month') result.splice(2, 3);
      return result;
    },
    columns() {
      const results = this.ranges.map(range => {
        const values = this.times(range[1] - range[0] + 1, index => {
          const value = range[0] + index;
          return value < 10 ? `0${value}` : `${value}`;
        });

        return {
          values
        };
      });
      return results;
    }
  },

  methods: {
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
        const [hour, minute] = value.split(':');
        let correctedHour = Math.max(hour, this.minHour);
        correctedHour = Math.min(correctedHour, this.maxHour);

        return `${correctedHour}:${minute}`;
      }

      // date type
      const { maxYear, maxDate, maxMonth, maxHour, maxMinute } = this.getBoundary('max', value);
      const { minYear, minDate, minMonth, minHour, minMinute } = this.getBoundary('min', value);
      const minDay = new Date(minYear, minMonth - 1, minDate, minHour, minMinute);
      const maxDay = new Date(maxYear, maxMonth - 1, maxDate, maxHour, maxMinute);
      value = Math.max(value, minDay);
      value = Math.min(value, maxDay);

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
      if (this.isShortMonth(month)) {
        return 30;
      } else if (month === 2) {
        return this.isLeapYear(year) ? 29 : 28;
      } else {
        return 31;
      }
    },

    isLeapYear(year) {
      return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
    },

    isShortMonth(month) {
      return [4, 6, 9, 11].indexOf(month) > -1;
    },

    onConfirm() {
      this.$emit('confirm', this.innerValue);
    },

    onChange(picker) {
      const values = picker.getValues();
      let value;

      if (this.type === 'time') {
        value = values.join(':');
      } else {
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
      value = this.correctValue(value);
      this.innerValue = value;
      this.$nextTick(() => {
        this.$emit('change', picker);
      });
    },

    updateColumnValue(value) {
      let values = [];
      if (this.type === 'time') {
        const currentValue = value.split(':');
        values = [
          currentValue[0],
          currentValue[1]
        ];
      } else {
        values = [
          `${value.getFullYear()}`,
          `0${value.getMonth() + 1}`.slice(-2),
          `0${value.getDate()}`.slice(-2)
        ];
        if (this.type === 'datetime') {
          values.push(
            `0${value.getHours()}`.slice(-2),
            `0${value.getMinutes()}`.slice(-2)
          );
        }
        if (this.type === 'year-month') {
          values = values.slice(0, 2);
        }
      }

      this.$nextTick(() => {
        this.setColumnByValues(values);
      });
    },

    setColumnByValues(values) {
      if (!this.$refs.picker) {
        return;
      }
      this.$refs.picker.setValues(values);
    }
  },

  mounted() {
    this.updateColumnValue(this.innerValue);
  }
});
</script>
