import { createNamespace } from '../../utils';
import Cell from '../../cell';
import CellGroup from '../../cell-group';
import Field from '../../field';
import { isEmail } from '../../utils/validate/email';
import { isNumber } from '../../utils/validate/number';
import SkuImgUploader from './SkuImgUploader';

const [createComponent, bem, t] = createNamespace('sku-messages');

export default createComponent({
  props: {
    messages: {
      type: Array,
      default: () => []
    },
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
      return message.placeholder || map[type] || t(`placeholder.${type}`);
    },

    validateMessages() {
      const values = this.messageValues;

      for (let i = 0; i < values.length; i++) {
        const { value } = values[i];
        const message = this.messages[i];

        if (value === '') {
          // 必填字段的校验
          if (String(message.required) === '1') {
            const textType = t(message.type === 'image' ? 'upload' : 'fill');
            return textType + message.name;
          }
        } else {
          if (message.type === 'tel' && !isNumber(value)) {
            return t('invalid.tel');
          }
          if (message.type === 'mobile' && !/^\d{6,20}$/.test(value)) {
            return t('invalid.mobile');
          }
          if (message.type === 'email' && !isEmail(value)) {
            return t('invalid.email');
          }
          if (message.type === 'id_no' && (value.length < 15 || value.length > 18)) {
            return t('invalid.id_no');
          }
        }
      }
    }
  },

  render() {
    return (
      <CellGroup class={bem()}>
        {this.messages.map((message, index) => (message.type === 'image' ? (
          <Cell
            class={bem('image-cell')}
            value-class={bem('image-cell-value')}
            label={t('imageLabel')}
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
          />
        )))}
      </CellGroup>
    );
  }
});
