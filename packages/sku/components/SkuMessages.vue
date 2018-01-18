<template>
  <cell-group class="van-sku-messages">
    <field
      v-for="(message, index) in internalMessages"
      v-model="messageValues[index]"
      :key="`${goodsId}-${index}`"
      :required="message.required == '1'"
      :label="message.name"
      :placeholder="getPlaceholder(message)"
      :type="getType(message)"
    />
  </cell-group>
</template>

<script>
import { create } from '../../utils';
import Field from '../../field';
import CellGroup from '../../cell-group';
import validateEmail from '../../utils/validate/email';
import validateNumber from '../../utils/validate/number';

export default create({
  name: 'van-sku-messages',

  components: {
    Field,
    CellGroup
  },

  props: {
    messages: Array,
    messagePlaceholderMap: Object,
    goodsId: [Number, String]
  },

  computed: {
    internalMessages() {
      return Array.isArray(this.messages) ? this.messages.filter(message => message.type !== 'image') : [];
    },

    messageValues() {
      return this.internalMessages.map(() => '');
    }
  },

  methods: {
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

      this.messageValues.forEach((value, index) => {
        if (this.internalMessages[index].datetime > 0) {
          value = value.replace(/T/g, ' ');
        }
        messages[`message_${index}`] = value;
      });

      return messages;
    },

    getCartMessages() {
      const messages = {};

      this.messageValues.forEach((value, index) => {
        const message = this.internalMessages[index];
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
        const value = values[i];
        const message = this.internalMessages[i];

        if (value === '') {
          // 必填字段的校验
          if (message.required == '1') { // eslint-disable-line
            if (message.type === 'image') {
              continue;
            } else {
              return this.$t('fill') + message.name;
            }
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

        if (value.length > 200) {
          return `${message.name} ${this.$t('overlimit')}`;
        }
      }
    }
  }
});
</script>
