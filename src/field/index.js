// Utils
import { resetScroll } from '../utils/dom/reset-scroll';
import { formatNumber } from '../utils/format/number';
import { preventDefault } from '../utils/dom/event';
import { getRootScrollTop, setRootScrollTop } from '../utils/dom/scroll';
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
    disabled: {
      type: Boolean,
      default: null,
    },
    readonly: {
      type: Boolean,
      default: null,
    },
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
    value: {
      type: [Number, String],
      default: '',
    },
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
    clearTrigger: {
      type: String,
      default: 'focus',
    },
    formatTrigger: {
      type: String,
      default: 'onChange',
    },
  },

  data() {
    return {
      focused: false,
      validateFailed: false,
      validateMessage: '',
    };
  },

  watch: {
    value() {
      this.updateValue(this.value);
      this.resetValidation();
      this.validateWithTrigger('onChange');
      this.$nextTick(this.adjustSize);
    },
  },

  mounted() {
    this.updateValue(this.value, this.formatTrigger);
    this.$nextTick(this.adjustSize);

    if (this.vanForm) {
      this.vanForm.addField(this);
    }
  },

  beforeDestroy() {
    if (this.vanForm) {
      this.vanForm.removeField(this);
    }
  },

  computed: {
    showClear() {
      const readonly = this.getProp('readonly');

      if (this.clearable && !readonly) {
        const hasValue = isDef(this.value) && this.value !== '';
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

    listeners() {
      return {
        ...this.$listeners,
        blur: this.onBlur,
        focus: this.onFocus,
        input: this.onInput,
        click: this.onClickInput,
        keypress: this.onKeypress,
      };
    },

    labelStyle() {
      const labelWidth = this.getProp('labelWidth');

      if (labelWidth) {
        return { width: addUnit(labelWidth) };
      }
    },

    formValue() {
      if (this.children && (this.$scopedSlots.input || this.$slots.input)) {
        return this.children.value;
      }
      return this.value;
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

        if (rules.length) {
          this.validate(rules);
        }
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

      // native maxlength have incorrect line-break counting
      // see: https://github.com/vant-ui/vant/issues/5033
      const { maxlength } = this;
      if (isDef(maxlength) && value.length > maxlength) {
        if (this.value && this.value.length === +maxlength) {
          ({ value } = this);
        } else {
          value = value.slice(0, maxlength);
        }
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

      if (value !== this.value) {
        this.$emit('input', value);
      }
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
      // https://github.com/vant-ui/vant/issues/9715
      this.$nextTick(this.adjustSize);

      // readonly not work in legacy mobile safari
      /* istanbul ignore if */
      if (this.getProp('readonly')) {
        this.blur();
      }
    },

    onBlur(event) {
      if (this.getProp('readonly')) {
        return;
      }

      this.focused = false;
      this.updateValue(this.value, 'onBlur');
      this.$emit('blur', event);
      this.validateWithTrigger('onBlur');
      this.$nextTick(this.adjustSize);
      resetScroll();
    },

    onClick(event) {
      this.$emit('click', event);
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
      this.$emit('input', '');
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

      const scrollTop = getRootScrollTop();
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
        // https://github.com/vant-ui/vant/issues/9178
        setRootScrollTop(scrollTop);
      }
    },

    genInput() {
      const { type } = this;
      const disabled = this.getProp('disabled');
      const readonly = this.getProp('readonly');
      const inputSlot = this.slots('input');
      const inputAlign = this.getProp('inputAlign');

      if (inputSlot) {
        return (
          <div
            class={bem('control', [inputAlign, 'custom'])}
            onClick={this.onClickInput}
          >
            {inputSlot}
          </div>
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
          disabled,
          readonly,
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
      let inputMode;

      // type="number" is weird in iOS, and can't prevent dot in Android
      // so use inputmode to set keyboard in modern browsers
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
      const showLeftIcon = this.slots('left-icon') || this.leftIcon;

      if (showLeftIcon) {
        return (
          <div class={bem('left-icon')} onClick={this.onClickLeftIcon}>
            {this.slots('left-icon') || (
              <Icon name={this.leftIcon} classPrefix={this.iconPrefix} />
            )}
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
            {slots('right-icon') || (
              <Icon name={this.rightIcon} classPrefix={this.iconPrefix} />
            )}
          </div>
        );
      }
    },

    genWordLimit() {
      if (this.showWordLimit && this.maxlength) {
        const count = (this.value || '').length;

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
    const disabled = this.getProp('disabled');
    const labelAlign = this.getProp('labelAlign');

    const scopedSlots = {
      icon: this.genLeftIcon,
    };

    const Label = this.genLabel();
    if (Label) {
      scopedSlots.title = () => Label;
    }

    const extra = this.slots('extra');
    if (extra) {
      scopedSlots.extra = () => extra;
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
          error: this.showError,
          disabled,
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
