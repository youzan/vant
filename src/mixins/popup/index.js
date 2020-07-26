// Context
import { context } from './context';

// Utils
import { on, off, preventDefault } from '../../utils/dom/event';
import { removeNode } from '../../utils/dom/node';
import { getScroller } from '../../utils/dom/scroll';

// Mixins
import { TouchMixin } from '../touch';
import { CloseOnPopstateMixin } from '../close-on-popstate';

export const popupMixinProps = {
  // whether to show popup
  show: Boolean,
  // whether to show overlay
  overlay: Boolean,
  // overlay custom style
  overlayStyle: Object,
  // overlay custom class name
  overlayClass: String,
  // teleport
  getContainer: [String, Function],
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
    mixins: [TouchMixin, CloseOnPopstateMixin],

    props: popupMixinProps,

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

        if (!options.skipToggleEvent) {
          this.$emit(type);
        }
      },

      overlay: 'renderOverlay',
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

    beforeDestroy() {
      this.removeLock();

      if (this.getContainer) {
        removeNode(this.$refs.root);
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
          // TODO
          // if (this.onClickOverlay) {
          //   this.onClickOverlay();
          // } else {
          //   this.close();
          // }
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
  };
}
