<template>
  <div class="page-popup">
    <h1 class="page-title">Popup</h1>

    <h2 class="page-sub-title">基础用法</h2>
    <div class="zan-button-1">
      <zan-button @click="popupShow1 = true">从下方弹出popup</zan-button>
    </div>
    <zan-popup v-model="popupShow1" position="bottom" class="zan-popup-1">
      xxxx
    </zan-popup>

    <div class="zan-button-1">
      <zan-button @click="popupShow2 = true">从上方方弹出popup</zan-button>
    </div>
    <zan-popup v-model="popupShow2" position="top" class="zan-popup-2" :overlay="false">
      更新成功
    </zan-popup>

    <div class="zan-button-1">
      <zan-button @click="popupShow3 = true">从右方弹出popup</zan-button>
    </div>
    <zan-popup v-model="popupShow3" position="right" class="zan-popup-3" :overlay="false">
      <zan-button @click.native="popupShow3 = false">关闭 popup</zan-button>
    </zan-popup>

    <div class="zan-button-1">
      <zan-button @click="popupShow4 = true">从中间弹出popup</zan-button>
    </div>
    <zan-popup v-model="popupShow4" transition="popup-fade" class="zan-popup-4">
      一些内容
    </zan-popup>
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
.zan-popup-1 {
  width: 100%;
  height: 200px;
}

.zan-popup-2 {
  width: 100%;
  line-height: 44px;
  background-color: rgba(0, 0, 0, 0.701961);
  text-align: center;
  color: #fff;
}

.zan-popup-3 {
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.zan-popup-4 {
  width: 50%;
  height: 200px;
  background: #fff;
  border-radius: 10px;
}

.page-popup .zan-button-1 {
  margin-bottom: 10px;
}

.page-sub-title {
  padding: 20px 15px;
}
</style>
