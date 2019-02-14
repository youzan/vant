import { use } from '../utils';
import { emit, inherit } from '../utils/functional';
import Cell from '../cell';

const [sfc, bem, t] = use('contact-card');

function ContactCard(h, props, slots, ctx) {
  const { type, editable } = props;

  return (
    <Cell
      center
      border={false}
      isLink={editable}
      class={bem([type])}
      valueClass={bem('value')}
      icon={type === 'edit' ? 'contact' : 'add-square'}
      onClick={event => {
        if (editable) {
          emit(ctx, 'click', event);
        }
      }}
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

export default sfc(ContactCard);
