<script setup lang="ts">
import { reactive } from 'vue';
import { useTranslate } from '@demo/use-translate';

const i18n = {
  'zh-CN': {
    accordion: '手风琴',
    titleSlot: '自定义标题内容',
    text: '代码是写出来给人看的，附带能在机器上运行',
  },
  'en-US': {
    accordion: 'Accordion',
    titleSlot: 'Custom title',
    text: 'Content',
  },
};

const t = useTranslate(i18n);
const state = reactive({
  active1: [0],
  active2: 0,
  active3: [],
  active4: [],
});
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-collapse v-model="state.active1">
      <van-collapse-item :title="t('title') + 1">
        {{ t('text') }}
      </van-collapse-item>
      <van-collapse-item :title="t('title') + 2">
        {{ t('text') }}
      </van-collapse-item>
      <van-collapse-item :title="t('title') + 3">
        {{ t('text') }}
      </van-collapse-item>
    </van-collapse>
  </demo-block>

  <demo-block :title="t('accordion')">
    <van-collapse v-model="state.active2" accordion>
      <van-collapse-item :title="t('title') + 1">
        {{ t('text') }}
      </van-collapse-item>
      <van-collapse-item :title="t('title') + 2">
        {{ t('text') }}
      </van-collapse-item>
      <van-collapse-item :title="t('title') + 3">
        {{ t('text') }}
      </van-collapse-item>
    </van-collapse>
  </demo-block>

  <demo-block :title="t('disabled')">
    <van-collapse v-model="state.active3">
      <van-collapse-item :title="t('title') + 1">
        {{ t('text') }}
      </van-collapse-item>
      <van-collapse-item :title="t('title') + 2" disabled>
        {{ t('text') }}
      </van-collapse-item>
      <van-collapse-item :title="t('title') + 3" disabled>
        {{ t('text') }}
      </van-collapse-item>
    </van-collapse>
  </demo-block>

  <demo-block :title="t('titleSlot')">
    <van-collapse v-model="state.active4">
      <van-collapse-item>
        <template #title>
          {{ t('title') + 1 }}<van-icon name="question-o" />
        </template>
        {{ t('text') }}
      </van-collapse-item>
      <van-collapse-item
        :title="t('title') + 2"
        :value="t('content')"
        icon="shop-o"
      >
        {{ t('text') }}
      </van-collapse-item>
    </van-collapse>
  </demo-block>
</template>

<style lang="less">
.demo-collapse {
  .van-icon-question-o {
    margin-left: 5px;
    color: var(--van-blue);
    font-size: 15px;
    vertical-align: -3px;
  }
}
</style>
