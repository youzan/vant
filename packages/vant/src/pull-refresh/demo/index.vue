<script setup lang="ts">
import VanTabs from '../../tabs';
import VanTab from '../../tab';
import VanPullRefresh from '..';
import { computed, onMounted, ref } from 'vue';
import { cdnURL, useTranslate } from '../../../docs/site';
import { showToast } from '../../toast';

const t = useTranslate({
  'zh-CN': {
    try: '下拉试试',
    text: '刷新次数',
    success: '刷新成功',
    successTip: '成功提示',
    customTips: '自定义提示',
  },
  'en-US': {
    try: 'Try it down',
    text: 'Refresh Count',
    success: 'Refresh success',
    successTip: 'Success Tip',
    customTips: 'Custom Tips',
  },
});

const count = ref(0);
const loading = ref(false);

const tips = computed(() => {
  if (count.value) {
    return `${t('text')}: ${count.value}`;
  }
  return t('try');
});

const onRefresh = (isShowToast: boolean) => {
  setTimeout(() => {
    if (isShowToast) {
      showToast(t('success'));
    }
    loading.value = false;
    count.value++;
  }, 1000);
};

const preloadImage = () => {
  // preload doge image
  const doge = new Image();
  const dogeFire = new Image();

  doge.src = cdnURL('doge.png');
  dogeFire.src = cdnURL('doge-fire.jpeg');
};

onMounted(preloadImage);
</script>

<template>
  <van-tabs>
    <van-tab :title="t('basicUsage')">
      <van-pull-refresh v-model="loading" @refresh="onRefresh(true)">
        <p>{{ tips }}</p>
      </van-pull-refresh>
    </van-tab>

    <van-tab :title="t('successTip')">
      <van-pull-refresh
        v-model="loading"
        :success-text="t('success')"
        @refresh="onRefresh(false)"
      >
        <p>{{ tips }}</p>
      </van-pull-refresh>
    </van-tab>

    <van-tab :title="t('customTips')">
      <van-pull-refresh
        v-model="loading"
        head-height="80"
        @refresh="onRefresh(true)"
      >
        <template #pulling="{ distance }">
          <img
            class="doge"
            :src="cdnURL('doge.png')"
            :style="{ transform: `scale(${distance / 80})` }"
          />
        </template>
        <template #loosing>
          <img :src="cdnURL('doge.png')" class="doge" />
        </template>
        <template #loading>
          <img :src="cdnURL('doge-fire.jpeg')" class="doge" />
        </template>
        <p>{{ tips }}</p>
      </van-pull-refresh>
    </van-tab>
  </van-tabs>
</template>

<style lang="less">
.demo-pull-refresh {
  background-color: var(--van-background-2);

  .van-pull-refresh {
    height: calc(100vh - 50px);
  }

  .doge {
    width: 140px;
    height: 72px;
    margin-top: 8px;
    border-radius: 4px;
  }

  p {
    margin: 0;
    padding: var(--van-padding-md) 0 0 var(--van-padding-md);
  }
}
</style>
