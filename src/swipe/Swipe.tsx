import {
  ref,
  watch,
  reactive,
  computed,
  onMounted,
  onActivated,
  InjectionKey,
  CSSProperties,
  onDeactivated,
  onBeforeUnmount,
  defineComponent,
  ExtractPropTypes,
} from 'vue';

// Utils
import {
  clamp,
  isHidden,
  truthProp,
  preventDefault,
  createNamespace,
} from '../utils';

// Composables
import {
  doubleRaf,
  useChildren,
  useWindowSize,
  usePageVisibility,
} from '@vant/use';
import { useTouch } from '../composables/use-touch';
import { useExpose } from '../composables/use-expose';
import { onPopupReopen } from '../composables/on-popup-reopen';

// Types
import { SwipeState, SwipeExpose, SwipeProvide, SwipeToOptions } from './types';

const [name, bem] = createNamespace('swipe');

const props = {
  loop: truthProp,
  width: [Number, String],
  height: [Number, String],
  vertical: Boolean,
  touchable: truthProp,
  lazyRender: Boolean,
  indicatorColor: String,
  showIndicators: truthProp,
  stopPropagation: truthProp,
  autoplay: {
    type: [Number, String],
    default: 0,
  },
  duration: {
    type: [Number, String],
    default: 500,
  },
  initialSwipe: {
    type: [Number, String],
    default: 0,
  },
};

export type SwipeProps = ExtractPropTypes<typeof props>;

export const SWIPE_KEY: InjectionKey<SwipeProvide> = Symbol(name);

export default defineComponent({
  name,

  props,

  emits: ['change'],

  setup(props, { emit, slots }) {
    const root = ref<HTMLElement>();
    const state = reactive<SwipeState>({
      rect: null,
      width: 0,
      height: 0,
      offset: 0,
      active: 0, // item位置
      swiping: false, // 是否滚动
    });

    const touch = useTouch();
    const windowSize = useWindowSize();
    const { children, linkChildren } = useChildren(SWIPE_KEY);

    // item 的个数
    const count = computed(() => children.length);

    const size = computed(() => state[props.vertical ? 'height' : 'width']);

    const delta = computed(() =>
      props.vertical ? touch.deltaY.value : touch.deltaX.value
    );

    const minOffset = computed(() => {
      if (state.rect) {
        const base = props.vertical ? state.rect.height : state.rect.width;
        return base - size.value * count.value;
      }
      return 0;
    });

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
      const style: CSSProperties = {
        transitionDuration: `${state.swiping ? 0 : props.duration}ms`,
        transform: `translate${props.vertical ? 'Y' : 'X'}(${state.offset}px)`,
      };

      if (size.value) {
        const mainAxis = props.vertical ? 'height' : 'width';
        const crossAxis = props.vertical ? 'width' : 'height';
        style[mainAxis] = `${trackSize.value}px`;
        style[crossAxis] = props[crossAxis] ? `${props[crossAxis]}px` : '';
      }

      return style;
    });
    // 获取当前为第几页
    const getTargetActive = (pace: number) => {
      const { active } = state;

      if (pace) {
        if (props.loop) {
          return clamp(active + pace, -1, count.value);
        }
        return clamp(active + pace, 0, maxCount.value);
      }
      return active;
    };
    // 获取当前offset的值
    const getTargetOffset = (targetActive: number, offset = 0) => {
      let currentPosition = targetActive * size.value;
      if (!props.loop) {
        currentPosition = Math.min(currentPosition, -minOffset.value);
      }

      let targetOffset = offset - currentPosition;
      if (!props.loop) {
        targetOffset = clamp(targetOffset, minOffset.value, 0);
      }

      return targetOffset;
    };

    // 移动每个选项
    const move = ({
      pace = 0,
      offset = 0,
      emitChange,
    }: {
      pace?: number;
      offset?: number;
      emitChange?: boolean;
    }) => {
      if (count.value <= 1) {
        return;
      }

      const { active } = state;
      const targetActive = getTargetActive(pace); // 获取当前为第几页
      const targetOffset = getTargetOffset(targetActive, offset); // 获取当前offset的值

      // auto move first and last swipe in loop mode
      if (props.loop) {
        // 向右移动
        if (children[0] && targetOffset !== minOffset.value) {
          const outRightBound = targetOffset < minOffset.value;
          children[0].setOffset(outRightBound ? trackSize.value : 0);
        }
        // 向左移动
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
        emit('change', activeIndicator.value); // 定义移动后的change事件
      }
    };

    // 修正初始位置索引值
    const correctPosition = () => {
      state.swiping = true;

      if (state.active <= -1) {
        // 位置为负数时，直接走到后面
        move({ pace: count.value });
      } else if (state.active >= count.value) {
        // ？？？
        move({ pace: -count.value });
      }
    };

    // swipe to prev item 切换到上一轮播
    const prev = () => {
      correctPosition();
      touch.reset(); // 重置offset delta属性

      // 调用requestAnimationFrame 执行动画，在下次执行前执行回调函数更新动画
      doubleRaf(() => {
        state.swiping = false;
        move({
          pace: -1,
          emitChange: true,
        });
      });
    };

    // swipe to next item 切换到下一轮播
    const next = () => {
      correctPosition();
      touch.reset();

      doubleRaf(() => {
        state.swiping = false;
        // 进行播放操作
        move({
          pace: 1,
          emitChange: true,
        });
      });
    };

    let autoplayTimer: NodeJS.Timeout;

    const stopAutoplay = () => clearTimeout(autoplayTimer);

    // 自动播放
    const autoplay = () => {
      // 在自动播放之前先重置时间戳
      stopAutoplay();
      if (props.autoplay > 0 && count.value > 1) {
        autoplayTimer = setTimeout(() => {
          next(); // 开始播放
          autoplay();
        }, +props.autoplay);
      }
    };

    // 初始化滚动的位置 cinitialize swipe position
    const initialize = (active = +props.initialSwipe) => {
      if (!root.value) {
        return;
      }

      if (!isHidden(root)) {
        const rect = {
          width: root.value.offsetWidth,
          height: root.value.offsetHeight,
        };
        state.rect = rect;
        state.width = +(props.width ?? rect.width);
        state.height = +(props.height ?? rect.height);
      }

      if (count.value) {
        active = Math.min(count.value - 1, active);
      }

      state.active = active; // item 位置
      state.swiping = true; // 是否滚动
      state.offset = getTargetOffset(active);
      children.forEach((swipe) => {
        swipe.setOffset(0);
      });
    };
    // 外层元素大小或组件显示状态变化时，可以调用此方法来触发重绘
    const resize = () => initialize(state.active);

    let touchStartTime: number;

    const onTouchStart = (event: TouchEvent) => {
      if (!props.touchable) return;

      touch.start(event);
      touchStartTime = Date.now();

      stopAutoplay();
      correctPosition();
    };

    const onTouchMove = (event: TouchEvent) => {
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
    // 切换到指定位置
    const swipeTo = (index: number, options: SwipeToOptions = {}) => {
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

    const renderDot = (_: number, index: number) => {
      const active = index === activeIndicator.value;
      const style = active
        ? {
            backgroundColor: props.indicatorColor,
          }
        : undefined;

      return <i style={style} class={bem('indicator', { active })} />;
    };

    const renderIndicator = () => {
      if (slots.indicator) {
        return slots.indicator({
          active: activeIndicator.value,
        });
      }
      if (props.showIndicators && count.value > 1) {
        return (
          <div class={bem('indicators', { vertical: props.vertical })}>
            {Array(count.value).fill('').map(renderDot)}
          </div>
        );
      }
    };

    useExpose<SwipeExpose>({
      prev,
      next,
      state,
      resize,
      swipeTo,
    });

    linkChildren({
      size,
      props,
      count,
      activeIndicator,
    });

    watch(
      () => props.initialSwipe,
      (value) => initialize(+value)
    );

    watch(count, () => initialize(state.active));
    watch([count, () => props.autoplay], autoplay);
    watch([windowSize.width, windowSize.height], resize);
    watch(usePageVisibility(), (visible) => {
      if (visible === 'visible') {
        autoplay();
      } else {
        stopAutoplay();
      }
    });

    onMounted(initialize); // 挂载页面
    onActivated(() => initialize(state.active));
    onPopupReopen(() => initialize(state.active));
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
