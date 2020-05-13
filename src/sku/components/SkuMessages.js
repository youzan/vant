// Utils
import { createNamespace } from '../../utils';
import { isEmail } from '../../utils/validate/email';
import { isNumeric } from '../../utils/validate/number';

// Components
import Cell from '../../cell';
import Field from '../../field';
import SkuImgUploader from './SkuImgUploader';

const [createComponent, bem, t] = createNamespace('sku-messages');

export default createComponent({
  props: {
    messageConfig: Object,
    goodsId: [Number, String],
    messages: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      messageValues: this.resetMessageValues(this.messages),
    };
  },

  watch: {
    messages(val) {
      this.messageValues = this.resetMessageValues(val);
    },
  },

  methods: {
    resetMessageValues(messages) {
      const { messageConfig } = this;
      const { initialMessages = {} } = messageConfig;
      return (messages || []).map((message) => ({
        value: initialMessages[message.name] || '',
      }));
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
          if (message.type === 'tel' && !isNumeric(value)) {
            return t('invalid.tel');
          }
          if (message.type === 'mobile' && !/^\d{6,20}$/.test(value)) {
            return t('invalid.mobile');
          }
          if (message.type === 'email' && !isEmail(value)) {
            return t('invalid.email');
          }
          if (
            message.type === 'id_no' &&
            (value.length < 15 || value.length > 18)
          ) {
            return t('invalid.id_no');
          }
        }
      }
    },

    genMessage(message, index) {
      if (message.type === 'image') {
        return (
          <Cell
            key={`${this.goodsId}-${index}`}
            title={message.name}
            label={t('imageLabel')}
            class={bem('image-cell')}
            required={String(message.required) === '1'}
            valueClass={bem('image-cell-value')}
          >
            <SkuImgUploader
              vModel={this.messageValues[index].value}
              maxSize={this.messageConfig.uploadMaxSize}
              uploadImg={this.messageConfig.uploadImg}
            />
          </Cell>
        );
      }

      return (
        <Field
          vModel={this.messageValues[index].value}
          maxlength="200"
          label={message.name}
          key={`${this.goodsId}-${index}`}
          required={String(message.required) === '1'}
          placeholder={this.getPlaceholder(message)}
          type={this.getType(message)}
        />
      );
    },
  },

  render() {
    return <div class={bem()}>{this.messages.map(this.genMessage)}</div>;
  },
});
