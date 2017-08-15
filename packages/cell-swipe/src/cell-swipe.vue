<template>
  <div
    v-clickoutside:touchstart="swipeMove"
    @click="swipeMove()"
    @touchstart="startDrag"
    @touchmove="onDrag"
    @touchend="endDrag"
    class="van-cell-swipe"
    ref="cell">
    <div class="van-cell-wrapper">
      <slot>单元格内容</slot>
    </div>
    <div class="van-cell-left">
      <div ref="left">
        <slot name="left"></slot>
      </div>
    </div>
    <div class="van-cell-right">
      <div ref="right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import {once} from 'src/utils/dom';
  import Clickoutside from 'src/utils/clickoutside';
  
  export default {
    name: 'van-cell-swipe',
    props: {
      'leftWidth': {type: Number, default: 0},
      'rightWidth': {type: Number, default: 0}
    },
    directives: {Clickoutside},
    data() {
      return {
        start: {x: 0, y: 0}
      };
    },
    computed: {
      leftDefaultTransform(){
        return this.translate3d(-this.leftWidth - 1);
      },
      rightDefaultTransform(){
        return this.translate3d(this.rightWidth);
      }
    },
    mounted() {
      this.wrap = this.$refs.cell.querySelector('.van-cell-wrapper');
      this.leftElm = this.$refs.left;
      this.leftWrapElm = this.leftElm.parentNode;
      this.leftWrapElm.style.webkitTransform = this.leftDefaultTransform;

      this.rightElm = this.$refs.right;
      this.rightWrapElm = this.rightElm.parentNode;
      this.rightWrapElm.style.webkitTransform = this.rightDefaultTransform;
    },
    methods: {
      resetSwipeStatus() {
        this.swiping = false; // 是否正在拖动
        this.opened = true; // 记录是否滑动左右 或者 注册
        this.offsetLeft = 0; // 记录单次拖动的拖动距离
      },
      translate3d(offset) {
        return `translate3d(${offset}px, 0, 0)`;
      },
      swipeMove(offset = 0) {
        this.wrap.style.webkitTransform = this.translate3d(offset);
        this.rightWrapElm.style.webkitTransform = this.translate3d(this.rightWidth + offset);
        this.leftWrapElm.style.webkitTransform = this.translate3d(-this.leftWidth + offset);
        offset && (this.swiping = true);
      },
      swipeLeaveTransition(direction) {
        setTimeout(() => {
          this.swipeLeave = true;
          // left
          if (direction > 0 && -this.offsetLeft > this.rightWidth * 0.4 && this.rightWidth > 0) {
            this.swipeMove(-this.rightWidth);
            this.resetSwipeStatus();
            return;
            // right
          } else if (direction < 0 && this.offsetLeft > this.leftWidth * 0.4 && this.leftWidth > 0) {
            this.swipeMove(this.leftWidth);
            this.resetSwipeStatus();
            return;
          } else {
            this.swipeMove(0);
            once(this.wrap, 'webkitTransitionEnd', _ => {
              this.wrap.style.webkitTransform = '';
              this.rightWrapElm.style.webkitTransform = this.rightDefaultTransform;
              this.leftWrapElm.style.webkitTransform = this.leftDefaultTransform;
              this.swipeLeave = false;
              this.swiping = false;
            });
          }
        }, 0);
      },
      startDrag(evt) {
        evt = evt.changedTouches ? evt.changedTouches[0] : evt;
        this.dragging = true;
        this.start.x = evt.pageX;
        this.start.y = evt.pageY;
      },
      onDrag(evt) {
        if (this.opened) {
          !this.swiping && this.swipeMove(0);
          this.opened = false;
          return;
        }
        if (!this.dragging) return;
        let swiping;
        const e = evt.changedTouches ? evt.changedTouches[0] : evt;
        const offsetTop = e.pageY - this.start.y;
        const offsetLeft = this.offsetLeft = e.pageX - this.start.x;
        if ((offsetLeft < 0 && -offsetLeft > this.rightWidth) ||
          (offsetLeft > 0 && offsetLeft > this.leftWidth) ||
          (offsetLeft > 0 && !this.leftWidth) ||
          (offsetLeft < 0 && !this.rightWidth)) {
          return;
        }
        const y = Math.abs(offsetTop);
        const x = Math.abs(offsetLeft);
        swiping = !(x < 5 || (x >= 5 && y >= x * 1.73));
        if (!swiping) return;
        evt.preventDefault();
        this.swipeMove(offsetLeft);
      },
      endDrag() {
        if (!this.swiping) return;
        this.swipeLeaveTransition(this.offsetLeft > 0 ? -1 : 1);
      }
    }
  };
</script>

