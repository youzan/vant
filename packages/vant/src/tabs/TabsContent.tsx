import { ref, watch, onMounted, defineComponent } from 'vue';
import { numericProp, makeRequiredProp, createNamespace } from '../utils';
import { Swipe, SwipeInstance } from '../swipe';
import { useExpose } from '../composables/use-expose';

const [name, bem] = createNamespace('tabs');

export default defineComponent({
  name,

  props: {
    count: makeRequiredProp(Number),
    inited: Boolean,
    animated: Boolean,
    duration: makeRequiredProp(numericProp),
    swipeable: Boolean,
    lazyRender: Boolean,
    currentIndex: makeRequiredProp(Number),
  },

  emits: ['change'],

  setup(props, { emit, slots }) {
    const swipeRef = ref<SwipeInstance>();

    const onChange = (index: number) => emit('change', index);

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

    useExpose({ swipeRef });

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
