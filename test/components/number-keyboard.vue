<template>
  <keep-alive>
    <van-number-keyboard v-if="showKeyboard" />
  </keep-alive>
</template>

<script>
export default {
  props: {
    showKeyboard: Boolean
  }
};
</script>
