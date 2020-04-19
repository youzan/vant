<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <van-cell is-link :title="t('basicUsage')" @click="show.basic = true" />
      <van-cell is-link :title="t('showCancel')" @click="show.cancel = true" />
      <van-cell
        is-link
        :title="t('showDescription')"
        @click="show.description = true"
      />
    </demo-block>

    <demo-block :title="t('optionStatus')">
      <van-cell
        is-link
        :title="t('optionStatus')"
        @click="show.status = true"
      />
    </demo-block>

    <demo-block :title="t('customPanel')">
      <van-cell is-link :title="t('customPanel')" @click="show.title = true" />
    </demo-block>

    <van-action-sheet
      v-model="show.basic"
      :actions="simpleActions"
      @select="onSelect"
    />

    <van-action-sheet
      v-model="show.status"
      close-on-click-action
      :actions="statusActions"
      :cancel-text="t('cancel')"
    />

    <van-action-sheet
      v-model="show.cancel"
      :actions="simpleActions"
      close-on-click-action
      :cancel-text="t('cancel')"
      @cancel="onCancel"
    />

    <van-action-sheet
      v-model="show.description"
      :actions="simpleActions"
      close-on-click-action
      :description="t('description')"
    />

    <van-action-sheet v-model="show.title" :title="t('title')">
      <div class="demo-action-sheet-content">{{ t('content') }}</div>
    </van-action-sheet>
  </demo-section>
</template>

<script>
import { GREEN } from '../../utils/constant';

export default {
  i18n: {
    'zh-CN': {
      subname: '副文本',
      showCancel: '展示取消按钮',
      buttonText: '弹出菜单',
      customPanel: '自定义面板',
      description: '这是一段描述信息',
      optionStatus: '选项状态',
      disabledOption: '禁用选项',
      showDescription: '展示描述信息',
    },
    'en-US': {
      subname: 'Subname',
      showCancel: 'Show Cancel Button',
      buttonText: 'Show ActionSheet',
      customPanel: 'Custom Panel',
      description: 'Description',
      optionStatus: 'Option Status',
      disabledOption: 'Disabled Option',
      showDescription: 'Show Description',
    },
  },

  data() {
    return {
      show: {
        basic: false,
        cancel: false,
        title: false,
        status: false,
        description: false,
      },
    };
  },

  computed: {
    simpleActions() {
      return [
        { name: this.t('option') },
        { name: this.t('option') },
        { name: this.t('option'), subname: this.t('subname') },
      ];
    },

    statusActions() {
      return [
        { name: this.t('option'), color: GREEN },
        { loading: true },
        { name: this.t('disabledOption'), disabled: true },
      ];
    },
  },

  methods: {
    onSelect(item) {
      this.show.basic = false;
      this.$toast(item.name);
    },

    onCancel() {
      this.$toast('cancel');
    },
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
