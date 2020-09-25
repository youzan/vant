import { createNamespace } from '../utils';
import { padZero } from '../utils/format/string';
import { range } from '../utils/format/number';
import { times, sharedProps } from './utils';
import Picker from '../picker';
import { pickerProps } from '../picker/shared';

const [createComponent] = createNamespace('time-picker');

export default createComponent({
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

  emits: ['confirm', 'cancel', 'change', 'update:modelValue'],

  data() {
    return {
      innerValue: this.formatValue(this.modelValue),
    };
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
    minHour: 'updateInnerValue',
    maxHour: 'updateInnerValue',
    minMinute: 'updateInnerValue',
    maxMinute: 'updateInnerValue',
    columns: 'updateColumnValue',

    innerValue(val) {
      this.$emit('update:modelValue', val);
    },

    value(val) {
      val = this.formatValue(val);

      if (val !== this.innerValue) {
        this.innerValue = val;
        this.updateColumnValue();
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
      this.$emit('confirm', this.innerValue);
    },

    onCancel() {
      this.$emit('cancel');
    },

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
