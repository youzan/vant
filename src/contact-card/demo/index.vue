<template>
  <demo-section>
    <demo-block :title="t('addContact')">
      <van-contact-card type="add" @click="onAdd" />
    </demo-block>

    <demo-block :title="t('editContact')">
      <van-contact-card
        type="edit"
        :name="currentContact.name"
        :tel="currentContact.tel"
        @click="onEdit"
      />
    </demo-block>

    <demo-block :title="t('uneditable')">
      <van-contact-card
        type="edit"
        :name="currentContact.name"
        :tel="currentContact.tel"
        :editable="false"
      />
    </demo-block>
  </demo-section>
</template>

<script>
import Toast from '../../toast';

export default {
  i18n: {
    'zh-CN': {
      add: '新增',
      edit: '编辑',
      name: '张三',
      addContact: '添加联系人',
      editContact: '编辑联系人',
    },
    'en-US': {
      add: 'Add',
      edit: 'Edit',
      name: 'John Snow',
      addContact: 'Add Contact',
      editContact: 'Edit Contact',
    },
  },

  computed: {
    currentContact() {
      return {
        name: this.t('name'),
        tel: '13000000000',
      };
    },
  },

  methods: {
    onAdd() {
      Toast(this.t('add'));
    },

    onEdit() {
      Toast(this.t('edit'));
    },
  },
};
</script>
