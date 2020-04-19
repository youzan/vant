import { createNamespace } from '../utils';
import { padZero } from '../utils/format/string';
import { range } from '../utils/format/number';
import { sharedProps, TimePickerMixin } from './shared';

const [createComponent] = createNamespace('time-picker');

export default createComponent({
  mixins: [TimePickerMixin],

  props: {
    ...sharedProps,
    minHour: {
      type: [Number, String],
      default: 0,
    },
    maxHour: {
      type: [Number, String],
      default: 23,
    },
    minMinute: {
      type: [Number, String],
      default: 0,
    },
    maxMinute: {
      type: [Number, String],
      default: 59,
    },
  },

  computed: {
    ranges() {
      return [
        {
          type: 'hour',
          range: [+this.minHour, +this.maxHour],
        },
        {
          type: 'minute',
          range: [+this.minMinute, +this.maxMinute],
        },
      ];
    },
  },

  watch: {
    filter: 'updateInnerValue',
    minHour: 'updateInnerValue',
    maxHour: 'updateInnerValue',
    minMinute: 'updateInnerValue',
    maxMinute: 'updateInnerValue',

    value(val) {
      val = this.formatValue(val);

      if (val !== this.innerValue) {
        this.innerValue = val;
        this.updateColumnValue();
      }
    },
  },

  methods: {
    formatValue(value) {
      if (!value) {
        value = `${padZero(this.minHour)}:${padZero(this.minMinute)}`;
      }

      let [hour, minute] = value.split(':');
      hour = padZero(range(hour, this.minHour, this.maxHour));
      minute = padZero(range(minute, this.minMinute, this.maxMinute));

      return `${hour}:${minute}`;
    },

    updateInnerValue() {
      const [hourIndex, minuteIndex] = this.getPicker().getIndexes();
      const [hourColumn, minuteColumn] = this.originColumns;

      const hour = hourColumn.values[hourIndex] || hourColumn.values[0];
      const minute = minuteColumn.values[minuteIndex] || minuteColumn.values[0];

      this.innerValue = this.formatValue(`${hour}:${minute}`);
      this.updateColumnValue();
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
      const { formatter } = this;
      const pair = this.innerValue.split(':');
      const values = [formatter('hour', pair[0]), formatter('minute', pair[1])];

      this.$nextTick(() => {
        this.getPicker().setValues(values);
      });
    },
  },
});
