<template>
  <a :href="url" class="van-goods-action__mini-btn van-hairline" @click="$emit('click', $event);">
    <icon class="van-goods-action__mini-btn-icon" :class="iconClass" :name="icon" />
    <slot></slot>
  </a>
</template>

<script>
import Icon from '../icon';

export default {
  name: 'van-goods-action-mini-btn',

  components: {
    Icon
  },

  props: {
    url: String,
    icon: String,
    iconClass: String
  }
};
</script>
