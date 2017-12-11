<template>
  <van-button
    tag="a"
    :href="url"
    class="van-goods-action__big-btn"
    :type="primary ? 'primary' : 'default'"
    bottomAction
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </van-button>
</template>

<script>
import { create } from '../utils';
import VanButton from '../button';

export default create({
  name: 'van-goods-action-big-btn',

  components: {
    VanButton
  },

  props: {
    url: String,
    primary: Boolean
  }
});
</script>
