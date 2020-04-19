import { createNamespace } from '../utils';
import { stopPropagation } from '../utils/dom/event';
import { BindEventMixin } from '../mixins/bind-event';
import Key from './Key';

const [createComponent, bem, t] = createNamespace('number-keyboard');

export default createComponent({
  mixins: [
    BindEventMixin(function (bind) {
      if (this.hideOnClickOutside) {
        bind(document.body, 'touchstart', this.onBlur);
      }
    }),
  ],

  model: {
    event: 'update:value',
  },

  props: {
    show: Boolean,
    title: String,
    zIndex: [Number, String],
    closeButtonText: String,
    deleteButtonText: String,
    theme: {
      type: String,
      default: 'default',
    },
    value: {
      type: String,
      default: '',
    },
    extraKey: {
      type: String,
      default: '',
    },
    maxlength: {
      type: [Number, String],
      default: Number.MAX_VALUE,
    },
    transition: {
      type: Boolean,
      default: true,
    },
    showDeleteKey: {
      type: Boolean,
      default: true,
    },
    hideOnClickOutside: {
      type: Boolean,
      default: true,
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true,
    },
  },

  watch: {
    show(val) {
      if (!this.transition) {
        this.$emit(val ? 'show' : 'hide');
      }
    },
  },

  computed: {
    keys() {
      const keys = [];
      for (let i = 1; i <= 9; i++) {
        keys.push({ text: i });
      }

      switch (this.theme) {
        case 'default':
          keys.push(
            { text: this.extraKey, type: 'extra', color: 'gray' },
            { text: 0 },
            {
              text: this.showDeleteKey ? this.deleteText : '',
              type: this.showDeleteKey ? 'delete' : '',
              color: 'gray',
            }
          );
          break;
        case 'custom':
          keys.push(
            { text: 0, wider: true },
            { text: this.extraKey, type: 'extra' }
          );
          break;
      }

      return keys;
    },

    deleteText() {
      return this.deleteButtonText || t('delete');
    },
  },

  methods: {
    onBlur() {
      this.show && this.$emit('blur');
    },

    onClose() {
      this.$emit('close');
      this.onBlur();
    },

    onAnimationEnd() {
      this.$emit(this.show ? 'show' : 'hide');
    },

    onPress(text, type) {
      if (text === '') {
        return;
      }

      const { value } = this;

      if (type === 'delete') {
        this.$emit('delete');
        this.$emit('update:value', value.slice(0, value.length - 1));
      } else if (type === 'close') {
        this.onClose();
      } else if (value.length < this.maxlength) {
        this.$emit('input', text);
        this.$emit('update:value', value + text);
      }
    },

    genTitle() {
      const { title, theme, closeButtonText } = this;
      const titleLeft = this.slots('title-left');
      const showClose = closeButtonText && theme === 'default';
      const showTitle = title || showClose || titleLeft;

      if (!showTitle) {
        return;
      }

      return (
        <div class={bem('title')}>
          {titleLeft && <span class={bem('title-left')}>{titleLeft}</span>}
          {title && <span>{title}</span>}
          {showClose && (
            <span
              role="button"
              tabindex="0"
              class={bem('close')}
              onClick={this.onClose}
            >
              {closeButtonText}
            </span>
          )}
        </div>
      );
    },

    genKeys() {
      return this.keys.map((key) => (
        <Key
          key={key.text}
          text={key.text}
          type={key.type}
          wider={key.wider}
          color={key.color}
          onPress={this.onPress}
        >
          {key.type === 'delete' && this.slots('delete')}
          {key.type === 'extra' && this.slots('extra-key')}
        </Key>
      ));
    },

    genSidebar() {
      if (this.theme === 'custom') {
        return (
          <div class={bem('sidebar')}>
            {this.showDeleteKey && (
              <Key
                large
                text={this.deleteText}
                type="delete"
                onPress={this.onPress}
              >
                {this.slots('delete')}
              </Key>
            )}
            <Key
              large
              text={this.closeButtonText}
              type="close"
              color="blue"
              onPress={this.onPress}
            />
          </div>
        );
      }
    },
  },

  render() {
    const Title = this.genTitle();

    return (
      <transition name={this.transition ? 'van-slide-up' : ''}>
        <div
          vShow={this.show}
          style={{ zIndex: this.zIndex }}
          class={bem({ unfit: !this.safeAreaInsetBottom, 'with-title': Title })}
          onTouchstart={stopPropagation}
          onAnimationend={this.onAnimationEnd}
          onWebkitAnimationEnd={this.onAnimationEnd}
        >
          {Title}
          <div class={bem('body')}>
            <div class={bem('keys')}>{this.genKeys()}</div>
            {this.genSidebar()}
          </div>
        </div>
      </transition>
    );
  },
});
