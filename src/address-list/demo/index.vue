<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <van-address-list
        v-model="chosenAddressId"
        :list="t('list')"
        :disabled-list="t('disabledList')"
        :disabled-text="t('disabledText')"
        :default-tag-text="t('defaultTagText')"
        @add="onAdd"
        @edit="onEdit"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
        },
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号',
        },
      ],
      add: '新增地址',
      edit: '编辑地址',
      disabledText: '以下地址超出配送范围',
      defaultTagText: '默认',
    },
    'en-US': {
      list: [
        {
          id: '1',
          name: 'John Snow',
          tel: '13000000000',
          address: 'Somewhere',
          isDefault: true,
        },
        {
          id: '2',
          name: 'Ned Stark',
          tel: '1310000000',
          address: 'Somewhere',
        },
      ],
      disabledList: [
        {
          id: '3',
          name: 'Tywin',
          tel: '1320000000',
          address: 'Somewhere',
        },
      ],
      add: 'Add',
      edit: 'Edit',
      disabledText: 'The following address is out of range',
      defaultTagText: 'Default',
    },
  },

  data() {
    return {
      chosenAddressId: '1',
    };
  },

  methods: {
    onAdd() {
      this.$toast(this.t('add'));
    },

    onEdit(item, index) {
      this.$toast(`${this.t('edit')}:${index}`);
    },
  },
};
</script>

<style lang="less">
.demo-address-list {
  .van-doc-demo-block__title {
    padding-bottom: 0;
  }
}
</style>
