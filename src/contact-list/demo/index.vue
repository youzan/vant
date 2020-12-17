<template>
  <demo-section>
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
  </demo-section>
</template>

<script>
export default {
  i18n: {
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
  },

  data() {
    return {
      chosenContactId: '1',
    };
  },

  methods: {
    onAdd() {
      this.$toast(this.t('add'));
    },
    onEdit(contact) {
      this.$toast(this.t('edit') + contact.id);
    },
    onSelect(contact) {
      this.$toast(this.t('select') + contact.id);
    },
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
