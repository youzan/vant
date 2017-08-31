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
import Button from '../button';

export default {
  name: 'van-goods-action-big-btn',

  components: {
    [Button.name]: Button
  },

  props: {
    primary: Boolean,
    url: {
      type: String,
      default: 'javascript:;'
    }
  }
};
</script>
