import { use } from '../utils';
import { stop } from '../utils/event';
import Key from './Key';

const [sfc, bem, t] = use('number-keyboard');
const CLOSE_KEY_TYPE = ['blue', 'big'];
const DELETE_KEY_TYPE = ['delete', 'big', 'gray'];

export default sfc({
  props: {
    show: Boolean,
    title: String,
    closeButtonText: String,
    deleteButtonText: String,
    theme: {
      type: String,
      default: 'default'
    },
    extraKey: {
      type: String,
      default: ''
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

  mounted() {
    this.handler(true);
  },

  destroyed() {
    this.handler(false);
  },

  activated() {
    this.handler(true);
  },

  deactivated() {
    this.handler(false);
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
            { text: this.extraKey, type: ['gray'] },
            { text: 0 },
            { text: this.deleteText, type: ['gray', 'delete'] }
          );
          break;
        case 'custom':
          keys.push({ text: 0, type: ['middle'] }, { text: this.extraKey });
          break;
      }

      return keys;
    },

    deleteText() {
      return this.deleteButtonText || t('delete');
    }
  },

  methods: {
    handler(action) {
      /* istanbul ignore if */
      if (this.$isServer) {
        return;
      }

      if (action !== this.handlerStatus && this.hideOnClickOutside) {
        this.handlerStatus = action;
        document.body[(action ? 'add' : 'remove') + 'EventListener']('touchstart', this.onBlur);
      }
    },

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

    onPress(text) {
      if (text === '') {
        return;
      }

      if (text === this.deleteText) {
        this.$emit('delete');
      } else if (text === this.closeButtonText) {
        this.onClose();
      } else {
        this.$emit('input', text);
      }
    }
  },

  render(h) {
    const { theme, onPress, closeButtonText } = this;
    const showTitleClose = closeButtonText && theme === 'default';

    return (
      <transition name={this.transition ? 'van-slide-up' : ''}>
        <div
          vShow={this.show}
          style={{ zIndex: this.zIndex }}
          class={bem([theme])}
          onTouchstart={stop}
          onAnimationend={this.onAnimationEnd}
          onWebkitAnimationEnd={this.onAnimationEnd}
        >
          {(this.title || showTitleClose) && (
            <div class={[bem('title'), 'van-hairline--top']}>
              <span>{this.title}</span>
              {showTitleClose && (
                <span class={bem('close')} onClick={this.onClose}>
                  {closeButtonText}
                </span>
              )}
            </div>
          )}
          <div class={bem('body')}>
            {this.keys.map(key => (
              <Key key={key.text} text={key.text} type={key.type} onPress={onPress} />
            ))}
          </div>
          {theme === 'custom' && (
            <div class={bem('sidebar')}>
              <Key text={this.deleteText} type={DELETE_KEY_TYPE} onPress={onPress} />
              <Key text={closeButtonText} type={CLOSE_KEY_TYPE} onPress={onPress} />
            </div>
          )}
        </div>
      </transition>
    );
  }
});
