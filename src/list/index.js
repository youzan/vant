import { ref, watch, nextTick, onUpdated, onMounted } from 'vue';

// Utils
import { createNamespace } from '../utils';
import { isHidden } from '../utils/dom/style';

// Composition
import { useEventListener } from '@vant/use';
import { useRect } from '../composition/use-rect';
import { useScroller } from '../composition/use-scroller';
import { usePublicApi } from '../composition/use-public-api';

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
    const placeholderRef = ref();
    const scroller = useScroller(rootRef);

    const check = () => {
      nextTick(() => {
        if (loading.value || props.finished || props.error) {
          return;
        }

        const { offset, direction } = props;
        let scrollerRect;

        if (scroller.value.getBoundingClientRect) {
          scrollerRect = scroller.value.getBoundingClientRect();
        } else {
          scrollerRect = {
            top: 0,
            bottom: scroller.value.innerHeight,
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
            <div class={bem('error-text')} onClick={clickErrorText}>
              {text}
            </div>
          );
        }
      }
    };

    const renderLoading = () => {
      if (loading.value && !props.finished) {
        return (
          <div class={bem('loading')}>
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
      if (props.immediateCheck) {
        check();
      }
    });

    usePublicApi({ check });

    useEventListener({
      type: 'scroll',
      target: scroller,
      listener: check,
    });

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
