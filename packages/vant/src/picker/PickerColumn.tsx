import { ref, reactive, defineComponent, type InjectionKey, watch } from 'vue';

// Utils
import {
  clamp,
  numericProp,
  makeArrayProp,
  preventDefault,
  createNamespace,
  makeRequiredProp,
} from '../utils';

// Composables
import { useParent } from '@vant/use';
import { useTouch } from '../composables/use-touch';
import { useExpose } from '../composables/use-expose';

// Types
import type { PickerOption, PickerColumnProvide } from './types';

const DEFAULT_DURATION = 200;

// 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_LIMIT_TIME` 且 move
// 距离大于 `MOMENTUM_LIMIT_DISTANCE` 时，执行惯性滑动
const MOMENTUM_LIMIT_TIME = 300;
const MOMENTUM_LIMIT_DISTANCE = 15;

const [name, bem] = createNamespace('picker-column');

function getElementTranslateY(element: Element) {
  const { transform } = window.getComputedStyle(element);
  const translateY = transform.slice(7, transform.length - 1).split(', ')[5];
  return Number(translateY);
}

export const PICKER_KEY: InjectionKey<PickerColumnProvide> = Symbol(name);

export default defineComponent({
  name,

  props: {
    value: numericProp,
    textKey: makeRequiredProp(String),
    options: makeArrayProp<PickerOption>(),
    readonly: Boolean,
    valueKey: makeRequiredProp(String),
    allowHtml: Boolean,
    itemHeight: makeRequiredProp(Number),
    swipeDuration: makeRequiredProp(numericProp),
    visibleItemCount: makeRequiredProp(numericProp),
  },

  emits: ['change'],

  setup(props, { emit, slots }) {
    let moving: boolean;
    let startOffset: number;
    let touchStartTime: number;
    let momentumOffset: number;
    let transitionEndTrigger: null | (() => void);

    const wrapper = ref<HTMLElement>();

    const state = reactive({
      offset: 0,
      duration: 0,
    });

    const touch = useTouch();

    const count = () => props.options.length;

    const baseOffset = () =>
      (props.itemHeight * (+props.visibleItemCount - 1)) / 2;

    const adjustIndex = (index: number) => {
      index = clamp(index, 0, count());

      for (let i = index; i < count(); i++) {
        if (!props.options[i].disabled) return i;
      }
      for (let i = index - 1; i >= 0; i--) {
        if (!props.options[i].disabled) return i;
      }
      return 0;
    };

    const updateValueByIndex = (index: number) => {
      index = adjustIndex(index);

      const offset = -index * props.itemHeight;
      const trigger = () => {
        const { value } = props.options[index];
        if (value !== props.value) {
          emit('change', value);
        }
      };

      // trigger the change event after transitionend when moving
      if (moving && offset !== state.offset) {
        transitionEndTrigger = trigger;
      } else {
        trigger();
      }

      state.offset = offset;
    };

    const onClickItem = (index: number) => {
      if (moving || props.readonly) {
        return;
      }

      transitionEndTrigger = null;
      state.duration = DEFAULT_DURATION;
      updateValueByIndex(index);
    };

    const getIndexByOffset = (offset: number) =>
      clamp(Math.round(-offset / props.itemHeight), 0, count() - 1);

    const momentum = (distance: number, duration: number) => {
      const speed = Math.abs(distance / duration);

      distance = state.offset + (speed / 0.003) * (distance < 0 ? -1 : 1);

      const index = getIndexByOffset(distance);

      state.duration = +props.swipeDuration;
      updateValueByIndex(index);
    };

    const stopMomentum = () => {
      moving = false;
      state.duration = 0;

      if (transitionEndTrigger) {
        transitionEndTrigger();
        transitionEndTrigger = null;
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      if (props.readonly) {
        return;
      }

      touch.start(event);

      if (moving) {
        const translateY = getElementTranslateY(wrapper.value!);
        state.offset = Math.min(0, translateY - baseOffset());
        startOffset = state.offset;
      } else {
        startOffset = state.offset;
      }

      state.duration = 0;
      touchStartTime = Date.now();
      momentumOffset = startOffset;
      transitionEndTrigger = null;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (props.readonly) {
        return;
      }

      touch.move(event);

      if (touch.isVertical()) {
        moving = true;
        preventDefault(event, true);
      }

      state.offset = clamp(
        startOffset + touch.deltaY.value,
        -(count() * props.itemHeight),
        props.itemHeight
      );

      const now = Date.now();
      if (now - touchStartTime > MOMENTUM_LIMIT_TIME) {
        touchStartTime = now;
        momentumOffset = state.offset;
      }
    };

    const onTouchEnd = () => {
      if (props.readonly) {
        return;
      }

      const distance = state.offset - momentumOffset;
      const duration = Date.now() - touchStartTime;
      const allowMomentum =
        duration < MOMENTUM_LIMIT_TIME &&
        Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

      if (allowMomentum) {
        momentum(distance, duration);
        return;
      }

      const index = getIndexByOffset(state.offset);
      state.duration = DEFAULT_DURATION;
      updateValueByIndex(index);

      // compatible with desktop scenario
      // use setTimeout to skip the click event emitted after touchstart
      setTimeout(() => {
        moving = false;
      }, 0);
    };

    const renderOptions = () => {
      const optionStyle = {
        height: `${props.itemHeight}px`,
      };

      return props.options.map((option, index) => {
        const text = option[props.textKey];
        const { disabled } = option;
        const value: string | number = option[props.valueKey];
        const data = {
          role: 'button',
          style: optionStyle,
          tabindex: disabled ? -1 : 0,
          class: bem('item', {
            disabled,
            selected: value === props.value,
          }),
          onClick: () => onClickItem(index),
        };

        const childData = {
          class: 'van-ellipsis',
          [props.allowHtml ? 'innerHTML' : 'textContent']: text,
        };

        return (
          <li {...data}>
            {slots.option ? slots.option(option) : <div {...childData} />}
          </li>
        );
      });
    };

    useParent(PICKER_KEY);
    useExpose({ stopMomentum });

    watch(
      () => props.value,
      (value) => {
        const index = props.options.findIndex(
          (option) => option[props.valueKey] === value
        );
        const offset = -adjustIndex(index) * props.itemHeight;
        state.offset = offset;
      }
    );

    return () => (
      <div
        class={bem()}
        onTouchstart={onTouchStart}
        onTouchmove={onTouchMove}
        onTouchend={onTouchEnd}
        onTouchcancel={onTouchEnd}
      >
        <ul
          ref={wrapper}
          style={{
            transform: `translate3d(0, ${state.offset + baseOffset()}px, 0)`,
            transitionDuration: `${state.duration}ms`,
            transitionProperty: state.duration ? 'all' : 'none',
          }}
          class={bem('wrapper')}
          onTransitionend={stopMomentum}
        >
          {renderOptions()}
        </ul>
      </div>
    );
  },
});
