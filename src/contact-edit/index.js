import { watch, reactive } from 'vue';

// Utils
import { createNamespace } from '../utils';
import { isMobile } from '../utils/validate/mobile';

// Components
import Cell from '../cell';
import Form from '../form';
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
    const contact = reactive({
      ...DEFAULT_CONTACT,
      ...props.contactInfo,
    });

    const onSave = () => {
      if (!props.isSaving) {
        emit('save', contact);
      }
    };

    const onDelete = () => {
      Dialog.confirm({
        title: t('confirmDelete'),
      }).then(() => {
        emit('delete', contact);
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
          nativeType="submit"
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
        v-model={contact.isDefault}
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
        Object.assign(contact, DEFAULT_CONTACT, value);
      }
    );

    return () => (
      <Form class={bem()} onSubmit={onSave}>
        <div class={bem('fields')}>
          <Field
            v-model={contact.name}
            clearable
            label={t('name')}
            rules={[{ required: true, message: t('nameInvalid') }]}
            maxlength="30"
            placeholder={t('nameEmpty')}
          />
          <Field
            v-model={contact.tel}
            clearable
            type="tel"
            label={t('tel')}
            rules={[
              { validator: props.telValidator, message: t('telInvalid') },
            ]}
            placeholder={t('telEmpty')}
          />
        </div>
        {renderSetDefault()}
        {renderButtons()}
      </Form>
    );
  },
});
