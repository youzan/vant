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

import VanEmptyCol from '../emptycol/index';
import VanFieldinput from '../fieldinput/index';

import VusionValidator from '@vusion/validator';

const [createComponent, bem] = createNamespace('field');
const comSet = new Set(['van-fieldinput','van-fieldtextarea','van-fieldnumber']);

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
  components: {
    VanEmptyCol,
    VanFieldinput
  },
  props: {
    ...cellProps,
    name: String,
    rules: [Array, String],
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
    eye: {
      type: String,
      default: '',
    },
    wga: {
      type: Boolean,
      default: false,
    },
    drole: String
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
      // this.validateWithTrigger('onChange');
      this.validateWithTriggerVusion('change');
      this.$nextTick(this.adjustSize);
    },
  },
  created() {
    try {
      this.validatorVuF = new VusionValidator(
        this.$options.validators,
        this.$options.rules,
        this.rules || [],
        this,
      );
    } catch (e) {
      console.log(e);
    }
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
    currentRules() {
      // return (this.rules || (this.rootVM && this.rootVM.rules && this.rootVM.rules[this.name]));
      return this.rules;
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
      return (this.type === 'number' || this.type === 'digit') ? Number(this.value) : this.value;
    },
  },

  methods: {
    showClear() {
      let child = null;
      if (this.children && (this.children.$options._componentTag === 'van-fieldinput' || this.children.$options._componentTag === 'van-fieldtextarea')) {
        child = this.children;
      }

      const readonly = this.getProp('readonly');
      if ((child && child.clearable && !child.readonly)) {
        return true;
      }
      if ((this.clearable && !readonly)) {
        const hasValue = isDef(this.value) && this.value !== '';
        const trigger =
          this.clearTrigger === 'always' ||
          (this.clearTrigger === 'focus' && this.focused);

        return hasValue && trigger;
      }
    },
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
    runRulesVusion(rules, trigger='') {
      let value = this.formValue;
      let validatorVuF = this.validatorVuF;
      return validatorVuF.validate(value, trigger, Object.assign({
        label: this.label || '字段',
      })).then(() => {
        console.log('tongguo');
      }).catch((error) => {
        console.log(error)
        this.validateFailed = true;
        this.validateMessage = error;
      });
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

    validateVusion(rules = this.rules, trigger) {
      return new Promise((resolve) => {
        if (!rules) {
          resolve();
        }

        this.resetValidation();
        this.runRulesVusion(rules, trigger).then(() => {
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
    validateWithTriggerVusion(trigger) {
      if (this.vanForm && this.rules) {
        // const defaultTrigger = this.vanForm.validateTrigger === trigger;
        // const rules = this.rules.filter((rule) => {
        //   if (rule.trigger) {
        //     return rule.trigger === trigger;
        //   }

        //   return defaultTrigger;
        // });

        // if (rules.length) {
        //   this.validate(rules);
        // }
        this.validateVusion(this.rules, trigger);
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
      // see: https://github.com/youzan/vant/issues/5033
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
        this.$emit('input', (this.type === 'number' || this.type === 'digit') ? Number(value) : value);
        this.$emit('update:value', (this.type === 'number' || this.type === 'digit') ? Number(value) : value);
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

      // readonly not work in legacy mobile safari
      /* istanbul ignore if */
      const readonly = this.getProp('readonly');
      if (readonly) {
        this.blur();
      }
    },

    onBlur(event) {
      this.focused = false;
      this.updateValue(this.value, 'onBlur');
      this.$emit('blur', event);
      // this.validateWithTrigger('onBlur');
      this.validateWithTriggerVusion('blur');
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
      if (this.children && (this.children.$options._componentTag === 'van-fieldinput' || this.children.$options._componentTag === 'van-fieldtextarea')) {
        this.children.currentValue = '';
      }
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
      let input = this.$refs.input;
      let inputn = this.children;
      if (inputn && comSet.has(inputn.$options._componentTag)) {
        if (inputn.type !== 'textarea') {
          return;
        } else {
          input = inputn.$refs.input;
        }
      } else {
        if (!(this.type === 'textarea' && this.autosize) || !input) {
          return;
        }
      }

      const scrollTop = getRootScrollTop();
      input.style.height = 'auto';

      let height = input.scrollHeight;
      if (isObject(this.autosize || input.autosize)) {
        const { maxHeight, minHeight } = this.autosize || input.autosize;
        if (maxHeight) {
          height = Math.min(height, maxHeight);
        }
        if (minHeight) {
          height = Math.max(height, minHeight);
        }
      }

      if (height) {
        input.style.height = height + 'px';
        // https://github.com/youzan/vant/issues/9178
        setRootScrollTop(scrollTop);
      }
    },

    genInput() {
      const { type } = this;
      const disabled = this.getProp('disabled');
      const readonly = this.getProp('readonly');
      const drole = this.getProp('drole') === 'other';
      const inputSlot = this.slots('input');
      const inputAlign = this.getProp('inputAlign');
      // const hasInputSlot = this.$slots.hasOwnProperty('input');
      const ifDesigner = (this.$env && this.$env.VUE_APP_DESIGNER);
      if (inputSlot) {
        const ifInput = comSet.has(inputSlot[0].componentOptions.tag);
        return ifInput ? (inputSlot) : (
          <div
            class={bem(!ifInput ? 'control' : '', [inputAlign, 'custom'])}
            onClick={this.onClickInput}
          >
            {inputSlot}
          </div>
        );
      }
      if ((!inputSlot && drole && ifDesigner)) {
        return (
          <div
            class={bem('control', [inputAlign, 'custom'])}
            onClick={this.onClickInput}
            vusion-slot-name="input"
            vusion-scope-id={this.$parent.$parent.$options._scopeId}
          >
            <van-empty-col></van-empty-col>
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
      const ifPwd = this.type === 'password';
      const ifEye = this.eye === 'yes';
      const { slots } = this;
      const showRightIcon = slots('right-icon') || this.rightIcon;

      if(ifEye) {
        return (
          <div class={bem('right-icon')} onClick={this.onClickRightIcon}>
            {(
              <Icon name={!ifPwd ? '//static-vusion.nos-eastchina1.126.net/h5-template/eye-open-icon.png' : '//static-vusion.nos-eastchina1.126.net/h5-template/eye-close-icon.png'} classPrefix={this.iconPrefix} />
            )}
          </div>
        );
      }

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
      const childlmit = this.children;
      if ((this.showWordLimit && this.maxlength) || (childlmit && comSet.has(this.children.$options._componentTag) && childlmit.showWordLimit && childlmit.maxlength)) {
        const count = (this.value || '').length;

        return (
          <div class={bem('word-limit')}>
            <span class={bem('word-num')}>{count}</span>/{this.maxlength || childlmit.maxlength}
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

    const vusionCut = this.getProp('vusionCut');
    const vusionMove = this.getProp('vusionMove');
    const vusionNodePath = this.getProp('vusionNodePath');
    const vusionNodeTag = this.getProp('vusionNodeTag');

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
        infield={true}
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
          'min-height': ((this.type === 'textarea' && !this.autosize) || (this.children && this.children.type === 'textarea' && !this.children.autosize)),
        })}
        onClick={this.onClick}
        vusionCut={vusionCut}
        vusionMove={vusionMove}
        vusionNodePath={vusionNodePath}
        vusionNodeTag={vusionNodeTag}
        infield={this.drole === 'other'}
      >
        <div class={bem('body')}>
          {this.genInput()}
          {this.showClear() && (
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
