<template>
  <div class="zan-swipe">
    <slot></slot>
  </div>
</template>

<script>
import Input from './input';
import Scroll from './scroll';
import SpringDummy from './spring_dummy';

export default {
  name: 'zan-swipe',

  props: {
    autoPlay: {
      type: Boolean,
      default: false
    },
    onPageChangeEnd: {
      type: Function,
      default: () => {}
    }
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
  }
};
</script>
