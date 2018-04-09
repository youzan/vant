import manager from './manager';
import context from './context';
import scrollUtils from '../../utils/scroll';
import { on, off } from '../../utils/event';

export default {
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
    getContainer: Function,
    // prevent body scroll
    lockScroll: {
      type: Boolean,
      default: true
    }
  },

  watch: {
    value(val) {
      this[val ? 'open' : 'close']();
    },

    getContainer() {
      this.move();
    },

    overlay() {
      this.renderOverlay();
    }
  },

  created() {
    this._popupId = 'popup-' + context.plusKey('id');
    this.pos = {
      x: 0,
      y: 0
    };
  },

  mounted() {
    if (this.getContainer) {
      this.move();
    }
    if (this.value) {
      this.open();
    }
  },

  beforeDestroy() {
    this.close();
  },

  methods: {
    open() {
      /* istanbul ignore next */
      if (this.$isServer) {
        return;
      }

      // 如果属性中传入了`zIndex`，则覆盖`context`中对应的`zIndex`
      if (this.zIndex !== undefined) {
        context.zIndex = this.zIndex;
      }

      if (this.lockScroll) {
        if (!context.lockCount) {
          document.body.classList.add('van-overflow-hidden');
          on(document, 'touchstart', this.onTouchStart);
          on(document, 'touchmove', this.onTouchMove);
        }
        context.lockCount++;
      }

      this.renderOverlay();
      this.$emit('input', true);
    },

    close() {
      if (this.lockScroll) {
        context.lockCount--;
        if (!context.lockCount) {
          document.body.classList.remove('van-overflow-hidden');
          off(document, 'touchstart', this.onTouchStart);
          off(document, 'touchmove', this.onTouchMove);
        }
      }

      manager.close(this._popupId);
      this.$emit('input', false);
    },

    move() {
      if (this.getContainer) {
        this.getContainer().appendChild(this.$el);
      } else if (this.$parent) {
        this.$parent.$el.appendChild(this.$el);
      }
    },

    onTouchStart(e) {
      this.pos = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    },

    onTouchMove(e) {
      const { pos } = this;
      const dx = e.touches[0].clientX - pos.x;
      const dy = e.touches[0].clientY - pos.y;
      const direction = dy > 0 ? '10' : '01';
      const el = scrollUtils.getScrollEventTarget(e.target, this.$el);
      const { scrollHeight, offsetHeight, scrollTop } = el;
      const isVertical = Math.abs(dx) < Math.abs(dy);

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
        isVertical &&
        !(parseInt(status, 2) & parseInt(direction, 2))
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    },

    renderOverlay() {
      if (this.overlay) {
        manager.open(this, {
          zIndex: context.plusKey('zIndex'),
          className: this.overlayClass,
          customStyle: this.overlayStyle
        });
      } else {
        manager.close(this._popupId);
      }
      this.$el.style.zIndex = context.plusKey('zIndex');
    }
  }
};
