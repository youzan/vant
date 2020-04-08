// Utils
import { createNamespace, isDef } from '../utils';

// Mixins
import { popupMixinProps } from '../mixins/popup';

// Components
import Popup from '../popup';

const PRESET_ICONS = ['qq', 'weibo', 'wechat', 'link', 'qrcode', 'poster'];

const [createComponent, bem, t] = createNamespace('share-sheet');

export default createComponent({
  props: {
    ...popupMixinProps,
    title: String,
    cancelText: String,
    description: String,
    options: {
      type: Array,
      default: () => [],
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    onCancel() {
      this.toggle(false);
      this.$emit('cancel');
    },

    onSelect(option, index) {
      this.$emit('select', option, index);
    },

    toggle(val) {
      this.$emit('input', val);
    },

    getIconURL(icon) {
      if (PRESET_ICONS.indexOf(icon) !== -1) {
        return `https://img.yzcdn.cn/vant/share-icon-${icon}.png`;
      }

      return icon;
    },

    genHeader() {
      if (!this.title && !this.description) {
        return;
      }

      const title = this.slots('title') || this.title;
      const description = this.slots('description') || this.description;

      return (
        <div class={bem('header')}>
          {title && <h2 class={bem('title')}>{title}</h2>}
          {description && <span class={bem('description')}>{description}</span>}
        </div>
      );
    },

    genOptions(options, showBorder) {
      return (
        <div class={bem('options', { border: showBorder })}>
          {options.map((option, index) => (
            <div
              class={bem('option')}
              onClick={() => {
                this.onSelect(option, index);
              }}
            >
              <img src={this.getIconURL(option.icon)} class={bem('icon')} />
              <span class={bem('name')}>{option.name || ''}</span>
            </div>
          ))}
        </div>
      );
    },

    genRows() {
      const { options } = this;
      if (Array.isArray(options[0])) {
        return options.map((item, index) => this.genOptions(item, index !== 0));
      }
      return this.genOptions(options);
    },

    genCancelText() {
      const cancelText = isDef(this.cancelText) ? this.cancelText : t('cancel');

      if (cancelText) {
        return (
          <button type="button" class={bem('cancel')} onClick={this.onCancel}>
            {cancelText}
          </button>
        );
      }
    },
  },

  render() {
    return (
      <Popup
        round
        class={bem()}
        value={this.value}
        position="bottom"
        safeAreaInsetBottom={this.safeAreaInsetBottom}
        onInput={this.toggle}
      >
        {this.genHeader()}
        {this.genRows()}
        {this.genCancelText()}
      </Popup>
    );
  },
});
