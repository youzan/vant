<template>
  <div class="notice-bar-container" style="width: 100px;">
    <van-notice-bar :speed="speed" :text="text" :mode="mode" :delay="delay" />
  </div>
</template>

<script>
export default {
  props: {
    speed: Number,
    text: String,
    mode: String,
    delay: Number
  }
};
</script>
