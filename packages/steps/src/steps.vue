<template>
  <div class="van-steps" :class="`van-steps--${steps.length}`">
    <div class="van-steps__status" v-if="title || description">
      <div class="van-steps__icon" v-if="icon || $slots.icon">
        <slot name="icon">
          <van-icon :name="icon" :class="iconClass"></van-icon>
        </slot>
      </div>
      <div class="van-steps__message">
        <div class="van-steps__message-wrapper">
          <h4 class="van-steps__title" v-text="title"></h4>
          <p class="van-steps__desc" v-text="description"></p>
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
import Icon from 'packages/icon';

export default {
  name: 'van-steps',

  components: {
    'van-icon': Icon
  },

  props: {
    active: Number,
    icon: String,
    iconClass: {
      type: String,
      default: ''
    },
    title: String,
    description: String
  },

  data() {
    return {
      steps: []
    };
  }
};
</script>
