import { createNamespace } from '../utils';
import Popup from '../popup';

const [createComponent, bem] = createNamespace('cascader');

export default createComponent({
  props: {
    show: Boolean,
    value: Array,
    title: String,
    options: Array,
    placeholder: String,
    confirmText: String,
    activeColor: String,
  },

  methods: {
    toggle(val) {
      this.$emit('update:show', val);
    },

    confirm() {
      this.toggle(false);
    },

    genHeader() {
      const confirmText = this.confirmText || this.t('confirm');
      return (
        <div class={bem('header')}>
          <h2 class={bem('title')}>{this.slots('title') || this.title}</h2>
          <button type="button" class={bem('confirm')} onClick={this.confirm}>
            {this.slots('confirm-text') || confirmText}
          </button>
        </div>
      );
    },

    genTab() {},
  },

  render() {
    return (
      <Popup
        round
        value={this.show}
        class={bem()}
        position="bottom"
        onInput={this.toggle}
      >
        {this.genHeader()}
        {this.genTab()}
      </Popup>
    );
  },
});
