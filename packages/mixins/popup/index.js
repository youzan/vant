import { context } from './context';
import { TouchMixin } from '../touch';
import { on, off } from '../../utils/event';
import { openOverlay, closeOverlay, updateOverlay } from './overlay';
import { getScrollEventTarget } from '../../utils/scroll';

export const PopupMixin = {
  mixins: [TouchMixin],

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
    zIndex: [String, Number],
    // return the mount node for popup
    getContainer: [String, Function],
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

    getContainer() {
      this.move();
    },

    overlay() {
      this.renderOverlay();
    }
  },

  mounted() {
    if (this.getContainer) {
      this.move();
    }
    if (this.value) {
      this.open();
    }
  },

  activated() {
    /* istanbul ignore next */
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

  deactivated() {
    /* istanbul ignore next */
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

    move() {
      let container;
      const { getContainer } = this;

      if (getContainer) {
        container =
          typeof getContainer === 'string'
            ? document.querySelector(getContainer)
            : getContainer();
      } else if (this.$parent) {
        container = this.$parent.$el;
      }

      if (container && container !== this.$el.parentNode) {
        container.appendChild(this.$el);
      }

      if (this.overlay) {
        updateOverlay();
      }
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
        event.cancelable &&
        status !== '11' &&
        this.direction === 'vertical' &&
        !(parseInt(status, 2) & parseInt(direction, 2))
      ) {
        event.preventDefault();
        event.stopPropagation();
      }
    },

    renderOverlay() {
      if (this.$isServer || !this.value) {
        return;
      }

      if (this.overlay) {
        openOverlay(this, {
          zIndex: context.zIndex++,
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
