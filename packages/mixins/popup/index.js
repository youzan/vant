import PopupManager from './popup-manager';
import PopupContext from './popup-context';

export default {
  props: {
    // popup当前显示状态
    value: {
      type: Boolean,
      default: false
    },
    // 是否显示遮罩层
    overlay: {
      type: Boolean,
      default: false
    },
    /**
     * 点击遮罩层是否关闭popup
     */
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    },
    zIndex: [String, Number],
    // popup滚动时是否body内容也滚动
    // 默认为不滚动
    lockOnScroll: {
      type: Boolean,
      default: true
    },
    // 防止滚动穿透
    preventScroll: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    value(val) {
      if (val) {
        if (this.opening) return;
        this.open();
      } else {
        if (this.closing) return;
        this.close();
      }
    }
  },

  beforeMount() {
    this._popupId = 'popup-' + PopupContext.plusKeyByOne('idSeed');
    PopupManager.register(this._popupId, this);
  },

  data() {
    return {
      opening: false,
      opened: false,
      closing: false,
      bodyOverflow: null,
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
    watchTouchMove(e) {
      const pos = this.pos;
      const dx = e.touches[0].clientX - pos.x;
      const dy = e.touches[0].clientY - pos.y;
      const direction = dy > 0 ? '10' : '01';
      const el = this.$el.querySelector('.scroller') || this.$el;
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
    /**
     * 显示popup
     */
    open() {
      /* istanbul ignore if */
      if (this.$isServer) return;
      if (this.opened) return;

      this.opening = true;

      this.$emit('input', true);

      const zIndex = this.zIndex;

      // 如果属性中传入了`zIndex`，则覆盖`popupContext`中对应的`zIndex`
      if (zIndex) {
        PopupContext.setContext('zIndex', zIndex);
      }

      // 如果显示遮罩层
      if (this.overlay) {
        if (this.closing) {
          PopupManager.closeModal(this._popupId);
          this.closing = false;
        }
        PopupManager.openModal(this._popupId, PopupManager.nextZIndex(), this.$el);

        // 如果滚动时需要锁定
        if (this.lockOnScroll) {
          // 将原来的`bodyOverflow`存起来
          if (!this.bodyOverflow) {
            this.bodyOverflow = document.body.style.overflow;
          }

          document.body.style.overflow = 'hidden';
        }
      }

      this.$el.style.zIndex = PopupManager.nextZIndex();
      this.opened = true;
      this.opening = false;

      if (this.preventScroll) {
        document.addEventListener('touchstart', this.recordPosition, false);
        document.addEventListener('touchmove', this.watchTouchMove, false);
      }
    },

    /**
     * 关闭popup
     */
    close() {
      if (this.closing) return;

      this.closing = true;

      this.$emit('input', false);

      if (this.lockOnScroll) {
        setTimeout(() => {
          if (this.overlay && this.bodyOverflow !== 'hidden') {
            document.body.style.overflow = this.bodyOverflow;
          }
          this.bodyOverflow = null;
        }, 200);
      }

      this.opened = false;
      this.doAfterClose();
    },

    doAfterClose() {
      this.closing = false;
      PopupManager.closeModal(this._popupId);

      if (this.preventScroll) {
        document.removeEventListener('touchstart', this.recordPosition, false);
        document.removeEventListener('touchmove', this.watchTouchMove, false);
      }
    }
  },

  beforeDestroy() {
    PopupManager.deregister(this._popupId);
    PopupManager.closeModal(this._popupId);

    if (this.overlay && this.bodyOverflow !== null && this.bodyOverflow !== 'hidden') {
      document.body.style.overflow = this.bodyOverflow;
    }
    this.bodyOverflow = null;
  }
};
