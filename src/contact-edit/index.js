// Utils
import { createNamespace } from '../utils';
import { isMobile } from '../utils/validate/mobile';

// Components
import Cell from '../cell';
import Field from '../field';
import Button from '../button';
import Dialog from '../dialog';
import Switch from '../switch';

const [createComponent, bem, t] = createNamespace('contact-edit');

const defaultContact = {
  tel: '',
  name: '',
};

export default createComponent({
  props: {
    isEdit: Boolean,
    isSaving: Boolean,
    isDeleting: Boolean,
    showSetDefault: Boolean,
    setDefaultLabel: String,
    contactInfo: {
      type: Object,
      default: () => ({ ...defaultContact }),
    },
    telValidator: {
      type: Function,
      default: isMobile,
    },
  },

  data() {
    return {
      data: {
        ...defaultContact,
        ...this.contactInfo,
      },
      errorInfo: {
        name: '',
        tel: '',
      },
    };
  },

  watch: {
    contactInfo(val) {
      this.data = {
        ...defaultContact,
        ...val,
      };
    },
  },

  methods: {
    onFocus(key) {
      this.errorInfo[key] = '';
    },

    getErrorMessageByKey(key) {
      const value = this.data[key].trim();
      switch (key) {
        case 'name':
          return value ? '' : t('nameInvalid');
        case 'tel':
          return this.telValidator(value) ? '' : t('telInvalid');
      }
    },

    onSave() {
      const isValid = ['name', 'tel'].every((item) => {
        const msg = this.getErrorMessageByKey(item);
        if (msg) {
          this.errorInfo[item] = msg;
        }
        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },

    onDelete() {
      Dialog.confirm({
        title: t('confirmDelete'),
      }).then(() => {
        this.$emit('delete', this.data);
      });
    },
  },

  render() {
    const { data, errorInfo } = this;
    const onFocus = (name) => () => this.onFocus(name);

    return (
      <div class={bem()}>
        <div class={bem('fields')}>
          <Field
            vModel={data.name}
            clearable
            maxlength="30"
            label={t('name')}
            placeholder={t('nameEmpty')}
            errorMessage={errorInfo.name}
            onFocus={onFocus('name')}
          />
          <Field
            vModel={data.tel}
            clearable
            type="tel"
            label={t('tel')}
            placeholder={t('telEmpty')}
            errorMessage={errorInfo.tel}
            onFocus={onFocus('tel')}
          />
        </div>
        {this.showSetDefault && (
          <Cell
            title={this.setDefaultLabel}
            class={bem('switch-cell')}
            border={false}
          >
            <Switch
              vModel={data.isDefault}
              size={24}
              slot="right-icon"
              onChange={(event) => {
                this.$emit('change-default', event);
              }}
            />
          </Cell>
        )}
        <div class={bem('buttons')}>
          <Button
            block
            round
            type="danger"
            text={t('save')}
            loading={this.isSaving}
            onClick={this.onSave}
          />
          {this.isEdit && (
            <Button
              block
              round
              text={t('delete')}
              loading={this.isDeleting}
              onClick={this.onDelete}
            />
          )}
        </div>
      </div>
    );
  },
});
