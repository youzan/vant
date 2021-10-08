import { ref, watch, reactive, defineComponent } from 'vue';

// Utils
import { deepClone } from '../utils/deep-clone';
import {
  clamp,
  isObject,
  unknownProp,
  numericProp,
  makeArrayProp,
  makeNumberProp,
  preventDefault,
  createNamespace,
  makeRequiredProp,
} from '../utils';

// Composables
import { useParent } from '@vant/use';
import { useTouch } from '../composables/use-touch';
import { useExpose } from '../composables/use-expose';

// Types
import type { PickerOption } from './types';

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

export const PICKER_KEY = Symbol(name);

const isOptionDisabled = (option: PickerOption) =>
  isObject(option) && option.disabled;

export default defineComponent({
  name,

  props: {
    textKey: makeRequiredProp(String),
    readonly: Boolean,
    allowHtml: Boolean,
    className: unknownProp,
    itemHeight: makeRequiredProp(Number),
    defaultIndex: makeNumberProp(0),
    swipeDuration: makeRequiredProp(numericProp),
    initialOptions: makeArrayProp<PickerOption>(),
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
      index: props.defaultIndex,
      offset: 0,
      duration: 0,
      options: deepClone(props.initialOptions),
    });

    const touch = useTouch();

    const count = () => state.options.length;

    const baseOffset = () =>
      (props.itemHeight * (+props.visibleItemCount - 1)) / 2;

    const adjustIndex = (index: number) => {
      index = clamp(index, 0, count());

      for (let i = index; i < count(); i++) {
        if (!isOptionDisabled(state.options[i])) return i;
      }
      for (let i = index - 1; i >= 0; i--) {
        if (!isOptionDisabled(state.options[i])) return i;
      }
    };

    const setIndex = (index: number, emitChange?: boolean) => {
      index = adjustIndex(index) || 0;

      const offset = -index * props.itemHeight;
      const trigger = () => {
        if (index !== state.index) {
          state.index = index;

          if (emitChange) {
            emit('change', index);
          }
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

    const setOptions = (options: PickerOption[]) => {
      if (JSON.stringify(options) !== JSON.stringify(state.options)) {
        state.options = deepClone(options);
        setIndex(props.defaultIndex);
      }
    };

    const onClickItem = (index: number) => {
      if (moving || props.readonly) {
        return;
      }

      transitionEndTrigger = null;
      state.duration = DEFAULT_DURATION;
      setIndex(index, true);
    };

    const getOptionText = (option: PickerOption) => {
      if (isObject(option) && props.textKey in option) {
        return option[props.textKey];
      }
      return option;
    };

    const getIndexByOffset = (offset: number) =>
      clamp(Math.round(-offset / props.itemHeight), 0, count() - 1);

    const momentum = (distance: number, duration: number) => {
      const speed = Math.abs(distance / duration);

      distance = state.offset + (speed / 0.003) * (distance < 0 ? -1 : 1);

      const index = getIndexByOffset(distance);

      state.duration = +props.swipeDuration;
      setIndex(index, true);
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
      setIndex(index, true);

      // compatible with desktop scenario
      // use setTimeout to skip the click event Emitted after touchstart
      setTimeout(() => {
        moving = false;
      }, 0);
    };

    const renderOptions = () => {
      const optionStyle = {
        height: `${props.itemHeight}px`,
      };

      return state.options.map((option, index: number) => {
        const text = getOptionText(option);
        const disabled = isOptionDisabled(option);

        const data = {
          role: 'button',
          style: optionStyle,
          tabindex: disabled ? -1 : 0,
          class: bem('item', {
            disabled,
            selected: index === state.index,
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

    const setValue = (value: string) => {
      const { options } = state;
      for (let i = 0; i < options.length; i++) {
        if (getOptionText(options[i]) === value) {
          return setIndex(i);
        }
      }
    };

    const getValue = (): PickerOption => state.options[state.index];

    setIndex(state.index);

    useParent(PICKER_KEY);
    useExpose({
      state,
      setIndex,
      getValue,
      setValue,
      setOptions,
      stopMomentum,
    });

    watch(() => props.initialOptions, setOptions);

    watch(
      () => props.defaultIndex,
      (value) => setIndex(value)
    );

    return () => (
      <div
        class={[bem(), props.className]}
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
