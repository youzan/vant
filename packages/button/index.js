import createSfc from '../utils/create';
import createBem from '../utils/bem';

const bem = createBem('van-button');

export default createSfc({
  name: 'button',

  props: {
    text: String,
    block: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    disabled: Boolean,
    nativeType: String,
    bottomAction: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },

  methods: {
    onClick(event) {
      if (!this.loading && !this.disabled) {
        this.$emit('click', event);
      }
    }
  },

  render(h) {
    return (
      <this.tag
        type={this.nativeType}
        disabled={this.disabled}
        class={bem([
          this.type,
          this.size,
          {
            block: this.block,
            plain: this.plain,
            round: this.round,
            square: this.square,
            loading: this.loading,
            disabled: this.disabled,
            'bottom-action': this.bottomAction
          }
        ])}
        onClick={this.onClick}
      >
        {this.loading ? (
          <loading size="20px" color={this.type === 'default' ? undefined : ''} />
        ) : (
          <span class={bem('text')}>{this.$slots.default || this.text}</span>
        )}
      </this.tag>
    );
  }
});
