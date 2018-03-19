<template>
  <div class="van-steps" :class="`van-steps--${direction}`">
    <div class="van-steps__status" v-if="title || description">
      <div class="van-steps__icon" v-if="icon || $slots.icon">
        <slot name="icon">
          <icon :name="icon" :class="iconClass" />
        </slot>
      </div>
      <div class="van-steps__message">
        <div class="van-steps__title" v-text="title" />
        <div class="van-steps__desc van-ellipsis" v-text="description" />
      </div>
      <slot name="message-extra" />
    </div>
    <div class="van-steps__items" :class="{ 'van-steps__items--alone': !title && !description }">
      <slot />
    </div>
  </div>
</template>

<script>
import create from '../utils/create';

export default create({
  name: 'steps',

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
});
</script>
