import { ref, computed } from 'vue';

// Utils
import { createNamespace, addUnit, getSizeStyle } from '../utils';
import { preventDefault } from '../utils/dom/event';

// Composition
import { useRect } from '../composition/use-rect';
import { useTouch } from '../composition/use-touch';
import { useParentField } from '../composition/use-parent-field';

const [createComponent, bem] = createNamespace('slider');

export default createComponent({
  props: {
    disabled: Boolean,
    vertical: Boolean,
    barHeight: [Number, String],
    buttonSize: [Number, String],
    activeColor: String,
    inactiveColor: String,
    min: {
      type: [Number, String],
      default: 0,
    },
    max: {
      type: [Number, String],
      default: 100,
    },
    step: {
      type: [Number, String],
      default: 1,
    },
    modelValue: {
      type: Number,
      default: 0,
    },
  },

  emits: ['change', 'drag-end', 'drag-start', 'update:modelValue'],

  setup(props, { emit, slots }) {
    let startValue;
    let currentValue;

    const rootRef = ref();
    const dragStatus = ref();
    const touch = useTouch();

    const range = computed(() => props.max - props.min);

    const wrapperStyle = computed(() => {
      const crossAxis = props.vertical ? 'width' : 'height';
      return {
        background: props.inactiveColor,
        [crossAxis]: addUnit(props.barHeight),
      };
    });

    const barStyle = computed(() => {
      const mainAxis = props.vertical ? 'height' : 'width';
      return {
        [mainAxis]: `${((props.modelValue - props.min) * 100) / range.value}%`,
        background: props.activeColor,
        transition: dragStatus.value ? 'none' : null,
      };
    });

    const format = (value) => {
      const { min, max, step } = props;
      value = Math.max(min, Math.min(value, max));
      return Math.round(value / step) * step;
    };

    const updateValue = (value, end) => {
      value = format(value);

      if (value !== props.modelValue) {
        emit('update:modelValue', value);
      }

      if (end && value !== startValue) {
        emit('change', value);
      }
    };

    const onClick = (event) => {
      event.stopPropagation();

      if (props.disabled) {
        return;
      }

      const { min, vertical, modelValue } = props;
      const rect = useRect(rootRef);
      const delta = vertical
        ? event.clientY - rect.top
        : event.clientX - rect.left;
      const total = vertical ? rect.height : rect.width;
      const value = +min + (delta / total) * range.value;

      startValue = modelValue;
      updateValue(value, true);
    };

    const onTouchStart = (event) => {
      if (props.disabled) {
        return;
      }

      touch.start(event);
      startValue = format(props.modelValue);
      dragStatus.value = 'start';
    };

    const onTouchMove = (event) => {
      if (props.disabled) {
        return;
      }

      if (dragStatus.value === 'start') {
        emit('drag-start');
      }

      preventDefault(event, true);
      touch.move(event);
      dragStatus.value = 'draging';

      const rect = useRect(rootRef);
      const delta = props.vertical ? touch.deltaY.value : touch.deltaX.value;
      const total = props.vertical ? rect.height : rect.width;
      const diff = (delta / total) * range.value;

      currentValue = startValue + diff;
      updateValue(currentValue);
    };

    const onTouchEnd = () => {
      if (props.disabled) {
        return;
      }

      if (dragStatus.value === 'draging') {
        updateValue(currentValue, true);
        emit('drag-end');
      }

      dragStatus.value = '';
    };

    const renderButton = () => (
      <div
        role="slider"
        tabindex={props.disabled ? -1 : 0}
        aria-valuemin={props.min}
        aria-valuenow={props.modelValue}
        aria-valuemax={props.max}
        aria-orientation={props.vertical ? 'vertical' : 'horizontal'}
        class={bem('button-wrapper')}
        onTouchstart={onTouchStart}
        onTouchmove={onTouchMove}
        onTouchend={onTouchEnd}
        onTouchcancel={onTouchEnd}
      >
        {slots.button ? (
          slots.button()
        ) : (
          <div class={bem('button')} style={getSizeStyle(props.buttonSize)} />
        )}
      </div>
    );

    // format initial value
    updateValue(props.modelValue);
    useParentField(() => props.modelValue);

    return () => (
      <div
        ref={rootRef}
        style={wrapperStyle.value}
        class={bem({
          vertical: props.vertical,
          disabled: props.disabled,
        })}
        onClick={onClick}
      >
        <div class={bem('bar')} style={barStyle.value}>
          {renderButton()}
        </div>
      </div>
    );
  },
});
