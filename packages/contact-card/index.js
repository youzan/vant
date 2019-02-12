import { use } from '../utils';
import { emit, inherit } from '../utils/functional';
import Cell from '../cell';

const [sfc, bem, t] = use('contact-card');

export default sfc({
  functional: true,

  props: {
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
  },

  render(h, context) {
    const { props } = context;
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
            emit(context, 'click', event);
          }
        }}
        {...inherit(context)}
      >
        {type === 'add'
          ? props.addText || t('addText')
          : [<div>{`${t('name')}：${props.name}`}</div>, <div>{`${t('tel')}：${props.tel}`}</div>]}
      </Cell>
    );
  }
});
