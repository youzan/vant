import { use, isObj, isDef } from '../utils';
import Icon from '../icon';
import Cell from '../cell';
import CellMixin from '../mixins/cell';

const [sfc, bem] = use('field');

export default sfc({
  inheritAttrs: false,

  mixins: [CellMixin],

  props: {
    error: Boolean,
    leftIcon: String,
    readonly: Boolean,
    clearable: Boolean,
    labelAlign: String,
    inputAlign: String,
    onIconClick: Function,
    autosize: [Boolean, Object],
    errorMessage: String,
    type: {
      type: String,
      default: 'text'
    }
  },

  data() {
    return {
      focused: false
    };
  },

  watch: {
    value() {
      this.$nextTick(this.adjustSize);
    }
  },

  mounted() {
    this.format();
    this.$nextTick(this.adjustSize);
  },

  computed: {
    showClear() {
      return (
        this.clearable && this.focused && this.value !== '' && isDef(this.value) && !this.readonly
      );
    },

    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput,
        keypress: this.onKeypress,
        focus: this.onFocus,
        blur: this.onBlur
      };
    }
  },

  methods: {
    focus() {
      this.$refs.input && this.$refs.input.focus();
    },

    blur() {
      this.$refs.input && this.$refs.input.blur();
    },

    // native maxlength not work when type = number
    format(target = this.$refs.input) {
      let { value } = target;
      const { maxlength } = this.$attrs;

      if (this.type === 'number' && isDef(maxlength) && value.length > maxlength) {
        value = value.slice(0, maxlength);
        target.value = value;
      }

      return value;
    },

    onInput(event) {
      this.$emit('input', this.format(event.target));
    },

    onFocus(event) {
      this.focused = true;
      this.$emit('focus', event);

      // hack for safari
      /* istanbul ignore if */
      if (this.readonly) {
        this.blur();
      }
    },

    onBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
    },

    onClickIcon() {
      this.$emit('click-icon');
      this.onIconClick && this.onIconClick();
    },

    onClear(event) {
      event.preventDefault();
      this.$emit('input', '');
      this.$emit('clear');
    },

    onKeypress(event) {
      if (this.type === 'number') {
        const { keyCode } = event;
        const allowPoint = String(this.value).indexOf('.') === -1;
        const isValidKey =
          (keyCode >= 48 && keyCode <= 57) || (keyCode === 46 && allowPoint) || keyCode === 45;
        if (!isValidKey) {
          event.preventDefault();
        }
      }

      // trigger blur after click keyboard search button
      /* istanbul ignore next */
      if (this.type === 'search' && event.keyCode === 13) {
        this.blur();
      }

      this.$emit('keypress', event);
    },

    adjustSize() {
      const { input } = this.$refs;
      if (!(this.type === 'textarea' && this.autosize) || !input) {
        return;
      }

      input.style.height = 'auto';

      let height = input.scrollHeight;
      if (isObj(this.autosize)) {
        const { maxHeight, minHeight } = this.autosize;
        if (maxHeight) {
          height = Math.min(height, maxHeight);
        }
        if (minHeight) {
          height = Math.max(height, minHeight);
        }
      }

      if (height) {
        input.style.height = height + 'px';
      }
    }
  },

  render(h) {
    const { type, labelAlign, $slots: slots } = this;

    const inputProps = {
      ref: 'input',
      class: bem('control', this.inputAlign),
      domProps: {
        value: this.value
      },
      attrs: {
        ...this.$attrs,
        readonly: this.readonly
      },
      on: this.listeners
    };

    const Input = type === 'textarea' ? <textarea {...inputProps} /> : <input {...inputProps} />;

    return (
      <Cell
        icon={this.leftIcon}
        title={this.label}
        center={this.center}
        border={this.border}
        isLink={this.isLink}
        required={this.required}
        class={bem({
          error: this.error,
          disabled: this.$attrs.disabled,
          [`label-${labelAlign}`]: labelAlign,
          'min-height': type === 'textarea' && !this.autosize
        })}
      >
        {h('template', { slot: 'icon' }, slots['left-icon'])}
        {h('template', { slot: 'title' }, slots.label)}
        <div class={bem('body')}>
          {Input}
          {this.showClear && <Icon name="clear" class={bem('clear')} onTouchstart={this.onClear} />}
          {(slots.icon || this.icon) && (
            <div class={bem('icon')} onClick={this.onClickIcon}>
              {slots.icon || <Icon name={this.icon} />}
            </div>
          )}
          {slots.button && <div class={bem('button')}>{slots.button}</div>}
        </div>
        {this.errorMessage && <div class={bem('error-message')}>{this.errorMessage}</div>}
      </Cell>
    );
  }
});
