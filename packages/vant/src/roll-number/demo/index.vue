<script setup lang="ts">
import VanRollNumber from '..';
import Button from '../../button';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    direction: '改变翻滚方向',
    stopOrder: '各数位停止顺序',
    rollDown: '向下翻滚',
    rollUp: '向上翻滚',
  },
  'en-US': {
    direction: 'Change Roll Direction',
    stopOrder: 'stopOrder',
    rollDown: 'rollDown',
    rollUp: 'rollUp',
  },
});

const isStart = ref(false);
const isStart2 = ref(false);
const isStart3 = ref(false);
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <div style="text-align: center">
      <div style="margin-bottom: 10px">
        <Button @click="() => (isStart = true)" type="primary">{{
          t('rollDown')
        }}</Button>
      </div>
      <VanRollNumber
        :start-num="0"
        :target-num="123"
        :duration="2"
        :is-start="isStart"
        :direction="'down'"
      />
    </div>
  </demo-block>

  <demo-block :title="t('direction')">
    <div style="text-align: center">
      <div style="margin-bottom: 10px">
        <Button @click="() => (isStart2 = true)" type="primary">{{
          t('rollUp')
        }}</Button>
      </div>
      <van-roll-number
        :start-num="0"
        :target-num="432"
        :duration="2"
        :is-start="isStart2"
        :direction="'up'"
      />
    </div>
  </demo-block>

  <demo-block :title="t('stopOrder')">
    <div style="text-align: center">
      <div style="margin-bottom: 10px">
        <Button @click="() => (isStart3 = true)" type="primary"
          >right-side stop first</Button
        >
      </div>
      <van-roll-number
        :start-num="0"
        :target-num="432"
        :duration="2"
        :is-start="isStart3"
        :stop-order="'rtl'"
        :direction="'up'"
      />
    </div>
  </demo-block>
</template>

<style lang="less"></style>
