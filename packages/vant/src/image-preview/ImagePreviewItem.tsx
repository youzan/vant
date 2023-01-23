import {
  ref,
  watch,
  computed,
  reactive,
  defineComponent,
  type CSSProperties,
} from 'vue';

// Utils
import {
  clamp,
  numericProp,
  preventDefault,
  createNamespace,
  makeRequiredProp,
  LONG_PRESS_START_TIME,
  type ComponentInstance,
} from '../utils';

// Composables
import { useTouch } from '../composables/use-touch';
import { useEventListener } from '@vant/use';

// Components
import { Image } from '../image';
import { Loading } from '../loading';
import { SwipeItem } from '../swipe-item';

const getDistance = (touches: TouchList) =>
  Math.sqrt(
    (touches[0].clientX - touches[1].clientX) ** 2 +
      (touches[0].clientY - touches[1].clientY) ** 2
  );

const bem = createNamespace('image-preview')[1];

export default defineComponent({
  props: {
    src: String,
    show: Boolean,
    active: Number,
    minZoom: makeRequiredProp(numericProp),
    maxZoom: makeRequiredProp(numericProp),
    rootWidth: makeRequiredProp(Number),
    rootHeight: makeRequiredProp(Number),
    disableZoom: Boolean,
  },

  emits: ['scale', 'close', 'longPress'],

  setup(props, { emit, slots }) {
    const state = reactive({
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      imageRatio: 0,
      displayWidth: 0,
      displayHeight: 0,
    });

    const touch = useTouch();
    const swipeItem = ref<ComponentInstance>();

    const vertical = computed(() => {
      const { rootWidth, rootHeight } = props;
      const rootRatio = rootHeight / rootWidth;
      return state.imageRatio > rootRatio;
    });

    const imageStyle = computed(() => {
      const { scale, moveX, moveY, moving, zooming } = state;
      const style: CSSProperties = {
        transitionDuration: zooming || moving ? '0s' : '.3s',
      };

      if (scale !== 1) {
        const offsetX = moveX / scale;
        const offsetY = moveY / scale;
        style.transform = `scale(${scale}, ${scale}) translate(${offsetX}px, ${offsetY}px)`;
      }

      return style;
    });

    const maxMoveX = computed(() => {
      if (state.imageRatio) {
        const { rootWidth, rootHeight } = props;
        const displayWidth = vertical.value
          ? rootHeight / state.imageRatio
          : rootWidth;

        return Math.max(0, (state.scale * displayWidth - rootWidth) / 2);
      }

      return 0;
    });

    const maxMoveY = computed(() => {
      if (state.imageRatio) {
        const { rootWidth, rootHeight } = props;
        const displayHeight = vertical.value
          ? rootHeight
          : rootWidth * state.imageRatio;

        return Math.max(0, (state.scale * displayHeight - rootHeight) / 2);
      }

      return 0;
    });

    const setScale = (scale: number) => {
      scale = clamp(scale, +props.minZoom, +props.maxZoom + 1);

      if (scale !== state.scale) {
        state.scale = scale;
        emit('scale', {
          scale,
          index: props.active,
        });
      }
    };

    const resetScale = () => {
      setScale(1);
      state.moveX = 0;
      state.moveY = 0;
    };

    const toggleScale = () => {
      const scale = state.scale > 1 ? 1 : 2;

      setScale(scale);
      state.moveX = 0;
      state.moveY = 0;
    };

    let fingerNum: number;
    let startMoveX: number;
    let startMoveY: number;
    let startScale: number;
    let startDistance: number;
    let doubleTapTimer: ReturnType<typeof setTimeout> | null;
    let touchStartTime: number;
    let isImageMoved = false;

    const onTouchStart = (event: TouchEvent) => {
      const { touches } = event;
      fingerNum = touches.length;

      if (fingerNum === 2 && props.disableZoom) {
        return;
      }

      const { offsetX } = touch;

      touch.start(event);

      startMoveX = state.moveX;
      startMoveY = state.moveY;
      touchStartTime = Date.now();

      // whether the image position is moved after scaling
      isImageMoved = false;

      state.moving = fingerNum === 1 && state.scale !== 1;
      state.zooming = fingerNum === 2 && !offsetX.value;

      if (state.zooming) {
        startScale = state.scale;
        startDistance = getDistance(event.touches);
      }
    };

    const onTouchMove = (event: TouchEvent) => {
      const { touches } = event;

      touch.move(event);

      if (state.moving) {
        const { deltaX, deltaY } = touch;
        const moveX = deltaX.value + startMoveX;
        const moveY = deltaY.value + startMoveY;

        // if the image is moved to the edge, no longer trigger move,
        // allow user to swipe to next image
        if (
          (moveX > maxMoveX.value || moveX < -maxMoveX.value) &&
          !isImageMoved
        ) {
          state.moving = false;
          return;
        }

        isImageMoved = true;
        preventDefault(event, true);
        state.moveX = clamp(moveX, -maxMoveX.value, maxMoveX.value);
        state.moveY = clamp(moveY, -maxMoveY.value, maxMoveY.value);
      }

      if (state.zooming) {
        preventDefault(event, true);

        if (touches.length === 2) {
          const distance = getDistance(touches);
          const scale = (startScale * distance) / startDistance;

          setScale(scale);
        }
      }
    };

    const checkTap = () => {
      if (fingerNum > 1) {
        return;
      }

      const { offsetX, offsetY } = touch;
      const deltaTime = Date.now() - touchStartTime;

      // Same as the default value of iOS double tap timeout
      const TAP_TIME = 250;
      const TAP_OFFSET = 5;

      if (offsetX.value < TAP_OFFSET && offsetY.value < TAP_OFFSET) {
        // tap or double tap
        if (deltaTime < TAP_TIME) {
          if (doubleTapTimer) {
            clearTimeout(doubleTapTimer);
            doubleTapTimer = null;
            toggleScale();
          } else {
            doubleTapTimer = setTimeout(() => {
              emit('close');
              doubleTapTimer = null;
            }, TAP_TIME);
          }
        }
        // long press
        else if (deltaTime > LONG_PRESS_START_TIME) {
          emit('longPress');
        }
      }
    };

    const onTouchEnd = (event: TouchEvent) => {
      let stopPropagation = false;

      /* istanbul ignore else */
      if (state.moving || state.zooming) {
        stopPropagation = true;

        if (
          state.moving &&
          startMoveX === state.moveX &&
          startMoveY === state.moveY
        ) {
          stopPropagation = false;
        }

        if (!event.touches.length) {
          if (state.zooming) {
            state.moveX = clamp(state.moveX, -maxMoveX.value, maxMoveX.value);
            state.moveY = clamp(state.moveY, -maxMoveY.value, maxMoveY.value);
            state.zooming = false;
          }

          state.moving = false;
          startMoveX = 0;
          startMoveY = 0;
          startScale = 1;

          if (state.scale < 1) {
            resetScale();
          }

          if (state.scale > props.maxZoom) {
            state.scale = +props.maxZoom;
          }
        }
      }

      // eliminate tap delay on safari
      preventDefault(event, stopPropagation);

      checkTap();
      touch.reset();
    };

    const onLoad = (event: Event) => {
      const { naturalWidth, naturalHeight } = event.target as HTMLImageElement;
      state.imageRatio = naturalHeight / naturalWidth;
    };

    watch(() => props.active, resetScale);
    watch(
      () => props.show,
      (value) => {
        if (!value) {
          resetScale();
        }
      }
    );

    // useEventListener will set passive to `false` to eliminate the warning of Chrome
    useEventListener('touchmove', onTouchMove, {
      target: computed(() => swipeItem.value?.$el),
    });

    return () => {
      const imageSlots = {
        loading: () => <Loading type="spinner" />,
      };

      return (
        <SwipeItem
          ref={swipeItem}
          class={bem('swipe-item')}
          onTouchstartPassive={onTouchStart}
          onTouchend={onTouchEnd}
          onTouchcancel={onTouchEnd}
        >
          {slots.image ? (
            <div class={bem('image-wrap')}>
              {slots.image({ src: props.src })}
            </div>
          ) : (
            <Image
              v-slots={imageSlots}
              src={props.src}
              fit="contain"
              class={bem('image', { vertical: vertical.value })}
              style={imageStyle.value}
              onLoad={onLoad}
            />
          )}
        </SwipeItem>
      );
    };
  },
});
