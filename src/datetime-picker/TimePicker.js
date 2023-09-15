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
    minHour() {
      this.$nextTick(() => {
        this.updateInnerValue();
      });
    },
    maxHour(value) {
      const [hour, minute] = this.innerValue.split(':');
      if (hour >= value) {
        this.innerValue = this.formatValue(`${value}:${minute}`);
        this.updateColumnValue();
      } else {
        this.updateInnerValue();
      }
    },
    minMinute: 'updateInnerValue',
    maxMinute(value) {
      const [hour, minute] = this.innerValue.split(':');
      if (minute >= value) {
        this.innerValue = this.formatValue(`${hour}:${value}`);
        this.updateColumnValue();
      } else {
        this.updateInnerValue();
      }
    },
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
          // https://github.com/vant-ui/vant/issues/9775
          this.updateInnerValue();
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
