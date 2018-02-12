<template>
  <keep-alive>
    <van-number-keyboard v-if="showKeyboard" />
  </keep-alive>
</template>

<script>
import NumberKeyboard from 'packages/number-keyboard';

export default {
  name: 'number-keyboard-test',

  components: {
    [NumberKeyboard.name]: NumberKeyboard
  },

  props: ['showKeyboard']
};
</script>
