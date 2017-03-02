<template>
  <div class="zan-steps">
    <div class="zan-steps__status" v-if="icon">
      <i class="zan-icon" :class="computedIconClass"></i>
      <div class="zan-steps__message">
        <div class="zan-steps__message-wrapper">
          <h4 class="zan-steps__title" v-text="title"></h4>
          <p class="zan-steps__desc" v-text="description"></p>
        </div>
      </div>
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
      let iconName = `zan-icon-${this.icon}`;
      let result = this.iconClass.split(' ');
      result.push(iconName);

      return result;
    }
  }
};
</script>
