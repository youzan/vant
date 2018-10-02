<template>
  <div
    v-if="value"
    :class="b()"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
  >
    <div v-if="showIndex" :class="b('index')">{{ active + 1 }}/{{ count }}</div>
    <swipe
      ref="swipe"
      :initial-swipe="startPosition"
      :show-indicators="false"
      @change="onChange"
    >
      <swipe-item v-for="(item, index) in images" :key="index">
        <img :class="b('image')" :src="item" >
      </swipe-item>
    </swipe>
  </div>
</template>

<script>
import create from '../utils/create';
import Popup from '../mixins/popup';
import Swipe from '../swipe';
import SwipeItem from '../swipe-item';

export default create({
  name: 'image-preview',

  mixins: [Popup],

  components: {
    Swipe,
    SwipeItem
  },

  props: {
    images: {
      type: Array,
      default: () => []
    },
    startPosition: {
      type: Number,
      default: 0
    },
    overlay: {
      type: Boolean,
      default: true
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    overlayClass: {
      type: String,
      default: 'van-image-preview__overlay'
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      active: this.startPosition
    };
  },

  computed: {
    count() {
      return this.images.length;
    }
  },

  watch: {
    startPosition(active) {
      this.active = active;
    }
  },

  methods: {
    onTouchStart() {
      this.touchStartTime = new Date();
    },

    onTouchEnd(event) {
      event.preventDefault();

      const deltaTime = new Date() - this.touchStartTime;
      const { offsetX, offsetY } = this.$refs.swipe;

      // prevent long tap to close component
      if (deltaTime < 500 && offsetX < 10 && offsetY < 10) {
        this.$emit('input', false);
      }
    },

    onChange(active) {
      this.active = active;
    }
  }
});
</script>
