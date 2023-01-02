<script setup lang="ts">
import VanCell from '../../cell';
import VanPopup from '..';
import VanGrid from '../../grid';
import VanGridItem from '../../grid-item';
import { showToast } from '../../toast';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';

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
    roundCornerBottom: '圆角弹窗（底部）',
    roundCornerCenter: '圆角弹窗（居中）',
    closeIcon: '关闭图标',
    customCloseIcon: '自定义图标',
    customIconPosition: '图标位置',
    listenEvents: '事件监听',
    clickEvents: '监听点击事件',
    displayEvents: '监听显示事件',
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
    roundCornerBottom: 'Round Corner (bottom)',
    roundCornerCenter: 'Round Corner (center)',
    closeIcon: 'Close Icon',
    customCloseIcon: 'Custom Icon',
    customIconPosition: 'Icon Position',
    listenEvents: 'Listen To Events',
    clickEvents: 'Listen To Click Events',
    displayEvents: 'Listen To Display Events',
  },
});

const showBasic = ref(false);
const showTop = ref(false);
const showBottom = ref(false);
const showLeft = ref(false);
const showRight = ref(false);
const showCloseIcon = ref(false);
const showRoundCornerBottom = ref(false);
const showRoundCornerCenter = ref(false);
const showGetContainer = ref(false);
const showCustomCloseIcon = ref(false);
const showCustomIconPosition = ref(false);
const showClickEvents = ref(false);
const showDisplayEvents = ref(false);
</script>

<template>
  <demo-block card :title="t('basicUsage')">
    <van-cell :title="t('buttonBasic')" is-link @click="showBasic = true" />
    <van-popup v-model:show="showBasic" :style="{ padding: '64px' }">
      {{ t('content') }}
    </van-popup>
  </demo-block>

  <demo-block card :title="t('position')">
    <van-grid clickable>
      <van-grid-item
        icon="arrow-up"
        :text="t('buttonTop')"
        @click="showTop = true"
      />
      <van-grid-item
        icon="arrow-down"
        :text="t('buttonBottom')"
        @click="showBottom = true"
      />
      <van-grid-item
        icon="arrow-left"
        :text="t('buttonLeft')"
        @click="showLeft = true"
      />
      <van-grid-item
        icon="arrow"
        :text="t('buttonRight')"
        @click="showRight = true"
      />
    </van-grid>

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
      :title="t('roundCornerCenter')"
      is-link
      @click="showRoundCornerCenter = true"
    />
    <van-popup
      v-model:show="showRoundCornerCenter"
      round
      position="center"
      :style="{ padding: '64px' }"
    >
      {{ t('content') }}
    </van-popup>

    <van-cell
      :title="t('roundCornerBottom')"
      is-link
      @click="showRoundCornerBottom = true"
    />
    <van-popup
      v-model:show="showRoundCornerBottom"
      round
      position="bottom"
      :style="{ height: '30%' }"
    />
  </demo-block>

  <demo-block card :title="t('listenEvents')">
    <van-cell
      :title="t('clickEvents')"
      is-link
      @click="showClickEvents = true"
    />
    <van-popup
      v-model:show="showClickEvents"
      position="bottom"
      :style="{ height: '30%' }"
      closeable
      @click-overlay="showToast('click-overlay')"
      @click-close-icon="showToast('click-close-icon')"
    />

    <van-cell
      :title="t('displayEvents')"
      is-link
      @click="showDisplayEvents = true"
    />
    <van-popup
      v-model:show="showDisplayEvents"
      position="bottom"
      :style="{ height: '30%' }"
      @open="showToast('open')"
      @opened="showToast('opened')"
      @close="showToast('close')"
      @closed="showToast('closed')"
    />
  </demo-block>

  <demo-block card :title="t('teleport')">
    <van-cell :title="t('teleport')" is-link @click="showGetContainer = true" />
    <van-popup
      v-model:show="showGetContainer"
      teleport="body"
      :style="{ padding: '64px' }"
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
