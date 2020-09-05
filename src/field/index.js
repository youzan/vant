// Utils
import { resetScroll } from '../utils/dom/reset-scroll';
import { formatNumber } from '../utils/format/number';
import { preventDefault } from '../utils/dom/event';
import {
  isDef,
  addUnit,
  isObject,
  isPromise,
  isFunction,
  createNamespace,
} from '../utils';

// Components
import Icon from '../icon';
import Cell from '../cell';
import { cellProps } from '../cell/shared';

const [createComponent, bem] = createNamespace('field');

export const FIELD_KEY = 'vanField';

export default createComponent({
  provide() {
    return {
      vanField: this,
    };
  },

  inject: {
    vanForm: {
      from: 'vanForm',
      default: null,
    },
  },

  props: {
    ...cellProps,
    rows: [Number, String],
    name: String,
    rules: Array,
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
    error: {
      type: Boolean,
      default: null,
    },
    colon: {
      type: Boolean,
      default: null,
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    clearTrigger: {
      type: String,
      default: 'focus',
    },
    formatTrigger: {
      type: String,
      default: 'onChange',
    },
  },

  emits: [
    'blur',
    'focus',
    'clear',
    'keypress',
    'click-input',
    'click-left-icon',
    'click-right-icon',
    'update:modelValue',
  ],

  data() {
    return {
      focused: false,
      validateFailed: false,
      validateMessage: '',
    };
  },

  watch: {
    modelValue(val) {
      this.updateValue(val);
      this.resetValidation();
      this.validateWithTrigger('onChange');
      this.$nextTick(this.adjustSize);
    },
  },

  mounted() {
    this.updateValue(this.modelValue, this.formatTrigger);
    this.$nextTick(this.adjustSize);

    if (this.vanForm) {
      this.vanForm.addField(this);
    }
  },

  beforeUnmount() {
    if (this.vanForm) {
      this.vanForm.removeField(this);
    }
  },

  computed: {
    showClear() {
      if (this.clearable && !this.readonly) {
        const hasValue = isDef(this.modelValue) && this.modelValue !== '';
        const trigger =
          this.clearTrigger === 'always' ||
          (this.clearTrigger === 'focus' && this.focused);

        return hasValue && trigger;
      }
    },

    showError() {
      if (this.error !== null) {
        return this.error;
      }
      if (this.vanForm && this.vanForm.showError && this.validateFailed) {
        return true;
      }
    },

    labelStyle() {
      const labelWidth = this.getProp('labelWidth');
      if (labelWidth) {
        return { width: addUnit(labelWidth) };
      }
    },

    formValue() {
      if (this.children && this.$slots.input) {
        return this.children.modelValue;
      }
      return this.modelValue;
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

    runValidator(value, rule) {
      return new Promise((resolve) => {
        const returnVal = rule.validator(value, rule);

        if (isPromise(returnVal)) {
          return returnVal.then(resolve);
        }

        resolve(returnVal);
      });
    },

    isEmptyValue(value) {
      if (Array.isArray(value)) {
        return !value.length;
      }
      if (value === 0) {
        return false;
      }
      return !value;
    },

    runSyncRule(value, rule) {
      if (rule.required && this.isEmptyValue(value)) {
        return false;
      }
      if (rule.pattern && !rule.pattern.test(value)) {
        return false;
      }
      return true;
    },

    getRuleMessage(value, rule) {
      const { message } = rule;

      if (isFunction(message)) {
        return message(value, rule);
      }

      return message;
    },

    runRules(rules) {
      return rules.reduce(
        (promise, rule) =>
          promise.then(() => {
            if (this.validateFailed) {
              return;
            }

            let value = this.formValue;

            if (rule.formatter) {
              value = rule.formatter(value, rule);
            }

            if (!this.runSyncRule(value, rule)) {
              this.validateFailed = true;
              this.validateMessage = this.getRuleMessage(value, rule);
              return;
            }

            if (rule.validator) {
              return this.runValidator(value, rule).then((result) => {
                if (result === false) {
                  this.validateFailed = true;
                  this.validateMessage = this.getRuleMessage(value, rule);
                }
              });
            }
          }),
        Promise.resolve()
      );
    },

    validate(rules = this.rules) {
      return new Promise((resolve) => {
        if (!rules) {
          resolve();
        }

        this.resetValidation();
        this.runRules(rules).then(() => {
          if (this.validateFailed) {
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

    validateWithTrigger(trigger) {
      if (this.vanForm && this.rules) {
        const defaultTrigger = this.vanForm.validateTrigger === trigger;
        const rules = this.rules.filter((rule) => {
          if (rule.trigger) {
            return rule.trigger === trigger;
          }

          return defaultTrigger;
        });

        this.validate(rules);
      }
    },

    resetValidation() {
      if (this.validateFailed) {
        this.validateFailed = false;
        this.validateMessage = '';
      }
    },

    updateValue(value, trigger = 'onChange') {
      value = isDef(value) ? String(value) : '';

      // native maxlength not work when type is number
      const { maxlength } = this;
      if (isDef(maxlength) && value.length > maxlength) {
        value = value.slice(0, maxlength);
      }

      if (this.type === 'number' || this.type === 'digit') {
        const isNumber = this.type === 'number';
        value = formatNumber(value, isNumber, isNumber);
      }

      if (this.formatter && trigger === this.formatTrigger) {
        value = this.formatter(value);
      }

      const { input } = this.$refs;
      if (input && value !== input.value) {
        input.value = value;
      }

      if (value !== this.modelValue) {
        this.$emit('update:modelValue', value);
      }

      this.currentValue = value;
    },

    onInput(event) {
      // not update v-model when composing
      if (event.target.composing) {
        return;
      }

      this.updateValue(event.target.value);
    },

    onFocus(event) {
      this.focused = true;
      this.$emit('focus', event);

      // readonly not work in lagacy mobile safari
      /* istanbul ignore if */
      if (this.readonly) {
        this.blur();
      }
    },

    onBlur(event) {
      this.focused = false;
      this.updateValue(this.modelValue, 'onBlur');
      this.$emit('blur', event);
      this.validateWithTrigger('onBlur');
      resetScroll();
    },

    onClickInput(event) {
      this.$emit('click-input', event);
    },

    onClickLeftIcon(event) {
      this.$emit('click-left-icon', event);
    },

    onClickRightIcon(event) {
      this.$emit('click-right-icon', event);
    },

    onClear(event) {
      preventDefault(event);
      this.$emit('update:modelValue', '');
      this.$emit('clear', event);
    },

    onKeypress(event) {
      const ENTER_CODE = 13;

      if (event.keyCode === ENTER_CODE) {
        const submitOnEnter = this.getProp('submitOnEnter');
        if (!submitOnEnter && this.type !== 'textarea') {
          preventDefault(event);
        }

        // trigger blur after click keyboard search button
        if (this.type === 'search') {
          this.blur();
        }
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
      const inputAlign = this.getProp('inputAlign');

      if (this.$slots.input) {
        return (
          <div
            class={bem('control', [inputAlign, 'custom'])}
            onClick={this.onClickInput}
          >
            {this.$slots.input()}
          </div>
        );
      }

      const inputProps = {
        ref: 'input',
        name: this.name,
        rows: this.rows,
        style: null,
        class: bem('control', inputAlign),
        value: this.modelValue,
        disabled: this.disabled,
        readonly: this.readonly,
        placeholder: this.placeholder,
        onBlur: this.onBlur,
        onFocus: this.onFocus,
        onInput: this.onInput,
        onClick: this.onClickInput,
        onKeypress: this.onKeypress,
        // TODO
        // add model directive to skip IME composition
        // directives: [
        //   {
        //     name: 'model',
        //     value: this.modelValue,
        //   },
        // ],
      };

      if (type === 'textarea') {
        return <textarea {...inputProps} />;
      }

      let inputType = type;
      let inputMode;

      // type="number" is weired in iOS, and can't prevent dot in Android
      // so use inputmode to set keyboard in mordern browers
      if (type === 'number') {
        inputType = 'text';
        inputMode = 'decimal';
      }

      if (type === 'digit') {
        inputType = 'tel';
        inputMode = 'numeric';
      }

      return <input type={inputType} inputmode={inputMode} {...inputProps} />;
    },

    genLeftIcon() {
      const leftIconSlot = this.$slots['left-icon'];

      if (this.leftIcon || leftIconSlot) {
        return (
          <div class={bem('left-icon')} onClick={this.onClickLeftIcon}>
            {leftIconSlot ? (
              leftIconSlot()
            ) : (
              <Icon name={this.leftIcon} classPrefix={this.iconPrefix} />
            )}
          </div>
        );
      }
    },

    genRightIcon() {
      const rightIconSlot = this.$slots['right-icon'];

      if (this.rightIcon || rightIconSlot) {
        return (
          <div class={bem('right-icon')} onClick={this.onClickRightIcon}>
            {rightIconSlot ? (
              rightIconSlot()
            ) : (
              <Icon name={this.rightIcon} classPrefix={this.iconPrefix} />
            )}
          </div>
        );
      }
    },

    genWordLimit() {
      if (this.showWordLimit && this.maxlength) {
        const count = (this.modelValue || '').length;

        return (
          <div class={bem('word-limit')}>
            <span class={bem('word-num')}>{count}</span>/{this.maxlength}
          </div>
        );
      }
    },

    genMessage() {
      if (this.vanForm && this.vanForm.showErrorMessage === false) {
        return;
      }

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

      if (this.$slots.label) {
        return [this.$slots.label(), colon];
      }

      if (this.label) {
        return <span>{this.label + colon}</span>;
      }
    },
  },

  render() {
    const slots = this.$slots;
    const labelAlign = this.getProp('labelAlign');
    const Label = this.genLabel();
    const LeftIcon = this.genLeftIcon();

    return (
      <Cell
        v-slots={{
          icon: LeftIcon ? () => LeftIcon : null,
          title: Label ? () => Label : null,
          extra: slots.extra,
        }}
        icon={this.leftIcon}
        size={this.size}
        class={bem({
          error: this.showError,
          disabled: this.disabled,
          [`label-${labelAlign}`]: labelAlign,
          'min-height': this.type === 'textarea' && !this.autosize,
        })}
        center={this.center}
        border={this.border}
        isLink={this.isLink}
        required={this.required}
        clickable={this.clickable}
        titleStyle={this.labelStyle}
        valueClass={bem('value')}
        titleClass={[bem('label', labelAlign), this.labelClass]}
        arrowDirection={this.arrowDirection}
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
          {slots.button && <div class={bem('button')}>{slots.button()}</div>}
        </div>
        {this.genWordLimit()}
        {this.genMessage()}
      </Cell>
    );
  },
});
