import {
  ref,
  watch,
  nextTick,
  onUpdated,
  onMounted,
  defineComponent,
  ExtractPropTypes,
} from 'vue';

// Utils
import {
  isHidden,
  truthProp,
  makeStringProp,
  makeNumericProp,
  createNamespace,
} from '../utils';

// Composables
import { useRect, useScrollParent, useEventListener } from '@vant/use';
import { useExpose } from '../composables/use-expose';
import { useTabStatus } from '../composables/use-tab-status';

// Components
import { Loading } from '../loading';

// Types
import type { ListExpose, ListDirection } from './types';

const [name, bem, t] = createNamespace('list');

const props = {
  error: Boolean,
  offset: makeNumericProp(300),
  loading: Boolean,
  finished: Boolean,
  errorText: String,
  direction: makeStringProp<ListDirection>('down'),
  loadingText: String,
  finishedText: String,
  immediateCheck: truthProp,
};

export type ListProps = ExtractPropTypes<typeof props>;

export default defineComponent({
  name,

  props,

  emits: ['load', 'update:error', 'update:loading'],

  setup(props, { emit, slots }) {
    // use sync innerLoading state to avoid repeated loading in some edge cases
    const loading = ref(false);
    const root = ref<HTMLElement>();
    const placeholder = ref<HTMLElement>();
    const tabStatus = useTabStatus();
    const scrollParent = useScrollParent(root);

    const check = () => {
      nextTick(() => {
        if (
          loading.value ||
          props.finished ||
          props.error ||
          // skip check when inside an inactive tab
          tabStatus?.value === false
        ) {
          return;
        }

        const { offset, direction } = props;
        const scrollParentRect = useRect(scrollParent);

        if (!scrollParentRect.height || isHidden(root)) {
          return;
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
              <Loading class={bem('loading-icon')}>
                {props.loadingText || t('loading')}
              </Loading>
            )}
          </div>
        );
      }
    };

    watch(
      [() => props.loading, () => props.finished, () => props.error],
      check
    );

    if (tabStatus) {
      watch(tabStatus, (tabActive) => {
        if (tabActive) {
          check();
        }
      });
    }

    onUpdated(() => {
      loading.value = props.loading!;
    });

    onMounted(() => {
      if (props.immediateCheck) {
        check();
      }
    });

    useExpose<ListExpose>({ check });

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
