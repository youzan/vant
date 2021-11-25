import { createNamespace } from '../utils';
import Swipe from '../swipe';

const [createComponent, bem] = createNamespace('tabs');

export default createComponent({

  props: {
    inited: Boolean,
    count: Number,
    duration: [Number, String],
    animated: Boolean,
    swipeable: Boolean,
    currentIndex: Number,
    lazyRender: Boolean,
  },

  watch: {
    currentIndex(index) {
      const swipe = this.$refs.swipeRef;
      if (swipe && swipe.active !== index) {
        swipe.swipeTo(index, { immediate: !this.inited });
      }
    }
  },

  methods: {
    onChange(index) {
      this.$emit('change', index);
    },
    genChildren() {
      if (this.animated || this.swipeable) {
        return (
          <Swipe
            ref='swipeRef'
            loop={false}
            class={bem('track')}
            touchable={this.swipeable}
            lazyRender={this.lazyRender}
            showIndicators={false}
            onChange={this.onChange}
          >
            {this.slots()}
          </Swipe>
        );
      }

      return this.slots();
    },
  },

  render() {
    return (
      <div
        class={bem('content', { animated: this.animated || this.swipeable })}
      >
        {this.genChildren()}
      </div>
    );
  },
});
