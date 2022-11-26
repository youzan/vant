// Utils
import { createNamespace } from '../utils';
import Picker from '../picker';
import Popup from '../popup';
import Field from '../field';


const [createComponent, bem, t] = createNamespace('pickerson');

export default createComponent({
  props: {
    pvalue: [String, Object],
    labelField: {
      type: String,
      default: ''
    },
    inputAlign: String,
    closeOnClickOverlay: Boolean
  },

  data() {
    return {
      valuepopup: false,
      psonvalue: this.pvalue || ''
    };
  },

  computed: {
  },

  watch: {
    psonvalue(val, old) {
      this.$emit('update:pvalue', val);
    },
    pvalue(val, old) {
      this.psonvalue = val;
    },
  },

  methods: {
    ifDesigner() {
      return this.$env && this.$env.VUE_APP_DESIGNER;
    },
    getTitle() {
      if(this.ifDesigner()) return this.pvalue;
      return this.psonvalue;
    },
    togglePopup() {
      this.$refs.popforpison.togglePModal();
    },
  },

  render(h) {
    const tempSlot = {
      title: () => this.slots('title')
    }
    return (
      <div class={bem('wrappppickerson')}>
        <Field
          label={this.labelField}
          value={this.getTitle()}
          scopedSlots={tempSlot}
          readonly
          isLink
          input-align={this.inputAlign || "right"}
          onClick={this.togglePopup}
          // eslint-disable-next-line no-prototype-builtins
          notitle={!this.$slots.hasOwnProperty('title')}
          insel={true}
        />
        <Popup
          safe-area-inset-bottom
          round
          ref="popforpison"
          class={bem('popup')}
          position={'bottom'}
          closeOnClickOverlay={this.closeOnClickOverlay}
          // onClickOverlay={this.togglePopup}
        >
          <Picker
            {...{ ...this.$attrs }}
            {...{ on: { ...this.$listeners, 'update:pvalue': val => {
              this.psonvalue = val
            }}}}
            pvalue={this.psonvalue}
          />
        </Popup>
      </div>
    );
  },
});
