import { watch, reactive } from 'vue';

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

const DEFAULT_CONTACT = {
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
      default: () => ({ ...DEFAULT_CONTACT }),
    },
    telValidator: {
      type: Function,
      default: isMobile,
    },
  },

  emits: ['save', 'delete', 'change-default'],

  setup(props, { emit }) {
    const state = reactive({
      contact: {
        ...DEFAULT_CONTACT,
        ...props.contactInfo,
      },
      errorInfo: {
        name: '',
        tel: '',
      },
    });

    const onFocus = (key) => {
      state.errorInfo[key] = '';
    };

    const getErrorMessageByKey = (key) => {
      const value = state.contact[key].trim();
      switch (key) {
        case 'name':
          return value ? '' : t('nameInvalid');
        case 'tel':
          return props.telValidator(value) ? '' : t('telInvalid');
      }
    };

    const onSave = () => {
      const isValid = ['name', 'tel'].every((item) => {
        const msg = getErrorMessageByKey(item);
        if (msg) {
          state.errorInfo[item] = msg;
        }
        return !msg;
      });

      if (isValid && !props.isSaving) {
        emit('save', state.contact);
      }
    };

    const onDelete = () => {
      Dialog.confirm({
        title: t('confirmDelete'),
      }).then(() => {
        emit('delete', state.contact);
      });
    };

    const renderButtons = () => (
      <div class={bem('buttons')}>
        <Button
          block
          round
          type="danger"
          text={t('save')}
          loading={props.isSaving}
          onClick={onSave}
        />
        {props.isEdit && (
          <Button
            block
            round
            text={t('delete')}
            loading={props.isDeleting}
            onClick={onDelete}
          />
        )}
      </div>
    );

    const renderSwitch = () => (
      <Switch
        vModel={state.contact.isDefault}
        size={24}
        onChange={(event) => {
          emit('change-default', event);
        }}
      />
    );

    const renderSetDefault = () => {
      if (props.showSetDefault) {
        return (
          <Cell
            v-slots={{ 'right-icon': renderSwitch }}
            title={props.setDefaultLabel}
            class={bem('switch-cell')}
            border={false}
          />
        );
      }
    };

    watch(
      () => props.contactInfo,
      (value) => {
        state.contact = {
          ...DEFAULT_CONTACT,
          ...value,
        };
      }
    );

    return () => {
      const { contact, errorInfo } = state;
      return (
        <div class={bem()}>
          <div class={bem('fields')}>
            <Field
              vModel={contact.name}
              clearable
              maxlength="30"
              label={t('name')}
              placeholder={t('nameEmpty')}
              errorMessage={errorInfo.name}
              onFocus={() => onFocus('name')}
            />
            <Field
              vModel={contact.tel}
              clearable
              type="tel"
              label={t('tel')}
              placeholder={t('telEmpty')}
              errorMessage={errorInfo.tel}
              onFocus={() => onFocus('tel')}
            />
          </div>
          {renderSetDefault()}
          {renderButtons()}
        </div>
      );
    };
  },
});
