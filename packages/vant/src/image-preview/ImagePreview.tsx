import {
  ref,
  watch,
  nextTick,
  PropType,
  reactive,
  onMounted,
  CSSProperties,
  defineComponent,
  ExtractPropTypes,
} from 'vue';

// Utils
import {
  pick,
  truthProp,
  unknownProp,
  Interceptor,
  callInterceptor,
  createNamespace,
} from '../utils';

// Composables
import { useWindowSize } from '@vant/use';
import { useExpose } from '../composables/use-expose';

// Components
import { Icon } from '../icon';
import { Swipe, SwipeInstance, SwipeToOptions } from '../swipe';
import { Popup, PopupCloseIconPosition } from '../popup';
import ImagePreviewItem from './ImagePreviewItem';

// Types
import { ImagePreviewScaleEventParams } from './types';

const [name, bem] = createNamespace('image-preview');

const props = {
  show: Boolean,
  loop: truthProp,
  overlay: truthProp,
  closeable: Boolean,
  showIndex: truthProp,
  className: unknownProp,
  transition: String,
  beforeClose: Function as PropType<Interceptor>,
  overlayStyle: Object as PropType<CSSProperties>,
  showIndicators: Boolean,
  closeOnPopstate: truthProp,
  images: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  minZoom: {
    type: [Number, String],
    default: 1 / 3,
  },
  maxZoom: {
    type: [Number, String],
    default: 3,
  },
  swipeDuration: {
    type: [Number, String],
    default: 300,
  },
  startPosition: {
    type: [Number, String],
    default: 0,
  },
  closeIcon: {
    type: String,
    default: 'clear',
  },
  closeIconPosition: {
    type: String as PropType<PopupCloseIconPosition>,
    default: 'top-right',
  },
};

export type ImagePreviewProps = ExtractPropTypes<typeof props>;

export default defineComponent({
  name,

  props,

  emits: ['scale', 'close', 'closed', 'change', 'update:show'],

  setup(props, { emit, slots }) {
    const swipeRef = ref<SwipeInstance>();
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
        swipeRef.value.resize();
      }
    };

    const emitScale = (args: ImagePreviewScaleEventParams) =>
      emit('scale', args);

    const updateShow = (show: boolean) => emit('update:show', show);

    const emitClose = () => {
      callInterceptor({
        interceptor: props.beforeClose,
        args: [state.active],
        done: () => updateShow(false),
      });
    };

    const setActive = (active: number) => {
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
              ? slots.index({ index: state.active })
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

    const onClosed = () => emit('closed');

    const swipeTo = (index: number, options?: SwipeToOptions) =>
      swipeRef.value?.swipeTo(index, options);

    useExpose({ swipeTo });

    onMounted(resize);

    watch([windowSize.width, windowSize.height], resize);

    watch(
      () => props.startPosition,
      (value) => setActive(+value)
    );

    watch(
      () => props.show,
      (value) => {
        const { images, startPosition } = props;
        if (value) {
          setActive(+startPosition);
          nextTick(() => {
            resize();
            swipeTo(+startPosition, { immediate: true });
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
        class={[bem(), props.className]}
        overlayClass={bem('overlay')}
        onClosed={onClosed}
        {...pick(props, [
          'show',
          'transition',
          'overlayStyle',
          'closeOnPopstate',
        ])}
        {...{ 'onUpdate:show': updateShow }}
      >
        {renderClose()}
        {renderImages()}
        {renderIndex()}
        {renderCover()}
      </Popup>
    );
  },
});
