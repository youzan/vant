<template>
  <div class="zan-steps">
    <div class="zan-steps__desc" v-if="icon">
      <i class="zan-icon" :class="computedIconClass"></i>
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
    // iconClass: String,
    title: String,
    description: String
  },

  computed: {
    // computedIconClass() {
    //   let iconName = `zan-icon-${this.icon}`;
    //   let result = (iconClass && iconClass.split(' ')) || [];
    //   result.push(iconName);

    //   return result;
    // }
  }
};
</script>
