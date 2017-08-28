<template>
  <van-picker
    ref="picker"
    :columns="columns"
    :visible-item-count="visibleItemCount"
    @change="handlePickerChange"
    @confirm="handlePickerConfirm"
    @cancel="$emit('cancel')"
    showToolbar>
  </van-picker>
</template>

<script>
import Picker from '../picker';

const allowedType = ['time', 'date', 'datetime'];

export default {
  name: 'van-datetime-picker',

  components: {
    [Picker.name]: Picker
  },

  props: {
    type: {
      type: String,
      default: 'datetime',
      validator(value) {
        return allowedType.indexOf(value) > -1;
      }
    },
    format: {
      type: String,
      default: 'YYYY.MM.DD HH时 mm分'
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
    let value = this.value;
    if (!value) {
      if (this.type.indexOf('date') > -1) {
        value = this.minDate;
      } else {
        const minHour = this.minHour;
        value = `${minHour > 10 ? minHour : '0' + minHour}:00`;
      }
    } else {
      value = this.correctValue(value);
    }

    return {
      innerValue: value
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
      // 仅时间
      if (this.type === 'time') {
        const [hour, minute] = value.split(':');
        let correctedHour = Math.max(hour, this.minHour);
        correctedHour = Math.min(correctedHour, this.maxHour);

        return `${correctedHour}:${minute}`;
      }

      // 含有日期的情况
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
    handlePickerConfirm() {
      this.$emit('confirm', this.innerValue);
    },
    handlePickerChange(picker) {
      const values = picker.$children.filter(child => child.currentValue !== undefined).map(child => child.currentValue);
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
      value = this.correctValue(value);
      this.innerValue = value;
      this.$emit('change', picker);
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
      }
      this.$nextTick(() => {
        this.setColumnByValues(values);
      });
    },
    setColumnByValues(values) {
      if (!this.$refs.picker) {
        return;
      }
      const setColumnValue = this.$refs.picker.setColumnValue;
      if (this.type === 'time') {
        setColumnValue(0, values[0]);
        setColumnValue(1, values[1]);
      } else {
        setColumnValue(0, values[0]);
        setColumnValue(1, values[1]);
        setColumnValue(2, values[2]);
        if (this.type === 'datetime') {
          setColumnValue(3, values[3]);
          setColumnValue(4, values[4]);
        }
      }
      [].forEach.call(this.$refs.picker.$children, child => child.doOnValueChange());
    }
  },

  mounted() {
    this.updateColumnValue(this.innerValue);
  }
};
</script>
