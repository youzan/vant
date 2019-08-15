<template>
  <demo-section>
    <van-tabs v-model="activeTab">
      <van-tab :title="$t('basicUsage')">
        <van-index-bar>
          <div
            v-for="index in indexList"
            :key="index"
          >
            <van-index-anchor :index="index" />
            <van-cell :title="$t('text')" />
            <van-cell :title="$t('text')" />
            <van-cell :title="$t('text')" />
          </div>
        </van-index-bar>
      </van-tab>

      <van-tab :title="$t('customScroller')">
        <div class="custom-scroller">
          <van-index-bar>
            <div
              v-for="index in indexList"
              :key="index"
            >
              <van-index-anchor :index="index" />
              <van-cell :title="$t('text')" />
              <van-cell :title="$t('text')" />
              <van-cell :title="$t('text')" />
            </div>
          </van-index-bar>
        </div>
      </van-tab>

      <van-tab :title="$t('popupScroller')">
        <div class="popup-scroller">
          <van-button round type="primary" @click="showPopup=true">Click me!</van-button>
          <van-popup
            class="index-bar-popup"
            v-model="showPopup"
            position="right"
            get-container="body"
          >
            <van-index-bar>
              <div
                v-for="index in indexList"
                :key="index"
              >
                <van-index-anchor :index="index" />
                <van-cell :title="$t('text')" />
                <van-cell :title="$t('text')" />
                <van-cell :title="$t('text')" />
              </div>
            </van-index-bar>
          </van-popup>
        </div>
      </van-tab>

      <van-tab :title="$t('customIndexList')">
        <van-index-bar :index-list="customIndexList">
          <div
            v-for="index in customIndexList"
            :key="index"
          >
            <van-index-anchor :index="index">
              {{ $t('title') + index }}
            </van-index-anchor>
            <van-cell :title="$t('text')" />
            <van-cell :title="$t('text')" />
            <van-cell :title="$t('text')" />
          </div>
        </van-index-bar>
      </van-tab>
    </van-tabs>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      text: '文本',
      customScroller: '自定义滚动容器',
      popupScroller: 'Popup 内滚动',
      customIndexList: '自定义索引列表'
    },
    'en-US': {
      text: 'Text',
      customScroller: 'Custom Scroller',
      popupScroller: 'Popup Scroller',
      customIndexList: 'Custom Index List'
    }
  },

  data() {
    const indexList = [];
    const charCodeOfA = 'A'.charCodeAt(0);
    for (let i = 0; i < 26; i++) {
      indexList.push(String.fromCharCode(charCodeOfA + i));
    }

    return {
      activeTab: 0,
      indexList,
      customIndexList: [1, 2, 3, 4, 5, 6, 8, 9, 10],
      showPopup: false,
    };
  }
};
</script>

<style lang="less">
  .demo-index-bar {
    .custom-scroller {
      height: 50vh;
      margin: 100px 0 0 100px;
      overflow-y: scroll;
    }

    .popup-scroller {
      padding: 50px 0;
      text-align: center;
    }
  }

  .index-bar-popup {
    top: 0;
    transform: none;

    .van-index-bar {
      width: 80vw;
      background: #f8f8f8;
    }
  }
</style>
