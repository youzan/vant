import { createNamespace } from '../utils';
import { padZero } from '../utils/format/string';
import { range } from '../utils/format/number';
import { pickerProps } from '../picker/shared';
import { sharedProps, TimePickerMixin } from './shared';
import Picker from '../picker';

const [createComponent, bem] = createNamespace('time-picker');

export default createComponent({
  mixins: [TimePickerMixin],

  props: {
    ...sharedProps,
    minHour: {
      type: Number,
      default: 0
    },
    maxHour: {
      type: Number,
      default: 23
    },
    minMinute: {
      type: Number,
      default: 0
    },
    maxMinute: {
      type: Number,
      default: 59
    }
  },

  computed: {
    ranges() {
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
  },

  watch: {
    value(val) {
      val = this.formatValue(val);

      if (val !== this.innerValue) {
        this.innerValue = val;
        this.updateColumnValue(val);
      }
    }
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

    onChange(picker) {
      const indexes = picker.getIndexes();
      const hour = this.originColumns[0].values[indexes[0]];
      const minute = this.originColumns[1].values[indexes[1]];
      const value = `${hour}:${minute}`;

      this.innerValue = this.formatValue(value);

      this.$nextTick(() => {
        this.$nextTick(() => {
          this.$emit('change', picker);
        });
      });
    },

    updateColumnValue(value) {
      const { formatter } = this;
      const pair = value.split(':');
      const values = [formatter('hour', pair[0]), formatter('minute', pair[1])];

      this.$nextTick(() => {
        this.$refs.picker.setValues(values);
      });
    }
  },

  render() {
    const props = {};
    Object.keys(pickerProps).forEach(key => {
      props[key] = this[key];
    });

    return (
      <Picker
        class={bem()}
        ref="picker"
        columns={this.columns}
        onChange={this.onChange}
        onConfirm={this.onConfirm}
        onCancel={() => {
          this.$emit('cancel');
        }}
        {...{ props }}
      />
    );
  }
});
