<script setup lang="ts">
import VanButton from '../../button';
import VanOverlay from '..';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    setZIndex: '设置 z-index',
    showOverlay: '显示遮罩层',
    embeddedContent: '嵌入内容',
  },
  'en-US': {
    setZIndex: 'Set z-index',
    showOverlay: 'Show Overlay',
    embeddedContent: 'Embedded Content',
  },
});

const show = ref(false);
const showEmbedded = ref(false);
const showZIndex = ref(false);
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-button
      type="primary"
      :text="t('showOverlay')"
      style="margin-left: 16px"
      @click="show = true"
    />
    <van-overlay :show="show" @click="show = false" />
  </demo-block>

  <demo-block :title="t('embeddedContent')">
    <van-button
      type="primary"
      :text="t('embeddedContent')"
      style="margin-left: 16px"
      @click="showEmbedded = true"
    />
    <van-overlay :show="showEmbedded" @click="showEmbedded = false">
      <div class="wrapper">
        <div class="block" />
      </div>
    </van-overlay>
  </demo-block>

  <demo-block :title="t('setZIndex')">
    <van-button
      type="primary"
      :text="t('setZIndex')"
      style="margin-left: 16px"
      @click="showZIndex = true"
    />
    <van-overlay :show="showZIndex" @click="showZIndex = false" z-index="100" />
  </demo-block>
</template>

<style lang="less">
.demo-overlay {
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: var(--van-background-2);
    border-radius: 4px;
  }
}
</style>
