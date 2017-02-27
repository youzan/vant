<template>
  <div class="page-popup">
    <h1 class="page-title">Popup</h1>

    <h2 class="page-sub-title">基础用法</h2>
    <div class="z-button-1">
      <z-button @click="popupShow1 = true">从下方弹出popup</z-button>
    </div>
    <z-popup v-model="popupShow1" position="bottom" class="z-popup-1">
      xxxx
    </z-popup>

    <div class="z-button-1">
      <z-button @click="popupShow2 = true">从上方方弹出popup</z-button>
    </div>
    <z-popup v-model="popupShow2" position="top" class="z-popup-2" :overlay="false">
      更新成功
    </z-popup>

    <div class="z-button-1">
      <z-button @click="popupShow3 = true">从右方弹出popup</z-button>
    </div>
    <z-popup v-model="popupShow3" position="right" class="z-popup-3" :overlay="false">
      <z-button @click.native="popupShow3 = false">关闭 popup</z-button>
    </z-popup>

    <div class="z-button-1">
      <z-button @click="popupShow4 = true">从中间弹出popup</z-button>
    </div>
    <z-popup v-model="popupShow4" transition="popup-fade" class="z-popup-4">
      一些内容
    </z-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popupShow1: false,
      popupShow2: false,
      popupShow3: false,
      popupShow4: false
    }
  },

  watch: {
    popupShow2(val) {
      if (val) {
        setTimeout(() => {
          this.popupShow2 = false;
        }, 2000);
      }
    }
  }
};
</script>

<style>
.z-popup-1 {
  width: 100%;
  height: 200px;
}

.z-popup-2 {
  width: 100%;
  line-height: 44px;
  background-color: rgba(0, 0, 0, 0.701961);
  text-align: center;
  color: #fff;
}

.z-popup-3 {
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.z-popup-4 {
  width: 50%;
  height: 200px;
  background: #fff;
  border-radius: 10px;
}

.page-popup .z-button-1 {
  margin-bottom: 10px;
}

.page-sub-title {
  padding: 20px 15px;
}
</style>
