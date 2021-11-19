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
      default: '左侧标题'
    },
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
    }
  },

  methods: {
    getTitle() {
      return this.psonvalue;
    },
    togglePopup() {
      this.$refs.popforpison.togglePModal();
    },
  },

  render(h) {
    return (
      <div class={bem('wrappppickerson')}>
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
          ref="popforpison"
          class={bem('popup')}
          position={'bottom'}
          closeOnClickOverlay={this.closeOnClickOverlay}
          // onClickOverlay={this.togglePopup}
        >
          <Picker
            {...{attrs: {...this.$attrs}}}
            {...{ on: {...this.$listeners, 'update:pvalue': val => {
              this.psonvalue = val
            }} }}
            pvalue={this.psonvalue}
          />
        </Popup>
      </div>
    );
  },
});
