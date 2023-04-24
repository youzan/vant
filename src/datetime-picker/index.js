import { createNamespace } from '../utils';
import { displayFormat } from './utils';
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
      default: '',
    },
    inputAlign: String,
    closeOnClickOverlay: Boolean,
    displayFormat: String,
  },
  data() {
    return {
      valuepopup: false,
      cvalue: null,
    };
  },
  methods: {
    getTitle() {
      if (this?.$env?.VUE_APP_DESIGNER) {
        return this.value;
      }

      if (this.cvalue) {
        return displayFormat(this.cvalue, this.type, this.displayFormat);
      }

      if (this.value) {
        return displayFormat(this.value, this.type, this.displayFormat);
      }

      return '';

      // FIXME：下面逻辑真奇怪啰里八嗦
      // if (this.value && !this.cvalue) {
      //   return formatFu(this.value, this.type);
      // }
      // if (!this.cvalue) return '';
      // return formatFu(this.cvalue, this.type);
    },
    togglePopup() {
      this.valuepopup = !this.valuepopup;
      this.$refs.popforcas.togglePModal();
    },
    // @exposed-api
    getPicker() {
      return this.$refs.root.getPicker();
    },
  },

  render() {
    const Component = this.type === 'time' ? TimePicker : DatePicker;
    const tempSlot = {
      title: () => this.slots('title'),
    };
    return (
      <div class={bem('wrapppdtpicker')}>
        <Field
          label={this.labelField}
          value={this.getTitle()}
          scopedSlots={tempSlot}
          readonly
          isLink
          input-align={this.inputAlign || 'right'}
          onClick={this.togglePopup}
          // eslint-disable-next-line no-prototype-builtins
          notitle={!this.$slots.hasOwnProperty('title')}
          insel={true}
          nofi={true}
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
              on: {
                ...this.$listeners,
                'update:cvalue': (v) => {
                  this.cvalue = v;
                },
              },
            }}
          />
        </Popup>
      </div>
    );
  },
});
