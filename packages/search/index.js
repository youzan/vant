import { use } from '../utils';
import Field from '../field';

const [sfc, bem, t] = use('search');

export default sfc({
  inheritAttrs: false,

  props: {
    value: String,
    showAction: Boolean,
    background: {
      type: String,
      default: '#f2f2f2'
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
    }
  },

  render(h) {
    const { showAction } = this;

    const props = {
      attrs: this.$attrs,
      on: this.listeners
    };

    return (
      <div class={bem({ 'show-action': showAction })} style={{ background: this.background }}>
        <Field
          clearable
          type="search"
          value={this.value}
          border={false}
          leftIcon="search"
          {...props}
        >
          {h('template', { slot: 'left-icon' }, this.$slots['left-icon'])}
        </Field>
        {showAction && (
          <div class={bem('action')}>
            {this.$slots.action || <div onClick={this.onBack}>{t('cancel')}</div>}
          </div>
        )}
      </div>
    );
  }
});
