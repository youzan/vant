<template>
  <demo-block :title="t('basicUsage')">
    <van-contact-list
      v-model="chosenContactId"
      :list="t('list')"
      :default-tag-text="t('defaultTagText')"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
    />
  </demo-block>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useTranslate } from '@demo/use-translate';
import Toast from '../../toast';

const i18n = {
  'zh-CN': {
    add: '新增',
    edit: '编辑',
    list: [
      {
        id: '1',
        name: '张三',
        tel: '13000000000',
        isDefault: true,
      },
      {
        id: '2',
        name: '李四',
        tel: '1310000000',
      },
    ],
    select: '选择',
    defaultTagText: '默认',
  },
  'en-US': {
    add: 'Add',
    edit: 'Edit',
    list: [
      {
        id: '1',
        name: 'John Snow',
        tel: '13000000000',
        isDefault: true,
      },
      {
        id: '2',
        name: 'Ned Stark',
        tel: '1310000000',
      },
    ],
    select: 'Select',
    defaultTagText: 'default',
  },
};

export default {
  setup() {
    const t = useTranslate(i18n);
    const chosenContactId = ref('1');

    const onAdd = () => {
      Toast(t('add'));
    };
    const onEdit = (contact: { id: string }) => {
      Toast(t('edit') + contact.id);
    };
    const onSelect = (contact: { id: string }) => {
      Toast(t('select') + contact.id);
    };

    return {
      t,
      onAdd,
      onEdit,
      onSelect,
      chosenContactId,
    };
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-contact-card {
  .van-popup {
    height: 100%;
    background-color: @background-color;
  }
}
</style>
