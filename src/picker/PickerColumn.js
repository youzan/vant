import { reactive, ref, watch } from 'vue';
import { PICKER_KEY } from './shared';

// Utils
import { deepClone } from '../utils/deep-clone';
import { range, isObject, createNamespace, preventDefault } from '../utils';

// Composition
import { useParent } from '@vant/use';
import { useTouch } from '../composition/use-touch';
import { useExpose } from '../composition/use-expose';

const DEFAULT_DURATION = 200;

// 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_LIMIT_TIME` 且 move
// 距离大于 `MOMENTUM_LIMIT_DISTANCE` 时，执行惯性滑动
const MOMENTUM_LIMIT_TIME = 300;
const MOMENTUM_LIMIT_DISTANCE = 15;

const [createComponent, bem] = createNamespace('picker-column');

function getElementTranslateY(element) {
  const style = window.getComputedStyle(element);
  const transform = style.transform || style.webkitTransform;
  const translateY = transform.slice(7, transform.length - 1).split(', ')[5];

  return Number(translateY);
}

function isOptionDisabled(option) {
  return isObject(option) && option.disabled;
}

export default createComponent({
  props: {
    valueKey: String,
    readonly: Boolean,
    allowHtml: Boolean,
    className: String,
    itemHeight: Number,
    defaultIndex: Number,
    swipeDuration: [Number, String],
    visibleItemCount: [Number, String],
    initialOptions: {
      type: Array,
      default: () => [],
    },
  },

  emits: ['change'],

  setup(props, { emit, slots }) {
    let moving;
    let startOffset;
    let touchStartTime;
    let momentumOffset;
    let transitionEndTrigger;

    const wrapper = ref();

    const state = reactive({
      index: props.defaultIndex,
      offset: 0,
      duration: 0,
      options: deepClone(props.initialOptions),
    });

    const touch = useTouch();

    const count = () => state.options.length;

    const baseOffset = () =>
      (props.itemHeight * (props.visibleItemCount - 1)) / 2;

    const adjustIndex = (index) => {
      index = range(index, 0, count());

      for (let i = index; i < count(); i++) {
        if (!isOptionDisabled(state.options[i])) return i;
      }
      for (let i = index - 1; i >= 0; i--) {
        if (!isOptionDisabled(state.options[i])) return i;
      }
    };

    const setIndex = (index, emitChange) => {
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

    const setOptions = (options) => {
      if (JSON.stringify(options) !== JSON.stringify(state.options)) {
        state.options = deepClone(options);
        setIndex(props.defaultIndex);
      }
    };

    const onClickItem = (index) => {
      if (moving || props.readonly) {
        return;
      }

      transitionEndTrigger = null;
      state.duration = DEFAULT_DURATION;
      setIndex(index, true);
    };

    const getOptionText = (option) => {
      if (isObject(option) && props.valueKey in option) {
        return option[props.valueKey];
      }
      return option;
    };

    const getIndexByOffset = (offset) =>
      range(Math.round(-offset / props.itemHeight), 0, count() - 1);

    const momentum = (distance, duration) => {
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

    const onTouchStart = (event) => {
      if (props.readonly) {
        return;
      }

      touch.start(event);

      if (moving) {
        const translateY = getElementTranslateY(wrapper.value);
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

    const onTouchMove = (event) => {
      if (props.readonly) {
        return;
      }

      touch.move(event);

      if (touch.isVertical()) {
        moving = true;
        preventDefault(event, true);
      }

      state.offset = range(
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
      // use setTimeout to skip the click event triggered after touchstart
      setTimeout(() => {
        moving = false;
      }, 0);
    };

    const renderOptions = () => {
      const optionStyle = {
        height: `${props.itemHeight}px`,
      };

      return state.options.map((option, index) => {
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
          onClick: () => {
            onClickItem(index);
          },
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

    const setValue = (value) => {
      const { options } = state;
      for (let i = 0; i < options.length; i++) {
        if (getOptionText(options[i]) === value) {
          return setIndex(i);
        }
      }
    };

    const getValue = () => state.options[state.index];

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
      (value) => {
        setIndex(value);
      }
    );

    return () => {
      const wrapperStyle = {
        transform: `translate3d(0, ${state.offset + baseOffset()}px, 0)`,
        transitionDuration: `${state.duration}ms`,
        transitionProperty: state.duration ? 'all' : 'none',
      };

      return (
        <div
          class={[bem(), props.className]}
          onTouchstart={onTouchStart}
          onTouchmove={onTouchMove}
          onTouchend={onTouchEnd}
          onTouchcancel={onTouchEnd}
        >
          <ul
            ref={wrapper}
            style={wrapperStyle}
            class={bem('wrapper')}
            onTransitionend={stopMomentum}
          >
            {renderOptions()}
          </ul>
        </div>
      );
    };
  },
});
