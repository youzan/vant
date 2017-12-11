<template>
  <van-button
    tag="a"
    :href="url"
    class="van-goods-action__big-btn"
    :type="primary ? 'primary' : 'default'"
    @click="$emit('click', $event)"
    bottomAction
  >
    <slot></slot>
  </van-button>
</template>

<script>
import VanButton from '../button';

export default {
  name: 'van-goods-action-big-btn',

  components: {
    VanButton
  },

  props: {
    url: String,
    primary: Boolean
  }
};
</script>
