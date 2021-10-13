import { watch, reactive, PropType, defineComponent } from 'vue';

// Utils
import { isMobile, createNamespace, extend } from '../utils';

// Components
import { Cell } from '../cell';
import { Form } from '../form';
import { Field } from '../field';
import { Button } from '../button';
import { Switch } from '../switch';

const [name, bem, t] = createNamespace('contact-edit');

export type ContactEditInfo = {
  tel: string;
  name: string;
  isDefault?: boolean;
};

const DEFAULT_CONTACT: ContactEditInfo = {
  tel: '',
  name: '',
};

export default defineComponent({
  name,

  props: {
    isEdit: Boolean,
    isSaving: Boolean,
    isDeleting: Boolean,
    showSetDefault: Boolean,
    setDefaultLabel: String,
    contactInfo: {
      type: Object as PropType<ContactEditInfo>,
      default: () => extend({}, DEFAULT_CONTACT),
    },
    telValidator: {
      type: Function as PropType<(val: string) => boolean>,
      default: isMobile,
    },
  },

  emits: ['save', 'delete', 'change-default'],

  setup(props, { emit }) {
    const contact = reactive(extend({}, DEFAULT_CONTACT, props.contactInfo));

    const onSave = () => {
      if (!props.isSaving) {
        emit('save', contact);
      }
    };

    const onDelete = () => emit('delete', contact);

    const renderButtons = () => (
      <div class={bem('buttons')}>
        <Button
          block
          round
          type="danger"
          text={t('save')}
          class={bem('button')}
          loading={props.isSaving}
          nativeType="submit"
        />
        {props.isEdit && (
          <Button
            block
            round
            text={t('delete')}
            class={bem('button')}
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
        onChange={(checked: boolean) => emit('change-default', checked)}
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
      (value) => extend(contact, DEFAULT_CONTACT, value)
    );

    return () => (
      <Form class={bem()} onSubmit={onSave}>
        <div class={bem('fields')}>
          <Field
            v-model={contact.name}
            clearable
            label={t('name')}
            rules={[{ required: true, message: t('nameEmpty') }]}
            maxlength="30"
            placeholder={t('name')}
          />
          <Field
            v-model={contact.tel}
            clearable
            type="tel"
            label={t('tel')}
            rules={[
              { validator: props.telValidator, message: t('telInvalid') },
            ]}
            placeholder={t('tel')}
          />
        </div>
        {renderSetDefault()}
        {renderButtons()}
      </Form>
    );
  },
});
