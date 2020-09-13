import { ref, computed } from 'vue';

// Utils
import { createNamespace, addUnit, getSizeStyle } from '../utils';
import { deepClone } from '../utils/deep-clone';
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
    range: Boolean,
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
      type: [Number, Array],
      default: 0,
    },
  },

  emits: ['change', 'drag-end', 'drag-start', 'update:modelValue'],

  setup(props, { emit, slots }) {
    let startValue;
    let currentValue;
    let index;

    const rootRef = ref();
    const dragStatus = ref();
    const touch = useTouch();

    const scope = computed(() => props.max - props.min);

    const wrapperStyle = computed(() => {
      const crossAxis = props.vertical ? 'width' : 'height';
      return {
        background: props.inactiveColor,
        [crossAxis]: addUnit(props.barHeight),
      };
    });

    // 计算选中条的长度百分比
    const calcMainAxis = () => {
      const { modelValue, min, range } = props;
      if (range) {
        return `${((modelValue[1] - modelValue[0]) * 100) / scope.value}%`;
      }
      return `${((modelValue - min) * 100) / scope.value}%`;
    };

    // 计算选中条的开始位置的偏移量
    const calcOffset = () => {
      const { modelValue, min, range } = props;
      if (range) {
        return `${((modelValue[0] - min) * 100) / scope.value}%`;
      }
      return `0%`;
    };

    const barStyle = computed(() => {
      const mainAxis = props.vertical ? 'height' : 'width';
      return {
        [mainAxis]: calcMainAxis(),
        left: props.vertical ? null : calcOffset(),
        top: props.vertical ? calcOffset() : null,
        background: props.activeColor,
        transition: dragStatus.value ? 'none' : null,
      };
    });

    const format = (value) => {
      const { min, max, step } = props;
      value = Math.max(min, Math.min(value, max));
      return Math.round(value / step) * step;
    };

    const isSameValue = (newValue, oldValue) => {
      return JSON.stringify(newValue) === JSON.stringify(oldValue);
    };

    // 处理两个滑块重叠之后的情况
    const handleOverlap = (value) => {
      if (value[0] > value[1]) {
        value = deepClone(value);
        return value.reverse();
      }
      return value;
    };

    const updateValue = (value, end) => {
      if (props.range) {
        value = handleOverlap(value).map(format);
      } else {
        value = format(value);
      }

      if (!isSameValue(value, props.modelValue)) {
        emit('update:modelValue', value);
      }

      if (end && !isSameValue(value, startValue)) {
        emit('change', value);
      }
    };

    const onClick = (event) => {
      event.stopPropagation();

      if (props.disabled) {
        return;
      }

      const { min, vertical, modelValue, range } = props;
      const rect = useRect(rootRef);
      const delta = vertical
        ? event.clientY - rect.top
        : event.clientX - rect.left;
      const total = vertical ? rect.height : rect.width;
      let value = +min + (delta / total) * scope.value;

      if (range) {
        let left = modelValue[0];
        let right = modelValue[1];
        const middle = (left + right) / 2;
        if (value <= middle) {
          left = value;
        } else {
          right = value;
        }
        value = [left, right];
      }

      updateValue(value, true);
    };

    const onTouchStart = (event) => {
      if (props.disabled) {
        return;
      }

      touch.start(event);
      currentValue = props.modelValue;
      if (props.range) {
        startValue = props.modelValue.map(format);
      } else {
        startValue = format(props.modelValue);
      }
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
      const diff = (delta / total) * scope.value;

      if (props.range) {
        currentValue[index] = startValue[index] + diff;
      } else {
        currentValue = startValue + diff;
      }
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

    const renderButton = (i) => {
      const map = ['left', 'right'];
      const getClassName = () => {
        if (typeof i === 'number') {
          return `button-wrapper-${map[i]}`;
        }
        return `button-wrapper`;
      };

      return (
        <div
          role="slider"
          class={bem(getClassName())}
          tabindex={props.disabled ? -1 : 0}
          aria-valuemin={props.min}
          aria-valuenow={props.modelValue}
          aria-valuemax={props.max}
          aria-orientation={props.vertical ? 'vertical' : 'horizontal'}
          onTouchstart={(e) => {
            if (typeof i === 'number') {
              // 保存当前按钮的索引
              index = i;
            }
            onTouchStart(e);
          }}
          onTouchmove={onTouchMove}
          onTouchend={onTouchEnd}
          onTouchcancel={onTouchEnd}
          onClick={(e) => e.stopPropagation()}
        >
          {slots.button ? (
            slots.button()
          ) : (
            <div class={bem('button')} style={getSizeStyle(props.buttonSize)} />
          )}
        </div>
      );
    };

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
          {props.range ? [renderButton(0), renderButton(1)] : renderButton()}
        </div>
      </div>
    );
  },
});
