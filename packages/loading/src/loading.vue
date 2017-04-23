<template>
  <div class="van-loading" :class="['van-loading--' + type]">
    <span class="van-loading__spinner" :class="['van-loading__spinner--' + type, 'van-loading__spinner--' + color]"></span>
  </div>
</template>

<script>
const VALID_TYPES = ['gradient-circle', 'circle'];
const VALID_COLORS = ['black', 'white'];
export default {
  name: 'van-loading',

  props: {
    type: {
      type: String,
      default: 'gradient-circle',
      validator(value) {
        return VALID_TYPES.indexOf(value) > -1;
      }
    },
    color: {
      type: String,
      default: 'black',
      validator(value) {
        return VALID_COLORS.indexOf(value) > -1;
      }
    }
  }
};
</script>
