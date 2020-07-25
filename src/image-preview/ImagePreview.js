// Utils
import { inBrowser } from '../utils';
import { bem, createComponent } from './shared';

// Mixins
import { PopupMixin } from '../mixins/popup';
import { TouchMixin } from '../mixins/touch';
import { BindEventMixin } from '../mixins/bind-event';

// Components
import Icon from '../icon';
import Swipe from '../swipe';
import ImagePreviewItem from './ImagePreviewItem';

export default createComponent({
  mixins: [
    TouchMixin,
    PopupMixin({
      skipToggleEvent: true,
    }),
    BindEventMixin(function (bind) {
      bind(window, 'resize', this.resize, true);
      bind(window, 'orientationchange', this.resize, true);
    }),
  ],

  props: {
    className: null,
    closeable: Boolean,
    asyncClose: Boolean,
    showIndicators: Boolean,
    images: {
      type: Array,
      default: () => [],
    },
    loop: {
      type: Boolean,
      default: true,
    },
    overlay: {
      type: Boolean,
      default: true,
    },
    minZoom: {
      type: [Number, String],
      default: 1 / 3,
    },
    maxZoom: {
      type: [Number, String],
      default: 3,
    },
    showIndex: {
      type: Boolean,
      default: true,
    },
    swipeDuration: {
      type: [Number, String],
      default: 500,
    },
    startPosition: {
      type: [Number, String],
      default: 0,
    },
    overlayClass: {
      type: String,
      default: bem('overlay'),
    },
    closeIcon: {
      type: String,
      default: 'clear',
    },
    closeOnPopstate: {
      type: Boolean,
      default: true,
    },
    closeIconPosition: {
      type: String,
      default: 'top-right',
    },
  },

  data() {
    return {
      active: 0,
      windowWidth: 0,
      windowHeight: 0,
      doubleClickTimer: null,
    };
  },

  created() {
    this.resize();
  },

  watch: {
    startPosition: 'setActive',

    value(val) {
      if (val) {
        this.setActive(+this.startPosition);
        this.$nextTick(() => {
          this.$refs.swipe.swipeTo(+this.startPosition, { immediate: true });
        });
      } else {
        this.$emit('close', {
          index: this.active,
          url: this.images[this.active],
        });
      }
    },
  },

  methods: {
    resize() {
      if (inBrowser) {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
      }
    },

    emitClose() {
      if (!this.asyncClose) {
        this.$emit('input', false);
      }
    },

    emitScale(args) {
      this.$emit('scale', args);
    },

    setActive(active) {
      if (active !== this.active) {
        this.active = active;
        this.$emit('change', active);
      }
    },

    genIndex() {
      if (this.showIndex) {
        return (
          <div class={bem('index')}>
            {this.slots('index') ||
              `${this.active + 1} / ${this.images.length}`}
          </div>
        );
      }
    },

    genCover() {
      const cover = this.slots('cover');

      if (cover) {
        return <div class={bem('cover')}>{cover}</div>;
      }
    },

    genImages() {
      return (
        <Swipe
          ref="swipe"
          lazyRender
          loop={this.loop}
          class={bem('swipe')}
          duration={this.swipeDuration}
          initialSwipe={this.startPosition}
          showIndicators={this.showIndicators}
          indicatorColor="white"
          onChange={this.setActive}
        >
          {this.images.map((image) => (
            <ImagePreviewItem
              src={image}
              show={this.value}
              active={this.active}
              maxZoom={this.maxZoom}
              minZoom={this.minZoom}
              windowWidth={this.windowWidth}
              windowHeight={this.windowHeight}
              onScale={this.emitScale}
              onClose={this.emitClose}
            />
          ))}
        </Swipe>
      );
    },

    genClose() {
      if (this.closeable) {
        return (
          <Icon
            role="button"
            name={this.closeIcon}
            class={bem('close-icon', this.closeIconPosition)}
            onClick={this.emitClose}
          />
        );
      }
    },

    onClosed() {
      this.$emit('closed');
    },

    // @exposed-api
    swipeTo(index, options) {
      if (this.$refs.swipe) {
        this.$refs.swipe.swipeTo(index, options);
      }
    },
  },

  render() {
    if (!this.shouldRender) {
      return;
    }

    return (
      <transition name="van-fade" onAfterLeave={this.onClosed}>
        <div vShow={this.value} class={[bem(), this.className]}>
          {this.genClose()}
          {this.genImages()}
          {this.genIndex()}
          {this.genCover()}
        </div>
      </transition>
    );
  },
});
