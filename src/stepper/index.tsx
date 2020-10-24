import { ref, watch, computed } from 'vue';

// Utils
import { isNaN } from '../utils/validate/number';
import {
  isDef,
  addUnit,
  resetScroll,
  formatNumber,
  getSizeStyle,
  preventDefault,
  createNamespace,
} from '../utils';

// Composition
import { useLinkField } from '../composition/use-link-field';

const [createComponent, bem] = createNamespace('stepper');

const LONG_PRESS_INTERVAL = 200;
const LONG_PRESS_START_TIME = 600;

function equal(value1?: string | number, value2?: string | number) {
  return String(value1) === String(value2);
}

// add num and avoid float number
function add(num1: number, num2: number) {
  const cardinal = 10 ** 10;
  return Math.round((num1 + num2) * cardinal) / cardinal;
}

export default createComponent({
  props: {
    theme: String,
    integer: Boolean,
    disabled: Boolean,
    allowEmpty: Boolean,
    modelValue: [Number, String],
    inputWidth: [Number, String],
    buttonSize: [Number, String],
    asyncChange: Boolean,
    placeholder: String,
    disablePlus: Boolean,
    disableMinus: Boolean,
    disableInput: Boolean,
    decimalLength: [Number, String],
    name: {
      type: [Number, String],
      default: '',
    },
    min: {
      type: [Number, String],
      default: 1,
    },
    max: {
      type: [Number, String],
      default: Infinity,
    },
    step: {
      type: [Number, String],
      default: 1,
    },
    defaultValue: {
      type: [Number, String],
      default: 1,
    },
    showPlus: {
      type: Boolean,
      default: true,
    },
    showMinus: {
      type: Boolean,
      default: true,
    },
    longPress: {
      type: Boolean,
      default: true,
    },
  },

  emits: [
    'plus',
    'blur',
    'minus',
    'focus',
    'change',
    'overlimit',
    'update:modelValue',
  ],

  setup(props, { emit }) {
    const format = (value: string | number) => {
      const { min, max, allowEmpty, decimalLength } = props;

      if (allowEmpty && value === '') {
        return value;
      }

      value = formatNumber(String(value), !props.integer);
      value = value === '' ? 0 : +value;
      value = isNaN(value) ? +min : value;
      value = Math.max(Math.min(+max, value), +min);

      // format decimal
      if (isDef(decimalLength)) {
        value = value.toFixed(+decimalLength);
      }

      return value;
    };

    const getInitialValue = () => {
      const defaultValue = props.modelValue ?? props.defaultValue;
      const value = format(defaultValue);

      if (!equal(value, props.modelValue)) {
        emit('update:modelValue', value);
      }

      return value;
    };

    let actionType: 'plus' | 'minus';
    const inputRef = ref();
    const current = ref(getInitialValue());

    const minusDisabled = computed(
      () => props.disabled || props.disableMinus || current.value <= +props.min
    );

    const plusDisabled = computed(
      () => props.disabled || props.disablePlus || current.value >= +props.max
    );

    const inputStyle = computed(() => ({
      width: addUnit(props.inputWidth),
      height: addUnit(props.buttonSize),
    }));

    const buttonStyle = computed(() => getSizeStyle(props.buttonSize));

    const check = () => {
      const value = format(current.value);
      if (!equal(value, current.value)) {
        current.value = value;
      }
    };

    const emitChange = (value: string | number) => {
      if (props.asyncChange) {
        emit('update:modelValue', value);
        emit('change', value, { name: props.name });
      } else {
        current.value = value;
      }
    };

    const onChange = () => {
      if ((props as any)[`${actionType}Disabled`]) {
        emit('overlimit', actionType);
        return;
      }

      const diff = actionType === 'minus' ? -props.step : +props.step;
      const value = format(add(+current.value, diff));

      emitChange(value);
      emit(actionType);
    };

    const onInput = (event: Event) => {
      const input = event.target as HTMLInputElement;
      const { value } = input;
      const { decimalLength } = props;

      let formatted = formatNumber(String(value), !props.integer);

      // limit max decimal length
      if (isDef(decimalLength) && formatted.indexOf('.') !== -1) {
        const pair = formatted.split('.');
        formatted = `${pair[0]}.${pair[1].slice(0, +decimalLength)}`;
      }

      if (!equal(value, formatted)) {
        input.value = formatted;
      }

      emitChange(formatted);
    };

    const onFocus = (event: Event) => {
      // readonly not work in lagacy mobile safari
      if (props.disableInput && inputRef.value) {
        inputRef.value.blur();
      } else {
        emit('focus', event);
      }
    };

    const onBlur = (event: Event) => {
      const input = event.target as HTMLInputElement;
      const value = format(input.value);
      input.value = String(value);
      current.value = value;
      emit('blur', event);
      resetScroll();
    };

    let isLongPress: boolean;
    let longPressTimer: NodeJS.Timeout;

    const longPressStep = () => {
      longPressTimer = setTimeout(() => {
        onChange();
        longPressStep();
      }, LONG_PRESS_INTERVAL);
    };

    const onTouchStart = () => {
      if (props.longPress) {
        isLongPress = false;
        clearTimeout(longPressTimer);
        longPressTimer = setTimeout(() => {
          isLongPress = true;
          onChange();
          longPressStep();
        }, LONG_PRESS_START_TIME);
      }
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (props.longPress) {
        clearTimeout(longPressTimer);
        if (isLongPress) {
          preventDefault(event);
        }
      }
    };

    const createListeners = (type: 'plus' | 'minus') => ({
      onClick: (event: MouseEvent) => {
        // disable double tap scrolling on mobile safari
        event.preventDefault();
        actionType = type;
        onChange();
      },
      onTouchstart: () => {
        actionType = type;
        onTouchStart();
      },
      onTouchend: onTouchEnd,
      onTouchcancel: onTouchEnd,
    });

    watch(
      [
        () => props.max,
        () => props.min,
        () => props.integer,
        () => props.decimalLength,
      ],
      check
    );

    watch(
      () => props.modelValue,
      (value) => {
        if (!equal(value, current.value)) {
          current.value = value!;
        }
      }
    );

    watch(current, (value) => {
      emit('update:modelValue', value);
      emit('change', value, { name: props.name });
    });

    useLinkField(() => props.modelValue);

    return () => (
      <div class={bem([props.theme])}>
        <button
          v-show={props.showMinus}
          type="button"
          style={buttonStyle.value}
          class={bem('minus', { disabled: minusDisabled.value })}
          {...createListeners('minus')}
        />
        <input
          ref={inputRef}
          type={props.integer ? 'tel' : 'text'}
          role="spinbutton"
          class={bem('input')}
          value={current.value}
          style={inputStyle.value}
          disabled={props.disabled}
          readonly={props.disableInput}
          // set keyboard in mordern browers
          inputmode={props.integer ? 'numeric' : 'decimal'}
          placeholder={props.placeholder}
          aria-valuemax={+props.max}
          aria-valuemin={+props.min}
          aria-valuenow={+current.value}
          onInput={onInput}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <button
          v-show={props.showPlus}
          type="button"
          style={buttonStyle.value}
          class={bem('plus', { disabled: plusDisabled.value })}
          {...createListeners('plus')}
        />
      </div>
    );
  },
});
