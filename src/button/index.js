// Utils
import { createNamespace } from '../utils';
import { BORDER_SURROUND, WHITE } from '../utils/constant';
import { routeProps, route } from '../utils/router';

// Components
import Icon from '../icon';
import Loading from '../loading';

const [createComponent, bem] = createNamespace('button');

export default createComponent({
  props: {
    ...routeProps,
    text: String,
    icon: String,
    color: String,
    block: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    iconPrefix: String,
    nativeType: String,
    loadingText: String,
    loadingType: String,
    tag: {
      type: String,
      default: 'button',
    },
    type: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'normal',
    },
    loadingSize: {
      type: String,
      default: '20px',
    },
  },

  emits: ['click', 'touchstart'],

  methods: {
    onClick() {
      if (!this.loading && !this.disabled) {
        this.$emit('click', event);
        route(this.$router, this);
      }
    },

    onTouchstart(event) {
      this.$emit('touchstart', event);
    },

    genContent() {
      const Content = [];

      if (this.loading) {
        Content.push(
          this.$slots.loading ? (
            this.$slots.loading()
          ) : (
            <Loading
              class={bem('loading')}
              size={this.loadingSize}
              type={this.loadingType}
              color="currentColor"
            />
          )
        );
      } else if (this.icon) {
        Content.push(
          <Icon
            name={this.icon}
            class={bem('icon')}
            classPrefix={this.iconPrefix}
          />
        );
      }

      let text;
      if (this.loading) {
        text = this.loadingText;
      } else {
        text = this.$slots.default ? this.$slots.default() : this.text;
      }

      if (text) {
        Content.push(<span class={bem('text')}>{text}</span>);
      }

      return Content;
    },
  },

  render() {
    const { tag, type, color, plain, disabled, loading, hairline } = this;

    const style = {};

    if (color) {
      style.color = plain ? color : WHITE;

      if (!plain) {
        // Use background instead of backgroundColor to make linear-gradient work
        style.background = color;
      }

      // hide border when color is linear-gradient
      if (color.indexOf('gradient') !== -1) {
        style.border = 0;
      } else {
        style.borderColor = color;
      }
    }

    const classes = [
      bem([
        type,
        this.size,
        {
          plain,
          loading,
          disabled,
          hairline,
          block: this.block,
          round: this.round,
          square: this.square,
        },
      ]),
      { [BORDER_SURROUND]: hairline },
    ];

    return (
      <tag
        style={style}
        class={classes}
        type={this.nativeType}
        disabled={disabled}
        onClick={this.onClick}
        onTouchstart={this.onTouchstart}
      >
        <div class={bem('content')}>{this.genContent()}</div>
      </tag>
    );
  },
});
