import manager from './popup-manager';
import context from './popup-context';

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
    // prevent touchmove scroll
    preventScroll: Boolean,
    // prevent body scroll
    lockOnScroll: {
      type: Boolean,
      default: true
    }
  },

  watch: {
    value(val) {
      this[val ? 'open' : 'close']();
    }
  },

  beforeMount() {
    this._popupId = 'popup-' + context.plusKeyByOne('idSeed');
    context.instances[this._popupId] = this;
  },

  data() {
    return {
      opened: false,
      pos: {
        x: 0,
        y: 0
      }
    };
  },

  methods: {
    recordPosition(e) {
      this.pos = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    },

    findScrollableElement(ele) {
      let currentNode = ele;
      while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
        const overflowY = window.getComputedStyle(currentNode, null).overflowY;
        if (overflowY === 'scroll' || overflowY === 'auto' || currentNode === this.$el) {
          return currentNode;
        }
        currentNode = currentNode.parentNode;
      }
      return window;
    },

    watchTouchMove(e) {
      const pos = this.pos;
      const dx = e.touches[0].clientX - pos.x;
      const dy = e.touches[0].clientY - pos.y;
      const direction = dy > 0 ? '10' : '01';
      const el = this.findScrollableElement(e.target);
      const scrollTop = el.scrollTop;
      const scrollHeight = el.scrollHeight;
      const offsetHeight = el.offsetHeight;
      const isVertical = Math.abs(dx) < Math.abs(dy);

      let status = '11';

      if (scrollTop === 0) {
        status = offsetHeight >= scrollHeight ? '00' : '01';
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        status = '10';
      }

      if (status !== '11' && isVertical && !(parseInt(status, 2) & parseInt(direction, 2))) {
        e.preventDefault();
        e.stopPropagation();
      }
    },

    open() {
      if (this.opened || this.$isServer) {
        return;
      }

      this.$emit('input', true);

      // 如果属性中传入了`zIndex`，则覆盖`context`中对应的`zIndex`
      if (this.zIndex !== undefined) {
        context.zIndex = this.zIndex;
      }

      if (this.overlay) {
        manager.openModal({
          id: this._popupId,
          zIndex: context.plusKeyByOne('zIndex'),
          dom: this.$el,
          className: this.overlayClass,
          customStyle: this.overlayStyle
        });

        if (this.lockOnScroll) {
          document.body.classList.add('van-overflow-hidden');
        }
      }

      this.$el.style.zIndex = context.plusKeyByOne('zIndex');
      this.opened = true;

      if (this.preventScroll) {
        document.addEventListener('touchstart', this.recordPosition, false);
        document.addEventListener('touchmove', this.watchTouchMove, false);
      }
    },

    close() {
      if (!this.opened || this.$isServer) {
        return;
      }

      this.$emit('input', false);

      if (this.lockOnScroll) {
        document.body.classList.remove('van-overflow-hidden');
      }

      this.opened = false;
      this.doAfterClose();
    },

    doAfterClose() {
      manager.closeModal(this._popupId);

      if (this.preventScroll) {
        document.removeEventListener('touchstart', this.recordPosition, false);
        document.removeEventListener('touchmove', this.watchTouchMove, false);
      }
    }
  },

  beforeDestroy() {
    context.instances[this._popupId] = null;
    manager.closeModal(this._popupId);
    if (this.lockOnScroll) {
      document.body.classList.remove('van-overflow-hidden');
    }
  }
};
