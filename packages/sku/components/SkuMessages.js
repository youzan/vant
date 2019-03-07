import { use, isIOS } from '../../utils';
import Cell from '../../cell';
import CellGroup from '../../cell-group';
import Field from '../../field';
import { isEmail } from '../../utils/validate/email';
import { isNumber } from '../../utils/validate/number';
import SkuImgUploader from './SkuImgUploader';

const [sfc, bem] = use('sku-messages');

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

export default sfc({
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
      const map = this.messageConfig.placeholderMap || {};
      return map[type] || PLACEHOLDER[type];
    },

    validateMessages() {
      const values = this.messageValues;

      for (let i = 0; i < values.length; i++) {
        const { value } = values[i];
        const message = this.messages[i];

        if (value === '') {
          // 必填字段的校验
          if (String(message.required) === '1') { // eslint-disable-line
            const textType = message.type === 'image'
              ? '请上传'
              : '请填写';
            return textType + message.name;
          }
        } else {
          if (message.type === 'tel' && !isNumber(value)) {
            return '请填写正确的数字格式留言';
          }
          if (message.type === 'mobile' && !/^\d{6,20}$/.test(value)) {
            return '手机号长度为6-20位数字';
          }
          if (message.type === 'email' && !isEmail(value)) {
            return '请填写正确的邮箱';
          }
          if (message.type === 'id_no' && (value.length < 15 || value.length > 18)) {
            return '请填写正确的身份证号码';
          }
        }
      }
    },

    onBlur() {
      // 修复 ios12 键盘弹起后点击错位的问题
      // https://developers.weixin.qq.com/community/develop/doc/00044ae90742f8c82fb78fcae56800
      /* istanbul ignore next */
      if (isIOS()) {
        window.scrollTo(0, 0);
      }
    }
  },

  render(h) {
    return (
      <CellGroup class={bem()}>
        {this.messages.map((message, index) => (message.type === 'image' ? (
          <Cell
            class={bem('image-cell')}
            label="仅限一张"
            title={message.name}
            key={`${this.goodsId}-${index}`}
            required={String(message.required) === '1'}
          >
            <SkuImgUploader
              vModel={this.messageValues[index].value}
              uploadImg={this.messageConfig.uploadImg}
              maxSize={this.messageConfig.uploadMaxSize}
            />
          </Cell>
        ) : (
          <Field
            vModel={this.messageValues[index].value}
            maxlength="200"
            label={message.name}
            key={`${this.goodsId}-${index}`}
            required={String(message.required) === '1'}
            placeholder={this.getPlaceholder(message)}
            type={this.getType(message)}
            onBlur={this.onBlur}
          />
        )))}
      </CellGroup>
    );
  }
});
