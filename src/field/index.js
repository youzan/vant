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
// import Cell from '../cell';
import Cellson from '../cellson';
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
    notitle: {
      type: Boolean,
      default: false,
    },
    notitleblock: {
      type: Boolean,
      default: false,
    },
    novalue: {
      type: Boolean,
      default: false,
    },
    drole: String,
    frompara: String,
    insel: {
      type: Boolean,
      default: false,
    },
    nofi: {
      type: Boolean,
      default: false
    }
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
    }
  },
  mounted() {
    this.updateValue(this.value, this.formatTrigger);
    this.$nextTick(this.adjustSize);
    if (this.vanForm && !this.nofi) {
      this.vanForm.addField(this);
    }
  },

  beforeDestroy() {
    if (this.vanForm && !this.nofi) {
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
        if (this.children?.$options?._componentTag === 'van-calendar') {
          return this.children.defaultDate;
        } if (this.children?.$options?._componentTag === 'van-uploader') {
          return this.children.fileListProp;
        }
        return this.children.value;
      }
      return (this.type === 'number' || this.type === 'digit') ? Number(this.value) : this.value;
    },
  },
  methods: {
    showClear() {
      const readonly = this.getProp('readonly');
      const frompara = this.getProp('frompara');
      if ((this.clearable && !readonly)) {
        const hasValue = isDef(this.value) && this.value !== '';
        const trigger =
          this.clearTrigger === 'always' ||
          (this.clearTrigger === 'focus' && this.focused);

        if (frompara === 'vansearch') {
          return trigger;
        }
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
      }).catch((error) => {
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


      this.$emit('clickinput', event);//点击搜索框输入区域追加事件

      // https://github.com/youzan/vant/issues/9715
      this.$nextTick(this.adjustSize);

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

      this.$emit('iconsearch', event);//点击搜索框搜索按钮时触发
    },

    onClickRightIcon(event) {
      this.$emit('click-right-icon', event);

      this.$emit('iconsearch', event);//点击搜索框搜索按钮时触发
    },

    onClear(event) {
      preventDefault(event);
      this.$emit('input', '');
      this.$emit('update:value', '');
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
      let input = this.$refs.input;
      let inputn = this.children;
      if (inputn && comSet.has(inputn.$options._componentTag)) {
        if (inputn.type === 'textarea') {
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
        const ifInput = comSet.has(inputSlot[0]?.componentOptions?.tag);
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
      const openEye = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANwSURBVHgB7VfJURtBFP0S4sBykCPwOAMcAeMIgGI7IkUgEQFDBEYRSD6xVokMGCJAZDDOQAeWA5vfk3rkrtZ0z2ixL/Srmpqll/nv7y3i4eHh4eHh4fF5UZI54eLiYh23NV4fHx9hqVSq4rmqhvv4luCelMvlHp7jvb29W5kDZiLQbrery8vLDTzWIHAwyVoSwpp4YWEh2t7e/i1TYioCqeAQoCl/tTwLOtMSmZjA2dnZBtygI4bgINPHdf3+/k7X6D0+Pib1er3PMRJeWVkJsC7A+AY+hbgCY2u62cn+/v6x/AsCSutHSuu64DFuJw8PD7epwEVweXkZQmC636b+Hd+uK5VKs6g1ChFQwt9A2DXtM324vru7G8sMUETaolmE8QESYRESuQROT09p+hs9SGnqp6en4yyNa/ERytBVOL+HG93jl9iJHGFeJBOSyCVwfn5+Z2i+iRTYypqbRVZHnlD41wHWn2BeNZ0PRX13uWZZ3MIf6cJj85pNeDV+40qnHHt9fY1ppaxxWghCb+rzGXfigJUAtYkNIm2zaGdnx+oC1J4uPOcjE33hBWJNXajV1dWGbR8WOGN+UxXJTFRsA8jLOvMOgtWZ3ozs1MR83VIt+Hg19XFWatys+0FRLQjNOak1uO5H1tyyQ6CRKVlkJB8jV4PWxywF39cJhZKP46y9TThjIMXb21sg/xn4Z6GaYiWgUl+KSPIRpw9ZPv7y8nKgvfYkB4YLX9vmWWNAhkLH6jlkRnKVeVZk5dskH6Hl6D8/Pw9cSTV8UTqXqVIc4L9wq6XvLhd21gEE3k8IMwpOPNdsxajb7Vah5TsZ73FMJMg032yDKpt1RgIim7kSiDMGsPBQNHNzY6WdMWxtbfXht8wUiWPLBNoMbYPIPA1deP47N/tJDrI062oliKurqwNaDtcge6iGL0bD13K0H2ajOCA7cytBsKhhs65o6UydsCJXf1MELFLYq2NU8B7+tzmXZk6HGRPEtERUdY1kvCZ0UEcOi7bmEx9o6B44lERiBGt6ROR5F/cEQtzrB5qlpaWv7KtUl8oiOXYgYvZy9VpzIUDQpVBZG6Y1pkVeTLkw06GeRBYXFzdgERIJJllLjcvwJNeaRvDRPjInwKfXUKDWQSZUARmkfb1yDwrZwxy62f2sJzkPDw8PDw8PDw+RP5uQ0RzrnQ+WAAAAAElFTkSuQmCC';
      const closeEye = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKNSURBVHgB7ZbdbRpBEMeHAx5AQiEV5FKBSQXBFSQRAsSTQwV2B+AOoALwEwIkSCoIqQBcgS8VhCBAQnzlP+QWLeju9mIwfpmfdNqbvb2dmd2Z2SUSBEEQBEEQBEEQXoeI34dut/t7u92mXTFbKBR+0gVptVp2NBp9csUx9L/1Gmf5TQDjR5pYpQsD4yua+M1vnK8DdGh0tt1uV+hCuLq+KhnOVP3G+jrAIROJRGpKxnsVE9/QC8M6WJeuN5fL/fIbHyEDnU5niCajZIRWtVgs3tMLAF23aGpa1wgL+SHonxgZiMfj18vlkp2wWXZ3Ij2fz+/L5fKYzkCj0Ugnk0kOmzut20HofDb9a9wBxq0IfTrcCQcN78YDnQBW/SPmamJhbK17xMYHhY7CohCUSiUHSg4qASvE08RuPD0nN9hwPD/wOjgynheHJpPJnzDzhNoBrgpHiTXWzgil1EH/AC0b5Mxms0cVYhwiiUTiHfozeLLo4tA4+P94Ti7jCNNrU5gaHfAwvrparR5isdgtlNzRGcA8Nc6pVCp1s9ls9CRuIonLQf8GOuBlfD6f31cgzg0k+ScoZUds+g94xdHUptNpXV9l3AAqXOkopBOBVciyrF08ehnPcG6gqSOW+Zox1AzjfluFhBseY7Rp1Ye5M15JyjrgBCknOBwpgEAH1GTq3W8clF1B0e4duzFAZfriNQ6ONsg9YdfrNedB/RS9RgfCTMDA+H29Rvnzv7dY1ggOKjFDJ+rdzUlnADuwN2axWDz6jcOB+F0TjYdUGEKV0SAQFmz80BUdJNz7oPH6NR27ZYc5rII4xw68oX9Je3wF90Q7EJ3jA+xV4ZLKj2lcr9e76vf7xnGCIAiCIAiCmb/8EzBWv90CKwAAAABJRU5ErkJggg==';

      if(ifEye) {
        return (
          <div class={bem('right-icon')} onClick={this.onClickRightIcon}>
            {(
              <Icon name={!ifPwd ? openEye : closeEye} classPrefix={this.iconPrefix} />
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
      if ((this.showWordLimit && this.maxlength)) {
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

    const vusionCut = this.getProp('vusionCut');
    const vusionMove = this.getProp('vusionMove');
    const vusionNodePath = this.getProp('vusionNodePath');
    const vusionNodeTag = this.getProp('vusionNodeTag');
    const vusionNodeInputPath = this.$attrs['vusion-template-input-node-path'];
    const vusionNodeTitlePath = this.$attrs['vusion-template-title-node-path'];
    const scopedSlots = {
      icon: this.genLeftIcon,
    };
    const stitle = this.slots('title');
    if (stitle) {
      scopedSlots.title = () => stitle;
    }
    const Label = this.genLabel();
    if (Label) {
      // scopedSlots.title = () => Label;
    }

    const extra = this.slots('extra');
    if (extra) {
      scopedSlots.extra = () => extra;
    }

    return (
      <Cellson
        icon={this.leftIcon}
        size={this.size}
        center={this.center}
        border={this.border}
        isLink={false && this.isLink}
        required={this.required}
        clickable={this.clickable}
        titleStyle={this.labelStyle}
        valueClass={bem('value')}
        titleClass={[bem('label', labelAlign), this.labelClass, stitle ? bem('labelhasslots') : '']}
        scopedSlots={scopedSlots}
        arrowDirection={this.arrowDirection}
        title={Label}
        class={bem({
          error: this.showError,
          disabled,
          [`label-${labelAlign}`]: labelAlign,
          // 'min-height': ((this.children && this.children.type === 'textarea' && !this.children.autosize)),
        })}
        onClick={this.onClick}
        vusionCut={vusionCut}
        vusionMove={vusionMove}
        vusionNodePath={vusionNodePath}
        vusionNodeTag={vusionNodeTag}
        vusionTemplateInputNodePath={vusionNodeInputPath}
        vusionTemplateTitleNodePath={vusionNodeTitlePath}
        infield={this.drole === 'other'}
        notitle={this.notitle}
        notitleblock={this.notitleblock}
        novalue={this.novalue}
        insel={this.insel}
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
      </Cellson>
    );
  },
});
