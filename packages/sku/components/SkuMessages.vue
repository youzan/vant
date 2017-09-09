<template>
  <van-cell-group>
    <template v-for="(message, index) in internalMessages">
      <template v-if="message.type === 'image'"></template>
      <van-field v-else-if="message.multiple == '1'"
        :key="index"
        :required="message.required == '1'"
        :label="message.name"
        placeholder="点击填写段落文本"
        type="textarea"
        v-model="messageValues[index]">
      </van-field>
      <van-field v-else
        :key="index"
        :required="message.required == '1'"
        :label="message.name"
        :placeholder="PLACEHOLDER_MAP[message.type]"
        :type="getType(message)"
        v-model="messageValues[index]">
      </van-field>
    </template>
  </van-cell-group>
</template>

<script>
import isEmpty from 'lodash/isEmpty';
import Field from '../../field';
import CellGroup from '../../cell-group';
import validateEmail from 'zan-utils/validate/email';
import validateNumber from 'zan-utils/validate/number';

const PLACEHOLDER_MAP = {
  'id_no': '输入18位身份证号码',
  text: '输入文本',
  tel: '输入数字',
  email: '输入邮箱',
  date: '点击选择日期',
  time: '点击选择时间'
};

export default {
  name: 'van-sku-messages',

  components: {
    [Field.name]: Field,
    [CellGroup.name]: CellGroup
  },

  props: {
    messages: Array
  },

  data() {
    return {
      PLACEHOLDER_MAP
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

        if (isEmpty(value)) {
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
          // if (message.type == 'image') {
          //   loaded = _this.$el.find('#ipt-' + j).data('uploaded');
          //   if (loaded == 'false' || !loaded) {
          //     return '图片还在上传中，请稍等。。';
          //   }
          // }
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
