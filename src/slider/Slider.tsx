import { ref, computed, PropType, CSSProperties, defineComponent } from 'vue';

// Utils
import {
  clamp,
  addUnit,
  addNumber,
  getSizeStyle,
  preventDefault,
  stopPropagation,
  createNamespace,
} from '../utils';

// Composables
import { useRect, useCustomFieldValue } from '@vant/use';
import { useTouch } from '../composables/use-touch';

const [name, bem] = createNamespace('slider');

type SliderValue = number | [number, number];

export default defineComponent({
  name,

  props: {
    range: Boolean,
    disabled: Boolean,
    readonly: Boolean,
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
    let buttonIndex: 0 | 1;
    let startValue: SliderValue;
    let currentValue: SliderValue;

    const root = ref<HTMLElement>();
    const dragStatus = ref<'start' | 'dragging' | ''>();
    const touch = useTouch();

    const scope = computed(() => Number(props.max) - Number(props.min));

    const wrapperStyle = computed(() => {
      const crossAxis = props.vertical ? 'width' : 'height';
      return {
        background: props.inactiveColor,
        [crossAxis]: addUnit(props.barHeight),
      };
    });

    const isRange = (val: unknown): val is [number, number] =>
      props.range && Array.isArray(val);

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
      return '0%';
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
      const min = +props.min;
      const max = +props.max;
      const step = +props.step;

      value = clamp(value, min, max);
      const diff = Math.round((value - min) / step) * step;
      return addNumber(min, diff);
    };

    const isSameValue = (newValue: SliderValue, oldValue: SliderValue) =>
      JSON.stringify(newValue) === JSON.stringify(oldValue);

    // 处理两个滑块重叠之后的情况
    const handleOverlap = (value: [number, number]) => {
      if (value[0] > value[1]) {
        return value.slice(0).reverse();
      }
      return value;
    };

    const updateValue = (value: SliderValue, end?: boolean) => {
      if (isRange(value)) {
        value = handleOverlap(value).map(format) as [number, number];
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

      if (props.disabled || props.readonly) {
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
      if (props.disabled || props.readonly) {
        return;
      }

      touch.start(event);
      currentValue = props.modelValue;

      if (isRange(currentValue)) {
        startValue = currentValue.map(format) as [number, number];
      } else {
        startValue = format(currentValue);
      }

      dragStatus.value = 'start';
    };

    const onTouchMove = (event: TouchEvent) => {
      if (props.disabled || props.readonly) {
        return;
      }

      if (dragStatus.value === 'start') {
        emit('drag-start', event);
      }

      preventDefault(event, true);
      touch.move(event);
      dragStatus.value = 'dragging';

      const rect = useRect(root);
      const delta = props.vertical ? touch.deltaY.value : touch.deltaX.value;
      const total = props.vertical ? rect.height : rect.width;
      const diff = (delta / total) * scope.value;

      if (isRange(startValue)) {
        (currentValue as [number, number])[buttonIndex] =
          startValue[buttonIndex] + diff;
      } else {
        currentValue = startValue + diff;
      }
      updateValue(currentValue);
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (props.disabled || props.readonly) {
        return;
      }

      if (dragStatus.value === 'dragging') {
        updateValue(currentValue, true);
        emit('drag-end', event);
      }

      dragStatus.value = '';
    };

    const getButtonClassName = (index?: 0 | 1) => {
      if (typeof index === 'number') {
        const position = ['left', 'right'];
        return bem(`button-wrapper-${position[index]}`);
      }
      return bem('button-wrapper');
    };

    const renderButtonContent = (value: number, index?: 0 | 1) => {
      if (typeof index === 'number') {
        const slot = slots[index === 0 ? 'left-button' : 'right-button'];
        if (slot) {
          return slot({ value });
        }
      }

      if (slots.button) {
        return slots.button({ value });
      }

      return (
        <div class={bem('button')} style={getSizeStyle(props.buttonSize)} />
      );
    };

    const renderButton = (index?: 0 | 1) => {
      const currentValue =
        typeof index === 'number'
          ? (props.modelValue as [number, number])[index]
          : (props.modelValue as number);

      return (
        <div
          role="slider"
          class={getButtonClassName(index)}
          tabindex={props.disabled || props.readonly ? -1 : 0}
          aria-valuemin={+props.min}
          aria-valuenow={currentValue}
          aria-valuemax={+props.max}
          aria-orientation={props.vertical ? 'vertical' : 'horizontal'}
          onTouchstart={(event) => {
            if (typeof index === 'number') {
              // save index of current button
              buttonIndex = index;
            }
            onTouchStart(event);
          }}
          onTouchmove={onTouchMove}
          onTouchend={onTouchEnd}
          onTouchcancel={onTouchEnd}
          onClick={stopPropagation}
        >
          {renderButtonContent(currentValue, index)}
        </div>
      );
    };

    // format initial value
    updateValue(props.modelValue);
    useCustomFieldValue(() => props.modelValue);

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
