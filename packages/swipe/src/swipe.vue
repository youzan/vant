<template>
  <div class="van-swipe">
    <div class="van-swipe__items">
      <slot></slot>
    </div>
    <div class="van-swipe__indicators" v-if="showIndicators">
      <span class="van-swipe__indicator" v-for="i in swipes.length" :class="{
        'van-swipe__indicator--active': currIndex === i -1
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
  },

  updated() {
    this.scroll.update();
  },

  methods: {
    onPageChangeEnd(page, currIndex) {
      this.currIndex = +currIndex;
      this.$emit('pagechange:end', page, currIndex);
    }
  }
};
</script>
