import { use } from '../utils';
import Button from '../button';
import Field from '../field';
import Toast from '../toast';
import Dialog from '../dialog';
import { isMobile } from '../utils/validate/mobile';

const [sfc, bem, t] = use('contact-edit');

const defaultContact = {
  tel: '',
  name: ''
};

export default sfc({
  props: {
    isEdit: Boolean,
    isSaving: Boolean,
    isDeleting: Boolean,
    contactInfo: {
      type: Object,
      default: () => ({ ...defaultContact })
    },
    telValidator: {
      type: Function,
      default: isMobile
    }
  },

  data() {
    return {
      data: {
        ...defaultContact,
        ...this.contactInfo
      },
      errorInfo: {
        name: false,
        tel: false
      }
    };
  },

  watch: {
    contactInfo(val) {
      this.data = {
        ...defaultContact,
        ...val
      };
    }
  },

  methods: {
    onFocus(key) {
      this.errorInfo[key] = false;
    },

    getErrorMessageByKey(key) {
      const value = this.data[key].trim();
      switch (key) {
        case 'name':
          return value ? '' : t('nameEmpty');
        case 'tel':
          return this.telValidator(value) ? '' : t('telInvalid');
      }
    },

    onSave() {
      const isValid = ['name', 'tel'].every(item => {
        const msg = this.getErrorMessageByKey(item);
        if (msg) {
          this.errorInfo[item] = true;
          Toast(msg);
        }
        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },

    onDelete() {
      Dialog.confirm({
        message: t('confirmDelete')
      }).then(() => {
        this.$emit('delete', this.data);
      });
    }
  },

  render(h) {
    const { data, errorInfo } = this;
    const onFocus = name => () => this.onFocus(name);

    return (
      <div class={bem()}>
        <Field
          vModel={data.name}
          clearable
          maxlength="30"
          label={t('name')}
          placeholder={t('nameEmpty')}
          error={errorInfo.name}
          onFocus={onFocus('name')}
        />
        <Field
          vModel={data.tel}
          clearable
          type="tel"
          label={t('tel')}
          placeholder={t('telEmpty')}
          error={errorInfo.tel}
          onFocus={onFocus('tel')}
        />
        <div class={bem('buttons')}>
          <Button
            block
            type="danger"
            text={t('save')}
            loading={this.isSaving}
            onClick={this.onSave}
          />
          {this.isEdit && (
            <Button block text={t('delete')} loading={this.isDeleting} onClick={this.onDelete} />
          )}
        </div>
      </div>
    );
  }
});
