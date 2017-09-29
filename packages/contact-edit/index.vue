<template>
  <div class="van-contact-edit">
    <van-cell-group>
      <van-field
        label="联系人"
        maxlength="30"
        placeholder="名字"
        v-model="currentInfo.name"
        :error="errorInfo.name"
        @focus="onFocus('name')">
      </van-field>
      <van-field
        type="tel"
        label="联系电话"
        placeholder="手机或固定电话"
        v-model="currentInfo.tel"
        :error="errorInfo.tel"
        @focus="onFocus('tel')">
      </van-field>
    </van-cell-group>
    <div class="van-contact-edit__buttons">
      <van-button block :loading="isSaving" @click="onSaveContact" type="primary">保存</van-button>
      <van-button block :loading="isDeleting" @click="onDeleteContact" v-if="isEdit">删除联系人</van-button>
    </div>
  </div>
</template>

<script>
import Field from '../field';
import Button from '../button';
import CellGroup from '../cell-group';
import Dialog from '../dialog';
import Toast from '../toast';
import validateMobile from '../utils/validate/mobile';

export default {
  name: 'van-contact-edit',

  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    [CellGroup.name]: CellGroup
  },

  props: {
    isEdit: Boolean,
    isSaving: Boolean,
    isDeleting: Boolean,
    contactInfo: {
      type: Object,
      default: () => ({
        id: '',
        tel: '',
        name: ''
      })
    }
  },

  data() {
    return {
      currentInfo: this.contactInfo,
      errorInfo: {
        name: false,
        tel: false
      }
    };
  },

  watch: {
    contactInfo(val) {
      this.currentInfo = val;
    }
  },

  methods: {
    onFocus(key) {
      this.errorInfo[key] = false;
    },

    getErrorMessageByKey(key) {
      const value = this.currentInfo[key];
      switch (key) {
        case 'name':
          return value ? value.length <= 15 ? '' : '名字过长，请重新输入' : '请填写名字';
        case 'tel':
          return validateMobile(value) ? '' : '请填写正确的手机号码或电话号码';
      }
    },

    onSaveContact() {
      const items = [
        'name',
        'tel'
      ];

      const isValid = items.every(item => {
        const msg = this.getErrorMessageByKey(item);
        if (msg) {
          this.errorInfo[item] = true;
          Toast(msg);
        }
        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.currentInfo);
      }
    },

    onDeleteContact() {
      if (this.isDeleting) {
        return;
      }

      Dialog.confirm({
        message: `确定要删除这个联系人么`
      }).then(() => {
        this.$emit('delete', this.currentInfo);
      });
    }
  }
};
</script>
