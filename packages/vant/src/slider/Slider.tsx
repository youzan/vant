import {
  ref,
  computed,
  defineComponent,
  type PropType,
  type CSSProperties,
  type ExtractPropTypes,
} from 'vue';

// Utils
import {
  clamp,
  addUnit,
  addNumber,
  numericProp,
  isSameValue,
  getSizeStyle,
  preventDefault,
  stopPropagation,
  createNamespace,
  makeNumericProp,
} from '../utils';

// Composables
import { useRect, useCustomFieldValue, useEventListener } from '@vant/use';
import { useTouch } from '../composables/use-touch';

const [name, bem] = createNamespace('slider');

type NumberRange = [number, number];

type SliderValue = number | NumberRange;

export const sliderProps = {
  min: makeNumericProp(0),
  max: makeNumericProp(100),
  step: makeNumericProp(1),
  range: Boolean,
  reverse: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  vertical: Boolean,
  barHeight: numericProp,
  buttonSize: numericProp,
  activeColor: String,
  inactiveColor: String,
  modelValue: {
    type: [Number, Array] as PropType<SliderValue>,
    default: 0,
  },
};

export type SliderProps = ExtractPropTypes<typeof sliderProps>;

export default defineComponent({
  name,

  props: sliderProps,

  emits: ['change', 'dragEnd', 'dragStart', 'update:modelValue'],

  setup(props, { emit, slots }) {
    let buttonIndex: 0 | 1;
    let current: SliderValue;
    let startValue: SliderValue;

    const root = ref<HTMLElement>();
    const slider = [ref<HTMLElement>(), ref<HTMLElement>()] as const;
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

    const isRange = (val: unknown): val is NumberRange =>
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

    const barStyle = computed(() => {
      const mainAxis = props.vertical ? 'height' : 'width';
      const style: CSSProperties = {
        [mainAxis]: calcMainAxis(),
        background: props.activeColor,
      };

      if (dragStatus.value) {
        style.transition = 'none';
      }

      const getPositionKey = () => {
        if (props.vertical) {
          return props.reverse ? 'bottom' : 'top';
        }
        return props.reverse ? 'right' : 'left';
      };

      style[getPositionKey()] = calcOffset();

      return style;
    });

    const format = (value: number) => {
      const min = +props.min;
      const max = +props.max;
      const step = +props.step;

      value = clamp(value, min, max);
      const diff = Math.round((value - min) / step) * step;
      return addNumber(min, diff);
    };

    const handleRangeValue = (value: NumberRange) => {
      // 设置默认值
      const left = value[0] ?? Number(props.min);
      const right = value[1] ?? Number(props.max);
      // 处理两个滑块重叠之后的情况
      return left > right ? [right, left] : [left, right];
    };

    const updateValue = (value: SliderValue, end?: boolean) => {
      if (isRange(value)) {
        value = handleRangeValue(value).map(format) as NumberRange;
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

      const { min, reverse, vertical, modelValue } = props;
      const rect = useRect(root);

      const getDelta = () => {
        if (vertical) {
          if (reverse) {
            return rect.bottom - event.clientY;
          }
          return event.clientY - rect.top;
        }
        if (reverse) {
          return rect.right - event.clientX;
        }
        return event.clientX - rect.left;
      };

      const total = vertical ? rect.height : rect.width;
      const value = Number(min) + (getDelta() / total) * scope.value;

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
      current = props.modelValue;

      if (isRange(current)) {
        startValue = current.map(format) as NumberRange;
      } else {
        startValue = format(current);
      }

      dragStatus.value = 'start';
    };

    const onTouchMove = (event: TouchEvent) => {
      if (props.disabled || props.readonly) {
        return;
      }

      if (dragStatus.value === 'start') {
        emit('dragStart', event);
      }

      preventDefault(event, true);
      touch.move(event);
      dragStatus.value = 'dragging';

      const rect = useRect(root);
      const delta = props.vertical ? touch.deltaY.value : touch.deltaX.value;
      const total = props.vertical ? rect.height : rect.width;

      let diff = (delta / total) * scope.value;
      if (props.reverse) {
        diff = -diff;
      }

      if (isRange(startValue)) {
        const index = props.reverse ? 1 - buttonIndex : buttonIndex;
        (current as NumberRange)[index] = startValue[index] + diff;
      } else {
        current = startValue + diff;
      }
      updateValue(current);
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (props.disabled || props.readonly) {
        return;
      }

      if (dragStatus.value === 'dragging') {
        updateValue(current, true);
        emit('dragEnd', event);
      }

      dragStatus.value = '';
    };

    const getButtonClassName = (index?: 0 | 1) => {
      if (typeof index === 'number') {
        const position = ['left', 'right'];
        return bem(`button-wrapper`, position[index]);
      }
      return bem('button-wrapper', props.reverse ? 'left' : 'right');
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
      const current =
        typeof index === 'number'
          ? (props.modelValue as NumberRange)[index]
          : (props.modelValue as number);

      return (
        <div
          ref={slider[index ?? 0]}
          role="slider"
          class={getButtonClassName(index)}
          tabindex={props.disabled ? undefined : 0}
          aria-valuemin={props.min}
          aria-valuenow={current}
          aria-valuemax={props.max}
          aria-disabled={props.disabled || undefined}
          aria-readonly={props.readonly || undefined}
          aria-orientation={props.vertical ? 'vertical' : 'horizontal'}
          onTouchstartPassive={(event) => {
            if (typeof index === 'number') {
              // save index of current button
              buttonIndex = index;
            }
            onTouchStart(event);
          }}
          onTouchend={onTouchEnd}
          onTouchcancel={onTouchEnd}
          onClick={stopPropagation}
        >
          {renderButtonContent(current, index)}
        </div>
      );
    };

    // format initial value
    updateValue(props.modelValue);
    useCustomFieldValue(() => props.modelValue);

    slider.forEach((item) => {
      // useEventListener will set passive to `false` to eliminate the warning of Chrome
      useEventListener('touchmove', onTouchMove, {
        target: item,
      });
    });

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
