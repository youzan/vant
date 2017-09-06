<template>
  <a :href="url" class="van-goods-action__mini-btn van-hairline" @click="$emit('click', $event);">
    <van-icon :class="['van-goods-action__mini-btn-icon', iconClass]" :name="icon" />
    <slot></slot>
  </a>
</template>

<script>
import Icon from '../icon';

export default {
  name: 'van-goods-action-mini-btn',

  components: {
    [Icon.name]: Icon
  },

  props: {
    icon: String,
    iconClass: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: 'javascript:;'
    }
  }
};
</script>
