<template>
  <cell-group :class="b()">
    <template v-for="(message, index) in messages">
      <cell
        v-if="message.type === 'image'"
        :class="b('image-cell')"
        :label="$t('onePic')"
        :key="`${goodsId}-${index}`"
        :required="message.required == '1'"
        :title="message.name"
      >
        <sku-img-uploader
          v-model="messageValues[index].value"
          :upload-img="messageConfig.uploadImg"
          :max-size="messageConfig.uploadMaxSize"
        />
      </cell>
      <field
        v-else
        v-model="messageValues[index].value"
        maxlength="200"
        :key="`${goodsId}-${index}`"
        :required="message.required == '1'"
        :label="message.name"
        :placeholder="getPlaceholder(message)"
        :type="getType(message)"
      />
    </template>
  </cell-group>
</template>

<script>
import create from '../../utils/create';
import Field from '../../field';
import validateEmail from '../../utils/validate/email';
import validateNumber from '../../utils/validate/number';
import SkuImgUploader from './SkuImgUploader';

export default create({
  name: 'sku-messages',

  components: {
    SkuImgUploader,
    Field
  },

  props: {
    messages: Array,
    messageConfig: Object,
    goodsId: [Number, String]
  },

  data() {
    return {
      messageValues: this.resetMessageValues(this.messages)
    };
  },

  watch: {
    messages(val) {
      this.messageValues = this.resetMessageValues(val);
    }
  },

  computed: {
    messagePlaceholderMap() {
      return this.messageConfig.placeholderMap || {};
    }
  },

  methods: {
    resetMessageValues(messages) {
      return (messages || []).map(() => ({ value: '' }));
    },

    getType(message) {
      if (+message.multiple === 1) {
        return 'textarea';
      }
      if (message.type === 'id_no') {
        return 'text';
      }
      return message.datetime > 0 ? 'datetime-local' : message.type;
    },

    getMessages() {
      const messages = {};

      this.messageValues.forEach((item, index) => {
        let value = item.value;
        if (this.messages[index].datetime > 0) {
          value = value.replace(/T/g, ' ');
        }
        messages[`message_${index}`] = value;
      });

      return messages;
    },

    getCartMessages() {
      const messages = {};

      this.messageValues.forEach((item, index) => {
        let value = item.value;
        const message = this.messages[index];
        if (message.datetime > 0) {
          value = value.replace(/T/g, ' ');
        }
        messages[message.name] = value;
      });

      return messages;
    },

    getPlaceholder(message) {
      const type = +message.multiple === 1 ? 'textarea' : message.type;
      return this.messagePlaceholderMap[type] || this.$t(`placeholder.${type}`);
    },

    validateMessages() {
      const values = this.messageValues;

      for (let i = 0; i < values.length; i++) {
        const value = values[i].value;
        const message = this.messages[i];

        if (value === '') {
          // 必填字段的校验
          if (message.required == '1') { // eslint-disable-line
            const textType = message.type === 'image'
              ? 'upload'
              : 'fill';
            return this.$t(textType) + message.name;
          }
        } else {
          if (message.type === 'tel' && !validateNumber(value)) {
            return this.$t('number');
          }
          if (message.type === 'email' && !validateEmail(value)) {
            return this.$t('email');
          }
          if (message.type === 'id_no' && (value.length < 15 || value.length > 18)) {
            return this.$t('id_no');
          }
        }
      }
    }
  }
});
</script>
