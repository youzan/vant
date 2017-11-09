<template>
  <div :class="['van-loading', 'van-loading--' + type, 'van-loading--' + color]">
    <span :class="['van-loading__spinner', 'van-loading__spinner--' + type, 'van-loading__spinner--' + color]">
      <i v-if="type === 'spinner'" v-for="item in 12"></i>
    </span>
  </div>
</template>

<script>
const VALID_TYPES = ['gradient-circle', 'circle', 'spinner'];
const VALID_COLORS = ['black', 'white'];

export default {
  name: 'van-loading',

  props: {
    type: {
      type: String,
      default: 'gradient-circle',
      validator: value => VALID_TYPES.indexOf(value) > -1
    },
    color: {
      type: String,
      default: 'black',
      validator: value => VALID_COLORS.indexOf(value) > -1
    }
  }
};
</script>
