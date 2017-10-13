<template>
  <div :class="['van-tabbar-item', { 'van-tabbar-item--active': active }]" @click="onClick">
    <div :class="['van-tabbar-item__icon', { 'van-tabbar-item__icon-dot': dot }]">
      <slot name="icon">
        <van-icon v-if="icon" :name="icon" />
      </slot>
    </div>
    <div class="van-tabbar-item__text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Icon from '../icon';

export default {
  name: 'van-tabbar-item',

  components: {
    [Icon.name]: Icon
  },

  props: {
    icon: String,
    dot: Boolean
  },

  data() {
    return {
      active: false
    };
  },

  beforeCreate() {
    this.$parent.items.push(this);
  },

  destroyed() {
    this.$parent.items.splice(this.$parent.items.indexOf(this), 1);
  },

  methods: {
    onClick() {
      this.$parent.onChange(this.$parent.items.indexOf(this));
    }
  }
};
</script>
