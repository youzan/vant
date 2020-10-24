import { watch, computed, reactive } from 'vue';

// Utils
import { bem } from './shared';
import { range, preventDefault } from '../utils';

// Composition
import { useTouch } from '../composition/use-touch';

// Component
import Image from '../image';
import Loading from '../loading';
import SwipeItem from '../swipe-item';

function getDistance(touches) {
  return Math.sqrt(
    (touches[0].clientX - touches[1].clientX) ** 2 +
      (touches[0].clientY - touches[1].clientY) ** 2
  );
}

export default {
  props: {
    src: String,
    show: Boolean,
    active: Number,
    minZoom: [Number, String],
    maxZoom: [Number, String],
    rootWidth: Number,
    rootHeight: Number,
  },

  emits: ['scale', 'close'],

  setup(props, { emit }) {
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

    const vertical = computed(() => {
      const { rootWidth, rootHeight } = props;
      const rootRatio = rootHeight / rootWidth;
      return state.imageRatio > rootRatio;
    });

    const imageStyle = computed(() => {
      const { scale, moveX, moveY, moving, zooming } = state;
      const style = {
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

    const setScale = (scale) => {
      state.scale = range(scale, +props.minZoom, +props.maxZoom);
      emit('scale', {
        scale: state.scale,
        index: state.active,
      });
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

    let startMoveX;
    let startMoveY;
    let startScale;
    let startDistance;
    let doubleTapTimer;
    let touchStartTime;

    const onTouchStart = (event) => {
      const { touches } = event;
      const { offsetX } = touch;

      touch.start(event);

      startMoveX = state.moveX;
      startMoveY = state.moveY;
      touchStartTime = new Date();

      state.moving = touches.length === 1 && state.scale !== 1;
      state.zooming = touches.length === 2 && !offsetX.value;

      if (state.zooming) {
        startScale = state.scale;
        startDistance = getDistance(event.touches);
      }
    };

    const onTouchMove = (event) => {
      const { touches } = event;

      touch.move(event);

      if (state.moving || state.zooming) {
        preventDefault(event, true);
      }

      if (state.moving) {
        const { deltaX, deltaY } = touch;
        const moveX = deltaX.value + startMoveX;
        const moveY = deltaY.value + startMoveY;
        state.moveX = range(moveX, -maxMoveX.value, maxMoveX.value);
        state.moveY = range(moveY, -maxMoveY.value, maxMoveY.value);
      }

      if (state.zooming && touches.length === 2) {
        const distance = getDistance(touches);
        const scale = (startScale * distance) / startDistance;

        setScale(scale);
      }
    };

    const checkTap = () => {
      const { offsetX, offsetY } = touch;
      const deltaTime = new Date() - touchStartTime;
      const TAP_TIME = 250;
      const TAP_OFFSET = 10;

      if (
        offsetX.value < TAP_OFFSET &&
        offsetY.value < TAP_OFFSET &&
        deltaTime < TAP_TIME
      ) {
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
    };

    const onTouchEnd = (event) => {
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
            state.moveX = range(state.moveX, -maxMoveX.value, maxMoveX.value);
            state.moveY = range(state.moveY, -maxMoveY.value, maxMoveY.value);
            state.zooming = false;
          }

          state.moving = false;
          startMoveX = 0;
          startMoveY = 0;
          startScale = 1;

          if (state.scale < 1) {
            resetScale();
          }
        }
      }

      // eliminate tap delay on safari
      preventDefault(event, stopPropagation);

      checkTap();
      touch.reset();
    };

    const onLoad = (event) => {
      const { naturalWidth, naturalHeight } = event.target;
      state.imageRatio = naturalHeight / naturalWidth;
    };

    watch(
      () => props.show,
      (value) => {
        if (!value) {
          resetScale();
        }
      }
    );

    return () => {
      const imageSlots = {
        loading: () => <Loading type="spinner" />,
      };

      return (
        <SwipeItem
          class={bem('swipe-item')}
          onTouchstart={onTouchStart}
          onTouchmove={onTouchMove}
          onTouchend={onTouchEnd}
          onTouchcancel={onTouchEnd}
        >
          <Image
            v-slots={imageSlots}
            src={props.src}
            fit="contain"
            class={bem('image', { vertical: vertical.value })}
            style={imageStyle.value}
            onLoad={onLoad}
          />
        </SwipeItem>
      );
    };
  },
};
