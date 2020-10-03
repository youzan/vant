import { ref, watch, onMounted } from 'vue';
import { createNamespace } from '../utils';
import Swipe from '../swipe';

const [createComponent, bem] = createNamespace('tabs');

export default createComponent({
  props: {
    inited: Boolean,
    animated: Boolean,
    swipeable: Boolean,
    lazyRender: Boolean,
    count: {
      type: Number,
      required: true,
    },
    duration: {
      type: [Number, String],
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
            duration={+props.duration * 1000}
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

    const swipeToCurrentTab = (index: number) => {
      const swipe = swipeRef.value;
      if (swipe && swipe.state.active !== index) {
        swipe.swipeTo(index, { immediate: !props.inited });
      }
    };

    watch(() => props.currentIndex, swipeToCurrentTab);

    onMounted(() => {
      swipeToCurrentTab(props.currentIndex);
    });

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
