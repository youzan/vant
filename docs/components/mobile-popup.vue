<template>
  <zan-popup v-model="currentValue">
    <div class="mobile-popup">
      <iframe :src="url" class="mobile-popup-iframe"></iframe>
    </div>
  </zan-popup>
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
  width: 380px;
  height: 500px;
  border: 5px solid #e5e5e5;
}

.mobile-popup-iframe {
  width: 100%;
  height: 500px;
}
</style>
