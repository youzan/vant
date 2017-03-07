<template>
  <div class="zan-steps" :class="`zan-steps--${steps.length}`">
    <div class="zan-steps__status" v-if="icon">
      <i class="zan-icon zan-steps__icon" :class="computedIconClass"></i>
      <div class="zan-steps__message">
        <div class="zan-steps__message-wrapper">
          <h4 class="zan-steps__title" v-text="title"></h4>
          <p class="zan-steps__desc" v-text="description"></p>
        </div>
      </div>
      <slot name="message-extra">
      </slot>
    </div>
    <div class="zan-steps__items">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zan-steps',

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

  computed: {
    computedIconClass() {
      const iconName = `zan-icon-${this.icon}`;
      const result = this.iconClass.split(' ');
      result.push(iconName);

      return result;
    }
  },

  data() {
    return {
      steps: []
    };
  }
};
</script>
