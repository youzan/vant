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

<script lang="ts">
import { ref } from 'vue';
import { useTranslate } from '@demo/use-translate';
import Toast from '../../toast';

const i18n = {
  'zh-CN': {
    defaultLabel: '设为默认联系人',
  },
  'en-US': {
    defaultLabel: 'Set as the default contact',
  },
};

export default {
  setup() {
    const t = useTranslate(i18n);
    const editingContact = ref({});

    const onSave = () => {
      Toast(t('save'));
    };
    const onDelete = () => {
      Toast(t('delete'));
    };

    return {
      t,
      onSave,
      onDelete,
      editingContact,
    };
  },
};
</script>

<style lang="less">
.demo-contact-edit {
  .van-doc-demo-block__title {
    padding-bottom: 0;
  }
}
</style>
