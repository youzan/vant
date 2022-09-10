import { defineComponent, type ExtractPropTypes } from 'vue';
import { truthProp, makeStringProp, createNamespace } from '../utils';
import { Cell } from '../cell';

const [name, bem, t] = createNamespace('contact-card');

export type ContactCardType = 'add' | 'edit';

export const contactCardProps = {
  tel: String,
  name: String,
  type: makeStringProp<ContactCardType>('add'),
  addText: String,
  editable: truthProp,
};

export type ContactCardProps = ExtractPropTypes<typeof contactCardProps>;

export default defineComponent({
  name,

  props: contactCardProps,

  emits: ['click'],

  setup(props, { emit }) {
    const onClick = (event: MouseEvent) => {
      if (props.editable) {
        emit('click', event);
      }
    };

    const renderContent = () => {
      if (props.type === 'add') {
        return props.addText || t('addContact');
      }

      return [
        <div>{`${t('name')}：${props.name}`}</div>,
        <div>{`${t('tel')}：${props.tel}`}</div>,
      ];
    };

    return () => (
      <Cell
        v-slots={{ title: renderContent }}
        center
        icon={props.type === 'edit' ? 'contact' : 'add-square'}
        class={bem([props.type])}
        border={false}
        isLink={props.editable}
        titleClass={bem('title')}
        onClick={onClick}
      />
    );
  },
});
