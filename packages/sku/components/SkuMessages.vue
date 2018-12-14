<template>
  <cell-group :class="b()">
    <template v-for="(message, index) in messages">
      <cell
        v-if="message.type === 'image'"
        :class="b('image-cell')"
        label="仅限一张"
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

const PLACEHOLDER = {
  id_no: '输入身份证号码',
  text: '输入文本',
  tel: '输入数字',
  email: '输入邮箱',
  date: '点击选择日期',
  time: '点击选择时间',
  textarea: '点击填写段落文本',
  mobile: '输入手机号码'
};

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
        let { value } = item;
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
        let { value } = item;
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
      return this.messagePlaceholderMap[type] || PLACEHOLDER[type];
    },

    validateMessages() {
      const values = this.messageValues;

      for (let i = 0; i < values.length; i++) {
        const { value } = values[i];
        const message = this.messages[i];

        if (value === '') {
          // 必填字段的校验
          if (message.required == '1') { // eslint-disable-line
            const textType = message.type === 'image'
              ? '请上传'
              : '请填写';
            return textType + message.name;
          }
        } else {
          if (message.type === 'tel' && !validateNumber(value)) {
            return '请填写正确的数字格式留言';
          }
          if (message.type === 'mobile' && !/^\d{6,20}$/.test(value)) {
            return '手机号长度为6-20位数字';
          }
          if (message.type === 'email' && !validateEmail(value)) {
            return '请填写正确的邮箱';
          }
          if (message.type === 'id_no' && (value.length < 15 || value.length > 18)) {
            return '请填写正确的身份证号码';
          }
        }
      }
    }
  }
});
</script>
