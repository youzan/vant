// Utils
import { bem, createComponent } from './shared';
import { callInterceptor } from '../utils/interceptor';

// Mixins
import { TouchMixin } from '../mixins/touch';
import { BindEventMixin } from '../mixins/bind-event';

// Components
import Icon from '../icon';
import Swipe from '../swipe';
import Popup from '../popup';
import ImagePreviewItem from './ImagePreviewItem';

export default createComponent({
  mixins: [
    TouchMixin,
    BindEventMixin(function (bind) {
      bind(window, 'resize', this.resize, true);
      bind(window, 'orientationchange', this.resize, true);
    }),
  ],

  props: {
    show: Boolean,
    className: null,
    closeable: Boolean,
    beforeClose: Function,
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

  emits: ['scale', 'close', 'closed', 'change', 'update:show'],

  data() {
    return {
      active: 0,
      rootWidth: 0,
      rootHeight: 0,
      doubleClickTimer: null,
    };
  },

  mounted() {
    this.resize();
  },

  watch: {
    startPosition: 'setActive',

    show(val) {
      if (val) {
        this.setActive(+this.startPosition);
        this.$nextTick(() => {
          this.resize();
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
      if (this.$el && this.$el.getBoundingClientRect) {
        const rect = this.$el.getBoundingClientRect();
        this.rootWidth = rect.width;
        this.rootHeight = rect.height;
      }
    },

    emitClose() {
      callInterceptor({
        interceptor: this.beforeClose,
        args: [this.active],
        done: () => {
          this.$emit('update:show', false);
        },
      });
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
            {this.$slots.index
              ? this.$slots.index()
              : `${this.active + 1} / ${this.images.length}`}
          </div>
        );
      }
    },

    genCover() {
      if (this.$slots.cover) {
        return <div class={bem('cover')}>{this.$slots.cover()}</div>;
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
              show={this.show}
              active={this.active}
              maxZoom={this.maxZoom}
              minZoom={this.minZoom}
              rootWidth={this.rootWidth}
              rootHeight={this.rootHeight}
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
    return (
      <Popup
        show={this.show}
        class={[bem(), this.className]}
        overlayClass={bem('overlay')}
        onClosed={this.onClosed}
      >
        {this.genClose()}
        {this.genImages()}
        {this.genIndex()}
        {this.genCover()}
      </Popup>
    );
  },
});
