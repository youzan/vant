<template>
  <div class="van-order-goods-header">
    <van-icon :name="icon" />
    <a :href="link">{{ title }}</a>
    <img v-if="badge" :src="badge" />
  </div>
</template>

<script>
import Icon from '../icon';

export default {
  name: 'van-order-goods-header',

  components: {
    [Icon.name]: Icon
  },

  props: {
    title: String,
    icon: String,
    link: String,
    badge: String
  }
};
</script>
