import { use } from '../utils';
import { stopPropagation } from '../utils/dom/event';
import { BindEventMixin } from '../mixins/bind-event';
import Key from './Key';

const [sfc, bem, t] = use('number-keyboard');
const CLOSE_KEY_THEME = ['blue', 'big'];
const DELETE_KEY_THEME = ['delete', 'big', 'gray'];

export default sfc({
  mixins: [
    BindEventMixin(function (bind) {
      if (this.hideOnClickOutside) {
        bind(document.body, 'touchstart', this.onBlur);
      }
    })
  ],

  model: {
    event: 'update:value'
  },

  props: {
    show: Boolean,
    title: String,
    closeButtonText: String,
    deleteButtonText: String,
    safeAreaInsetBottom: Boolean,
    theme: {
      type: String,
      default: 'default'
    },
    value: {
      type: String,
      default: ''
    },
    extraKey: {
      type: String,
      default: ''
    },
    maxlength: {
      type: [Number, String],
      default: Number.MAX_VALUE
    },
    zIndex: {
      type: Number,
      default: 100
    },
    transition: {
      type: Boolean,
      default: true
    },
    showDeleteKey: {
      type: Boolean,
      default: true
    },
    hideOnClickOutside: {
      type: Boolean,
      default: true
    }
  },

  watch: {
    show() {
      if (!this.transition) {
        this.$emit(this.show ? 'show' : 'hide');
      }
    }
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
            { text: this.extraKey, theme: ['gray'] },
            { text: 0 },
            { text: this.deleteText, theme: ['gray'], type: 'delete' }
          );
          break;
        case 'custom':
          keys.push({ text: 0, theme: ['middle'] }, { text: this.extraKey });
          break;
      }

      return keys;
    },

    deleteText() {
      return this.deleteButtonText || t('delete');
    }
  },

  methods: {
    onBlur() {
      this.$emit('blur');
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
    }
  },

  render(h) {
    const { title, theme, onPress, closeButtonText } = this;

    const titleLeftSlot = this.slots('title-left');
    const showTitleClose = closeButtonText && theme === 'default';
    const showTitle = title || showTitleClose || titleLeftSlot;

    const Title = showTitle && (
      <div class={[bem('title'), 'van-hairline--top']}>
        {titleLeftSlot && <span class={bem('title-left')}>{titleLeftSlot}</span>}
        {title && <span>{title}</span>}
        {showTitleClose && (
          <span role="button" tabindex="0" class={bem('close')} onClick={this.onClose}>
            {closeButtonText}
          </span>
        )}
      </div>
    );

    const Keys = this.keys.map(key => (
      <Key
        key={key.text}
        text={key.text}
        type={key.type}
        theme={key.theme}
        onPress={onPress}
      >
        {key.type === 'delete' && this.slots('delete')}
      </Key>
    ));

    const Sidebar = theme === 'custom' && (
      <div class={bem('sidebar')}>
        <Key
          text={this.deleteText}
          type="delete"
          theme={DELETE_KEY_THEME}
          onPress={onPress}
        >
          {this.slots('delete')}
        </Key>
        <Key
          text={closeButtonText}
          type="close"
          theme={CLOSE_KEY_THEME}
          onPress={onPress}
        />
      </div>
    );

    return (
      <transition name={this.transition ? 'van-slide-up' : ''}>
        <div
          vShow={this.show}
          style={{ zIndex: this.zIndex }}
          class={bem([theme, { 'safe-area-inset-bottom': this.safeAreaInsetBottom }])}
          onTouchstart={stopPropagation}
          onAnimationend={this.onAnimationEnd}
          onWebkitAnimationEnd={this.onAnimationEnd}
        >
          {Title}
          <div class={bem('body')}>{Keys}</div>
          {Sidebar}
        </div>
      </transition>
    );
  }
});
