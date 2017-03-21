<template>
  <zan-picker
    :columns="columns"
    :visible-item-count="visibleItemCount"
    @change="handlePickerChange"
    @confirm="handlePickerConfirm"
    showToolbar>
  </zan-picker>
</template>

<script>
import Picker from 'packages/picker';

const allowedType = ['time', 'date', 'datetime'];

export default {
  name: 'zan-datetime-picker',

  components: {
    Picker
  },

  props: {
    type: {
      type: String,
      default: 'datetime',
      validator(value) {
        return allowedType.indexOf(value) > -1;
      }
    },
    visibleItemCount: {
      type: Number,
      default: 5
    },
    minDate: {
      type: Date,
      default() {
        return new Date(new Date().getFullYear() - 10, 0, 1);
      }
    },
    maxDate: {
      type: Date,
      default() {
        return new Date(new Date().getFullYear() + 10, 11, 31);
      }
    },
    minHour: {
      type: Number,
      default: 0
    },
    maxHour: {
      type: Number,
      default: 23
    },
    value: null
  },

  data() {
    return {
      innerValue: this.val
    };
  },

  watch: {
    value(val) {
      this.innerValue = val;
    },
    innerValue(val) {
      console.log(val + '!!!');
      this.$emit('input', val);
    }
  },

  computed: {
    ranges() {
      console.log(this.innerValue + '!!');
      // return this.innerValue + '!!';
      if (this.type === 'time') {
        return [
          [this.minHour, this.maxHour],
          [0, 59]
        ];
      }
debugger
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
      return result;
    },
    columns() {
      return this.ranges.map(range => {
        const values = this.times(range[1] - range[0] + 1, index => {
          const value = range[0] + index;
          return value < 10 ? `0${value}` : `${value}`;
        });

        return {
          values
        };
      });
    }
  },

  methods: {
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
          date = value.getDate();
          if (value.getDate() === date) {
            hour = value.getHours();
            if (value.getHours() === hour) {
              minute = value.getMinutes();
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
    handlePickerConfirm(values) {
      this.$emit('confirm', this.innerValue);
    },
    handlePickerChange(picker, values, index) {
      console.log(this.innerValue);
      let value;

      if (this.type === 'time') {
        value = values.join(':');
      } else {
        const year = this.getTrueValue(values[0]);
        const month = this.getTrueValue(values[1]);
        const maxDate = this.getMonthEndDay(year, month);
        let date = this.getTrueValue(values[2]);
        date = date > maxDate ? maxDate : date;
        let hour = 0;
        let minute = 0;
        if (this.type === 'datetime') {
          hour = this.getTrueValue(values[3]);
          minute = this.getTrueValue(values[4]);
        }
        value = new Date(year, month - 1, date, hour, minute);
      }
      this.innerValue = value;
      console.log(value, this.innerValue);
      // this.$emit('input', value);
    }
  },

  created() {
    this.innerValue = this.value;
    if (!this.innerValue) {
      if (this.type.indexOf('date') > -1) {
        this.innerValue = this.minDate;
      } else {
        const minHour = this.minHour;
        this.innerValue = `${minHour > 10 ? minHour : '0' + minHour}:00`;
      }
    }
  }
};
</script>
