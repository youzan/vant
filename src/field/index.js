// Utils
import { formatNumber } from './utils';
import { isIOS } from '../utils/validate/system';
import { preventDefault } from '../utils/dom/event';
import { resetScroll } from '../utils/dom/reset-scroll';
import { createNamespace, isObject, isDef, addUnit } from '../utils';

// Components
import Icon from '../icon';
import Cell from '../cell';
import { cellProps } from '../cell/shared';

const [createComponent, bem] = createNamespace('field');

export default createComponent({
  inheritAttrs: false,

  props: {
    ...cellProps,
    error: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    autosize: [Boolean, Object],
    leftIcon: String,
    rightIcon: String,
    clearable: Boolean,
    formatter: Function,
    maxlength: [Number, String],
    labelWidth: [Number, String],
    labelClass: null,
    labelAlign: String,
    inputAlign: String,
    placeholder: String,
    errorMessage: String,
    errorMessageAlign: String,
    showWordLimit: Boolean,
    type: {
      type: String,
      default: 'text',
    },
  },

  data() {
    return {
      focused: false,
    };
  },

  watch: {
    value() {
      this.$nextTick(this.adjustSize);
    },
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
        blur: this.onBlur,
      };

      delete listeners.click;

      return listeners;
    },

    labelStyle() {
      const { labelWidth } = this;
      if (labelWidth) {
        return { width: addUnit(labelWidth) };
      }
    },
  },

  methods: {
    // @exposed-api
    focus() {
      if (this.$refs.input) {
        this.$refs.input.focus();
      }
    },

    // @exposed-api
    blur() {
      if (this.$refs.input) {
        this.$refs.input.blur();
      }
    },

    format(target = this.$refs.input) {
      if (!target) {
        return;
      }

      let { value } = target;
      const { maxlength } = this;

      // native maxlength not work when type is number
      if (isDef(maxlength) && value.length > maxlength) {
        value = value.slice(0, maxlength);
        target.value = value;
      }

      if (this.type === 'number' || this.type === 'digit') {
        const originValue = value;
        const allowDot = this.type === 'number';

        value = formatNumber(value, allowDot);

        if (value !== originValue) {
          target.value = value;
        }
      }

      if (this.formatter) {
        const originValue = value;

        value = this.formatter(value);

        if (value !== originValue) {
          target.value = value;
        }
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
      resetScroll();
    },

    onClick(event) {
      this.$emit('click', event);
    },

    onClickLeftIcon(event) {
      this.$emit('click-left-icon', event);
    },

    onClickRightIcon(event) {
      this.$emit('click-right-icon', event);
    },

    onClear(event) {
      preventDefault(event);
      this.$emit('input', '');
      this.$emit('clear', event);
    },

    onKeypress(event) {
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
      if (isObject(this.autosize)) {
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

    genInput() {
      const { type } = this;
      const inputSlot = this.slots('input');

      if (inputSlot) {
        return <div class={bem('control', this.inputAlign)}>{inputSlot}</div>;
      }

      const inputProps = {
        ref: 'input',
        class: bem('control', this.inputAlign),
        domProps: {
          value: this.value,
        },
        attrs: {
          ...this.$attrs,
          disabled: this.disabled,
          readonly: this.readonly,
          placeholder: this.placeholder,
        },
        on: this.listeners,
        // add model directive to skip IME composition
        directives: [
          {
            name: 'model',
            value: this.value,
          },
        ],
      };

      if (type === 'textarea') {
        return <textarea {...inputProps} />;
      }

      let inputType = type;

      // type="number" is weired in iOS
      if (type === 'number') {
        inputType = 'text';
      }

      if (type === 'digit') {
        // set pattern to show number keyboard in iOS
        if (isIOS()) {
          inputType = 'number';
          inputProps.attrs.pattern = '\\d*';
          // cannot prevent dot when type is number in Android, so use tel
        } else {
          inputType = 'tel';
        }
      }

      return <input type={inputType} {...inputProps} />;
    },

    genLeftIcon() {
      const showLeftIcon = this.slots('left-icon') || this.leftIcon;

      if (showLeftIcon) {
        return (
          <div class={bem('left-icon')} onClick={this.onClickLeftIcon}>
            {this.slots('left-icon') || <Icon name={this.leftIcon} />}
          </div>
        );
      }
    },

    genRightIcon() {
      const { slots } = this;
      const showRightIcon = slots('right-icon') || this.rightIcon;

      if (showRightIcon) {
        return (
          <div class={bem('right-icon')} onClick={this.onClickRightIcon}>
            {slots('right-icon') || <Icon name={this.rightIcon} />}
          </div>
        );
      }
    },

    genWordLimit() {
      if (this.showWordLimit && this.maxlength) {
        return (
          <div class={bem('word-limit')}>
            {this.value.length}/{this.maxlength}
          </div>
        );
      }
    },
  },

  render() {
    const { slots, labelAlign } = this;

    const scopedSlots = {
      icon: this.genLeftIcon,
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
        arrowDirection={this.arrowDirection}
        class={bem({
          error: this.error,
          [`label-${labelAlign}`]: labelAlign,
          'min-height': this.type === 'textarea' && !this.autosize,
        })}
        scopedSlots={scopedSlots}
        onClick={this.onClick}
      >
        <div class={bem('body')}>
          {this.genInput()}
          {this.showClear && (
            <Icon
              name="clear"
              class={bem('clear')}
              onTouchstart={this.onClear}
            />
          )}
          {this.genRightIcon()}
          {slots('button') && (
            <div class={bem('button')}>{slots('button')}</div>
          )}
        </div>
        {this.genWordLimit()}
        {this.errorMessage && (
          <div class={bem('error-message', this.errorMessageAlign)}>
            {this.errorMessage}
          </div>
        )}
      </Cell>
    );
  },
});
