<template>
  <van-collapse v-model="active" :accordion="accordion">
    <van-collapse-item title="a" name="first">content</van-collapse-item>
    <van-collapse-item title="b">content</van-collapse-item>
    <van-collapse-item title="c">content</van-collapse-item>
  </van-collapse>
</template>

<script>
export default {
  props: {
    accordion: Boolean
  },

  data() {
    return {
      active: this.accordion ? '' : []
    };
  }
};
</script>
