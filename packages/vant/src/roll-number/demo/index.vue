<script setup lang="ts">
import VanRollNumber from '..';
import Button from '../../button';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';
import VanGrid from '../../grid';
import VanGridItem from '../../grid-item';

const t = useTranslate({
  'zh-CN': {
    direction: '改变翻滚方向',
    stopOrder: '各数位停止顺序',
    rollDown: '向下翻滚',
    rollUp: '向上翻滚',
    stopFrom: '从个位停止',
    manualControl: '手动控制',
    customStyle: '自定义样式',
  },
  'en-US': {
    direction: 'Change Roll Direction',
    stopOrder: 'stopOrder',
    rollDown: 'rollDown',
    rollUp: 'rollUp',
    stopFrom: 'right-side stop first',
    manualControl: 'Manual Control',
    customStyle: 'Custom Style',
  },
});

const isStart = ref(false);
const isStart2 = ref(false);
const isStart3 = ref(false);
const isStart4 = ref(false);

const rollNumberEl = ref(null);
const start = () => {
  rollNumberEl.value.start();
};
const reset = () => {
  rollNumberEl.value.reset();
};
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <div style="">
      <VanRollNumber
        :start-num="0"
        :target-num="123"
        :duration="2"
        :auto-start="isStart"
        direction="down"
      />
      <div style="margin-top: 10px">
        <Button @click="() => (isStart = true)" type="primary">{{
          t('rollDown')
        }}</Button>
      </div>
    </div>
  </demo-block>

  <demo-block :title="t('direction')">
    <div>
      <van-roll-number
        :start-num="0"
        :target-num="432"
        :duration="2"
        :auto-start="isStart2"
        direction="up"
      />
      <div style="margin-top: 10px">
        <Button @click="() => (isStart2 = true)" type="primary">{{
          t('rollUp')
        }}</Button>
      </div>
    </div>
  </demo-block>

  <demo-block :title="t('stopOrder')">
    <div>
      <van-roll-number
        :start-num="0"
        :target-num="54321"
        :duration="2"
        :auto-start="isStart3"
        stop-order="rtl"
        direction="up"
      />
      <div style="margin-top: 10px">
        <Button @click="() => (isStart3 = true)" type="primary">{{
          t('stopFrom')
        }}</Button>
      </div>
    </div>
  </demo-block>

  <demo-block :title="t('customStyle')">
    <div>
      <van-roll-number
        class="my-roll-number"
        :start-num="12345"
        :target-num="54321"
        :duration="2"
        :auto-start="isStart4"
        stop-order="rtl"
        direction="up"
      />
    </div>
  </demo-block>

  <demo-block :title="t('manualControl')">
    <div>
      <van-roll-number
        class="my-roll-number"
        ref="rollNumberEl"
        :start-num="0"
        :target-num="54321"
        :duration="2"
        :auto-start="false"
        stop-order="rtl"
        direction="up"
      />
      <van-grid clickable :column-num="3" style="margin-top: 10px">
        <van-grid-item icon="play-circle-o" :text="t('start')" @click="start" />
        <van-grid-item icon="replay" :text="t('reset')" @click="reset" />
      </van-grid>
    </div>
  </demo-block>
</template>

<style lang="less">
.van-button {
  margin-left: var(--van-padding-md);
}
.van-roll-number {
  margin-left: var(--van-padding-md);
}
.van-grid {
  margin-left: var(--van-padding-md);
}

.my-roll-number {
  gap: 6px;
  .van-roll-single {
    color: white;
    background: deepskyblue;
    border-radius: 5px;
    width: 25px;
    font-size: 20px;
  }
}
</style>
