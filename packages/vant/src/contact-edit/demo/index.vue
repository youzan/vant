<script setup lang="ts">
import VanContactEdit from '..';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site/use-translate';
import { Toast } from '../../toast';

const t = useTranslate({
  'zh-CN': {
    defaultLabel: '设为默认联系人',
  },
  'en-US': {
    defaultLabel: 'Set as the default contact',
  },
});

const editingContact = ref({});

const onSave = () => Toast(t('save'));
const onDelete = () => Toast(t('delete'));
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-contact-edit
      is-edit
      show-set-default
      :contact-info="editingContact"
      :set-default-label="t('defaultLabel')"
      @save="onSave"
      @delete="onDelete"
    />
  </demo-block>
</template>

<style lang="less">
.demo-contact-edit {
  .van-doc-demo-block__title {
    padding-bottom: 0;
  }
}
</style>
