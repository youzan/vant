import { ref, computed, PropType, CSSProperties } from 'vue';

// Utils
import {
  addUnit,
  getSizeStyle,
  preventDefault,
  stopPropagation,
  createNamespace,
} from '../utils';

// Composition
import { useRect } from '@vant/use';
import { useTouch } from '../composition/use-touch';
import { useLinkField } from '../composition/use-link-field';

const [createComponent, bem] = createNamespace('slider');

type SliderValue = number | number[];

export default createComponent({
  props: {
    range: Boolean,
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
      type: [Number, Array] as PropType<SliderValue>,
      default: 0,
    },
  },

  emits: ['change', 'drag-end', 'drag-start', 'update:modelValue'],

  setup(props, { emit, slots }) {
    let buttonIndex: number;
    let startValue: SliderValue;
    let currentValue: SliderValue;

    const root = ref<HTMLElement>();
    const dragStatus = ref<'start' | 'draging' | ''>();
    const touch = useTouch();

    const scope = computed(() => Number(props.max) - Number(props.min));

    const wrapperStyle = computed(() => {
      const crossAxis = props.vertical ? 'width' : 'height';
      return {
        background: props.inactiveColor,
        [crossAxis]: addUnit(props.barHeight),
      };
    });

    const isRange = (val: unknown): val is number[] =>
      !!props.range && Array.isArray(val);

    // 计算选中条的长度百分比
    const calcMainAxis = () => {
      const { modelValue, min } = props;
      if (isRange(modelValue)) {
        return `${((modelValue[1] - modelValue[0]) * 100) / scope.value}%`;
      }
      return `${((modelValue - Number(min)) * 100) / scope.value}%`;
    };

    // 计算选中条的开始位置的偏移量
    const calcOffset = () => {
      const { modelValue, min } = props;
      if (isRange(modelValue)) {
        return `${((modelValue[0] - Number(min)) * 100) / scope.value}%`;
      }
      return `0%`;
    };

    const barStyle = computed<CSSProperties>(() => {
      const mainAxis = props.vertical ? 'height' : 'width';
      return {
        [mainAxis]: calcMainAxis(),
        left: props.vertical ? undefined : calcOffset(),
        top: props.vertical ? calcOffset() : undefined,
        background: props.activeColor,
        transition: dragStatus.value ? 'none' : undefined,
      };
    });

    const format = (value: number) => {
      const { min, max, step } = props;
      value = Math.max(+min, Math.min(value, +max));
      return Math.round(value / +step) * +step;
    };

    const isSameValue = (newValue: SliderValue, oldValue: SliderValue) =>
      JSON.stringify(newValue) === JSON.stringify(oldValue);

    // 处理两个滑块重叠之后的情况
    const handleOverlap = (value: number[]) => {
      if (value[0] > value[1]) {
        return value.slice(0).reverse();
      }
      return value;
    };

    const updateValue = (value: SliderValue, end?: boolean) => {
      if (isRange(value)) {
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

    const onClick = (event: MouseEvent) => {
      event.stopPropagation();

      if (props.disabled) {
        return;
      }

      const { min, vertical, modelValue } = props;
      const rect = useRect(root);
      const delta = vertical
        ? event.clientY - rect.top
        : event.clientX - rect.left;
      const total = vertical ? rect.height : rect.width;
      const value = Number(min) + (delta / total) * scope.value;

      if (isRange(modelValue)) {
        const [left, right] = modelValue;
        const middle = (left + right) / 2;

        if (value <= middle) {
          updateValue([value, right], true);
        } else {
          updateValue([left, value], true);
        }
      } else {
        updateValue(value, true);
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      if (props.disabled) {
        return;
      }

      touch.start(event);
      currentValue = props.modelValue;

      if (isRange(currentValue)) {
        startValue = currentValue.map(format);
      } else {
        startValue = format(currentValue);
      }

      dragStatus.value = 'start';
    };

    const onTouchMove = (event: TouchEvent) => {
      if (props.disabled) {
        return;
      }

      if (dragStatus.value === 'start') {
        emit('drag-start');
      }

      preventDefault(event, true);
      touch.move(event);
      dragStatus.value = 'draging';

      const rect = useRect(root);
      const delta = props.vertical ? touch.deltaY.value : touch.deltaX.value;
      const total = props.vertical ? rect.height : rect.width;
      const diff = (delta / total) * scope.value;

      if (isRange(startValue)) {
        (currentValue as number[])[buttonIndex] =
          startValue[buttonIndex] + diff;
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

    const renderButton = (index?: number) => {
      const getClassName = () => {
        if (typeof index === 'number') {
          const position = ['left', 'right'];
          return `button-wrapper-${position[index]}`;
        }
        return `button-wrapper`;
      };

      const currentValue =
        typeof index === 'number'
          ? (props.modelValue as number[])[index]
          : (props.modelValue as number);

      return (
        <div
          role="slider"
          class={bem(getClassName())}
          tabindex={props.disabled ? -1 : 0}
          aria-valuemin={+props.min}
          aria-valuenow={currentValue}
          aria-valuemax={+props.max}
          aria-orientation={props.vertical ? 'vertical' : 'horizontal'}
          onTouchstart={(e) => {
            if (typeof index === 'number') {
              // save index of current button
              buttonIndex = index;
            }
            onTouchStart(e);
          }}
          onTouchmove={onTouchMove}
          onTouchend={onTouchEnd}
          onTouchcancel={onTouchEnd}
          onClick={stopPropagation}
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
    useLinkField(() => props.modelValue);

    return () => (
      <div
        ref={root}
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
