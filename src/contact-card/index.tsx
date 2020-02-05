// Utils
import { createNamespace } from '../utils';
import { emit, inherit } from '../utils/functional';

// Components
import Cell from '../cell';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

const [createComponent, bem, t] = createNamespace('contact-card');

export type ContactCardProps = {
  tel?: string;
  name?: string;
  type?: string;
  addText: string;
  editable: boolean;
};

function ContactCard(
  h: CreateElement,
  props: ContactCardProps,
  slots: DefaultSlots,
  ctx: RenderContext<ContactCardProps>
) {
  const { type, editable } = props;

  function onClick(event: Event) {
    if (editable) {
      emit(ctx, 'click', event);
    }
  }

  function Content() {
    if (type === 'add') {
      return props.addText || t('addText');
    }

    return [
      <div>{`${t('name')}：${props.name}`}</div>,
      <div>{`${t('tel')}：${props.tel}`}</div>,
    ];
  }

  return (
    <Cell
      center
      border={false}
      isLink={editable}
      class={bem([type])}
      valueClass={bem('value')}
      icon={type === 'edit' ? 'contact' : 'add-square'}
      onClick={onClick}
      {...inherit(ctx)}
    >
      {Content()}
    </Cell>
  );
}

ContactCard.props = {
  tel: String,
  name: String,
  addText: String,
  editable: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String,
    default: 'add',
  },
};

export default createComponent<ContactCardProps>(ContactCard);
