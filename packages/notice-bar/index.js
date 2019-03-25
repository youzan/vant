import { use } from '../utils';
import Icon from '../icon';

const [sfc, bem] = use('notice-bar');

export default sfc({
  props: {
    text: String,
    mode: String,
    color: String,
    leftIcon: String,
    wrapable: Boolean,
    background: String,
    delay: {
      type: [String, Number],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 50
    }
  },

  data() {
    return {
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
      animationClass: ''
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
      immediate: true
    }
  },

  methods: {
    onClickIcon() {
      if (this.mode === 'closeable') {
        this.showNoticeBar = false;
        this.$emit('close');
      }
    },

    onAnimationEnd() {
      this.firstRound = false;
      this.$nextTick(() => {
        this.duration = (this.offsetWidth + this.wrapWidth) / this.speed;
        this.animationClass = bem('play--infinite');
      });
    }
  },

  render(h) {
    const { mode } = this;

    const iconName = mode === 'closeable' ? 'cross' : mode === 'link' ? 'arrow' : '';

    const barStyle = {
      color: this.color,
      background: this.background
    };

    const contentStyle = {
      paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
      animationDelay: (this.firstRound ? this.delay : 0) + 's',
      animationDuration: this.duration + 's'
    };

    return (
      <div
        vShow={this.showNoticeBar}
        class={bem({ withicon: mode, wrapable: this.wrapable })}
        style={barStyle}
        onClick={() => {
          this.$emit('click');
        }}
      >
        {this.leftIcon && (
          <Icon class={bem('left-icon')} name={this.leftIcon} />
        )}
        <div ref="wrap" class={bem('wrap')}>
          <div
            ref="content"
            class={[
              bem('content'),
              this.animationClass,
              { 'van-ellipsis': !this.scrollable && !this.wrapable }
            ]}
            style={contentStyle}
            onAnimationend={this.onAnimationEnd}
            onWebkitAnimationEnd={this.onAnimationEnd}
          >
            {this.slots() || this.text}
          </div>
        </div>
        {iconName && (
          <Icon
            class={bem('right-icon')}
            name={iconName}
            onClick={this.onClickIcon}
          />
        )}
      </div>
    );
  }
});
