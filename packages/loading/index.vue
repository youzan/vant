<template>
  <div class="van-loading" :class="['van-loading--' + type, 'van-loading--' + color]">
    <span class="van-loading__spinner" :class="['van-loading__spinner--' + type, 'van-loading__spinner--' + color]">
      <i v-if="type === 'spinner'" v-for="item in 12" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'van-loading',

  props: {
    type: {
      type: String,
      default: 'gradient-circle'
    },
    color: {
      type: String,
      default: 'black'
    }
  }
};
</script>
