<template>
  <div class="zan-steps" :class="`zan-steps--${steps.length}`">
    <div class="zan-steps__status" v-if="title || description">
      <div class="zan-steps__icon" v-if="icon || $slot.icon">
        <slot name="icon">
          <zan-icon :name="icon" :class="iconClass"></zan-icon>
        </slot>
      </div>
      <div class="zan-steps__message">
        <div class="zan-steps__message-wrapper">
          <h4 class="zan-steps__title" v-text="title"></h4>
          <p class="zan-steps__desc" v-text="description"></p>
        </div>
      </div>
      <slot name="message-extra">
      </slot>
    </div>
    <div class="zan-steps__items" :class="{
      'zan-steps__items--alone': !title && !description
    }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Icon from 'packages/icon';

export default {
  name: 'zan-steps',

  components: {
    'zan-icon': Icon
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
