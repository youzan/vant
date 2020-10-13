import {
  ref,
  watch,
  provide,
  computed,
  nextTick,
  reactive,
  onMounted,
} from 'vue';

// Utils
import {
  isDef,
  trigger,
  addUnit,
  isObject,
  isPromise,
  isFunction,
  resetScroll,
  formatNumber,
  preventDefault,
  createNamespace,
} from '../utils';
import { runSyncRule } from './utils';

// Composition
import { useParent } from '@vant/use';
import { useExpose } from '../composition/use-expose';

// Components
import Icon from '../icon';
import Cell, { cellProps } from '../cell';
import { FORM_KEY } from '../form';

const [createComponent, bem] = createNamespace('field');

export const FIELD_KEY = 'vanField';

export default createComponent({
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

  setup(props, { emit, slots }) {
    const state = reactive({
      focused: false,
      validateFailed: false,
      validateMessage: '',
    });

    const inputRef = ref();
    const childFieldValue = ref();

    const showClear = computed(() => {
      if (props.clearable && !props.readonly) {
        const hasValue = isDef(props.modelValue) && props.modelValue !== '';
        const trigger =
          props.clearTrigger === 'always' ||
          (props.clearTrigger === 'focus' && state.focused);

        return hasValue && trigger;
      }
    });

    const formValue = computed(() => {
      if (childFieldValue.value && slots.input) {
        return childFieldValue.value();
      }
      return props.modelValue;
    });

    const runValidator = (value, rule) =>
      new Promise((resolve) => {
        const returnVal = rule.validator(value, rule);

        if (isPromise(returnVal)) {
          return returnVal.then(resolve);
        }

        resolve(returnVal);
      });

    const getRuleMessage = (value, rule) => {
      const { message } = rule;

      if (isFunction(message)) {
        return message(value, rule);
      }
      return message;
    };

    const runRules = (rules) =>
      rules.reduce(
        (promise, rule) =>
          promise.then(() => {
            if (state.validateFailed) {
              return;
            }

            let { value } = formValue;

            if (rule.formatter) {
              value = rule.formatter(value, rule);
            }

            if (!runSyncRule(value, rule)) {
              state.validateFailed = true;
              state.validateMessage = getRuleMessage(value, rule);
              return;
            }

            if (rule.validator) {
              return runValidator(value, rule).then((result) => {
                if (result === false) {
                  state.validateFailed = true;
                  state.validateMessage = getRuleMessage(value, rule);
                }
              });
            }
          }),
        Promise.resolve()
      );

    const resetValidation = () => {
      if (state.validateFailed) {
        state.validateFailed = false;
        state.validateMessage = '';
      }
    };

    const validate = (rules = props.rules) =>
      new Promise((resolve) => {
        if (!rules) {
          resolve();
        }

        resetValidation();
        runRules(rules).then(() => {
          if (state.validateFailed) {
            resolve({
              name: props.name,
              message: state.validateMessage,
            });
          } else {
            resolve();
          }
        });
      });

    const { parent: form } = useParent(FORM_KEY);

    const validateWithTrigger = (trigger) => {
      if (form && props.rules) {
        const defaultTrigger = form.props.validateTrigger === trigger;
        const rules = props.rules.filter((rule) => {
          if (rule.trigger) {
            return rule.trigger === trigger;
          }

          return defaultTrigger;
        });

        validate(rules);
      }
    };

    const updateValue = (value, trigger = 'onChange') => {
      value = isDef(value) ? String(value) : '';

      // native maxlength have incorrect line-break counting
      // see: https://github.com/youzan/vant/issues/5033
      const { maxlength, modelValue } = props;
      if (isDef(maxlength) && value.length > maxlength) {
        if (modelValue && modelValue.length === +maxlength) {
          value = modelValue;
        } else {
          value = value.slice(0, maxlength);
        }
      }

      if (props.type === 'number' || props.type === 'digit') {
        const isNumber = props.type === 'number';
        value = formatNumber(value, isNumber, isNumber);
      }

      if (props.formatter && trigger === props.formatTrigger) {
        value = props.formatter(value);
      }

      if (inputRef.value && value !== inputRef.value.value) {
        inputRef.value.value = value;
      }

      if (value !== props.modelValue) {
        emit('update:modelValue', value);
      }
    };

    const onInput = (event) => {
      // skip update value when composing
      if (!event.target.composing) {
        updateValue(event.target.value);
      }
    };

    const focus = () => {
      if (inputRef.value) {
        inputRef.value.focus();
      }
    };

    const blur = () => {
      if (inputRef.value) {
        inputRef.value.blur();
      }
    };

    const onFocus = (event) => {
      state.focused = true;
      emit('focus', event);

      // readonly not work in lagacy mobile safari
      if (props.readonly) {
        blur();
      }
    };

    const onBlur = (event) => {
      state.focused = false;
      updateValue(props.modelValue, 'onBlur');
      emit('blur', event);
      validateWithTrigger('onBlur');
      resetScroll();
    };

    const onClickInput = (event) => {
      emit('click-input', event);
    };

    const onClickLeftIcon = (event) => {
      emit('click-left-icon', event);
    };

    const onClickRightIcon = (event) => {
      emit('click-right-icon', event);
    };

    const onClear = (event) => {
      preventDefault(event);
      emit('update:modelValue', '');
      emit('clear', event);
    };

    const showError = computed(() => {
      if (typeof props.error === 'boolean') {
        return props.error;
      }
      if (form && form.props.showError && state.validateFailed) {
        return true;
      }
    });

    const getProp = (key) => {
      if (isDef(props[key])) {
        return props[key];
      }
      if (form && isDef(form.props[key])) {
        return form.props[key];
      }
    };

    const labelStyle = computed(() => {
      const labelWidth = getProp('labelWidth');
      if (labelWidth) {
        return { width: addUnit(labelWidth) };
      }
    });

    const onKeypress = (event) => {
      const ENTER_CODE = 13;

      if (event.keyCode === ENTER_CODE) {
        const submitOnEnter = getProp('submitOnEnter');
        if (!submitOnEnter && props.type !== 'textarea') {
          preventDefault(event);
        }

        // trigger blur after click keyboard search button
        if (props.type === 'search') {
          blur();
        }
      }

      emit('keypress', event);
    };

    const onCompositionStart = (event) => {
      event.target.composing = true;
    };

    const onCompositionEnd = (event) => {
      const { target } = event;
      if (target.composing) {
        target.composing = false;
        trigger(target, 'input');
      }
    };

    const adjustSize = () => {
      const input = inputRef.value;

      if (!(props.type === 'textarea' && props.autosize) || !input) {
        return;
      }

      input.style.height = 'auto';

      let height = input.scrollHeight;
      if (isObject(props.autosize)) {
        const { maxHeight, minHeight } = props.autosize;
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
    };

    const renderInput = () => {
      const inputAlign = getProp('inputAlign');

      if (slots.input) {
        return (
          <div
            class={bem('control', [inputAlign, 'custom'])}
            onClick={onClickInput}
          >
            {slots.input()}
          </div>
        );
      }

      const inputProps = {
        ref: inputRef,
        name: props.name,
        rows: props.rows,
        class: bem('control', inputAlign),
        value: props.modelValue,
        disabled: props.disabled,
        readonly: props.readonly,
        placeholder: props.placeholder,
        onBlur,
        onFocus,
        onInput,
        onClick: onClickInput,
        onChange: onCompositionEnd,
        onKeypress,
        onCompositionend: onCompositionEnd,
        onCompositionstart: onCompositionStart,
      };

      const { type } = props;

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
    };

    const renderLeftIcon = () => {
      const leftIconSlot = slots['left-icon'];

      if (props.leftIcon || leftIconSlot) {
        return (
          <div class={bem('left-icon')} onClick={onClickLeftIcon}>
            {leftIconSlot ? (
              leftIconSlot()
            ) : (
              <Icon name={props.leftIcon} classPrefix={props.iconPrefix} />
            )}
          </div>
        );
      }
    };

    const renderRightIcon = () => {
      const rightIconSlot = slots['right-icon'];

      if (props.rightIcon || rightIconSlot) {
        return (
          <div class={bem('right-icon')} onClick={onClickRightIcon}>
            {rightIconSlot ? (
              rightIconSlot()
            ) : (
              <Icon name={props.rightIcon} classPrefix={props.iconPrefix} />
            )}
          </div>
        );
      }
    };

    const renderWordLimit = () => {
      if (props.showWordLimit && props.maxlength) {
        const count = (props.modelValue || '').length;
        return (
          <div class={bem('word-limit')}>
            <span class={bem('word-num')}>{count}</span>/{props.maxlength}
          </div>
        );
      }
    };

    const renderMessage = () => {
      if (form && form.props.showErrorMessage === false) {
        return;
      }

      const message = props.errorMessage || state.validateMessage;

      if (message) {
        const errorMessageAlign = getProp('errorMessageAlign');
        return (
          <div class={bem('error-message', errorMessageAlign)}>{message}</div>
        );
      }
    };

    const renderLabel = () => {
      const colon = getProp('colon') ? ':' : '';

      if (slots.label) {
        return [slots.label(), colon];
      }
      if (props.label) {
        return <span>{props.label + colon}</span>;
      }
    };

    useExpose({
      blur,
      focus,
      validate,
      formValue,
      resetValidation,
    });

    provide(FIELD_KEY, {
      childFieldValue,
      resetValidation,
      validateWithTrigger,
    });

    watch(
      () => props.modelValue,
      (value) => {
        updateValue(value);
        resetValidation();
        validateWithTrigger('onChange');
        nextTick(adjustSize);
      }
    );

    onMounted(() => {
      updateValue(props.modelValue, props.formatTrigger);
      nextTick(adjustSize);
    });

    return () => {
      const labelAlign = getProp('labelAlign');
      const Label = renderLabel();
      const LeftIcon = renderLeftIcon();

      return (
        <Cell
          v-slots={{
            icon: LeftIcon ? () => LeftIcon : null,
            title: Label ? () => Label : null,
            extra: slots.extra,
          }}
          size={props.size}
          icon={props.leftIcon}
          class={bem({
            error: showError.value,
            disabled: props.disabled,
            [`label-${labelAlign}`]: labelAlign,
            'min-height': props.type === 'textarea' && !props.autosize,
          })}
          center={props.center}
          border={props.border}
          isLink={props.isLink}
          required={props.required}
          clickable={props.clickable}
          titleStyle={labelStyle.value}
          valueClass={bem('value')}
          titleClass={[bem('label', labelAlign), props.labelClass]}
          arrowDirection={props.arrowDirection}
        >
          <div class={bem('body')}>
            {renderInput()}
            {showClear.value && (
              <Icon name="clear" class={bem('clear')} onTouchstart={onClear} />
            )}
            {renderRightIcon()}
            {slots.button && <div class={bem('button')}>{slots.button()}</div>}
          </div>
          {renderWordLimit()}
          {renderMessage()}
        </Cell>
      );
    };
  },
});
