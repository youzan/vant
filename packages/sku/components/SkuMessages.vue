<template>
  <cell-group class="van-sku-messages">
    <template v-for="(message, index) in internalMessages">
      <template v-if="message.type === 'image'"></template>
      <field v-else-if="message.multiple == '1'"
        :key="`${goodsId}-${index}`"
        :required="message.required == '1'"
        :label="message.name"
        :placeholder="getPlaceholder('textarea')"
        type="textarea"
        v-model="messageValues[index]">
      </field>
      <field v-else
        :key="`${goodsId}-${index}`"
        :required="message.required == '1'"
        :label="message.name"
        :placeholder="getPlaceholder(message.type)"
        :type="getType(message)"
        v-model="messageValues[index]">
      </field>
    </template>
  </cell-group>
</template>

<script>
import Field from '../../field';
import CellGroup from '../../cell-group';
import validateEmail from '../../utils/validate/email';
import validateNumber from '../../utils/validate/number';

export default {
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
      if (Object.prototype.toString.call(this.messages) === '[object Array]') {
        return this.messages;
      }
      return [];
    },

    messageValues() {
      const messageValues = [];
      this.internalMessages.forEach((message, index) => {
        messageValues[index] = '';
      });

      return messageValues;
    }
  },

  methods: {
    getType({ type, datetime }) {
      if (type === 'id_no') return 'text';
      return datetime > 0 ? 'datetime-local' : type;
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

    getPlaceholder(key) {
      return this.messagePlaceholderMap[key] || this.$t(`placeholder.${key}`);
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

};
</script>
