import {
  ref,
  watch,
  provide,
  computed,
  nextTick,
  reactive,
  PropType,
  onMounted,
  defineComponent,
  ExtractPropTypes,
} from 'vue';

// Utils
import {
  isDef,
  extend,
  addUnit,
  FORM_KEY,
  numericProp,
  unknownProp,
  resetScroll,
  formatNumber,
  preventDefault,
  makeStringProp,
  makeNumericProp,
  createNamespace,
} from '../utils';
import {
  runSyncRule,
  endComposing,
  mapInputType,
  startComposing,
  getRuleMessage,
  resizeTextarea,
  runRuleValidator,
} from './utils';
import { cellProps } from '../cell/Cell';

// Composables
import { CUSTOM_FIELD_INJECTION_KEY, useParent } from '@vant/use';
import { useExpose } from '../composables/use-expose';

// Components
import { Icon } from '../icon';
import { Cell } from '../cell';

// Types
import type {
  FieldRule,
  FieldType,
  FieldExpose,
  FieldTextAlign,
  FieldClearTrigger,
  FieldFormatTrigger,
  FieldValidateError,
  FieldAutosizeConfig,
  FieldValidateTrigger,
  FieldFormSharedProps,
} from './types';

const [name, bem] = createNamespace('field');

// provide to Search component to inherit
export const fieldSharedProps = {
  id: String,
  name: String,
  leftIcon: String,
  rightIcon: String,
  autofocus: Boolean,
  clearable: Boolean,
  maxlength: numericProp,
  formatter: Function as PropType<(value: string) => string>,
  clearIcon: makeStringProp('clear'),
  modelValue: makeNumericProp(''),
  inputAlign: String as PropType<FieldTextAlign>,
  placeholder: String,
  autocomplete: String,
  errorMessage: String,
  clearTrigger: makeStringProp<FieldClearTrigger>('focus'),
  formatTrigger: makeStringProp<FieldFormatTrigger>('onChange'),
  error: {
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
};

const props = extend({}, cellProps, fieldSharedProps, {
  rows: numericProp,
  type: makeStringProp<FieldType>('text'),
  rules: Array as PropType<FieldRule[]>,
  autosize: [Boolean, Object] as PropType<boolean | FieldAutosizeConfig>,
  labelWidth: numericProp,
  labelClass: unknownProp,
  labelAlign: String as PropType<FieldTextAlign>,
  showWordLimit: Boolean,
  errorMessageAlign: String as PropType<FieldTextAlign>,
  colon: {
    type: Boolean,
    default: null,
  },
});

export type FieldProps = ExtractPropTypes<typeof props>;

export default defineComponent({
  name,

  props,

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
    const customValue = ref<() => unknown>();

    const { parent: form } = useParent(FORM_KEY);

    const getModelValue = () => String(props.modelValue ?? '');

    const getProp = <T extends FieldFormSharedProps>(key: T) => {
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
      return false;
    });

    const formValue = computed(() => {
      if (customValue.value && slots.input) {
        return customValue.value();
      }
      return props.modelValue;
    });

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
              return runRuleValidator(value, rule).then((result) => {
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
      new Promise<FieldValidateError | void>((resolve) => {
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

        if (rules.length) {
          validate(rules);
        }
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

      if (inputRef.value && inputRef.value.value !== value) {
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

    const blur = () => inputRef.value?.blur();
    const focus = () => inputRef.value?.focus();

    const onFocus = (event: Event) => {
      state.focused = true;
      emit('focus', event);

      // readonly not work in legacy mobile safari
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

    const onClickInput = (event: MouseEvent) => emit('click-input', event);

    const onClickLeftIcon = (event: MouseEvent) =>
      emit('click-left-icon', event);

    const onClickRightIcon = (event: MouseEvent) =>
      emit('click-right-icon', event);

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

    const adjustTextareaSize = () => {
      const input = inputRef.value;
      if (props.type === 'textarea' && props.autosize && input) {
        resizeTextarea(input, props.autosize);
      }
    };

    const renderInput = () => {
      const controlClass = bem('control', [
        getProp('inputAlign'),
        {
          error: showError.value,
          custom: !!slots.input,
          'min-height': props.type === 'textarea' && !props.autosize,
        },
      ]);

      if (slots.input) {
        return (
          <div class={controlClass} onClick={onClickInput}>
            {slots.input()}
          </div>
        );
      }

      const inputAttrs = {
        id: props.id,
        ref: inputRef,
        name: props.name,
        rows: props.rows !== undefined ? +props.rows : undefined,
        class: controlClass,
        value: props.modelValue,
        disabled: getProp('disabled'),
        readonly: getProp('readonly'),
        autofocus: props.autofocus,
        placeholder: props.placeholder,
        autocomplete: props.autocomplete,
        onBlur,
        onFocus,
        onInput,
        onClick: onClickInput,
        onChange: endComposing,
        onKeypress,
        onCompositionend: endComposing,
        onCompositionstart: startComposing,
      };

      if (props.type === 'textarea') {
        return <textarea {...inputAttrs} />;
      }

      return <input {...mapInputType(props.type)} {...inputAttrs} />;
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
        const slot = slots['error-message'];
        const errorMessageAlign = getProp('errorMessageAlign');
        return (
          <div class={bem('error-message', errorMessageAlign)}>
            {slot ? slot({ message }) : message}
          </div>
        );
      }
    };

    const renderLabel = () => {
      const colon = getProp('colon') ? ':' : '';

      if (slots.label) {
        return [slots.label(), colon];
      }
      if (props.label) {
        return <label for={props.id}>{props.label + colon}</label>;
      }
    };

    const renderFieldBody = () => [
      <div class={bem('body')}>
        {renderInput()}
        {showClear.value && (
          <Icon
            name={props.clearIcon}
            class={bem('clear')}
            onTouchstart={onClear}
          />
        )}
        {renderRightIcon()}
        {slots.button && <div class={bem('button')}>{slots.button()}</div>}
      </div>,
      renderWordLimit(),
      renderMessage(),
    ];

    useExpose<FieldExpose>({
      blur,
      focus,
      validate,
      formValue,
      resetValidation,
    });

    provide(CUSTOM_FIELD_INJECTION_KEY, {
      customValue,
      resetValidation,
      validateWithTrigger,
    });

    watch(
      () => props.modelValue,
      () => {
        updateValue(getModelValue());
        resetValidation();
        validateWithTrigger('onChange');
        nextTick(adjustTextareaSize);
      }
    );

    onMounted(() => {
      updateValue(getModelValue(), props.formatTrigger);
      nextTick(adjustTextareaSize);
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
            value: renderFieldBody,
            extra: slots.extra,
          }}
          size={props.size}
          icon={props.leftIcon}
          class={bem({
            error: showError.value,
            disabled,
            [`label-${labelAlign}`]: labelAlign,
          })}
          center={props.center}
          border={props.border}
          isLink={props.isLink}
          clickable={props.clickable}
          titleStyle={labelStyle.value}
          valueClass={bem('value')}
          titleClass={[
            bem('label', [labelAlign, { required: props.required }]),
            props.labelClass,
          ]}
          arrowDirection={props.arrowDirection}
        />
      );
    };
  },
});
