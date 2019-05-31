import Icon from '../icon';
import Cell from '../cell';
import { cellProps } from '../cell/shared';
import { preventDefault } from '../utils/event';
import { getRootScrollTop } from '../utils/scroll';
import { use, isObj, isDef, isIOS, suffixPx } from '../utils';

const [sfc, bem] = use('field');

export default sfc({
  inheritAttrs: false,

  props: {
    ...cellProps,
    error: Boolean,
    leftIcon: String,
    rightIcon: String,
    readonly: Boolean,
    clearable: Boolean,
    labelWidth: [String, Number],
    labelClass: null,
    labelAlign: String,
    inputAlign: String,
    autosize: [Boolean, Object],
    errorMessage: String,
    errorMessageAlign: String,
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
        this.clearable &&
        this.focused &&
        this.value !== '' &&
        isDef(this.value) &&
        !this.readonly
      );
    },

    listeners() {
      const listeners = {
        ...this.$listeners,
        input: this.onInput,
        keypress: this.onKeypress,
        focus: this.onFocus,
        blur: this.onBlur
      };

      delete listeners.click;

      return listeners;
    },

    labelStyle() {
      const { labelWidth } = this;
      if (labelWidth) {
        return { width: suffixPx(labelWidth) };
      }
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
      // not update v-model when composing
      if (event.target.composing) {
        return;
      }

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

      // Hack for iOS12 page scroll
      // https://developers.weixin.qq.com/community/develop/doc/00044ae90742f8c82fb78fcae56800
      /* istanbul ignore next */
      if (isIOS()) {
        window.scrollTo(0, getRootScrollTop());
      }
    },

    onClick(event) {
      this.$emit('click', event);
    },

    onClickLeftIcon() {
      this.$emit('click-left-icon');
    },

    onClickRightIcon() {
      this.$emit('click-right-icon');
    },

    onClear(event) {
      preventDefault(event);
      this.$emit('input', '');
      this.$emit('clear');
    },

    onKeypress(event) {
      if (this.type === 'number') {
        const { keyCode } = event;
        const allowPoint = String(this.value).indexOf('.') === -1;
        const isValidKey =
          (keyCode >= 48 && keyCode <= 57) ||
          (keyCode === 46 && allowPoint) ||
          keyCode === 45;

        if (!isValidKey) {
          preventDefault(event);
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
    },

    renderInput() {
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
        on: this.listeners,
        // add model directive to skip IME composition
        directives: [
          {
            name: 'model',
            value: this.value
          }
        ]
      };

      if (this.type === 'textarea') {
        return <textarea {...inputProps} />;
      }

      return <input type={this.type} {...inputProps} />;
    },

    renderLeftIcon() {
      const showLeftIcon = this.slots('left-icon') || this.leftIcon;
      if (showLeftIcon) {
        return (
          <div class={bem('left-icon')} onClick={this.onClickLeftIcon}>
            {this.slots('left-icon') || <Icon name={this.leftIcon} />}
          </div>
        );
      }
    },

    renderRightIcon() {
      const { slots } = this;
      const showRightIcon = slots('right-icon') || this.rightIcon;
      if (showRightIcon) {
        return (
          <div class={bem('right-icon')} onClick={this.onClickRightIcon}>
            {slots('right-icon') || <Icon name={this.rightIcon} />}
          </div>
        );
      }
    }
  },

  render(h) {
    const { slots, labelAlign } = this;

    const scopedSlots = {
      icon: this.renderLeftIcon
    };
    if (slots('label')) {
      scopedSlots.title = () => slots('label');
    }

    return (
      <Cell
        icon={this.leftIcon}
        size={this.size}
        title={this.label}
        center={this.center}
        border={this.border}
        isLink={this.isLink}
        required={this.required}
        clickable={this.clickable}
        titleStyle={this.labelStyle}
        titleClass={[bem('label', labelAlign), this.labelClass]}
        class={bem({
          error: this.error,
          disabled: this.$attrs.disabled,
          [`label-${labelAlign}`]: labelAlign,
          'min-height': this.type === 'textarea' && !this.autosize
        })}
        scopedSlots={scopedSlots}
        onClick={this.onClick}
      >
        <div class={bem('body')}>
          {this.renderInput()}
          {this.showClear && (
            <Icon name="clear" class={bem('clear')} onTouchstart={this.onClear} />
          )}
          {this.renderRightIcon()}
          {slots('button') && <div class={bem('button')}>{slots('button')}</div>}
        </div>
        {this.errorMessage && (
          <div class={bem('error-message', this.errorMessageAlign)}>
            {this.errorMessage}
          </div>
        )}
      </Cell>
    );
  }
});
