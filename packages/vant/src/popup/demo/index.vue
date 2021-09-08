<script setup lang="ts">
import VanCell from '../../cell';
import VanPopup from '..';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site/use-translate';

const t = useTranslate({
  'zh-CN': {
    position: '弹出位置',
    buttonBasic: '展示弹出层',
    buttonTop: '顶部弹出',
    buttonBottom: '底部弹出',
    buttonLeft: '左侧弹出',
    buttonRight: '右侧弹出',
    teleport: '指定挂载节点',
    roundCorner: '圆角弹窗',
    closeIcon: '关闭图标',
    customCloseIcon: '自定义图标',
    customIconPosition: '图标位置',
  },
  'en-US': {
    position: 'Position',
    buttonBasic: 'Show Popup',
    buttonTop: 'From Top',
    buttonBottom: 'From Bottom',
    buttonLeft: 'From Left',
    buttonRight: 'From Right',
    teleport: 'Get Container',
    roundCorner: 'Round Corner',
    closeIcon: 'Close Icon',
    customCloseIcon: 'Custom Icon',
    customIconPosition: 'Icon Position',
  },
});

const showBasic = ref(false);
const showTop = ref(false);
const showBottom = ref(false);
const showLeft = ref(false);
const showRight = ref(false);
const showCloseIcon = ref(false);
const showRoundCorner = ref(false);
const showGetContainer = ref(false);
const showCustomCloseIcon = ref(false);
const showCustomIconPosition = ref(false);
</script>

<template>
  <demo-block card :title="t('basicUsage')">
    <van-cell :title="t('buttonBasic')" is-link @click="showBasic = true" />
    <van-popup v-model:show="showBasic" :style="{ padding: '30px 50px' }">
      {{ t('content') }}
    </van-popup>
  </demo-block>

  <demo-block card :title="t('position')">
    <van-cell :title="t('buttonTop')" is-link @click="showTop = true" />
    <van-cell :title="t('buttonBottom')" is-link @click="showBottom = true" />
    <van-cell :title="t('buttonLeft')" is-link @click="showLeft = true" />
    <van-cell :title="t('buttonRight')" is-link @click="showRight = true" />

    <van-popup
      v-model:show="showTop"
      position="top"
      :style="{ height: '30%' }"
    />
    <van-popup
      v-model:show="showBottom"
      position="bottom"
      :style="{ height: '30%' }"
    />
    <van-popup
      v-model:show="showLeft"
      position="left"
      :style="{ width: '30%', height: '100%' }"
    />
    <van-popup
      v-model:show="showRight"
      position="right"
      :style="{ width: '30%', height: '100%' }"
    />
  </demo-block>

  <demo-block card :title="t('closeIcon')">
    <van-cell :title="t('closeIcon')" is-link @click="showCloseIcon = true" />
    <van-cell
      :title="t('customCloseIcon')"
      is-link
      @click="showCustomCloseIcon = true"
    />
    <van-cell
      :title="t('customIconPosition')"
      is-link
      @click="showCustomIconPosition = true"
    />

    <van-popup
      v-model:show="showCloseIcon"
      closeable
      position="bottom"
      :style="{ height: '30%' }"
    />
    <van-popup
      v-model:show="showCustomCloseIcon"
      closeable
      close-icon="close"
      position="bottom"
      :style="{ height: '30%' }"
    />
    <van-popup
      v-model:show="showCustomIconPosition"
      closeable
      close-icon-position="top-left"
      position="bottom"
      :style="{ height: '30%' }"
    />
  </demo-block>

  <demo-block card :title="t('roundCorner')">
    <van-cell
      :title="t('roundCorner')"
      is-link
      @click="showRoundCorner = true"
    />
    <van-popup
      v-model:show="showRoundCorner"
      round
      position="bottom"
      :style="{ height: '30%' }"
    />
  </demo-block>

  <demo-block card :title="t('teleport')">
    <van-cell :title="t('teleport')" is-link @click="showGetContainer = true" />
    <van-popup
      v-model:show="showGetContainer"
      teleport="body"
      :style="{ padding: '30px 50px' }"
    />
  </demo-block>
</template>

<style lang="less">
.demo-popup {
  .van-row {
    margin-bottom: var(--van-padding-md);
  }

  .van-button {
    margin-left: var(--van-padding-md);
  }
}
</style>
