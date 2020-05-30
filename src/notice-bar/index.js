import { createNamespace, isDef } from '../utils';
import { doubleRaf } from '../utils/dom/raf';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('notice-bar');

export default createComponent({
  props: {
    text: String,
    mode: String,
    color: String,
    leftIcon: String,
    wrapable: Boolean,
    background: String,
    scrollable: {
      type: Boolean,
      default: true,
    },
    delay: {
      type: [Number, String],
      default: 1,
    },
    speed: {
      type: [Number, String],
      default: 50,
    },
  },

  data() {
    return {
      show: true,
      offset: 0,
      duration: 0,
      wrapWidth: 0,
      contentWidth: 0,
    };
  },

  watch: {
    scrollable: 'start',
    text: {
      handler: 'start',
      immediate: true,
    },
  },

  activated() {
    this.start();
  },

  methods: {
    onClickIcon(event) {
      if (this.mode === 'closeable') {
        this.show = false;
        this.$emit('close', event);
      }
    },

    onTransitionEnd() {
      this.offset = this.wrapWidth;
      this.duration = 0;

      doubleRaf(() => {
        this.offset = -this.contentWidth;
        this.duration = (this.contentWidth + this.wrapWidth) / this.speed;
        this.$emit('replay');
      });
    },

    reset() {
      this.offset = 0;
      this.duration = 0;
      this.wrapWidth = 0;
      this.contentWidth = 0;
    },

    start() {
      const delay = isDef(this.delay) ? this.delay * 1000 : 0;

      this.reset();

      setTimeout(() => {
        const { wrap, content } = this.$refs;
        if (!wrap || !content) {
          return;
        }

        const wrapWidth = wrap.getBoundingClientRect().width;
        const contentWidth = content.getBoundingClientRect().width;

        if (this.scrollable && contentWidth > wrapWidth) {
          doubleRaf(() => {
            this.offset = -contentWidth;
            this.duration = contentWidth / this.speed;
            this.wrapWidth = wrapWidth;
            this.contentWidth = contentWidth;
          });
        }
      }, delay);
    },
  },

  render() {
    const { slots, mode, leftIcon, onClickIcon } = this;

    const barStyle = {
      color: this.color,
      background: this.background,
    };

    const contentStyle = {
      transform: this.offset ? `translateX(${this.offset}px)` : '',
      transitionDuration: this.duration + 's',
    };

    function LeftIcon() {
      const slot = slots('left-icon');

      if (slot) {
        return slot;
      }

      if (leftIcon) {
        return <Icon class={bem('left-icon')} name={leftIcon} />;
      }
    }

    function RightIcon() {
      const slot = slots('right-icon');

      if (slot) {
        return slot;
      }

      let iconName;
      if (mode === 'closeable') {
        iconName = 'cross';
      } else if (mode === 'link') {
        iconName = 'arrow';
      }

      if (iconName) {
        return (
          <Icon
            class={bem('right-icon')}
            name={iconName}
            onClick={onClickIcon}
          />
        );
      }
    }

    return (
      <div
        role="alert"
        vShow={this.show}
        class={bem({ wrapable: this.wrapable })}
        style={barStyle}
        onClick={(event) => {
          this.$emit('click', event);
        }}
      >
        {LeftIcon()}
        <div ref="wrap" class={bem('wrap')} role="marquee">
          <div
            ref="content"
            class={[
              bem('content'),
              { 'van-ellipsis': !this.scrollable && !this.wrapable },
            ]}
            style={contentStyle}
            onTransitionend={this.onTransitionEnd}
          >
            {this.slots() || this.text}
          </div>
        </div>
        {RightIcon()}
      </div>
    );
  },
});
