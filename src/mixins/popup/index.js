import Vue from 'vue';
import merge from 'src/utils/merge';
import PopupManager from './popup-manager';

let idSeed = 1;

const getDOM = function(dom) {
  if (dom.nodeType === 3) {
    dom = dom.nextElementSibling || dom.nextSibling;
    getDOM(dom);
  }
  return dom;
};

let scrollBarWidth;
const getScrollBarWidth = () => {
  if (scrollBarWidth !== undefined) return scrollBarWidth;

  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);

  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = 'scroll';

  const inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);

  const widthWithScroll = inner.offsetWidth;
  outer.parentNode.removeChild(outer);

  return widthNoScroll - widthWithScroll;
};

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
    this._popupId = 'popup-' + idSeed++;
    PopupManager.register(this._popupId, this);
  },

  data() {
    return {
      opening: false,
      opened: false,
      closing: false,
      bodyOverflow: null,
      bodyPaddingRight: null
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

      const dom = getDOM(this.$el);
      const props = merge({}, this, options);
      const overlay = props.overlay;
      const zIndex = props.zIndex;

      // 如果属性中传入了`zIndex`，则覆盖`PopupManager`中对应的`zIndex`
      if (zIndex) {
        PopupManager.zIndex = zIndex;
      }

      // 如果显示遮罩层
      if (overlay) {
        if (this.closing) {
          PopupManager.closeModal(this._popupId);
          this.closing = false;
        }
        PopupManager.openModal(this._popupId, PopupManager.nextZIndex(), dom);

        // 如果滚动时需要锁定
        if (props.lockOnScroll) {
          // 将原来的`bodyOverflow`和`bodyPaddingRight`存起来
          if (!this.bodyOverflow) {
            this.bodyPaddingRight = document.body.style.paddingRight;
            this.bodyOverflow = document.body.style.overflow;
          }

          scrollBarWidth = getScrollBarWidth();

          // 页面是否`overflow`
          let bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
          if (scrollBarWidth > 0 && bodyHasOverflow) {
            document.body.style.paddingRight = scrollBarWidth + 'px';
          }
          document.body.style.overlay = 'hidden';
        }
      }

      dom.style.zIndex = PopupManager.nextZIndex();
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
          if (this.modal && this.bodyOverflow !== 'hidden') {
            document.body.style.overflow = this.bodyOverflow;
            document.body.style.paddingRight = this.bodyPaddingRight;
          }
          this.bodyOverflow = null;
          this.bodyPaddingRight = null;
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

    if (this.modal && this.bodyOverflow !== null && this.bodyOverflow !== 'hidden') {
      document.body.style.overflow = this.bodyOverflow;
      document.body.style.paddingRight = this.bodyPaddingRight;
    }
    this.bodyOverflow = null;
    this.bodyPaddingRight = null;
  }
};
