<script setup lang="ts">
import VanGrid from '../../grid';
import VanGridItem from '../../grid-item';
import VanTimer, { type TimerInstance } from '..';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';
import { showToast } from '../../toast';

const t = useTranslate({
  'zh-CN': {
    reset: '重置',
    pause: '暂停',
    start: '开始',
    finished: '计时结束',
    millisecond: '毫秒级渲染',
    customStyle: '自定义样式',
    customFormat: '自定义格式',
    manualControl: '手动控制',
    maxTime: '限时 5 秒',
    formatWithDay: 'DD 天 HH 时 mm 分 ss 秒',
  },
  'en-US': {
    reset: 'Reset',
    pause: 'Pause',
    start: 'Start',
    finished: 'Finished',
    millisecond: 'Millisecond',
    customStyle: 'Custom Style',
    customFormat: 'Custom Format',
    manualControl: 'Manual Control',
    maxTime: 'Max Time 5s',
    formatWithDay: 'DD Day, HH:mm:ss',
  },
});

const timer = ref<TimerInstance>();

const start = () => {
  timer.value?.start();
};
const pause = () => {
  timer.value?.pause();
};
const reset = () => {
  timer.value?.reset();
};
const onFinish = () => showToast(t('finished'));
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-timer />
  </demo-block>

  <demo-block :title="t('customFormat')">
    <van-timer :format="t('formatWithDay')" />
  </demo-block>

  <demo-block :title="t('millisecond')">
    <van-timer millisecond format="HH:mm:ss:SS" />
  </demo-block>

  <demo-block :title="t('maxTime')">
    <van-timer :time="0" :max-time="5000" @finish="onFinish" />
  </demo-block>

  <demo-block :title="t('customStyle')">
    <van-timer>
      <template #default="currentTime">
        <span class="block">{{ currentTime.hours }}</span>
        <span class="colon">:</span>
        <span class="block">{{ currentTime.minutes }}</span>
        <span class="colon">:</span>
        <span class="block">{{ currentTime.seconds }}</span>
      </template>
    </van-timer>
  </demo-block>

  <demo-block :title="t('manualControl')">
    <van-timer
      ref="timer"
      millisecond
      :auto-start="false"
      format="ss:SSS"
      @finish="onFinish"
    />
    <van-grid clickable :column-num="3">
      <van-grid-item icon="play-circle-o" :text="t('start')" @click="start" />
      <van-grid-item icon="pause-circle-o" :text="t('pause')" @click="pause" />
      <van-grid-item icon="replay" :text="t('reset')" @click="reset" />
    </van-grid>
  </demo-block>
</template>

<style lang="less">
.demo-timer {
  background-color: var(--van-background-2);

  .van-timer {
    margin-left: var(--van-padding-md);
  }

  .colon {
    display: inline-block;
    margin: 0 4px;
    color: var(--van-primary-color);
  }

  .block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: var(--van-primary-color);
    border-radius: 4px;
  }

  .van-grid {
    margin-top: 10px;
  }
}
</style>
