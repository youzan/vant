import { nextTick, onMounted, reactive, ref, watch } from 'vue';

// Utils
import { bem, createComponent } from './shared';
import { callInterceptor } from '../utils/interceptor';

// Composition
import { useWindowSize } from '@vant/use';
import { useExpose } from '../composition/use-expose';

// Components
import Icon from '../icon';
import Swipe from '../swipe';
import Popup from '../popup';
import ImagePreviewItem from './ImagePreviewItem';

export default createComponent({
  props: {
    show: Boolean,
    className: null,
    closeable: Boolean,
    beforeClose: Function,
    showIndicators: Boolean,
    images: {
      type: Array,
      default: () => [],
    },
    loop: {
      type: Boolean,
      default: true,
    },
    overlay: {
      type: Boolean,
      default: true,
    },
    minZoom: {
      type: [Number, String],
      default: 1 / 3,
    },
    maxZoom: {
      type: [Number, String],
      default: 3,
    },
    showIndex: {
      type: Boolean,
      default: true,
    },
    swipeDuration: {
      type: [Number, String],
      default: 500,
    },
    startPosition: {
      type: [Number, String],
      default: 0,
    },
    closeIcon: {
      type: String,
      default: 'clear',
    },
    closeOnPopstate: {
      type: Boolean,
      default: true,
    },
    closeIconPosition: {
      type: String,
      default: 'top-right',
    },
  },

  emits: ['scale', 'close', 'closed', 'change', 'update:show'],

  setup(props, { emit, slots }) {
    const swipeRef = ref();
    const windowSize = useWindowSize();

    const state = reactive({
      active: 0,
      rootWidth: 0,
      rootHeight: 0,
    });

    const resize = () => {
      if (swipeRef.value) {
        const rect = swipeRef.value.$el.getBoundingClientRect();
        state.rootWidth = rect.width;
        state.rootHeight = rect.height;
      }
    };

    const emitScale = (args) => {
      emit('scale', args);
    };

    const emitClose = () => {
      callInterceptor({
        interceptor: props.beforeClose,
        args: [state.active],
        done: () => {
          emit('update:show', false);
        },
      });
    };

    const setActive = (active) => {
      if (active !== state.active) {
        state.active = active;
        emit('change', active);
      }
    };

    const renderIndex = () => {
      if (props.showIndex) {
        return (
          <div class={bem('index')}>
            {slots.index
              ? slots.index()
              : `${state.active + 1} / ${props.images.length}`}
          </div>
        );
      }
    };

    const renderCover = () => {
      if (slots.cover) {
        return <div class={bem('cover')}>{slots.cover()}</div>;
      }
    };

    const renderImages = () => (
      <Swipe
        ref={swipeRef}
        lazyRender
        loop={props.loop}
        class={bem('swipe')}
        duration={props.swipeDuration}
        initialSwipe={props.startPosition}
        showIndicators={props.showIndicators}
        indicatorColor="white"
        onChange={setActive}
      >
        {props.images.map((image) => (
          <ImagePreviewItem
            src={image}
            show={props.show}
            active={state.active}
            maxZoom={props.maxZoom}
            minZoom={props.minZoom}
            rootWidth={state.rootWidth}
            rootHeight={state.rootHeight}
            onScale={emitScale}
            onClose={emitClose}
          />
        ))}
      </Swipe>
    );

    const renderClose = () => {
      if (props.closeable) {
        return (
          <Icon
            role="button"
            name={props.closeIcon}
            class={bem('close-icon', props.closeIconPosition)}
            onClick={emitClose}
          />
        );
      }
    };

    const onClosed = () => {
      emit('closed');
    };

    const swipeTo = (index, options) => {
      if (swipeRef.value) {
        swipeRef.value.swipeTo(index, options);
      }
    };

    useExpose({ swipeTo });

    onMounted(resize);

    watch([windowSize.width, windowSize.height], resize);

    watch(() => props.startPosition, setActive);

    watch(
      () => props.show,
      (value) => {
        const { images, startPosition } = props;
        if (value) {
          setActive(+startPosition);
          nextTick(() => {
            resize();
            swipeRef.value.swipeTo(+startPosition, { immediate: true });
          });
        } else {
          emit('close', {
            index: state.active,
            url: images[state.active],
          });
        }
      }
    );

    return () => (
      <Popup
        show={props.show}
        class={[bem(), props.className]}
        overlayClass={bem('overlay')}
        closeOnPopstate={props.closeOnPopstate}
        onClosed={onClosed}
      >
        {renderClose()}
        {renderImages()}
        {renderIndex()}
        {renderCover()}
      </Popup>
    );
  },
});
