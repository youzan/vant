import { ref, computed, watch } from 'vue';

// Utils
import { isNaN } from '../utils/validate/number';
import { formatNumber } from '../utils/format/number';
import { resetScroll } from '../utils/dom/reset-scroll';
import { preventDefault } from '../utils/dom/event';
import { createNamespace, isDef, addUnit, getSizeStyle } from '../utils';

// Composition
import { useParentField } from '../composition/use-parent-field';

const [createComponent, bem] = createNamespace('stepper');

const LONG_PRESS_INTERVAL = 200;
const LONG_PRESS_START_TIME = 600;

function equal(value1, value2) {
  return String(value1) === String(value2);
}

// add num and avoid float number
function add(num1, num2) {
  const cardinal = 10 ** 10;
  return Math.round((num1 + num2) * cardinal) / cardinal;
}

export default createComponent({
  props: {
    theme: String,
    integer: Boolean,
    disabled: Boolean,
    modelValue: null,
    allowEmpty: Boolean,
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
    const format = (value) => {
      const { min, max, allowEmpty, decimalLength } = props;

      if (allowEmpty && value === '') {
        return value;
      }

      value = formatNumber(String(value), !props.integer);
      value = value === '' ? 0 : +value;
      value = isNaN(value) ? min : value;
      value = Math.max(Math.min(max, value), min);

      // format decimal
      if (isDef(decimalLength)) {
        value = value.toFixed(decimalLength);
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

    let actionType;
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

    const emitChange = (value) => {
      if (props.asyncChange) {
        emit('update:modelValue', value);
        emit('change', value, { name: props.name });
      } else {
        current.value = value;
      }
    };

    const onChange = () => {
      if (props[`${actionType}Disabled`]) {
        emit('overlimit', actionType);
        return;
      }

      const diff = actionType === 'minus' ? -props.step : +props.step;
      const value = format(add(+current.value, diff));

      emitChange(value);
      emit(actionType);
    };

    const onInput = (event) => {
      const { value } = event.target;
      const { decimalLength } = props;

      let formatted = formatNumber(String(value), !props.integer);

      // limit max decimal length
      if (isDef(decimalLength) && formatted.indexOf('.') !== -1) {
        const pair = formatted.split('.');
        formatted = `${pair[0]}.${pair[1].slice(0, decimalLength)}`;
      }

      if (!equal(value, formatted)) {
        event.target.value = formatted;
      }

      emitChange(formatted);
    };

    const onFocus = (event) => {
      // readonly not work in lagacy mobile safari
      if (props.disableInput && inputRef.value) {
        inputRef.value.blur();
      } else {
        emit('focus', event);
      }
    };

    const onBlur = (event) => {
      const value = format(event.target.value);
      event.target.value = value;
      current.value = value;
      emit('blur', event);
      resetScroll();
    };

    let isLongPress;
    let longPressTimer;

    const longPressStep = () => {
      longPressTimer = setTimeout(() => {
        onChange();
        longPressStep(actionType);
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

    const onTouchEnd = (event) => {
      if (props.longPress) {
        clearTimeout(longPressTimer);
        if (isLongPress) {
          preventDefault(event);
        }
      }
    };

    const createListeners = (type) => ({
      onClick: (e) => {
        // disable double tap scrolling on mobile safari
        e.preventDefault();
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
          current.value = value;
        }
      }
    );

    watch(current, (value) => {
      emit('update:modelValue', value);
      emit('change', value, { name: props.name });
    });

    useParentField(() => props.modelValue);

    return () => (
      <div class={bem([props.theme])}>
        <button
          vShow={props.showMinus}
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
          aria-valuemax={props.max}
          aria-valuemin={props.min}
          aria-valuenow={current.value}
          onInput={onInput}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <button
          vShow={props.showPlus}
          type="button"
          style={buttonStyle.value}
          class={bem('plus', { disabled: plusDisabled.value })}
          {...createListeners('plus')}
        />
      </div>
    );
  },
});
