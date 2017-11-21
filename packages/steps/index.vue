<template>
  <div :class="['van-steps', `van-steps--${direction}`]">
    <div class="van-steps__status" v-if="title || description">
      <div class="van-steps__icon" v-if="icon || $slots.icon">
        <slot name="icon">
          <van-icon :name="icon" :class="iconClass" />
        </slot>
      </div>
      <div class="van-steps__message">
        <div class="van-steps__title" v-text="title" />
        <div class="van-steps__desc" v-text="description" />
      </div>
      <slot name="message-extra" />
    </div>
    <div class="van-steps__items" :class="{ 'van-steps__items--alone': !title && !description }">
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
    icon: String,
    title: String,
    active: Number,
    iconClass: String,
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
  }
};
</script>
