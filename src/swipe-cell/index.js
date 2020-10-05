import { ref, reactive, computed } from 'vue';

// Utils
import { range, createNamespace, preventDefault } from '../utils';
import { callInterceptor } from '../utils/interceptor';

// Composition
import { useRect, useClickAway } from '@vant/use';
import { useTouch } from '../composition/use-touch';
import { useExpose } from '../composition/use-expose';

const [createComponent, bem] = createNamespace('swipe-cell');

export default createComponent({
  props: {
    disabled: Boolean,
    leftWidth: [Number, String],
    rightWidth: [Number, String],
    beforeClose: Function,
    stopPropagation: Boolean,
    name: {
      type: [Number, String],
      default: '',
    },
  },

  emits: ['open', 'close', 'click'],

  setup(props, { emit, slots }) {
    let opened;
    let lockClick;
    let startOffset;

    const root = ref();
    const leftRef = ref();
    const rightRef = ref();

    const state = reactive({
      offset: 0,
      dragging: false,
    });

    const touch = useTouch();

    const getWidthByRef = (ref) => (ref.value ? useRect(ref).width : 0);

    const leftWidth = computed(
      () => +props.leftWidth || getWidthByRef(leftRef)
    );

    const rightWidth = computed(
      () => +props.rightWidth || getWidthByRef(rightRef)
    );

    const open = (position) => {
      opened = true;
      state.offset = position === 'left' ? leftWidth.value : -rightWidth.value;

      emit('open', {
        name: props.name,
        position,
      });
    };

    const close = (position) => {
      state.offset = 0;

      if (opened) {
        opened = false;
        emit('close', {
          name: props.name,
          position,
        });
      }
    };

    const toggle = (position) => {
      const offset = Math.abs(state.offset);
      const THRESHOLD = 0.15;
      const threshold = opened ? 1 - THRESHOLD : THRESHOLD;

      if (position === 'left' || position === 'right') {
        const width = position === 'left' ? leftWidth.value : rightWidth.value;

        if (width && offset > width * threshold) {
          open(position);
          return;
        }
      }

      close();
    };

    const onTouchStart = (event) => {
      if (!props.disabled) {
        startOffset = state.offset;
        touch.start(event);
      }
    };

    const onTouchMove = (event) => {
      if (props.disabled) {
        return;
      }

      const { deltaX } = touch;
      touch.move(event);

      if (touch.isHorizontal()) {
        lockClick = true;
        state.dragging = true;

        const isEdge = !opened || deltaX.value * startOffset < 0;
        if (isEdge) {
          preventDefault(event, props.stopPropagation);
        }

        state.offset = range(
          deltaX.value + startOffset,
          -rightWidth.value,
          leftWidth.value
        );
      }
    };

    const onTouchEnd = () => {
      if (state.dragging) {
        state.dragging = false;
        toggle(state.offset > 0 ? 'left' : 'right');

        // compatible with desktop scenario
        setTimeout(() => {
          lockClick = false;
        }, 0);
      }
    };

    const onClick = (position = 'outside') => {
      emit('click', position);

      if (opened && !lockClick) {
        callInterceptor({
          interceptor: props.beforeClose,
          args: [
            {
              name: props.name,
              position,
            },
          ],
          done: () => {
            close(position);
          },
        });
      }
    };

    const getClickHandler = (position, stop) => (event) => {
      if (stop) {
        event.stopPropagation();
      }
      onClick(position);
    };

    const renderSideContent = (position, ref) => {
      if (slots[position]) {
        return (
          <div
            ref={ref}
            class={bem(position)}
            onClick={getClickHandler(position, true)}
          >
            {slots[position]()}
          </div>
        );
      }
    };

    useExpose({
      open,
      close,
    });

    useClickAway(root, onClick, { eventName: 'touchstart' });

    return () => {
      const wrapperStyle = {
        transform: `translate3d(${state.offset}px, 0, 0)`,
        transitionDuration: state.dragging ? '0s' : '.6s',
      };

      return (
        <div
          ref={root}
          class={bem()}
          onClick={getClickHandler('cell')}
          onTouchstart={onTouchStart}
          onTouchmove={onTouchMove}
          onTouchend={onTouchEnd}
          onTouchcancel={onTouchEnd}
        >
          <div class={bem('wrapper')} style={wrapperStyle}>
            {renderSideContent('left', leftRef)}
            {slots.default?.()}
            {renderSideContent('right', rightRef)}
          </div>
        </div>
      );
    };
  },
});
