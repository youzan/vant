import { use } from '../utils';
import Field from '../field';

const [sfc, bem, t] = use('search');

export default sfc({
  inheritAttrs: false,

  props: {
    value: String,
    label: String,
    showAction: Boolean,
    shape: {
      type: String,
      default: 'square'
    },
    background: {
      type: String,
      default: '#ffffff'
    }
  },

  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput,
        keypress: this.onKeypress
      };
    }
  },

  methods: {
    onInput(value) {
      this.$emit('input', value);
    },

    onKeypress(event) {
      // press enter
      if (event.keyCode === 13) {
        event.preventDefault();
        this.$emit('search', this.value);
      }
      this.$emit('keypress', event);
    },

    onBack() {
      this.$emit('input', '');
      this.$emit('cancel');
    },

    renderLabel() {
      return this.slots('label')
        ? this.slots('label')
        : this.label && (<div class={bem('label')}>{this.label}</div>);
    }
  },

  render(h) {
    const { showAction } = this;

    const props = {
      attrs: this.$attrs,
      on: this.listeners
    };

    const scopedSlots = {};
    if (this.slots('left-icon')) {
      scopedSlots['left-icon'] = () => this.slots('left-icon');
    }

    return (
      <div class={bem({ 'show-action': showAction })} style={{ background: this.background }}>
        <div class={bem('content', [this.shape])}>
          {this.renderLabel()}
          <Field
            clearable
            type="search"
            value={this.value}
            border={false}
            leftIcon="search"
            scopedSlots={scopedSlots}
            {...props}
          >
          </Field>
        </div>
        {showAction && (
          <div class={bem('action')}>
            {this.slots('action') || <div onClick={this.onBack}>{t('cancel')}</div>}
          </div>
        )}
      </div>
    );
  }
});
