import {
  ref,
  watch,
  reactive,
  nextTick,
  defineComponent,
  type ExtractPropTypes,
} from 'vue';

// Utils
import {
  numericProp,
  getScrollTop,
  preventDefault,
  createNamespace,
  makeNumericProp,
} from '../utils';

// Composables
import { useEventListener, useScrollParent } from '@vant/use';
import { useTouch } from '../composables/use-touch';

// Components
import { Loading } from '../loading';

const [name, bem, t] = createNamespace('pull-refresh');

const DEFAULT_HEAD_HEIGHT = 50;
const TEXT_STATUS = ['pulling', 'loosing', 'success'];

type PullRefreshStatus =
  | 'normal'
  | 'loading'
  | 'loosing'
  | 'pulling'
  | 'success';

export const pullRefreshProps = {
  disabled: Boolean,
  modelValue: Boolean,
  headHeight: makeNumericProp(DEFAULT_HEAD_HEIGHT),
  successText: String,
  pullingText: String,
  loosingText: String,
  loadingText: String,
  pullDistance: numericProp,
  successDuration: makeNumericProp(500),
  animationDuration: makeNumericProp(300),
};

export type PullRefreshProps = ExtractPropTypes<typeof pullRefreshProps>;

export default defineComponent({
  name,

  props: pullRefreshProps,

  emits: ['change', 'refresh', 'update:modelValue'],

  setup(props, { emit, slots }) {
    let reachTop: boolean;

    const root = ref<HTMLElement>();
    const track = ref<HTMLElement>();
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
      const pullDistance = +(props.pullDistance || props.headHeight);

      if (distance > pullDistance) {
        if (distance < pullDistance * 2) {
          distance = pullDistance + (distance - pullDistance) / 2;
        } else {
          distance = pullDistance * 1.5 + (distance - pullDistance * 2) / 4;
        }
      }

      return Math.round(distance);
    };

    const setStatus = (distance: number, isLoading?: boolean) => {
      const pullDistance = +(props.pullDistance || props.headHeight);
      state.distance = distance;

      if (isLoading) {
        state.status = 'loading';
      } else if (distance === 0) {
        state.status = 'normal';
      } else if (distance < pullDistance) {
        state.status = 'pulling';
      } else {
        state.status = 'loosing';
      }

      emit('change', {
        status: state.status,
        distance,
      });
    };

    const getStatusText = () => {
      const { status } = state;
      if (status === 'normal') {
        return '';
      }
      return props[`${status}Text` as const] || t(status);
    };

    const renderStatus = () => {
      const { status, distance } = state;

      if (slots[status]) {
        return slots[status]!({ distance });
      }

      const nodes: JSX.Element[] = [];

      if (TEXT_STATUS.includes(status)) {
        nodes.push(<div class={bem('text')}>{getStatusText()}</div>);
      }
      if (status === 'loading') {
        nodes.push(
          <Loading
            v-slots={{ default: getStatusText }}
            class={bem('loading')}
          />,
        );
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
          nextTick(() => emit('refresh'));
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
      },
    );

    // useEventListener will set passive to `false` to eliminate the warning of Chrome
    useEventListener('touchmove', onTouchMove, {
      target: track,
    });

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
            ref={track}
            class={bem('track')}
            style={trackStyle}
            onTouchstartPassive={onTouchStart}
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
