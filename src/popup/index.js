// Utils
import { Teleport, Transition } from 'vue';
import { createNamespace, isDef, isFunction } from '../utils';
import { on, off, preventDefault } from '../utils/dom/event';
import { getScroller } from '../utils/dom/scroll';

// Mixins
import { TouchMixin } from '../mixins/touch';
import { CloseOnPopstateMixin } from '../mixins/close-on-popstate';

// Components
import Icon from '../icon';
import Overlay from '../overlay';

const [createComponent, bem] = createNamespace('popup');

const context = {
  zIndex: 2000,
  lockCount: 0,
  stack: [],
  find(vm) {
    return this.stack.filter((item) => item.vm === vm)[0];
  },
};

export const popupSharedProps = {
  // whether to show popup
  show: Boolean,
  // whether to show overlay
  overlay: Boolean,
  // overlay custom style
  overlayStyle: Object,
  // overlay custom class name
  overlayClass: String,
  // teleport
  teleport: [String, Object],
  // whether to close popup when click overlay
  closeOnClickOverlay: Boolean,
  // z-index
  zIndex: [Number, String],
  // prevent body scroll
  lockScroll: {
    type: Boolean,
    default: true,
  },
  // whether to lazy render
  lazyRender: {
    type: Boolean,
    default: true,
  },
};

export default createComponent({
  mixins: [TouchMixin, CloseOnPopstateMixin],

  inheritAttrs: false,

  props: {
    ...popupSharedProps,
    round: Boolean,
    duration: [Number, String],
    closeable: Boolean,
    transition: String,
    safeAreaInsetBottom: Boolean,
    closeIcon: {
      type: String,
      default: 'cross',
    },
    closeIconPosition: {
      type: String,
      default: 'top-right',
    },
    position: {
      type: String,
      default: 'center',
    },
    overlay: {
      type: Boolean,
      default: true,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
  },

  emits: [
    'open',
    'close',
    'click',
    'opened',
    'closed',
    'update:show',
    'click-overlay',
  ],

  data() {
    return {
      inited: this.show,
      currentZIndex: null,
    };
  },

  computed: {
    shouldRender() {
      return this.inited || !this.lazyRender;
    },
  },

  watch: {
    show(val) {
      const type = val ? 'open' : 'close';
      this.inited = this.inited || this.show;
      this[type]();
      this.$emit(type);
    },

    overlay: 'renderOverlay',
  },

  beforeCreate() {
    const createEmitter = (eventName) => (event) =>
      this.$emit(eventName, event);

    this.onClick = createEmitter('click');
    this.onOpened = createEmitter('opened');
    this.onClosed = createEmitter('closed');
  },

  mounted() {
    if (this.show) {
      this.open();
    }
  },

  /* istanbul ignore next */
  activated() {
    if (this.shouldReopen) {
      this.$emit('update:show', true);
      this.shouldReopen = false;
    }
  },

  beforeUnmount() {
    if (this.opened) {
      this.removeLock();
    }
  },

  /* istanbul ignore next */
  deactivated() {
    if (this.show) {
      this.close();
      this.shouldReopen = true;
    }
  },

  methods: {
    genOverlay() {
      if (this.overlay) {
        return (
          <Overlay
            show={this.show}
            class={this.overlayClass}
            style={this.overlayStyle}
            zIndex={this.currentZIndex}
            onClick={this.onClickOverlay}
          />
        );
      }
    },

    genPopup() {
      const { round, position, duration } = this;
      const isCenter = position === 'center';

      const transitionName =
        this.transition ||
        (isCenter ? 'van-fade' : `van-popup-slide-${position}`);

      const style = {
        zIndex: this.currentZIndex,
      };

      if (isDef(duration)) {
        const key = isCenter ? 'animationDuration' : 'transitionDuration';
        style[key] = `${duration}s`;
      }

      return (
        <Transition
          name={transitionName}
          onAfterEnter={this.onOpened}
          onAfterLeave={this.onClosed}
        >
          {this.shouldRender ? (
            <div
              vShow={this.show}
              style={style}
              class={bem({
                round,
                [position]: position,
                'safe-area-inset-bottom': this.safeAreaInsetBottom,
              })}
              onClick={this.onClick}
              {...this.$attrs}
            >
              {this.$slots.default?.()}
              {this.closeable && (
                <Icon
                  role="button"
                  tabindex="0"
                  name={this.closeIcon}
                  class={bem('close-icon', this.closeIconPosition)}
                  onClick={this.close}
                />
              )}
            </div>
          ) : null}
        </Transition>
      );
    },

    open() {
      /* istanbul ignore next */
      if (this.$isServer || this.opened) {
        return;
      }

      // cover default zIndex
      if (this.zIndex !== undefined) {
        context.zIndex = this.zIndex;
      }

      this.opened = true;
      this.renderOverlay();
      this.addLock();
    },

    addLock() {
      if (this.lockScroll) {
        on(document, 'touchstart', this.touchStart);
        on(document, 'touchmove', this.onTouchMove);

        if (!context.lockCount) {
          document.body.classList.add('van-overflow-hidden');
        }
        context.lockCount++;
      }
    },

    removeLock() {
      if (this.lockScroll && context.lockCount) {
        context.lockCount--;
        off(document, 'touchstart', this.touchStart);
        off(document, 'touchmove', this.onTouchMove);

        if (!context.lockCount) {
          document.body.classList.remove('van-overflow-hidden');
        }
      }
    },

    close() {
      if (!this.opened) {
        return;
      }

      this.opened = false;
      this.removeLock();
      this.$emit('update:show', false);
    },

    onTouchMove(event) {
      this.touchMove(event);
      const direction = this.deltaY > 0 ? '10' : '01';
      const el = getScroller(event.target, this.$refs.root);
      const { scrollHeight, offsetHeight, scrollTop } = el;
      let status = '11';

      /* istanbul ignore next */
      if (scrollTop === 0) {
        status = offsetHeight >= scrollHeight ? '00' : '01';
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        status = '10';
      }

      /* istanbul ignore next */
      if (
        status !== '11' &&
        this.direction === 'vertical' &&
        !(parseInt(status, 2) & parseInt(direction, 2))
      ) {
        preventDefault(event, true);
      }
    },

    onClickOverlay() {
      this.$emit('click-overlay');

      if (this.closeOnClickOverlay) {
        this.close();
      }
    },

    renderOverlay() {
      if (this.$isServer || !this.show) {
        return;
      }

      this.$nextTick(() => {
        this.updateZIndex(this.overlay ? 1 : 0);
      });
    },

    updateZIndex(value = 0) {
      this.currentZIndex = ++context.zIndex + value;
    },
  },

  render() {
    const { teleport } = this;
    if (teleport) {
      const to = isFunction(teleport) ? teleport() : teleport;
      return (
        <Teleport to={to}>
          {this.genOverlay()}
          {this.genPopup()}
        </Teleport>
      );
    }

    return (
      <>
        {this.genOverlay()}
        {this.genPopup()}
      </>
    );
  },
});
