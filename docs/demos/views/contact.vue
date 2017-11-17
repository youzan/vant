<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-contact-card
        :type="cardType"
        :name="currentContact.name"
        :tel="currentContact.tel"
        @click="showList = true"
      />

      <van-popup v-model="showList" position="bottom">
        <van-contact-list
          v-model="chosenContactId"
          :list="list"
          @add="onAdd"
          @edit="onEdit"
          @select="onSelect"
        />
      </van-popup>

      <van-popup v-model="showEdit" position="bottom">
        <van-contact-edit
          :contactInfo="editingContact"
          :isEdit="isEdit"
          @save="onSave"
          @delete="onDelete"
        />
      </van-popup>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {

    },
    'en-US': {

    }
  },

  data() {
    return {
      chosenContactId: null,
      editingContact: {},
      showList: false,
      showEdit: false,
      isEdit: false,
      list: [{
        name: '张三',
        tel: '13000000000',
        id: 0
      }]
    };
  },

  computed: {
    cardType() {
      return this.chosenContactId !== null ? 'edit' : 'add';
    },

    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter(item => item.id === id)[0] : {};
    }
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
        this.list = this.list.map(item => item.id === info.id ? info : item);
      } else {
        this.list.push(info);
      }
      this.chosenContactId = info.id;
    },

    onDelete(info) {
      this.showEdit = false;
      this.list = this.list.filter(item => item.id !== info.id);
      if (this.chosenContactId === info.id) {
        this.chosenContactId = null;
      }
    }
  }
};
</script>

<style lang="postcss">
.demo-contact {
  .van-popup {
    height: 100%;
  }
}
</style>
