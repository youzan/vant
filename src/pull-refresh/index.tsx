import { ref, watch, reactive, nextTick } from 'vue';

// Utils
import { preventDefault, getScrollTop, createNamespace } from '../utils';

// Composition
import { useScrollParent } from '@vant/use';
import { useTouch } from '../composition/use-touch';

// Components
import Loading from '../loading';

const [createComponent, bem, t] = createNamespace('pull-refresh');

const DEFAULT_HEAD_HEIGHT = 50;
const TEXT_STATUS = ['pulling', 'loosing', 'success'];

type PullRefreshStatus =
  | 'normal'
  | 'loading'
  | 'loosing'
  | 'pulling'
  | 'success';

export default createComponent({
  props: {
    disabled: Boolean,
    successText: String,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    modelValue: {
      type: Boolean,
      required: true,
    },
    successDuration: {
      type: [Number, String],
      default: 500,
    },
    animationDuration: {
      type: [Number, String],
      default: 300,
    },
    headHeight: {
      type: [Number, String],
      default: DEFAULT_HEAD_HEIGHT,
    },
  },

  emits: ['refresh', 'update:modelValue'],

  setup(props, { emit, slots }) {
    let reachTop: boolean;

    const root = ref();
    const scrollParent = useScrollParent(root);

    const state = reactive({
      status: 'normal' as PullRefreshStatus,
      distance: 0,
      duration: 0,
    });

    const touch = useTouch();

    const getHeadStyle = () => {
      if (props.headHeight !== DEFAULT_HEAD_HEIGHT) {
        return {
          height: `${props.headHeight}px`,
        };
      }
    };

    const isTouchable = () =>
      state.status !== 'loading' &&
      state.status !== 'success' &&
      !props.disabled;

    const ease = (distance: number) => {
      const headHeight = +props.headHeight;

      if (distance > headHeight) {
        if (distance < headHeight * 2) {
          distance = headHeight + (distance - headHeight) / 2;
        } else {
          distance = headHeight * 1.5 + (distance - headHeight * 2) / 4;
        }
      }

      return Math.round(distance);
    };

    const setStatus = (distance: number, isLoading?: boolean) => {
      state.distance = distance;

      if (isLoading) {
        state.status = 'loading';
      } else if (distance === 0) {
        state.status = 'normal';
      } else if (distance < props.headHeight) {
        state.status = 'pulling';
      } else {
        state.status = 'loosing';
      }
    };

    const getStatusText = () => {
      const { status } = state;
      if (status === 'normal') {
        return '';
      }
      return (props as any)[`${status}Text`] || t(status);
    };

    const renderStatus = () => {
      const { status, distance } = state;

      if (slots[status]) {
        return slots[status]!({ distance });
      }

      const nodes = [];

      if (TEXT_STATUS.indexOf(status) !== -1) {
        nodes.push(<div class={bem('text')}>{getStatusText()}</div>);
      }
      if (status === 'loading') {
        nodes.push(<Loading size="16">{getStatusText()}</Loading>);
      }

      return nodes;
    };

    const showSuccessTip = () => {
      state.status = 'success';

      setTimeout(() => {
        setStatus(0);
      }, +props.successDuration);
    };

    const checkPosition = (event: TouchEvent) => {
      reachTop = getScrollTop(scrollParent.value!) === 0;

      if (reachTop) {
        state.duration = 0;
        touch.start(event);
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      if (isTouchable()) {
        checkPosition(event);
      }
    };

    const onTouchMove = (event: TouchEvent) => {
      if (isTouchable()) {
        if (!reachTop) {
          checkPosition(event);
        }

        const { deltaY } = touch;
        touch.move(event);

        if (reachTop && deltaY.value >= 0 && touch.isVertical()) {
          preventDefault(event);
          setStatus(ease(deltaY.value));
        }
      }
    };

    const onTouchEnd = () => {
      if (reachTop && touch.deltaY.value && isTouchable()) {
        state.duration = +props.animationDuration;

        if (state.status === 'loosing') {
          setStatus(+props.headHeight, true);
          emit('update:modelValue', true);

          // ensure value change can be watched
          nextTick(() => {
            emit('refresh');
          });
        } else {
          setStatus(0);
        }
      }
    };

    watch(
      () => props.modelValue,
      (value) => {
        state.duration = +props.animationDuration;

        if (value) {
          setStatus(+props.headHeight, true);
        } else if (slots.success || props.successText) {
          showSuccessTip();
        } else {
          setStatus(0, false);
        }
      }
    );

    return () => {
      const trackStyle = {
        transitionDuration: `${state.duration}ms`,
        transform: state.distance
          ? `translate3d(0,${state.distance}px, 0)`
          : '',
      };

      return (
        <div ref={root} class={bem()}>
          <div
            class={bem('track')}
            style={trackStyle}
            onTouchstart={onTouchStart}
            onTouchmove={onTouchMove}
            onTouchend={onTouchEnd}
            onTouchcancel={onTouchEnd}
          >
            <div class={bem('head')} style={getHeadStyle()}>
              {renderStatus()}
            </div>
            {slots.default?.()}
          </div>
        </div>
      );
    };
  },
});
