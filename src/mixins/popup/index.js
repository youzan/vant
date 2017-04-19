import merge from 'src/utils/merge';
import PopupManager from './popup-manager';
import PopupContext from './popup-context';

export default {
  props: {
    /**
     * popup当前显示状态
     */
    value: {
      type: Boolean,
      default: false
    },
    /**
     * 是否显示遮罩层
     */
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
    /**
     * popup滚动时是否body内容也滚动
     * 默认为不滚动
     */
    lockOnScroll: {
      type: Boolean,
      default: true
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
      bodyOverflow: null
    };
  },

  methods: {
    /**
     * 显示popup
     */
    open(options) {
      if (this.opened) return;

      this.opening = true;

      this.$emit('input', true);

      const props = merge({}, this, options);
      const zIndex = props.zIndex;

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
