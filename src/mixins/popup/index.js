import { context } from './context';
import { TouchMixin } from '../touch';
import { PortalMixin } from '../portal';
import { on, off, preventDefault } from '../../utils/dom/event';
import { openOverlay, closeOverlay, updateOverlay } from './overlay';
import { getScrollEventTarget } from '../../utils/dom/scroll';

export const PopupMixin = {
  mixins: [
    TouchMixin,
    PortalMixin({
      afterPortal() {
        if (this.overlay) {
          updateOverlay();
        }
      }
    })
  ],

  props: {
    // whether to show popup
    value: Boolean,
    // whether to show overlay
    overlay: Boolean,
    // overlay custom style
    overlayStyle: Object,
    // overlay custom class name
    overlayClass: String,
    // whether to close popup when click overlay
    closeOnClickOverlay: Boolean,
    // z-index
    zIndex: [Number, String],
    // prevent body scroll
    lockScroll: {
      type: Boolean,
      default: true
    },
    // whether to lazy render
    lazyRender: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      inited: this.value
    };
  },

  computed: {
    shouldRender() {
      return this.inited || !this.lazyRender;
    }
  },

  watch: {
    value(val) {
      const type = val ? 'open' : 'close';
      this.inited = this.inited || this.value;
      this[type]();
      this.$emit(type);
    },

    overlay() {
      this.renderOverlay();
    }
  },

  mounted() {
    if (this.value) {
      this.open();
    }
  },

  /* istanbul ignore next */
  activated() {
    if (this.value) {
      this.open();
    }
  },

  beforeDestroy() {
    this.close();

    if (this.getContainer && this.$parent && this.$parent.$el) {
      this.$parent.$el.appendChild(this.$el);
    }
  },

  /* istanbul ignore next */
  deactivated() {
    this.close();
  },

  methods: {
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

      if (this.lockScroll) {
        on(document, 'touchstart', this.touchStart);
        on(document, 'touchmove', this.onTouchMove);

        if (!context.lockCount) {
          document.body.classList.add('van-overflow-hidden');
        }
        context.lockCount++;
      }
    },

    close() {
      if (!this.opened) {
        return;
      }

      if (this.lockScroll) {
        context.lockCount--;
        off(document, 'touchstart', this.touchStart);
        off(document, 'touchmove', this.onTouchMove);

        if (!context.lockCount) {
          document.body.classList.remove('van-overflow-hidden');
        }
      }

      this.opened = false;
      closeOverlay(this);
      this.$emit('input', false);
    },

    onTouchMove(event) {
      this.touchMove(event);
      const direction = this.deltaY > 0 ? '10' : '01';
      const el = getScrollEventTarget(event.target, this.$el);
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

    renderOverlay() {
      if (this.$isServer || !this.value) {
        return;
      }

      if (this.overlay) {
        openOverlay(this, {
          zIndex: context.zIndex++,
          duration: this.duration,
          className: this.overlayClass,
          customStyle: this.overlayStyle
        });
      } else {
        closeOverlay(this);
      }

      this.updateZIndex();
    },

    updateZIndex() {
      this.$nextTick(() => {
        this.$el.style.zIndex = context.zIndex++;
      });
    }
  }
};
