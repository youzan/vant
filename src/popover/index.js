import { createNamespace } from '../utils';

// Mixins
import { ClickOutsideMixin } from '../mixins/click-outside';

// Components
import Popup from '../popup';

const [createComponent, bem] = createNamespace('popover');

export default createComponent({
  mixins: [
    ClickOutsideMixin({
      event: 'click',
      method: 'onClickOutside',
    }),
  ],

  props: {
    value: Boolean,
    overlay: Boolean,
    placement: String,
    textColor: String,
    getContainer: [String, Function],
    backgroundColor: String,
    closeOnClickAction: Boolean,
    theme: {
      type: String,
      default: 'dark',
    },
    actions: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    renderAction(action) {
      return <div class={bem('action')}>{action.text}</div>;
    },

    onToggle(value) {
      this.$emit('input', value);
    },

    onClickAction(action, index) {
      this.$emit('select', action, index);

      if (this.closeOnClickAction) {
        this.$emit('input', false);
      }
    },

    onClickOutside() {
      this.$emit('input', false);
    },
  },

  render() {
    return (
      <span ref="wrapper" class={bem('wrapper')}>
        <Popup
          value={this.value}
          class={bem([this.theme])}
          overlay={this.overlay}
          transition="van-popover-zoom"
          getContainer={this.getContainer}
          onInput={this.onToggle}
        >
          {this.actions.map(this.renderAction)}
        </Popup>
        {this.slots('default')}
      </span>
    );
  },
});
