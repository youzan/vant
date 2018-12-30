<template>
  <div :class="b()">
    <cell-group>
      <field
        v-model="data.name"
        maxlength="30"
        :label="$t('name')"
        :placeholder="$t('nameEmpty')"
        :error="errorInfo.name"
        @focus="onFocus('name')"
      />
      <field
        v-model="data.tel"
        type="tel"
        :label="$t('tel')"
        :placeholder="$t('telEmpty')"
        :error="errorInfo.tel"
        @focus="onFocus('tel')"
      />
    </cell-group>
    <div :class="b('buttons')">
      <van-button
        block
        type="danger"
        :text="$t('save')"
        :loading="isSaving"
        @click="onSave"
      />
      <van-button
        v-if="isEdit"
        block
        :text="$t('delete')"
        :loading="isDeleting"
        @click="onDelete"
      />
    </div>
  </div>
</template>

<script>
import Field from '../field';
import VanButton from '../button';
import Toast from '../toast';
import Dialog from '../dialog';
import validateMobile from '../utils/validate/mobile';
import create from '../utils/create';

const defaultContact = {
  id: '',
  tel: '',
  name: ''
};

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
      default: () => ({ ...defaultContact })
    },
    telValidator: {
      type: Function,
      default: validateMobile
    }
  },

  data() {
    return {
      data: {
        ...this.defaultContact,
        ...this.contactInfo
      },
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
      const value = this.data[key].trim();
      switch (key) {
        case 'name':
          return value ? '' : this.$t('nameEmpty');
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
      Dialog.confirm({
        message: this.$t('confirmDelete')
      }).then(() => {
        this.$emit('delete', this.data);
      });
    }
  }
});
</script>
