import {
  ref,
  watch,
  reactive,
  computed,
  onMounted,
  onActivated,
  onDeactivated,
  onBeforeUnmount,
} from 'vue';

// Utils
import { range, isHidden, preventDefault, createNamespace } from '../utils';

// Composition
import {
  useRect,
  doubleRaf,
  useChildren,
  useWindowSize,
  usePageVisibility,
} from '@vant/use';
import { useTouch } from '../composition/use-touch';
import { useExpose } from '../composition/use-expose';

const [createComponent, bem] = createNamespace('swipe');

export const SWIPE_KEY = 'vanSwipe';

export default createComponent({
  props: {
    width: [Number, String],
    height: [Number, String],
    autoplay: [Number, String],
    vertical: Boolean,
    lazyRender: Boolean,
    indicatorColor: String,
    loop: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: [Number, String],
      default: 500,
    },
    touchable: {
      type: Boolean,
      default: true,
    },
    initialSwipe: {
      type: [Number, String],
      default: 0,
    },
    showIndicators: {
      type: Boolean,
      default: true,
    },
    stopPropagation: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['change'],

  setup(props, { emit, slots }) {
    const root = ref();
    const state = reactive({
      rect: null,
      width: 0,
      height: 0,
      offset: 0,
      active: 0,
      swiping: false,
    });

    const touch = useTouch();
    const windowSize = useWindowSize();
    const { children, linkChildren } = useChildren(SWIPE_KEY);

    const count = computed(() => children.length);

    const size = computed(() => state[props.vertical ? 'height' : 'width']);

    const delta = computed(() =>
      props.vertical ? touch.deltaY.value : touch.deltaX.value
    );

    const minOffset = computed(
      () =>
        (props.vertical ? state.rect.height : state.rect.width) -
        size.value * count.value
    );

    const maxCount = computed(() =>
      Math.ceil(Math.abs(minOffset.value) / size.value)
    );

    const trackSize = computed(() => count.value * size.value);

    const activeIndicator = computed(
      () => (state.active + count.value) % count.value
    );

    const isCorrectDirection = computed(() => {
      const expect = props.vertical ? 'vertical' : 'horizontal';
      return touch.direction.value === expect;
    });

    const trackStyle = computed(() => {
      const mainAxis = props.vertical ? 'height' : 'width';
      const crossAxis = props.vertical ? 'width' : 'height';

      return {
        [mainAxis]: `${trackSize.value}px`,
        [crossAxis]: props[crossAxis] ? `${props[crossAxis]}px` : '',
        transitionDuration: `${state.swiping ? 0 : props.duration}ms`,
        transform: `translate${props.vertical ? 'Y' : 'X'}(${state.offset}px)`,
      };
    });

    const getTargetActive = (pace) => {
      const { active } = state;

      if (pace) {
        if (props.loop) {
          return range(active + pace, -1, count.value);
        }
        return range(active + pace, 0, maxCount.value);
      }
      return active;
    };

    const getTargetOffset = (targetActive, offset = 0) => {
      let currentPosition = targetActive * size.value;
      if (!props.loop) {
        currentPosition = Math.min(currentPosition, -minOffset.value);
      }

      let targetOffset = Math.round(offset - currentPosition);
      if (!props.loop) {
        targetOffset = range(targetOffset, minOffset.value, 0);
      }

      return targetOffset;
    };

    const move = ({ pace = 0, offset = 0, emitChange }) => {
      if (count.value <= 1) {
        return;
      }

      const { active } = state;
      const targetActive = getTargetActive(pace);
      const targetOffset = getTargetOffset(targetActive, offset);

      // auto move first and last swipe in loop mode
      if (props.loop) {
        if (children[0] && targetOffset !== minOffset.value) {
          const outRightBound = targetOffset < minOffset.value;
          children[0].setOffset(outRightBound ? trackSize.value : 0);
        }

        if (children[count.value - 1] && targetOffset !== 0) {
          const outLeftBound = targetOffset > 0;
          children[count.value - 1].setOffset(
            outLeftBound ? -trackSize.value : 0
          );
        }
      }

      state.active = targetActive;
      state.offset = targetOffset;

      if (emitChange && targetActive !== active) {
        emit('change', activeIndicator.value);
      }
    };

    const correctPosition = () => {
      state.swiping = true;

      if (state.active <= -1) {
        move({ pace: count.value });
      }
      if (state.active >= count.value) {
        move({ pace: -count.value });
      }
    };

    const prev = () => {
      correctPosition();
      touch.reset();

      doubleRaf(() => {
        state.swiping = false;
        move({
          pace: -1,
          emitChange: true,
        });
      });
    };

    const next = () => {
      correctPosition();
      touch.reset();

      doubleRaf(() => {
        state.swiping = false;
        move({
          pace: 1,
          emitChange: true,
        });
      });
    };

    let autoplayTimer;

    const stopAutoplay = () => {
      clearTimeout(autoplayTimer);
    };

    const autoplay = () => {
      if (props.autoplay > 0 && count.value > 1) {
        stopAutoplay();
        autoplayTimer = setTimeout(() => {
          next();
          autoplay();
        }, props.autoplay);
      }
    };

    // initialize swipe position
    const initialize = (active = +props.initialSwipe) => {
      console.log('initialize', children.length, active);
      if (!root.value || isHidden(root)) {
        return;
      }

      stopAutoplay();

      const rect = useRect(root);

      state.rect = rect;
      state.swiping = true;
      state.active = active;
      state.width = Math.floor(+props.width || rect.width);
      state.height = Math.floor(+props.height || rect.height);
      state.offset = getTargetOffset(active);
      children.forEach((swipe) => {
        swipe.setOffset(0);
      });

      autoplay();
    };

    const resize = () => {
      initialize(activeIndicator.value);
    };

    let touchStartTime;

    const onTouchStart = (event) => {
      if (!props.touchable) return;

      touch.start(event);
      touchStartTime = Date.now();

      stopAutoplay();
      correctPosition();
    };

    const onTouchMove = (event) => {
      if (props.touchable && state.swiping) {
        touch.move(event);

        if (isCorrectDirection.value) {
          preventDefault(event, props.stopPropagation);
          move({ offset: delta.value });
        }
      }
    };

    const onTouchEnd = () => {
      if (!props.touchable || !state.swiping) {
        return;
      }

      const duration = Date.now() - touchStartTime;
      const speed = delta.value / duration;
      const shouldSwipe =
        Math.abs(speed) > 0.25 || Math.abs(delta.value) > size.value / 2;

      if (shouldSwipe && isCorrectDirection.value) {
        const offset = props.vertical
          ? touch.offsetY.value
          : touch.offsetX.value;

        let pace = 0;

        if (props.loop) {
          pace = offset > 0 ? (delta.value > 0 ? -1 : 1) : 0;
        } else {
          pace = -Math[delta.value > 0 ? 'ceil' : 'floor'](
            delta.value / size.value
          );
        }

        move({
          pace,
          emitChange: true,
        });
      } else if (delta.value) {
        move({ pace: 0 });
      }

      state.swiping = false;
      autoplay();
    };

    const swipeTo = (index, options = {}) => {
      correctPosition();
      touch.reset();

      doubleRaf(() => {
        let targetIndex;
        if (props.loop && index === count.value) {
          targetIndex = state.active === 0 ? 0 : index;
        } else {
          targetIndex = index % count.value;
        }

        if (options.immediate) {
          doubleRaf(() => {
            state.swiping = false;
          });
        } else {
          state.swiping = false;
        }

        move({
          pace: targetIndex - state.active,
          emitChange: true,
        });
      });
    };

    const renderDot = (_, index) => {
      const active = index === activeIndicator.value;
      const style = active ? { backgroundColor: props.indicatorColor } : null;
      return <i style={style} class={bem('indicator', { active })} />;
    };

    const renderIndicator = () => {
      if (slots.indicator) {
        return slots.indicator();
      }
      if (props.showIndicators && count.value > 1) {
        return (
          <div class={bem('indicators', { vertical: props.vertical })}>
            {Array(...Array(count.value)).map(renderDot)}
          </div>
        );
      }
    };

    useExpose({
      prev,
      next,
      state,
      resize,
      swipeTo,
    });

    linkChildren({ size, props, count, activeIndicator });

    watch([() => children.length, () => props.initialSwipe], () => {
      initialize();
    });

    watch(
      () => props.autoplay,
      (value) => {
        if (value > 0) {
          autoplay();
        } else {
          stopAutoplay();
        }
      }
    );

    watch([windowSize.width, windowSize.height], resize);

    watch(usePageVisibility(), (visible) => {
      if (visible) {
        autoplay();
      } else {
        stopAutoplay();
      }
    });

    onMounted(initialize);
    onActivated(initialize);
    onDeactivated(stopAutoplay);
    onBeforeUnmount(stopAutoplay);

    return () => (
      <div ref={root} class={bem()}>
        <div
          style={trackStyle.value}
          class={bem('track', { vertical: props.vertical })}
          onTouchstart={onTouchStart}
          onTouchmove={onTouchMove}
          onTouchend={onTouchEnd}
          onTouchcancel={onTouchEnd}
        >
          {slots.default?.()}
        </div>
        {renderIndicator()}
      </div>
    );
  },
});
