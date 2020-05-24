// Context
import { context } from './context';
import {
  openOverlay,
  closeOverlay,
  updateOverlay,
  removeOverlay,
} from './overlay';

// Utils
import { on, off, preventDefault } from '../../utils/dom/event';
import { removeNode } from '../../utils/dom/node';
import { getScroller } from '../../utils/dom/scroll';

// Mixins
import { TouchMixin } from '../touch';
import { PortalMixin } from '../portal';
import { CloseOnPopstateMixin } from '../close-on-popstate';

export const popupMixinProps = {
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
    default: true,
  },
  // whether to lazy render
  lazyRender: {
    type: Boolean,
    default: true,
  },
};

export function PopupMixin(options = {}) {
  return {
    mixins: [
      TouchMixin,
      CloseOnPopstateMixin,
      PortalMixin({
        afterPortal() {
          if (this.overlay) {
            updateOverlay();
          }
        },
      }),
    ],

    props: popupMixinProps,

    data() {
      return {
        inited: this.value,
      };
    },

    computed: {
      shouldRender() {
        return this.inited || !this.lazyRender;
      },
    },

    watch: {
      value(val) {
        const type = val ? 'open' : 'close';
        this.inited = this.inited || this.value;
        this[type]();

        if (!options.skipToggleEvent) {
          this.$emit(type);
        }
      },

      overlay: 'renderOverlay',
    },

    mounted() {
      if (this.value) {
        this.open();
      }
    },

    /* istanbul ignore next */
    activated() {
      if (this.shouldReopen) {
        this.$emit('input', true);
        this.shouldReopen = false;
      }
    },

    beforeDestroy() {
      this.removeLock();
      removeOverlay(this);

      if (this.getContainer) {
        removeNode(this.$el);
      }
    },

    /* istanbul ignore next */
    deactivated() {
      if (this.value) {
        this.close();
        this.shouldReopen = true;
      }
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
        if (this.lockScroll) {
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

        closeOverlay(this);
        this.opened = false;
        this.removeLock();
        this.$emit('input', false);
      },

      onTouchMove(event) {
        this.touchMove(event);
        const direction = this.deltaY > 0 ? '10' : '01';
        const el = getScroller(event.target, this.$el);
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

        this.$nextTick(() => {
          this.updateZIndex(this.overlay ? 1 : 0);

          if (this.overlay) {
            openOverlay(this, {
              zIndex: context.zIndex++,
              duration: this.duration,
              className: this.overlayClass,
              customStyle: this.overlayStyle,
            });
          } else {
            closeOverlay(this);
          }
        });
      },

      updateZIndex(value = 0) {
        this.$el.style.zIndex = ++context.zIndex + value;
      },
    },
  };
}
