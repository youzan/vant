import { times } from './utils';
import { padZero } from '../utils/format/string';
import { pickerProps } from '../picker/shared';

export const sharedProps = {
  ...pickerProps,
  value: null,
  filter: Function,
  showToolbar: {
    type: Boolean,
    default: true
  },
  formatter: {
    type: Function,
    default: (type, value) => value
  }
};

export const TimePickerMixin = {
  data() {
    return {
      innerValue: this.formatValue(this.value)
    };
  },

  computed: {
    originColumns() {
      return this.ranges.map(({ type, range: rangeArr }) => {
        let values = times(rangeArr[1] - rangeArr[0] + 1, index => {
          const value = padZero(rangeArr[0] + index);
          return value;
        });

        if (this.filter) {
          values = this.filter(type, values);
        }

        return {
          type,
          values
        };
      });
    },

    columns() {
      return this.originColumns.map(column => ({
        values: column.values.map(value => this.formatter(column.type, value))
      }));
    }
  },

  watch: {
    innerValue(val) {
      this.$emit('input', val);
    },

    columns() {
      this.updateColumnValue(this.innerValue);
    }
  },

  mounted() {
    this.updateColumnValue(this.innerValue);
  },

  methods: {
    onConfirm() {
      this.$emit('confirm', this.innerValue);
    }
  }
};
