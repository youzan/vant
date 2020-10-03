import { ref, watch } from 'vue';
import { createNamespace } from '../utils';
import Swipe from '../swipe';

const [createComponent, bem] = createNamespace('tabs');

export default createComponent({
  props: {
    inited: Boolean,
    duration: [Number, String],
    animated: Boolean,
    swipeable: Boolean,
    lazyRender: Boolean,
    count: {
      type: Number,
      required: true,
    },
    currentIndex: {
      type: Number,
      required: true,
    },
  },

  emits: ['change'],

  setup(props, { emit, slots }) {
    const swipeRef = ref();

    const onChange = (index: number) => {
      emit('change', index);
    };

    const renderChildren = () => {
      const Content = slots.default?.();

      if (props.animated || props.swipeable) {
        return (
          <Swipe
            ref={swipeRef}
            loop={false}
            class={bem('track')}
            duration={props.duration}
            touchable={props.swipeable}
            lazyRender={props.lazyRender}
            showIndicators={false}
            onChange={onChange}
          >
            {Content}
          </Swipe>
        );
      }

      return Content;
    };

    watch(
      () => props.currentIndex,
      (index) => {
        const swipe = swipeRef.value;
        if (swipe && swipe.state.active !== index) {
          swipe.swipeTo(index, { immediate: !props.inited });
        }
      }
    );

    return () => (
      <div
        class={bem('content', {
          animated: props.animated || props.swipeable,
        })}
      >
        {renderChildren()}
      </div>
    );
  },
});
