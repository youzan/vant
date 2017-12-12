<template>
  <div class="van-contact-edit">
    <cell-group>
      <field
        v-model="currentInfo.name"
        maxlength="30"
        :label="$t('name')"
        :placeholder="$t('namePlaceholder')"
        :error="errorInfo.name"
        @focus="onFocus('name')">
      </field>
      <field
        v-model="currentInfo.tel"
        type="tel"
        :label="$t('tel')"
        :placeholder="$t('telPlaceholder')"
        :error="errorInfo.tel"
        @focus="onFocus('tel')">
      </field>
    </cell-group>
    <div class="van-contact-edit__buttons">
      <van-button block :loading="isSaving" @click="onSaveContact" type="primary">{{ $t('save') }}</van-button>
      <van-button block :loading="isDeleting" @click="onDeleteContact" v-if="isEdit">{{ $t('delete') }}</van-button>
    </div>
  </div>
</template>

<script>
import Field from '../field';
import VanButton from '../button';
import CellGroup from '../cell-group';
import Dialog from '../dialog';
import Toast from '../toast';
import validateMobile from '../utils/validate/mobile';
import { create } from '../utils';

export default create({
  name: 'van-contact-edit',

  components: {
    Field,
    VanButton,
    CellGroup
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
          return value ? value.length <= 15 ? '' : this.$t('nameOverlimit') : this.$t('nameEmpty');
        case 'tel':
          return validateMobile(value) ? '' : this.$t('telInvalid');
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
        message: this.$t('confirmDelete')
      }).then(() => {
        this.$emit('delete', this.currentInfo);
      });
    }
  }
});
</script>
