<script setup lang="ts">
import VanCollapse from '..';
import VanCollapseItem from '../../collapse-item';
import VanIcon from '../../icon';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    text1: '代码是写出来给人看的，附带能在机器上运行。',
    text2: '技术无非就是那些开发它的人的共同灵魂。',
    text3: '在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。',
    accordion: '手风琴',
    titleSlot: '自定义标题内容',
  },
  'en-US': {
    text1: 'Content 1',
    text2: 'Content 2',
    text3: 'Content 3',
    accordion: 'Accordion',
    titleSlot: 'Custom title',
  },
});

const active1 = ref([0]);
const active2 = ref(0);
const active3 = ref([]);
const active4 = ref([]);
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-collapse v-model="active1">
      <van-collapse-item :title="t('title') + 1">
        {{ t('text1') }}
      </van-collapse-item>
      <van-collapse-item :title="t('title') + 2">
        {{ t('text2') }}
      </van-collapse-item>
      <van-collapse-item :title="t('title') + 3">
        {{ t('text3') }}
      </van-collapse-item>
    </van-collapse>
  </demo-block>

  <demo-block :title="t('accordion')">
    <van-collapse v-model="active2" accordion>
      <van-collapse-item :title="t('title') + 1">
        {{ t('text1') }}
      </van-collapse-item>
      <van-collapse-item :title="t('title') + 2">
        {{ t('text2') }}
      </van-collapse-item>
      <van-collapse-item :title="t('title') + 3">
        {{ t('text3') }}
      </van-collapse-item>
    </van-collapse>
  </demo-block>

  <demo-block :title="t('disabled')">
    <van-collapse v-model="active3">
      <van-collapse-item :title="t('title') + 1">
        {{ t('text1') }}
      </van-collapse-item>
      <van-collapse-item :title="t('title') + 2" disabled>
        {{ t('text2') }}
      </van-collapse-item>
      <van-collapse-item :title="t('title') + 3" disabled>
        {{ t('text3') }}
      </van-collapse-item>
    </van-collapse>
  </demo-block>

  <demo-block :title="t('titleSlot')">
    <van-collapse v-model="active4">
      <van-collapse-item>
        <template #title>
          {{ t('title') + 1 }}<van-icon name="question-o" />
        </template>
        {{ t('text1') }}
      </van-collapse-item>
      <van-collapse-item
        :title="t('title') + 2"
        :value="t('content')"
        icon="shop-o"
      >
        {{ t('text2') }}
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
