<script setup lang="ts">
import VanTreeSelect from '..';
import VanImage from '../../image';
import { ref, computed } from 'vue';
import { useTranslate } from '../../../docs/site/use-translate';
import { zhCNData } from './data-zh';
import { enUSData } from './data-en';
import { deepClone } from '../../utils/deep-clone';

const t = useTranslate({
  'zh-CN': {
    showBadge: '徽标提示',
    radioMode: '单选模式',
    multipleMode: '多选模式',
    customContent: '自定义内容',
    data: zhCNData,
    dataSimple: [{ text: '分组 1' }, { text: '分组 2' }],
  },
  'en-US': {
    showBadge: 'Show Badge',
    radioMode: 'Radio Mode',
    multipleMode: 'Multiple Mode',
    customContent: 'Custom Content',
    data: enUSData,
    dataSimple: [{ text: 'Group 1' }, { text: 'Group 2' }],
  },
});

const activeId = ref(1);
const activeId2 = ref(1);
const activeIds = ref([1, 2]);
const activeIndex = ref(0);
const activeIndex2 = ref(0);
const activeIndex3 = ref(0);
const activeIndex4 = ref(0);

const items = computed(() => t('data'));

const simpleItems = computed(() => t('dataSimple'));

const badgeItems = computed(() => {
  const data = deepClone(t('data')).slice(0, 2);
  data[0].dot = true;
  data[1].badge = 5;
  return data;
});
</script>

<template>
  <demo-block :title="t('radioMode')">
    <van-tree-select
      v-model:active-id="activeId"
      v-model:main-active-index="activeIndex"
      :items="items"
    />
  </demo-block>

  <demo-block :title="t('multipleMode')">
    <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex2"
      :items="items"
    />
  </demo-block>

  <demo-block :title="t('customContent')">
    <van-tree-select
      v-model:main-active-index="activeIndex3"
      height="55vw"
      :items="simpleItems"
    >
      <template #content>
        <van-image
          v-if="activeIndex3 === 0"
          :show-loading="false"
          src="https://img.yzcdn.cn/vant/apple-1.jpg"
        />
        <van-image
          v-if="activeIndex3 === 1"
          :show-loading="false"
          src="https://img.yzcdn.cn/vant/apple-2.jpg"
        />
      </template>
    </van-tree-select>
  </demo-block>

  <demo-block :title="t('showBadge')">
    <van-tree-select
      v-model:active-id="activeId2"
      v-model:main-active-index="activeIndex4"
      height="55vw"
      :items="badgeItems"
    />
  </demo-block>
</template>
