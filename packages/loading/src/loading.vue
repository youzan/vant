<template>
  <div class="zan-loading">
    <span class="zan-loading__spinner" :class="['zan-loading__spinner--' + type, 'zan-loading__spinner--' + color]"></span>
  </div>
</template>

<script>
const VALID_TYPES = ['gradient-circle', 'circle'];
const VALID_COLORS = ['black', 'white'];
export default {
  name: 'zan-loading',

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
