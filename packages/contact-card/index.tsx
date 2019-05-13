import { use } from '../utils';
import { emit, inherit } from '../utils/functional';
import Cell from '../cell';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

const [sfc, bem, t] = use('contact-card');

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
      {type === 'add'
        ? props.addText || t('addText')
        : [
            <div>{`${t('name')}：${props.name}`}</div>,
            <div>{`${t('tel')}：${props.tel}`}</div>
        ]}
    </Cell>
  );
}

ContactCard.props = {
  tel: String,
  name: String,
  addText: String,
  editable: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    default: 'add'
  }
};

export default sfc<ContactCardProps>(ContactCard);
