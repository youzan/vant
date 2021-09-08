<script setup lang="ts">
import VanTabs from '../../tabs';
import VanTab from '../../tab';
import VanList from '..';
import VanCell from '../../cell';
import VanPullRefresh from '../../pull-refresh';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site/use-translate';

const t = useTranslate({
  'zh-CN': {
    errorInfo: '错误提示',
    errorText: '请求失败，点击重新加载',
    pullRefresh: '下拉刷新',
    finishedText: '没有更多了',
  },
  'en-US': {
    errorInfo: 'Error Info',
    errorText: 'Request failed. Click to reload',
    pullRefresh: 'PullRefresh',
    finishedText: 'Finished',
  },
});

const list = ref([
  {
    items: [] as string[],
    refreshing: false,
    loading: false,
    error: false,
    finished: false,
  },
  {
    items: [] as string[],
    refreshing: false,
    loading: false,
    error: false,
    finished: false,
  },
  {
    items: [] as string[],
    refreshing: false,
    loading: false,
    error: false,
    finished: false,
  },
]);

const onLoad = (index: number) => {
  const currentList = list.value[index];
  currentList.loading = true;

  setTimeout(() => {
    if (currentList.refreshing) {
      currentList.items = [];
      currentList.refreshing = false;
    }

    for (let i = 0; i < 10; i++) {
      const text = currentList.items.length + 1;
      currentList.items.push(text < 10 ? '0' + text : String(text));
    }

    currentList.loading = false;
    currentList.refreshing = false;

    // show error info in second demo
    if (index === 1 && currentList.items.length === 10 && !currentList.error) {
      currentList.error = true;
    } else {
      currentList.error = false;
    }

    if (currentList.items.length >= 40) {
      currentList.finished = true;
    }
  }, 1000);
};

const onRefresh = (index: number) => {
  list.value[index].finished = false;
  onLoad(index);
};
</script>

<template>
  <van-tabs>
    <van-tab :title="t('basicUsage')">
      <van-list
        v-model:loading="list[0].loading"
        :finished="list[0].finished"
        :finished-text="t('finishedText')"
        @load="onLoad(0)"
      >
        <van-cell v-for="item in list[0].items" :key="item" :title="item" />
      </van-list>
    </van-tab>

    <van-tab :title="t('errorInfo')">
      <van-list
        v-model:loading="list[1].loading"
        v-model:error="list[1].error"
        :finished="list[1].finished"
        :error-text="t('errorText')"
        @load="onLoad(1)"
      >
        <van-cell v-for="item in list[1].items" :key="item" :title="item" />
      </van-list>
    </van-tab>

    <van-tab :title="t('pullRefresh')">
      <van-pull-refresh v-model="list[2].refreshing" @refresh="onRefresh(2)">
        <van-list
          v-model:loading="list[2].loading"
          :finished="list[2].finished"
          :finished-text="t('finishedText')"
          @load="onLoad(2)"
        >
          <van-cell v-for="item in list[2].items" :key="item" :title="item" />
        </van-list>
      </van-pull-refresh>
    </van-tab>
  </van-tabs>
</template>

<style lang="less">
.demo-list {
  .van-cell {
    text-align: center;
  }

  .page-desc {
    margin: 0;
    padding: 5px 0;
    color: var(--van-gray-7);
    font-size: 14px;
    text-align: center;

    &--text {
      margin: 0;
    }

    &--option {
      margin: 12px;
    }
  }

  .van-checkbox__label {
    color: var(--van-gray-7);
  }
}
</style>
