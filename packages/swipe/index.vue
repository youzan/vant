<template>
  <div class="van-swipe">
    <div class="van-swipe__items">
      <slot></slot>
    </div>
    <div
      class="van-swipe__indicators"
      v-if="showIndicators && swipes.length > 1"
    >
      <span class="van-swipe__indicator" v-for="(item, index) in swipes.length" :key="index" :class="{
        'van-swipe__indicator--active': currIndex === index
      }">
      </span>
    </div>
  </div>
</template>

<script>
import Input from './input';
import Scroll from './scroll';
import SpringDummy from './spring_dummy';

export default {
  name: 'van-swipe',

  props: {
    autoPlay: Boolean,
    showIndicators: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      currIndex: 0,
      swipes: []
    };
  },

  mounted() {
    this.input = new Input(this.$el, {
      listenMoving: true
    });

    this.input.on('move', function(dist, isEnd, e, extra) {
      if (extra.orgDirection) {
        e.preventDefault();
        scroll.movePage(dist.x, isEnd);
      }
    });

    this.scroll = new Scroll(this.$el, {
      autoPlay: this.autoPlay
    });

    const scroll = this.scroll;
    scroll.on('pageChangeEnd', this.onPageChangeEnd);

    const dummy = new SpringDummy(scroll, this.input);

    dummy.on('bounce', function(dist, isEnd) {
      scroll.movePage(dist.x, isEnd);
    }).on('autoPlay', function(dist, isEnd) {
      scroll.movePage(dist.x, isEnd);
    });
    this.dummy = dummy;
  },

  watch: {
    swipes(value) {
      if (this.autoPlay && value.length > 1) {
        this.dummy.initMove();
      } else {
        this.dummy.clearMove();
      }
      this.scroll.update();
      return value;
    },

    autoPlay(value) {
      if (value && this.swipes.length > 1) {
        this.dummy.initMove();
      } else {
        this.dummy.clearMove();
      }
      return value;
    }
  },

  methods: {
    onPageChangeEnd(page, currIndex) {
      this.currIndex = +currIndex;
      this.$emit('pagechange:end', page, currIndex);
    }
  }
};
</script>
