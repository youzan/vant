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
  },
  'en-US': {
    barrage: 'barrage',
    play: 'play',
    pause: 'pause',
    videoBarrage: 'Imitate video barrage',
  },
});

const list = ['轻量', '可定制的', '移动端', 'Vue', '组件库', 'VantUI', '666'];

const barrage = ref<BarrageInstance>();

const videoBarrage = ref<BarrageInstance>();

const [isPlay, toggle] = useToggle(false);

watch(isPlay, () => {
  if (isPlay.value) videoBarrage.value?.play();
  else videoBarrage.value?.pause();
});
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-barrage :barrage-list="list" ref="barrage">
      <div class="video"></div>
    </van-barrage>
    <van-space style="margin-top: 10px">
      <van-button @click="barrage?.add('Barrage')" type="primary" size="small">
        {{ t('barrage') }}
      </van-button>
    </van-space>
  </demo-block>

  <demo-block :title="t('videoBarrage')">
    <van-barrage :barrage-list="list" ref="videoBarrage" :auto-play="false">
      <div class="video"></div>
    </van-barrage>
    <van-space style="margin-top: 10px">
      <van-button
        @click="videoBarrage?.add('Barrage')"
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
