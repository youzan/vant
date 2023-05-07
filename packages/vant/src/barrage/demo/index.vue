<script setup lang="ts">
import VanBarrage, { BarrageInstance } from '..';
import VanButton from '../../button';
import VanSpace from '../../space';
import { useTranslate } from '../../../docs/site';
import { ref, watch } from 'vue';
import { useToggle } from '@vant/use';

const t = useTranslate({
  'zh-CN': {
    barrage: '弹幕',
    play: '开始',
    pause: '暂停',
    videoBarrage: '模仿视频弹幕',
    lightweight: '轻量',
    customizable: '可定制的',
    mobile: '移动端',
    library: '组件库',
  },
  'en-US': {
    barrage: 'barrage',
    play: 'play',
    pause: 'pause',
    videoBarrage: 'Imitate video barrage',
    lightweight: 'Lightweight',
    customizable: 'Customizable',
    mobile: 'Mobile',
    library: 'Library',
  },
});

const defaultList = [
  { id: 100, text: t('lightweight') },
  { id: 101, text: t('customizable') },
  { id: 102, text: t('mobile') },
  { id: 103, text: 'Vue' },
  { id: 104, text: t('library') },
  { id: 105, text: 'VantUI' },
  { id: 106, text: '666' },
];

const list = ref([...defaultList]);
const add = () => {
  list.value.push({ id: Math.random(), text: 'Barrage' });
};

const videoList = ref([...defaultList]);
const videoBarrage = ref<BarrageInstance>();
const videoAdd = () => {
  videoList.value.push({ id: Math.random(), text: 'Barrage' });
};

const [isPlay, toggle] = useToggle(false);

watch(isPlay, () => {
  if (isPlay.value) videoBarrage.value?.play();
  else videoBarrage.value?.pause();
});
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-barrage v-model="list">
      <div class="video"></div>
    </van-barrage>
    <van-space style="margin-top: 10px">
      <van-button @click="add" type="primary" size="small">
        {{ t('barrage') }}
      </van-button>
    </van-space>
  </demo-block>

  <demo-block :title="t('videoBarrage')">
    <van-barrage v-model="videoList" ref="videoBarrage" :auto-play="false">
      <div class="video"></div>
    </van-barrage>
    <van-space style="margin-top: 10px">
      <van-button
        @click="videoAdd"
        type="primary"
        size="small"
        :disabled="!isPlay"
      >
        {{ t('barrage') }}
      </van-button>
      <van-button @click="toggle()" size="small">
        {{ isPlay ? t('pause') : t('play') }}
      </van-button>
    </van-space>
  </demo-block>
</template>

<style lang="less">
.demo-barrage {
  padding: var(--van-padding-sm);
  background-color: var(--van-background-2);
  .video {
    background-color: var(--van-gray-2);
    width: 100%;
    height: 150px;
  }
}
</style>
