<template>
  <demo-block card :title="t('basicUsage')">
    <van-cell is-link :title="t('basicUsage')" @click="show.basic = true" />
    <van-cell is-link :title="t('showCancel')" @click="show.cancel = true" />
    <van-cell
      is-link
      :title="t('showDescription')"
      @click="show.description = true"
    />
  </demo-block>

  <demo-block card :title="t('optionStatus')">
    <van-cell is-link :title="t('optionStatus')" @click="show.status = true" />
  </demo-block>

  <demo-block card :title="t('customPanel')">
    <van-cell is-link :title="t('customPanel')" @click="show.title = true" />
  </demo-block>

  <van-action-sheet
    v-model:show="show.basic"
    :actions="simpleActions"
    @select="onSelect"
  />

  <van-action-sheet
    v-model:show="show.cancel"
    :actions="simpleActions"
    close-on-click-action
    :cancel-text="t('cancel')"
    @cancel="onCancel"
  />

  <van-action-sheet
    v-model:show="show.description"
    :actions="actionsWithDescription"
    close-on-click-action
    :cancel-text="t('cancel')"
    :description="t('description')"
  />

  <van-action-sheet
    v-model:show="show.status"
    close-on-click-action
    :actions="statusActions"
    :cancel-text="t('cancel')"
  />

  <van-action-sheet v-model:show="show.title" :title="t('title')">
    <div class="demo-action-sheet-content">{{ t('content') }}</div>
  </van-action-sheet>
</template>

<script>
import { computed, reactive, toRefs } from 'vue';
import { useTranslate } from '@demo/use-translate';
import Toast from '../../toast';

const i18n = {
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
};

export default {
  setup() {
    const t = useTranslate(i18n);
    const state = reactive({
      show: {
        basic: false,
        cancel: false,
        title: false,
        status: false,
        description: false,
      },
    });

    const simpleActions = computed(() => [
      { name: t('option1') },
      { name: t('option2') },
      { name: t('option3') },
    ]);

    const statusActions = computed(() => [
      { name: t('coloredOption'), color: '#ee0a24' },
      { name: t('disabledOption'), disabled: true },
      { loading: true },
    ]);

    const actionsWithDescription = computed(() => [
      { name: t('option1') },
      { name: t('option2') },
      { name: t('option3'), subname: t('subname') },
    ]);

    const onSelect = (item) => {
      state.show.basic = false;
      Toast(item.name);
    };

    const onCancel = () => {
      Toast(t('cancel'));
    };

    return {
      ...toRefs(state),
      t,
      onSelect,
      onCancel,
      simpleActions,
      statusActions,
      actionsWithDescription,
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-action-sheet {
  &-content {
    padding: @padding-md @padding-md @padding-md * 10;
  }
}
</style>
