import { times, formatFu } from './utils';
import { padZero } from '../utils/format/string';
import { pickerProps } from '../picker/shared';
import Picker from '../picker';

export const sharedProps = {
  ...pickerProps,
  value: null,
  filter: Function,
  columnsOrder: Array,
  showToolbar: {
    type: Boolean,
    default: true,
  },
  formatter: {
    type: Function,
    default: (type, value) => value,
  },
};

export const TimePickerMixin = {
  data() {
    return {
      innerValue: this.formatValue(this.value),
    };
  },

  computed: {
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
    columns: 'updateColumnValue',

    innerValue(val, oldVal) {
      if (!oldVal) {
        this.$emit('input', null);
      } else {
        this.$emit('input', val);
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
      if (this.readonly || this.disabled) {
        //
      } else {
        let value = this.innerValue;
        const isTimestamp =
          this.type === 'datetime' && this.converter === 'timestamp';
        if (isTimestamp) {
          value = +new Date(value);
        }
        this.$emit('input', value);
        // this.$emit('update:value', this.type==="datetime" ? value.formath("yyyy/MM/dd HH:mm:ss") : value);
        this.$emit(
          'update:value',
          isTimestamp ? value : formatFu(this.innerValue, this.type, true)
        );
        this.$emit(
          'update:cvalue',
          isTimestamp ? value : formatFu(this.innerValue, this.type)
        );
        this.$emit('confirm', value);
      }
      try {
        this.$parent.$parent.togglePopup();
      } catch (error) {
        //
      }
    },

    onCancel() {
      this.$emit('cancel');
      try {
        this.$parent.$parent.togglePopup();
      } catch (error) {}
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
        // columns={this.columns}
        columnsprop={this.columns}
        readonly={this.readonly}
        disabled={this.disabled}
        scopedSlots={this.$scopedSlots}
        onChange={this.onChange}
        onConfirm={this.onConfirm}
        onCancel={this.onCancel}
        {...{ props }}
      />
    );
  },
};
