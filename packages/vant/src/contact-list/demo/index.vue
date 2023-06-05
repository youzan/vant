<script setup lang="ts">
import VanContactList from '..';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';
import { showToast } from '../../toast';

const t = useTranslate({
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
});

const chosenContactId = ref('1');

const onAdd = () => {
  showToast(t('add'));
};
const onEdit = (contact: { id: string }) => {
  showToast(t('edit') + contact.id);
};
const onSelect = (contact: { id: string }) => {
  showToast(t('select') + contact.id);
};
</script>

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

<style lang="less">
.demo-contact-list {
  .van-doc-demo-block__title {
    padding-bottom: 0;
  }
}
</style>
