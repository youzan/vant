import { createNamespace, isDef } from '../utils';
import { doubleRaf, raf } from '../utils/dom/raf';
import { BindEventMixin } from '../mixins/bind-event';
import Icon from '../icon';
import encodeUrl from '../utils/encodeUrl';
import VanEmptyCol from '../emptycol';

const [createComponent, bem] = createNamespace('notice-bar');

export default createComponent({
  mixins: [
    BindEventMixin(function (bind) {
      // fix cache issues with forwards and back history in safari
      // see: https://guwii.com/cache-issues-with-forwards-and-back-history-in-safari/
      bind(window, 'pageshow', this.start);
    }),
  ],

  inject: {
    vanPopup: {
      default: null,
    },
  },
  components: {
    VanEmptyCol,
  },
  props: {
    text: String,
    mode: String,
    color: String,
    leftIcon: String,
    wrapable: Boolean,
    background: String,
    scrollable: {
      type: Boolean,
      default: null,
    },
    delay: {
      type: [Number, String],
      default: 1,
    },
    speed: {
      type: [Number, String],
      default: 60,
    },
    href: String,
    target: { type: String, default: '_self' },
    to: [String, Object],
    replace: { type: Boolean, default: false },
    append: { type: Boolean, default: false },
    decoration: { type: Boolean, default: true },
    download: { type: Boolean, default: false },
    destination: String,
    link: [Function, String]
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

  created() {
    // https://github.com/youzan/vant/issues/8634
    if (this.vanPopup) {
      this.vanPopup.onReopen(() => {
        this.start();
      });
    }
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

      // wait for Vue to render offset
      // using nextTick won't work in iOS14
      raf(() => {
        // use double raf to ensure animation can start
        doubleRaf(() => {
          this.offset = -this.contentWidth;
          this.duration = (this.contentWidth + this.wrapWidth) / this.speed;
          this.$emit('replay');
        });
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

      clearTimeout(this.startTimer);
      this.startTimer = setTimeout(() => {
        const { wrap, content } = this.$refs;
        if (!wrap || !content || this.scrollable === false) {
          return;
        }

        const wrapWidth = wrap.getBoundingClientRect().width;
        const contentWidth = content.getBoundingClientRect().width;

        if (this.scrollable || contentWidth > wrapWidth) {
          doubleRaf(() => {
            this.offset = -contentWidth;
            this.duration = contentWidth / this.speed;
            this.wrapWidth = wrapWidth;
            this.contentWidth = contentWidth;
          });
        }
      }, delay);
    },
    async clickHandler(event) {
      this.$emit('click', event);
      if (this.mode === 'link') {
        this.$emit('rout', event);
        const props = this._props;
        const parent = this.$parent;
        if (props.link) {
          const url = props.link;
          const {target} = props;
          let realUrl;
          if (typeof url === 'function') {
              // @ts-ignore
              realUrl = await url();
          } else {
              realUrl = url;
          }
          function linkpao() {
              const a = document.createElement('a');
              a.setAttribute('href', realUrl);
              // @ts-ignore
              a.setAttribute('target', target);
              document.body.appendChild(a);
              a.click();
              setTimeout(() => {
                  document.body.removeChild(a);
              }, 500);
          }
          linkpao();
          return;
        }
        function currentHref() {
          if (props.href !== undefined)
            return encodeUrl(props.href);
          if (parent?.$router && props.to !== undefined)
            return encodeUrl(parent?.$router.resolve(props.to, parent?.$route, props.append).href);
          return undefined;
        }

        const hrefR = currentHref();
        // console.log(hrefR);
        if (hrefR === undefined) {
          let to;
          if (props.destination) {
            if (props.destination.startsWith('http')) {
              location.href = encodeUrl(props.destination);
              return;
            }
            to = props.destination;
          }


          const currentTo = to || props.to;
          if (currentTo === undefined)
            return;
          let cancel = false;
          this.$emit(this, 'before-navigate', {
            to: currentTo,
            replace: props.replace,
            append: props.append,
            preventDefault: () => (cancel = true),
          });
          if (cancel)
            return;
          const $router = parent?.$router;
          const $route = parent?.$route;
          const { location } = $router.resolve(
            currentTo,
            $route,
            props.append,
          );
          props.replace ? $router.replace(location) : $router.push(location);

          this.$emit(this, 'navigate', { to: currentTo, replace: props.replace, append: props.append });
        } else {
          function downloadClick() {
            const a = document.createElement("a");
            a.setAttribute("href", hrefR);
            document.body.appendChild(a);
            a.click();
            setTimeout(() => {
              document.body.removeChild(a);
            }, 500);
          }
          downloadClick();
        }
      }
    }
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
          this.clickHandler(event);
        }}
      >
        {LeftIcon()}
        <div ref="wrap" class={bem('wrap')} role="marquee">
          <div
            ref="content"
            class={[
              bem('content'),
              { 'van-ellipsis': this.scrollable === false && !this.wrapable },
            ]}
            style={contentStyle}
            onTransitionend={this.onTransitionEnd}
            vusion-slot-name="default"
          >
            {!this.inDesigner() ? (this.slots() || this.text) : null}
            {this.inDesigner() ? (
              (!this.slots() && !this.text) ? <van-empty-col></van-empty-col> : (this.slots() || this.text)
              ) : null}
          </div>
        </div>
        {RightIcon()}
      </div>
    );
  },
});
