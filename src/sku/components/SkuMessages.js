// Utils
import { createNamespace } from '../../utils';
import { isEmail } from '../../utils/validate/email';
import { isNumeric } from '../../utils/validate/number';

// Components
import Cell from '../../cell';
import Field from '../../field';
import SkuImgUploader from './SkuImgUploader';
import SkuDateTimeField from './SkuDateTimeField';

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
      return message.datetime > 0 ? 'datetime' : message.type;
    },

    getMessages() {
      const messages = {};

      this.messageValues.forEach((item, index) => {
        messages[`message_${index}`] = item.value;
      });

      return messages;
    },

    getCartMessages() {
      const messages = {};

      this.messageValues.forEach((item, index) => {
        const message = this.messages[index];
        messages[message.name] = item.value;
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
    /**
     * The phone number copied from IOS mobile phone address book
     * will add spaces and invisible Unicode characters
     * which cannot pass the /^\d+$/ verification
     * so keep numbers and dots
     */
    getFormatter(message) {
      return function formatter(value) {
        if (message.type === 'mobile' || message.type === 'tel') {
          return value.replace(/[^\d.]/g, '');
        }

        return value;
      };
    },

    getExtraDesc(message) {
      const { extraDesc } = message;

      if (extraDesc) {
        return <div class={bem('extra-message')}>{extraDesc}</div>;
      }
    },

    genMessage(message, index) {
      if (message.type === 'image') {
        return (
          <Cell
            key={`${this.goodsId}-${index}`}
            title={message.name}
            class={bem('image-cell')}
            required={String(message.required) === '1'}
            valueClass={bem('image-cell-value')}
          >
            <SkuImgUploader
              vModel={this.messageValues[index].value}
              maxSize={this.messageConfig.uploadMaxSize}
              uploadImg={this.messageConfig.uploadImg}
              customUpload={this.messageConfig.customUpload}
            />
            <div class={bem('image-cell-label')}>{t('imageLabel')}</div>
          </Cell>
        );
      }

      // 时间和日期使用的vant选择器
      const isDateOrTime = ['date', 'time'].indexOf(message.type) > -1;
      if (isDateOrTime) {
        return (
          <SkuDateTimeField
            vModel={this.messageValues[index].value}
            label={message.name}
            key={`${this.goodsId}-${index}`}
            required={String(message.required) === '1'}
            placeholder={this.getPlaceholder(message)}
            type={this.getType(message)}
          />
        );
      }

      return (
        <div class={bem('cell-block')}>
          <Field
            vModel={this.messageValues[index].value}
            maxlength="200"
            center={!message.multiple}
            label={message.name}
            key={`${this.goodsId}-${index}`}
            required={String(message.required) === '1'}
            placeholder={this.getPlaceholder(message)}
            type={this.getType(message)}
            formatter={this.getFormatter(message)}
            border={false}
          />
          {this.getExtraDesc(message)}
        </div>
      );
    },
  },

  render() {
    return <div class={bem()}>{this.messages.map(this.genMessage)}</div>;
  },
});
