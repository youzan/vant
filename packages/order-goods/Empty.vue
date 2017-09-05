<template>
  <div class="van-order-goods-empty van-hairline--top">
    <img :src="icon" />
    <p>{{ message }}</p>
    <van-button @click="$emit('clickEmptyButton')">{{ buttonText }}</van-button>
  </div>
</template>

<script>
import Button from '../button';

export default {
  name: 'van-order-goods-empty',

  components: {
    [Button.name]: Button
  },

  props: {
    icon: String,
    message: String,
    buttonText: String
  }
};
</script>
