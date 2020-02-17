// Utils
import { formatNumber } from './utils';
import { isIOS } from '../utils/validate/system';
import { preventDefault } from '../utils/dom/event';
import { resetScroll } from '../utils/dom/reset-scroll';
import { createNamespace, isObject, isDef, addUnit, isPromise } from '../utils';

// Components
import Icon from '../icon';
import Cell from '../cell';
import { cellProps } from '../cell/shared';

const [createComponent, bem] = createNamespace('field');

export default createComponent({
  inheritAttrs: false,

  provide() {
    return {
      vanField: this,
    };
  },

  inject: {
    vanForm: {
      default: null,
    },
  },

  props: {
    ...cellProps,
    name: String,
    rules: Array,
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
      validateMessage: '',
    };
  },

  watch: {
    value() {
      this.resetValidation();
      this.$nextTick(this.adjustSize);
    },
  },

  mounted() {
    this.format();
    this.$nextTick(this.adjustSize);

    if (this.vanForm) {
      this.vanForm.fields.push(this);
    }
  },

  beforeDestroy() {
    if (this.vanForm) {
      this.vanForm.fields = this.vanForm.fields.filter(item => item !== this);
    }
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
      const labelWidth = this.getProp('labelWidth');

      if (labelWidth) {
        return { width: addUnit(labelWidth) };
      }
    },

    formValue() {
      return this.children ? this.children.value : this.value;
    },

    formValueEmpty() {
      const { formValue } = this;

      if (Array.isArray(formValue)) {
        return !formValue.length;
      }

      return !formValue;
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

    runValidator(validator) {
      return new Promise(resolve => {
        const returnVal = validator(this.formValue);

        if (isPromise(returnVal)) {
          return returnVal.then(resolve);
        }

        resolve(returnVal);
      });
    },

    runRules() {
      return this.rules.reduce(
        (promise, rule) =>
          promise.then(() => {
            if (this.validateMessage) {
              return;
            }

            if (rule.required && this.formValueEmpty) {
              this.validateMessage = rule.message;
              return;
            }

            if (rule.validator) {
              return this.runValidator(rule.validator).then(result => {
                if (result === false) {
                  this.validateMessage = rule.message;
                }
              });
            }
          }),
        Promise.resolve()
      );
    },

    validate() {
      return new Promise(resolve => {
        if (!this.rules) {
          resolve();
        }

        this.runRules().then(() => {
          if (this.validateMessage) {
            resolve({
              name: this.name,
              message: this.validateMessage,
            });
          } else {
            resolve();
          }
        });
      });
    },

    resetValidation() {
      if (this.validateMessage) {
        this.validateMessage = '';
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
      const inputAlign = this.getProp('inputAlign');

      if (inputSlot) {
        return (
          <div class={bem('control', [inputAlign, 'custom'])}>{inputSlot}</div>
        );
      }

      const inputProps = {
        ref: 'input',
        class: bem('control', inputAlign),
        domProps: {
          value: this.value,
        },
        attrs: {
          ...this.$attrs,
          name: this.name,
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
        const count = this.value.length;
        const full = count >= this.maxlength;

        return (
          <div class={bem('word-limit')}>
            <span class={bem('word-num', { full })}>{count}</span>/
            {this.maxlength}
          </div>
        );
      }
    },

    genMessage() {
      const message = this.errorMessage || this.validateMessage;

      if (message) {
        const errorMessageAlign = this.getProp('errorMessageAlign');

        return (
          <div class={bem('error-message', errorMessageAlign)}>{message}</div>
        );
      }
    },

    getProp(key) {
      if (isDef(this[key])) {
        return this[key];
      }

      if (this.vanForm && isDef(this.vanForm[key])) {
        return this.vanForm[key];
      }
    },

    genLabel() {
      const colon = this.getProp('colon') ? ':' : '';

      if (this.slots('label')) {
        return [this.slots('label'), colon];
      }

      if (this.label) {
        return <span>{this.label + colon}</span>;
      }
    },
  },

  render() {
    const { slots } = this;
    const labelAlign = this.getProp('labelAlign');

    const scopedSlots = {
      icon: this.genLeftIcon,
    };

    const Label = this.genLabel();
    if (Label) {
      scopedSlots.title = () => Label;
    }

    return (
      <Cell
        icon={this.leftIcon}
        size={this.size}
        center={this.center}
        border={this.border}
        isLink={this.isLink}
        required={this.required}
        clickable={this.clickable}
        titleStyle={this.labelStyle}
        valueClass={bem('value')}
        titleClass={[bem('label', labelAlign), this.labelClass]}
        scopedSlots={scopedSlots}
        arrowDirection={this.arrowDirection}
        class={bem({
          error: this.error || this.validateMessage,
          [`label-${labelAlign}`]: labelAlign,
          'min-height': this.type === 'textarea' && !this.autosize,
        })}
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
        {this.genMessage()}
      </Cell>
    );
  },
});
