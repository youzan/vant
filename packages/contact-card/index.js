import { use } from '../utils';
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

  render(h, context, inherit) {
    const { props, listeners } = context;
    const { type, editable } = props;

    return (
      <Cell
        center
        border={false}
        class={bem([type])}
        isLink={editable}
        icon={type === 'edit' ? 'contact' : 'add-square'}
        onClick={event => {
          if (editable && listeners.click) {
            listeners.click(event);
          }
        }}
        {...inherit}
      >
        {type === 'add'
          ? props.addText || t('addText')
          : [<div>{`${t('name')}：${props.name}`}</div>, <div>{`${t('tel')}：${props.tel}`}</div>]}
      </Cell>
    );
  }
});
