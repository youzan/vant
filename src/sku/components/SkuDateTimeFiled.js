// Utils
import { createNamespace } from '../../utils';
import { stringToDate, dateToString } from '../utils/time-helper';

// Components
import Popup from '../../popup';
import DateTimePicker from '../../datetime-picker';
import Field from '../../field';

const [createComponent] = createNamespace('sku-datetime-filed');

export default createComponent({
  props: {
    value: String,
    label: String,
    required: Boolean,
    placeholder: String,
    type: {
      type: String,
      default: 'date',
    },
  },

  data() {
    return {
      showDatePicker: false,
      currentDate: this.type === 'time' ? '' : new Date(),
    };
  },

  watch: {
    value(val) {
      switch (this.type) {
        case 'time':
          this.currentDate = val;
          break;
        case 'date':
        case 'datetime':
          this.currentDate = stringToDate(val) || new Date();
          break;
      }
    },
  },

  methods: {
    onClick() {
      this.showDatePicker = true;
    },
    onConfirm(val) {
      let data = val;
      if (this.type !== 'time') {
        data = dateToString(val, this.type);
      }
      this.$emit('input', data);
      this.showDatePicker = false;
    },
    onCancel() {
      this.showDatePicker = false;
    },
  },

  render() {
    return (
      <Field
        readonly
        is-link
        center
        value={this.value}
        label={this.label}
        required={this.required}
        placeholder={this.placeholder}
        onClick={this.onClick}
      >
        <Popup
          vModel={this.showDatePicker}
          round
          slot="extra"
          position="bottom"
          getContainer="body"
        >
          <DateTimePicker
            type={this.type}
            value={this.currentDate}
            onCancel={this.onCancel}
            onConfirm={this.onConfirm}
          />
        </Popup>
      </Field>
    );
  },
});
