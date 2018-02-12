<template>
  <van-field @click-icon="onIconClick" @blur="$emit('blur')">
    <div slot="icon">icon</div>
  </van-field>
</template>

<script>
export default {
  props: {
    onIconClick: {
      type: Function,
      default: () => {}
    }
  }
};
</script>
