import {
  ref,
  watch,
  nextTick,
  onUpdated,
  onMounted,
  getCurrentInstance,
} from 'vue';

// Utils
import { createNamespace } from '../utils';
import { isHidden } from '../utils/dom/style';
import { getScroller } from '../utils/dom/scroll';

// Composition
import { useRect } from '../composition/use-rect';
import { useGlobalEvent } from '../composition/use-global-event';

// Components
import Loading from '../loading';

const [createComponent, bem, t] = createNamespace('list');

export default createComponent({
  props: {
    error: Boolean,
    loading: Boolean,
    finished: Boolean,
    errorText: String,
    loadingText: String,
    finishedText: String,
    immediateCheck: {
      type: Boolean,
      default: true,
    },
    offset: {
      type: [Number, String],
      default: 300,
    },
    direction: {
      type: String,
      default: 'down',
    },
  },

  emits: ['load', 'update:error', 'update:loading'],

  setup(props, { emit, slots }) {
    // use sync innerLoading state to avoid repeated loading in some edge cases
    const loading = ref(false);
    const rootRef = ref();
    const scrollerRef = ref();
    const placeholderRef = ref();

    const check = () => {
      nextTick(() => {
        if (loading.value || props.finished || props.error) {
          return;
        }

        const scroller = scrollerRef.value;
        const { offset, direction } = props;
        let scrollerRect;

        if (scroller.getBoundingClientRect) {
          scrollerRect = scroller.getBoundingClientRect();
        } else {
          scrollerRect = {
            top: 0,
            bottom: scroller.innerHeight,
          };
        }

        const scrollerHeight = scrollerRect.bottom - scrollerRect.top;

        /* istanbul ignore next */
        if (!scrollerHeight || isHidden(rootRef.value)) {
          return false;
        }

        let isReachEdge = false;
        const placeholderRect = useRect(placeholderRef);

        if (direction === 'up') {
          isReachEdge = scrollerRect.top - placeholderRect.top <= offset;
        } else {
          isReachEdge = placeholderRect.bottom - scrollerRect.bottom <= offset;
        }

        if (isReachEdge) {
          loading.value = true;
          emit('update:loading', true);
          emit('load');
        }
      });
    };

    const renderFinishedText = () => {
      if (props.finished) {
        const text = slots.finished ? slots.finished() : props.finishedText;
        if (text) {
          return <div class={bem('finished-text')}>{text}</div>;
        }
      }
    };

    const clickErrorText = () => {
      emit('update:error', false);
      check();
    };

    const renderErrorText = () => {
      if (props.error) {
        const text = slots.error ? slots.error() : props.errorText;
        if (text) {
          return (
            <div onClick={clickErrorText} class={bem('error-text')}>
              {text}
            </div>
          );
        }
      }
    };

    const renderLoading = () => {
      if (loading.value && !props.finished) {
        return (
          <div class={bem('loading')} key="loading">
            {slots.loading ? (
              slots.loading()
            ) : (
              <Loading size="16">{props.loadingText || t('loading')}</Loading>
            )}
          </div>
        );
      }
    };

    watch([() => props.loading, () => props.finished], check);

    onUpdated(() => {
      loading.value = props.loading;
    });

    onMounted(() => {
      scrollerRef.value = getScroller(rootRef.value);

      if (props.immediateCheck) {
        check();
      }
    });

    useGlobalEvent(scrollerRef, 'scroll', check);

    // @exposed-api
    const vm = getCurrentInstance().proxy;
    vm.check = check;

    return () => {
      const Content = slots.default?.();
      const Placeholder = (
        <div ref={placeholderRef} class={bem('placeholder')} />
      );

      return (
        <div ref={rootRef} role="feed" class={bem()} aria-busy={loading.value}>
          {props.direction === 'down' ? Content : Placeholder}
          {renderLoading()}
          {renderFinishedText()}
          {renderErrorText()}
          {props.direction === 'up' ? Content : Placeholder}
        </div>
      );
    };
  },
});
