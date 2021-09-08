<script setup lang="ts">
import VanTabs from '../../tabs';
import VanTab from '../../tab';
import VanIndexBar from '..';
import VanIndexAnchor from '../../index-anchor';
import VanCell from '../../cell';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site/use-translate';

const t = useTranslate({
  'zh-CN': {
    text: '文本',
    customIndexList: '自定义索引列表',
  },
  'en-US': {
    text: 'Text',
    customIndexList: 'Custom Index List',
  },
});

const activeTab = ref(0);
const indexList: string[] = [];
const customIndexList = [1, 2, 3, 4, 5, 6, 8, 9, 10];
const charCodeOfA = 'A'.charCodeAt(0);

for (let i = 0; i < 26; i++) {
  indexList.push(String.fromCharCode(charCodeOfA + i));
}
</script>

<template>
  <van-tabs v-model:active="activeTab">
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
</template>
