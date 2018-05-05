<template>
  <div :class="b()">
    <cell-group>
      <field
        v-model="data.name"
        maxlength="30"
        :label="$t('contact')"
        :placeholder="$t('name')"
        :error="errorInfo.name"
        @focus="onFocus('name')"
      />
      <field
        v-model="data.tel"
        type="tel"
        :label="$t('tel')"
        :placeholder="$t('telPlaceholder')"
        :error="errorInfo.tel"
        @focus="onFocus('tel')"
      />
    </cell-group>
    <div :class="b('buttons')">
      <van-button block :loading="isSaving" @click="onSave" type="primary">{{ $t('save') }}</van-button>
      <van-button block :loading="isDeleting" @click="onDelete" v-if="isEdit">{{ $t('delete') }}</van-button>
    </div>
  </div>
</template>

<script>
import Field from '../field';
import VanButton from '../button';
import Dialog from '../dialog';
import Toast from '../toast';
import validateMobile from '../utils/validate/mobile';
import create from '../utils/create';

export default create({
  name: 'contact-edit',

  components: {
    Field,
    VanButton
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
    },
    telValidator: {
      type: Function,
      default: validateMobile
    }
  },

  data() {
    return {
      data: this.contactInfo,
      errorInfo: {
        name: false,
        tel: false
      }
    };
  },

  watch: {
    contactInfo(val) {
      this.data = val;
    }
  },

  methods: {
    onFocus(key) {
      this.errorInfo[key] = false;
    },

    getErrorMessageByKey(key) {
      const value = this.data[key];
      switch (key) {
        case 'name':
          return value ? value.length <= 15 ? '' : this.$t('nameOverlimit') : this.$t('nameEmpty');
        case 'tel':
          return this.telValidator(value) ? '' : this.$t('telInvalid');
      }
    },

    onSave() {
      const isValid = ['name', 'tel'].every(item => {
        const msg = this.getErrorMessageByKey(item);
        if (msg) {
          this.errorInfo[item] = true;
          Toast(msg);
        }
        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },

    onDelete() {
      if (!this.isDeleting) {
        Dialog.confirm({
          message: this.$t('confirmDelete')
        }).then(() => {
          this.$emit('delete', this.data);
        });
      }
    }
  }
});
</script>
