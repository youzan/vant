<template>
  <div class="notice-bar-container" style="width: 100px;">
    <van-notice-bar :speed="speed" :text="text" :mode="mode" :delay="delay" />
  </div>
</template>

<script>
import NoticeBar from 'packages/notice-bar';
export default {
  components: {
    [NoticeBar.name]: NoticeBar
  },
  props: ['speed', 'text', 'mode', 'delay']
};
</script>

