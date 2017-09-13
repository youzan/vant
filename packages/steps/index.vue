<template>
  <div class="van-steps" :class="stepsClass">
    <div class="van-steps__status" v-if="title || description">
      <div class="van-steps__icon" v-if="icon || $slots.icon">
        <slot name="icon">
          <van-icon :name="icon" :class="iconClass"></van-icon>
        </slot>
      </div>
      <div class="van-steps__message">
        <div class="van-steps__message-wrapper">
          <div class="van-steps__title" v-text="title"></div>
          <div class="van-steps__desc" v-text="description"></div>
        </div>
      </div>
      <slot name="message-extra">
      </slot>
    </div>
    <div class="van-steps__items" :class="{
        'van-steps__items--alone': !title && !description
      }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Icon from '../icon';

export default {
  name: 'van-steps',

  components: {
    [Icon.name]: Icon
  },

  props: {
    active: Number,
    icon: String,
    iconClass: {
      type: String,
      default: ''
    },
    title: String,
    description: String,
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeColor: {
      type: String,
      default: '#06bf04'
    }
  },

  data() {
    return {
      steps: []
    };
  },

  computed: {
    stepsClass() {
      return [
        `van-steps--${this.direction}`, {
          [`van-steps--${this.steps.length}`]: this.direction === 'horizontal'
        }
      ];
    }
  }
};
</script>
