<template>
  <van-tabs
    :active="active"
    :duration="duration"
    :sticky="sticky"
    :swipeable="swipeable"
    @click="handleTabClick"
    @disabled="handleTabDisabledClick"
  >
    <van-tab :title="firstTabTitle" :disabled="firstTabDisabled">内容一</van-tab>
    <van-tab title="选项二">内容二</van-tab>
    <van-tab title="选项三" disabled>内容三</van-tab>
    <van-tab title="选项四">内容四</van-tab>
  </van-tabs>
</template>

<script>
export default {
  props: {
    firstTabTitle: {
      type: String,
      default: '选项一'
    },
    firstTabDisabled: {
      type: Boolean
    },
    sticky: Boolean,
    swipeable: Boolean
  },

  data() {
    return {
      active: 0,
      duration: 0.5
    };
  },

  methods: {
    handleTabClick(index) {
      this.$emit('click');
    },
    handleTabDisabledClick(index) {
      this.$emit('disabled');
    }
  }
};
</script>
