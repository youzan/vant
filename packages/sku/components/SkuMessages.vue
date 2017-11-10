<template>
  <van-cell-group class="van-sku-messages">
    <template v-for="(message, index) in internalMessages">
      <template v-if="message.type === 'image'"></template>
      <van-field v-else-if="message.multiple == '1'"
        :key="`${goodsId}-${index}`"
        :required="message.required == '1'"
        :label="message.name"
        :placeholder="placeholderMap.textarea"
        type="textarea"
        v-model="messageValues[index]">
      </van-field>
      <van-field v-else
        :key="`${goodsId}-${index}`"
        :required="message.required == '1'"
        :label="message.name"
        :placeholder="placeholderMap[message.type]"
        :type="getType(message)"
        v-model="messageValues[index]">
      </van-field>
    </template>
  </van-cell-group>
</template>

<script>
import Field from '../../field';
import CellGroup from '../../cell-group';
import validateEmail from '../../utils/validate/email';
import validateNumber from '../../utils/validate/number';
import { DEFAULT_PLACEHOLDER_MAP } from '../constants';

export default {
  name: 'van-sku-messages',

  components: {
    [Field.name]: Field,
    [CellGroup.name]: CellGroup
  },

  props: {
    messages: Array,
    messagePlaceholderMap: Object,
    goodsId: [Number, String]
  },

  data() {
    return {
      placeholderMap: Object.assign({}, DEFAULT_PLACEHOLDER_MAP, this.messagePlaceholderMap)
    };
  },

  // for debug
  // watch: {
  //   messageValues() {
  //     console.log(this.messageValues);
  //   }
  // },

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
              // return `请上传${message.name}`;
            } else {
              return `请填写${message.name}`;
            }
          }
        } else {
          if (message.type === 'tel' && !validateNumber(value)) {
            return '请填写正确的数字格式留言';
          }
          if (message.type === 'email' && !validateEmail(value)) {
            return '请填写正确的邮箱';
          }
          if (message.type === 'id_no' && (value.length < 15 || value.length > 18)) {
            return '请填写正确的身份证号码';
          }
        }

        if (value.length > 200) {
          return `${message.name} 写的太多了<br/>不要超过200字`;
        }
      }
    }
  }

};
</script>
