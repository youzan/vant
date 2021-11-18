import { createNamespace } from '../utils';
import { isDate } from '../utils/validate/date';
import TimePicker from './TimePicker';
import DatePicker from './DatePicker';
import Popup from '../popup';
import Field from '../field';
import { FieldMixin } from '../mixins/field';

const [createComponent, bem] = createNamespace('datetime-picker');

export default createComponent({
  mixins: [FieldMixin],

  props: {
    ...TimePicker.props,
    ...DatePicker.props,
    labelField: {
      type: String,
      default: '左侧标题'
    },
    closeOnClickOverlay: Boolean
  },
  data() {
    return {
      valuepopup: false,
      cvalue: null
    }
  },
  methods: {
    getTitle() {
      return isDate(this.cvalue) ? this.cvalue.formath("yyyy/MM/dd HH:mm:ss") : this.cvalue;
    },
    togglePopup() {
      this.valuepopup = !this.valuepopup;
      if (this.valuepopup) {
        this.$refs.popforcas.openModal();
      } else {
        this.$refs.popforcas.closeModal();
      }
    },
    // @exposed-api
    getPicker() {
      return this.$refs.root.getPicker();
    },
  },

  render() {
    const Component = this.type === 'time' ? TimePicker : DatePicker;

    return (
      <div class={bem('wrapppdtpicker')}>
        <Field
          label={this.labelField}
          value={this.getTitle()}
          readonly
          isLink
          input-align="right"
          onClick={this.togglePopup}
        />
        <Popup
          safe-area-inset-bottom
          round
          ref="popforcas"
          class={bem('popup')}
          position={'bottom'}
          closeOnClickOverlay={this.closeOnClickOverlay}
          // onClickOverlay={this.togglePopup}
        >
          <Component
            ref="root"
            class={bem()}
            scopedSlots={this.$scopedSlots}
            {...{
              props: this.$props,
              on: { ...this.$listeners, 'update:cvalue': (v) => {
                this.cvalue = v;
              }},
            }}
          />
        </Popup>
      </div>
    );
  },
});
