<script setup lang="ts">
import VanCell from '../../cell';
import VanActionSheet, { ActionSheetAction } from '..';
import { ref, computed } from 'vue';
import { useTranslate } from '../../../docs/site/use-translate';
import { Toast } from '../../toast';

const t = useTranslate({
  'zh-CN': {
    option1: '选项一',
    option2: '选项二',
    option3: '选项三',
    subname: '描述信息',
    showCancel: '展示取消按钮',
    buttonText: '弹出菜单',
    customPanel: '自定义面板',
    description: '这是一段描述信息',
    optionStatus: '选项状态',
    coloredOption: '着色选项',
    disabledOption: '禁用选项',
    showDescription: '展示描述信息',
  },
  'en-US': {
    option1: 'Option 1',
    option2: 'Option 2',
    option3: 'Option 3',
    subname: 'Description',
    showCancel: 'Show Cancel Button',
    buttonText: 'Show ActionSheet',
    customPanel: 'Custom Panel',
    description: 'Description',
    optionStatus: 'Option Status',
    coloredOption: 'Colored Option',
    disabledOption: 'Disabled Option',
    showDescription: 'Show Description',
  },
});
const showBasic = ref(false);
const showCancel = ref(false);
const showTitle = ref(false);
const showStatus = ref(false);
const showDescription = ref(false);

const simpleActions = computed<ActionSheetAction[]>(() => [
  { name: t('option1') },
  { name: t('option2') },
  { name: t('option3') },
]);

const statusActions = computed<ActionSheetAction[]>(() => [
  { name: t('coloredOption'), color: '#ee0a24' },
  { name: t('disabledOption'), disabled: true },
  { loading: true },
]);

const actionsWithDescription = computed<ActionSheetAction[]>(() => [
  { name: t('option1') },
  { name: t('option2') },
  { name: t('option3'), subname: t('subname') },
]);

const onSelect = (item: ActionSheetAction) => {
  showBasic.value = false;
  Toast(item.name);
};

const onCancel = () => Toast(t('cancel'));
</script>

<template>
  <demo-block card :title="t('basicUsage')">
    <van-cell is-link :title="t('basicUsage')" @click="showBasic = true" />
    <van-cell is-link :title="t('showCancel')" @click="showCancel = true" />
    <van-cell
      is-link
      :title="t('showDescription')"
      @click="showDescription = true"
    />
  </demo-block>

  <demo-block card :title="t('optionStatus')">
    <van-cell is-link :title="t('optionStatus')" @click="showStatus = true" />
  </demo-block>

  <demo-block card :title="t('customPanel')">
    <van-cell is-link :title="t('customPanel')" @click="showTitle = true" />
  </demo-block>

  <van-action-sheet
    v-model:show="showBasic"
    :actions="simpleActions"
    @select="onSelect"
  />

  <van-action-sheet
    v-model:show="showCancel"
    :actions="simpleActions"
    close-on-click-action
    :cancel-text="t('cancel')"
    @cancel="onCancel"
  />

  <van-action-sheet
    v-model:show="showDescription"
    :actions="actionsWithDescription"
    close-on-click-action
    :cancel-text="t('cancel')"
    :description="t('description')"
  />

  <van-action-sheet
    v-model:show="showStatus"
    close-on-click-action
    :actions="statusActions"
    :cancel-text="t('cancel')"
  />

  <van-action-sheet v-model:show="showTitle" :title="t('title')">
    <div class="demo-action-sheet-content">{{ t('content') }}</div>
  </van-action-sheet>
</template>

<style lang="less">
.demo-action-sheet {
  &-content {
    padding: var(--van-padding-md) var(--van-padding-md)
      calc(var(--van-padding-md) * 10);
  }
}
</style>
