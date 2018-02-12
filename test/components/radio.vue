<template>
  <van-radio-group v-model="radio">
    <van-radio name="1">单选框1</van-radio>
    <van-radio name="2">单选框2</van-radio>
  </van-radio-group>
</template>

<script>
export default {
  data() {
    return {
      radio: '1'
    };
  }
};
</script>
