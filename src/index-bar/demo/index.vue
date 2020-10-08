<template>
  <demo-section>
    <van-tabs v-model="activeTab">
      <van-tab :title="t('basicUsage')">
        <van-index-bar>
          <div v-for="index in indexList" :key="index">
            <van-index-anchor :index="index" />
            <van-cell :title="t('text')" />
            <van-cell :title="t('text')" />
            <van-cell :title="t('text')" />
          </div>
        </van-index-bar>
      </van-tab>

      <van-tab :title="t('customIndexList')">
        <van-index-bar :index-list="customIndexList">
          <div v-for="index in customIndexList" :key="index">
            <van-index-anchor :index="index">
              {{ t('title') + index }}
            </van-index-anchor>
            <van-cell :title="t('text')" />
            <van-cell :title="t('text')" />
            <van-cell :title="t('text')" />
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
      customIndexList: '自定义索引列表',
    },
    'en-US': {
      text: 'Text',
      customIndexList: 'Custom Index List',
    },
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
    };
  },
};
</script>
