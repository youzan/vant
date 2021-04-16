// Utils
import { createNamespace } from '../utils';

// Mixins
import { popupMixinProps } from '../mixins/popup';

// Components
import Popup from '../popup';

const PRESET_ICONS = [
  'qq',
  'link',
  'weibo',
  'wechat',
  'poster',
  'qrcode',
  'weapp-qrcode',
  'wechat-moments',
];

const [createComponent, bem, t] = createNamespace('share-sheet');

export default createComponent({
  props: {
    ...popupMixinProps,
    title: String,
    duration: String,
    cancelText: String,
    description: String,
    getContainer: [String, Function],
    options: {
      type: Array,
      default: () => [],
    },
    overlay: {
      type: Boolean,
      default: true,
    },
    closeOnPopstate: {
      type: Boolean,
      default: true,
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true,
    },
    closeOnClickOverlay: {
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
        return `https://img01.yzcdn.cn/vant/share-sheet-${icon}.png`;
      }

      return icon;
    },

    genHeader() {
      const title = this.slots('title') || this.title;
      const description = this.slots('description') || this.description;

      if (!title && !description) {
        return;
      }

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
              role="button"
              tabindex="0"
              class={[bem('option'), option.className]}
              onClick={() => {
                this.onSelect(option, index);
              }}
            >
              <img src={this.getIconURL(option.icon)} class={bem('icon')} />
              {option.name && <span class={bem('name')}>{option.name}</span>}
              {option.description && (
                <span class={bem('option-description')}>
                  {option.description}
                </span>
              )}
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
      const cancelText = this.cancelText ?? t('cancel');

      if (cancelText) {
        return (
          <button type="button" class={bem('cancel')} onClick={this.onCancel}>
            {cancelText}
          </button>
        );
      }
    },

    onClickOverlay() {
      this.$emit('click-overlay');
    },
  },

  render() {
    return (
      <Popup
        round
        class={bem()}
        value={this.value}
        position="bottom"
        overlay={this.overlay}
        duration={this.duration}
        lazyRender={this.lazyRender}
        lockScroll={this.lockScroll}
        getContainer={this.getContainer}
        closeOnPopstate={this.closeOnPopstate}
        closeOnClickOverlay={this.closeOnClickOverlay}
        safeAreaInsetBottom={this.safeAreaInsetBottom}
        onInput={this.toggle}
        onClick-overlay={this.onClickOverlay}
      >
        {this.genHeader()}
        {this.genRows()}
        {this.genCancelText()}
      </Popup>
    );
  },
});
