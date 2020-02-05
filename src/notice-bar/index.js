import { createNamespace } from '../utils';
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
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
      animationClass: '',
    };
  },

  watch: {
    text: {
      handler() {
        this.$nextTick(() => {
          const { wrap, content } = this.$refs;
          if (!wrap || !content) {
            return;
          }

          const wrapWidth = wrap.getBoundingClientRect().width;
          const offsetWidth = content.getBoundingClientRect().width;
          if (this.scrollable && offsetWidth > wrapWidth) {
            this.wrapWidth = wrapWidth;
            this.offsetWidth = offsetWidth;
            this.duration = offsetWidth / this.speed;
            this.animationClass = bem('play');
          }
        });
      },
      immediate: true,
    },
  },

  methods: {
    onClickIcon(event) {
      if (this.mode === 'closeable') {
        this.showNoticeBar = false;
        this.$emit('close', event);
      }
    },

    onAnimationEnd() {
      this.firstRound = false;
      this.$nextTick(() => {
        this.duration = (this.offsetWidth + this.wrapWidth) / this.speed;
        this.animationClass = bem('play--infinite');
      });
    },
  },

  render() {
    const { slots, mode, leftIcon, onClickIcon } = this;

    const barStyle = {
      color: this.color,
      background: this.background,
    };

    const contentStyle = {
      paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
      animationDelay: (this.firstRound ? this.delay : 0) + 's',
      animationDuration: this.duration + 's',
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
        vShow={this.showNoticeBar}
        class={bem({ wrapable: this.wrapable })}
        style={barStyle}
        onClick={event => {
          this.$emit('click', event);
        }}
      >
        {LeftIcon()}
        <div ref="wrap" class={bem('wrap')} role="marquee">
          <div
            ref="content"
            class={[
              bem('content'),
              this.animationClass,
              { 'van-ellipsis': !this.scrollable && !this.wrapable },
            ]}
            style={contentStyle}
            onAnimationend={this.onAnimationEnd}
            onWebkitAnimationEnd={this.onAnimationEnd}
          >
            {this.slots() || this.text}
          </div>
        </div>
        {RightIcon()}
      </div>
    );
  },
});
