import {
  ref,
  watch,
  provide,
  computed,
  nextTick,
  reactive,
  PropType,
  onMounted,
  HTMLAttributes,
} from 'vue';

// Utils
import {
  isDef,
  trigger,
  addUnit,
  isObject,
  isPromise,
  isFunction,
  UnknownProp,
  resetScroll,
  formatNumber,
  preventDefault,
  createNamespace,
} from '../utils';
import { runSyncRule } from './utils';

// Composition
import { useParent } from '@vant/use';
import { useExpose } from '../composables/use-expose';
import { FORM_KEY, FIELD_KEY } from '../composables/use-link-field';

// Components
import Icon from '../icon';
import Cell, { cellProps } from '../cell';

// Types
import type {
  FieldRule,
  FieldType,
  FieldTextAlign,
  FieldClearTrigger,
  FieldFormatTrigger,
  FieldAutosizeConfig,
  FieldValidateTrigger,
} from './types';

const [createComponent, bem] = createNamespace('field');

export default createComponent({
  props: {
    ...cellProps,
    rows: [Number, String],
    name: String,
    rules: Array as PropType<FieldRule[]>,
    autosize: [Boolean, Object] as PropType<boolean | FieldAutosizeConfig>,
    leftIcon: String,
    rightIcon: String,
    clearable: Boolean,
    formatter: Function as PropType<(value: string) => string>,
    maxlength: [Number, String],
    labelWidth: [Number, String],
    labelClass: UnknownProp,
    labelAlign: String as PropType<FieldTextAlign>,
    inputAlign: String as PropType<FieldTextAlign>,
    placeholder: String,
    autocomplete: String,
    errorMessage: String,
    errorMessageAlign: String as PropType<FieldTextAlign>,
    showWordLimit: Boolean,
    type: {
      type: String as PropType<FieldType>,
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
    disabled: {
      type: Boolean,
      default: null,
    },
    readonly: {
      type: Boolean,
      default: null,
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    clearTrigger: {
      type: String as PropType<FieldClearTrigger>,
      default: 'focus',
    },
    formatTrigger: {
      type: String as PropType<FieldFormatTrigger>,
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

    const inputRef = ref<HTMLInputElement>();
    const childFieldValue = ref<() => unknown>();

    const { parent: form } = useParent<any>(FORM_KEY);

    const getModelValue = () => String(props.modelValue ?? '');

    const getProp = (key: keyof typeof props) => {
      if (isDef(props[key])) {
        return props[key];
      }
      if (form && isDef(form.props[key])) {
        return form.props[key];
      }
    };

    const showClear = computed(() => {
      const readonly = getProp('readonly');

      if (props.clearable && !readonly) {
        const hasValue = getModelValue() !== '';
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

    const runValidator = (value: unknown, rule: FieldRule) =>
      new Promise((resolve) => {
        const returnVal = rule.validator!(value, rule);

        if (isPromise(returnVal)) {
          return returnVal.then(resolve);
        }

        resolve(returnVal);
      });

    const getRuleMessage = (value: unknown, rule: FieldRule) => {
      const { message } = rule;

      if (isFunction(message)) {
        return message(value, rule);
      }
      return message || '';
    };

    const runRules = (rules: FieldRule[]) =>
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
                if (result && typeof result === 'string') {
                  state.validateFailed = true;
                  state.validateMessage = result;
                } else if (result === false) {
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
      new Promise<{ name?: string; message: string } | void>((resolve) => {
        resetValidation();
        if (rules) {
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
        } else {
          resolve();
        }
      });

    const validateWithTrigger = (trigger: FieldValidateTrigger) => {
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

    // native maxlength have incorrect line-break counting
    // see: https://github.com/youzan/vant/issues/5033
    const limitValueLength = (value: string) => {
      const { maxlength } = props;
      if (isDef(maxlength) && value.length > maxlength) {
        const modelValue = getModelValue();
        if (modelValue && modelValue.length === +maxlength) {
          return modelValue;
        }
        return value.slice(0, +maxlength);
      }
      return value;
    };

    const updateValue = (
      value: string,
      trigger: FieldFormatTrigger = 'onChange'
    ) => {
      value = limitValueLength(value);

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

    const onInput = (event: Event) => {
      // skip update value when composing
      if (!event.target!.composing) {
        updateValue((event.target as HTMLInputElement).value);
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

    const onFocus = (event: Event) => {
      state.focused = true;
      emit('focus', event);

      // readonly not work in lagacy mobile safari
      const readonly = getProp('readonly');
      if (readonly) {
        blur();
      }
    };

    const onBlur = (event: Event) => {
      state.focused = false;
      updateValue(getModelValue(), 'onBlur');
      emit('blur', event);
      validateWithTrigger('onBlur');
      resetScroll();
    };

    const onClickInput = (event: MouseEvent) => {
      emit('click-input', event);
    };

    const onClickLeftIcon = (event: MouseEvent) => {
      emit('click-left-icon', event);
    };

    const onClickRightIcon = (event: MouseEvent) => {
      emit('click-right-icon', event);
    };

    const onClear = (event: MouseEvent) => {
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

    const labelStyle = computed(() => {
      const labelWidth = getProp('labelWidth');
      if (labelWidth) {
        return { width: addUnit(labelWidth) };
      }
    });

    const onKeypress = (event: KeyboardEvent) => {
      const ENTER_CODE = 13;

      if (event.keyCode === ENTER_CODE) {
        const submitOnEnter = form && form.props.submitOnEnter;
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

    const onCompositionStart = (event: Event) => {
      event.target!.composing = true;
    };

    const onCompositionEnd = (event: Event) => {
      const { target } = event;
      if (target!.composing) {
        target!.composing = false;
        trigger(target as Element, 'input');
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
        if (maxHeight !== undefined) {
          height = Math.min(height, maxHeight);
        }
        if (minHeight !== undefined) {
          height = Math.max(height, minHeight);
        }
      }

      if (height) {
        input.style.height = `${height}px`;
      }
    };

    const renderInput = () => {
      const disabled = getProp('disabled');
      const readonly = getProp('readonly');
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
        rows: props.rows !== undefined ? +props.rows : undefined,
        class: bem('control', inputAlign),
        value: props.modelValue,
        disabled,
        readonly,
        placeholder: props.placeholder,
        autocomplete: props.autocomplete,
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
      let inputMode: HTMLAttributes['inputmode'];

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
        const count = getModelValue().length;
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
      () => {
        updateValue(getModelValue());
        resetValidation();
        validateWithTrigger('onChange');
        nextTick(adjustSize);
      }
    );

    onMounted(() => {
      updateValue(getModelValue(), props.formatTrigger);
      nextTick(adjustSize);
    });

    return () => {
      const disabled = getProp('disabled');
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
            disabled,
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
