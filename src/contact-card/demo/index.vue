<template>
  <demo-block :title="t('basicUsage')">
    <van-contact-card
      :type="cardType"
      :name="currentContact.name"
      :tel="currentContact.tel"
      @click="showList = true"
    />

    <van-popup v-model:show="showList" position="bottom" :lazy-render="false">
      <van-contact-list
        v-model="chosenContactId"
        :list="list"
        :default-tag-text="t('defaultTagText')"
        @add="onAdd"
        @edit="onEdit"
        @select="onSelect"
      />
    </van-popup>

    <van-popup v-model:show="showEdit" position="bottom" :lazy-render="false">
      <van-contact-edit
        show-set-default
        :set-default-label="t('defaultLabel')"
        :contact-info="editingContact"
        :is-edit="isEdit"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
  </demo-block>

  <demo-block :title="t('uneditable')">
    <van-contact-card
      type="edit"
      :name="mockContact.name"
      :tel="mockContact.tel"
      :editable="false"
    />
  </demo-block>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      name: '张三',
      defaultLabel: '设为默认联系人',
      defaultTagText: '默认',
    },
    'en-US': {
      name: 'John Snow',
      defaultLabel: 'Set as the default contact',
      defaultTagText: 'default',
    },
  },

  data() {
    return {
      chosenContactId: null,
      editingContact: {},
      showList: false,
      showEdit: false,
      isEdit: false,
      list: [],
    };
  },

  computed: {
    mockContact() {
      return {
        name: this.t('name'),
        tel: '13000000000',
        id: 0,
        isDefault: 1,
      };
    },

    cardType() {
      return this.chosenContactId !== null ? 'edit' : 'add';
    },

    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter((item) => item.id === id)[0] : {};
    },
  },

  created() {
    this.list.push(this.mockContact);
  },

  methods: {
    onAdd() {
      this.editingContact = { id: this.list.length };
      this.isEdit = false;
      this.showEdit = true;
    },

    onEdit(item) {
      this.isEdit = true;
      this.showEdit = true;
      this.editingContact = item;
    },

    onSelect() {
      this.showList = false;
    },

    onSave(info) {
      this.showEdit = false;
      this.showList = false;

      if (this.isEdit) {
        this.list = this.list.map((item) =>
          item.id === info.id ? info : item
        );
      } else {
        this.list.push(info);
      }
      this.chosenContactId = info.id;
    },

    onDelete(info) {
      this.showEdit = false;
      this.list = this.list.filter((item) => item.id !== info.id);
      if (this.chosenContactId === info.id) {
        this.chosenContactId = null;
      }
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
