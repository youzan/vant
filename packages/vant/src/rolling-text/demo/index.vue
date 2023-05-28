<script setup lang="ts">
import VanRollingText from '..';
import Button from '../../button';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';
import VanGrid from '../../grid';
import VanGridItem from '../../grid-item';

const t = useTranslate({
  'zh-CN': {
    direction: '设置翻滚方向',
    stopOrder: '设置各数位停止顺序',
    rollDown: '向下翻滚',
    rollUp: '向上翻滚',
    stopFrom: '从个位停止',
    manualControl: '手动控制',
    customStyle: '自定义样式',
    noNumberType: '翻转非数字内容',
    start: '开始',
  },
  'en-US': {
    direction: 'Set Roll Direction',
    stopOrder: 'Set StopOrder',
    rollDown: 'rollDown',
    rollUp: 'rollUp',
    stopFrom: 'right-side stop first',
    manualControl: 'Manual Control',
    customStyle: 'Custom Style',
    noNumberType: 'Roll non-number type text',
    start: 'Start',
  },
});

const isStart = ref(false);
const isStart2 = ref(false);
const isStart3 = ref(false);
const isStart4 = ref(false);

const isStartNoNumberType = ref(false);
const textArray = ref([
  'aaaaa',
  'bbbbb',
  'ccccc',
  'ddddd',
  'eeeee',
  'fffff',
  'ggggg',
]);

const rollingTextEl = ref(null);
const start = () => {
  rollingTextEl.value.start();
};
const reset = () => {
  rollingTextEl.value.reset();
};
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <div style="">
      <VanRollingText
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
      <VanRollingText
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
      <VanRollingText
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

  <demo-block :title="t('noNumberType')">
    <div>
      <VanRollingText
        :text-array="textArray"
        :duration="1"
        :auto-start="isStartNoNumberType"
        stop-order="rtl"
        direction="up"
      />
      <div style="margin-top: 10px">
        <Button @click="() => (isStartNoNumberType = true)" type="primary">{{
          t('start')
        }}</Button>
      </div>
    </div>
  </demo-block>

  <demo-block :title="t('customStyle')">
    <div>
      <VanRollingText
        class="my-rolling-te11xt"
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
      <VanRollingText
        class="my-rolling-te11xt"
        ref="rollingTextEl"
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
.van-rolling-text {
  margin-left: var(--van-padding-md);
}
.van-grid {
  margin-left: var(--van-padding-md);
}

.my-rolling-te11xt {
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
