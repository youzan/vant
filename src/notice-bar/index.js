import { ref, watch, reactive, nextTick, onActivated } from 'vue';
import { isDef, createNamespace } from '../utils';

// Composition
import { useRect, doubleRaf, useEventListener } from '@vant/use';

// Components
import Icon from '../icon';

const [createComponent, bem] = createNamespace('notice-bar');

export default createComponent({
  props: {
    text: String,
    mode: String,
    color: String,
    leftIcon: String,
    wrapable: Boolean,
    background: String,
    scrollable: {
      type: Boolean,
      default: null,
    },
    delay: {
      type: [Number, String],
      default: 1,
    },
    speed: {
      type: [Number, String],
      default: 50,
    },
  },

  emits: ['close', 'replay'],

  setup(props, { emit, slots }) {
    let wrapWidth = 0;
    let contentWidth = 0;
    let startTimer;

    const wrapRef = ref();
    const contentRef = ref();

    const state = reactive({
      show: true,
      offset: 0,
      duration: 0,
    });

    const renderLeftIcon = () => {
      if (slots['left-icon']) {
        return slots['left-icon']();
      }
      if (props.leftIcon) {
        return <Icon class={bem('left-icon')} name={props.leftIcon} />;
      }
    };

    const getRightIconName = () => {
      if (props.mode === 'closeable') {
        return 'cross';
      }
      if (props.mode === 'link') {
        return 'arrow';
      }
    };

    const onClickRightIcon = (event) => {
      if (props.mode === 'closeable') {
        state.show = false;
        emit('close', event);
      }
    };

    const renderRightIcon = () => {
      if (slots['right-icon']) {
        return slots['right-icon']();
      }

      const name = getRightIconName();
      if (name) {
        return (
          <Icon
            name={name}
            class={bem('right-icon')}
            onClick={onClickRightIcon}
          />
        );
      }
    };

    const onTransitionEnd = () => {
      state.offset = wrapWidth;
      state.duration = 0;

      // wait for Vue to render offset
      nextTick(() => {
        // use double raf to ensure animation can start
        doubleRaf(() => {
          state.offset = -contentWidth;
          state.duration = (contentWidth + wrapWidth) / props.speed;
          emit('replay');
        });
      });
    };

    const renderMarquee = () => {
      const ellipsis = props.scrollable === false && !props.wrapable;
      const style = {
        transform: state.offset ? `translateX(${state.offset}px)` : '',
        transitionDuration: `${state.duration}s`,
      };

      return (
        <div ref={wrapRef} role="marquee" class={bem('wrap')}>
          <div
            ref={contentRef}
            style={style}
            class={[bem('content'), { 'van-ellipsis': ellipsis }]}
            onTransitionend={onTransitionEnd}
          >
            {slots.default ? slots.default() : props.text}
          </div>
        </div>
      );
    };

    const reset = () => {
      wrapWidth = 0;
      contentWidth = 0;
      state.offset = 0;
      state.duration = 0;
    };

    const start = () => {
      const { delay, speed, scrollable } = props;
      const ms = isDef(delay) ? delay * 1000 : 0;

      reset();

      clearTimeout(startTimer);
      startTimer = setTimeout(() => {
        if (!wrapRef.value || !contentRef.value || scrollable === false) {
          return;
        }

        const wrapRefWidth = useRect(wrapRef).width;
        const contentRefWidth = useRect(contentRef).width;

        if (scrollable || contentRefWidth > wrapRefWidth) {
          doubleRaf(() => {
            wrapWidth = wrapRefWidth;
            contentWidth = contentRefWidth;
            state.offset = -contentWidth;
            state.duration = contentWidth / speed;
          });
        }
      }, ms);
    };

    onActivated(start);

    // fix cache issues with forwards and back history in safari
    // see: https://guwii.com/cache-issues-with-forwards-and-back-history-in-safari/
    useEventListener('pageshow', start);

    watch([() => props.text, () => props.scrollable], start, {
      immediate: true,
    });

    return () => {
      const { color, wrapable, background } = props;
      return (
        <div
          v-show={state.show}
          role="alert"
          class={bem({ wrapable })}
          style={{ color, background }}
        >
          {renderLeftIcon()}
          {renderMarquee()}
          {renderRightIcon()}
        </div>
      );
    };
  },
});
