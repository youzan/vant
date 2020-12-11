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
            src="https://b.yzcdn.cn/vant/doge.png"
            :style="{ transform: `scale(${distance / 80})` }"
          />
        </template>
        <template #loosing>
          <img src="https://b.yzcdn.cn/vant/doge.png" class="doge" />
        </template>
        <template #loading>
          <img src="https://b.yzcdn.cn/vant/doge-fire.jpg" class="doge" />
        </template>
        <p>{{ tips }}</p>
      </van-pull-refresh>
    </van-tab>
  </van-tabs>
</template>

<script>
import { computed, onMounted, reactive, toRefs } from 'vue';
import { useTranslate } from '@demo/use-translate';
import Toast from '../../toast';

const i18n = {
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
};

export default {
  setup() {
    const t = useTranslate(i18n);
    const state = reactive({
      count: 0,
      loading: false,
    });

    const tips = computed(() => {
      if (state.count) {
        return `${t('text')}: ${state.count}`;
      }
      return t('try');
    });

    const onRefresh = (showToast) => {
      setTimeout(() => {
        if (showToast) {
          Toast(t('success'));
        }
        state.loading = false;
        state.count++;
      }, 1000);
    };

    const preloadImage = () => {
      // preload doge image
      const doge = new Image();
      const dogeFire = new Image();

      doge.src = 'https://b.yzcdn.cn/vant/doge.png';
      dogeFire.src = 'https://b.yzcdn.cn/vant/doge-fire.jpg';
    };

    onMounted(preloadImage);

    return {
      ...toRefs(state),
      t,
      tips,
      onRefresh,
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-pull-refresh {
  background-color: @white;

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
    padding: @padding-md 0 0 @padding-md;
  }
}
</style>
