import { ref, watch, nextTick, onUpdated, onMounted } from 'vue';

// Utils
import { createNamespace } from '../utils';
import { isHidden } from '../utils/dom/style';

// Composition
import { useScrollParent, useEventListener } from '@vant/use';
import { useRect } from '../composition/use-rect';
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
    const root = ref();
    const placeholder = ref();
    const scrollParent = useScrollParent(root);

    const getScrollParentRect = () => {
      const element = scrollParent.value;
      if (element.getBoundingClientRect) {
        return element.getBoundingClientRect();
      }
      const height = element.innerHeight;
      return {
        top: 0,
        height,
        bottom: height,
      };
    };

    const check = () => {
      nextTick(() => {
        if (loading.value || props.finished || props.error) {
          return;
        }

        const { offset, direction } = props;
        const scrollParentRect = getScrollParentRect();

        if (!scrollParentRect.height || isHidden(root)) {
          return false;
        }

        let isReachEdge = false;
        const placeholderRect = useRect(placeholder);

        if (direction === 'up') {
          isReachEdge = scrollParentRect.top - placeholderRect.top <= offset;
        } else {
          isReachEdge =
            placeholderRect.bottom - scrollParentRect.bottom <= offset;
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

    useEventListener('scroll', check, { target: scrollParent });

    return () => {
      const Content = slots.default?.();
      const Placeholder = <div ref={placeholder} class={bem('placeholder')} />;

      return (
        <div ref={root} role="feed" class={bem()} aria-busy={loading.value}>
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
