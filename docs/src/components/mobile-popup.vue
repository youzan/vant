<template>
  <van-popup v-model="currentValue" :lock-on-scroll="true">
    <div class="mobile-popup">
      <iframe :src="url" class="mobile-popup-iframe"></iframe>
    </div>
  </van-popup>
</template>

<script>
export default {
  props: {
    url: String,
    value: {}
  },

  data() {
    return {
      currentValue: this.value
    };
  },

  watch: {
    currentValue(val) {
      this.$emit('input', val);
    },
    value(val) {
      console.log(val);
      this.currentValue = val;
    }
  }
};
</script>

<style>
.mobile-popup {
  width: 375px;
  height: 650px;
  background: url(https://b.yzcdn.cn/v2/image/wap/zanui-mobile-container.png) no-repeat;
}

.mobile-popup-iframe {
  width: 100%;
  box-sizing: border-box;
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  position: relative;
  top: 64px;
  height: 586px;
}
</style>
