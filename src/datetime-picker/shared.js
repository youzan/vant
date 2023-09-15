import { times } from './utils';
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
    getPicker() {
      return this.$refs.picker;
    },

    // https://github.com/vant-ui/vant/issues/10013
    getProxiedPicker() {
      const { picker } = this.$refs;
      if (picker) {
        const proxy = (fn) => (...args) => {
          picker[fn](...args);
          this.updateInnerValue();
        };
        return {
          ...picker,
          setValues: proxy('setValues'),
          setIndexes: proxy('setIndexes'),
          setColumnIndex: proxy('setColumnIndex'),
          setColumnValue: proxy('setColumnValue'),
        };
      }
    },

    onConfirm() {
      this.$emit('input', this.innerValue);
      this.$emit('confirm', this.innerValue);
    },

    onCancel() {
      this.$emit('cancel');
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
        scopedSlots={this.$scopedSlots}
        onChange={this.onChange}
        onConfirm={this.onConfirm}
        onCancel={this.onCancel}
        {...{ props }}
      />
    );
  },
};
