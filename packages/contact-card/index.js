import { use } from '../utils';
import Cell from '../cell';

const [sfc, bem, t] = use('contact-card');

export default sfc({
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

  methods: {
    onClick(event) {
      if (this.editable) {
        this.$emit('click', event);
      }
    }
  },

  render(h) {
    const { type } = this;
    return (
      <Cell
        center
        border={false}
        class={bem([type])}
        isLink={this.editable}
        icon={type === 'edit' ? 'contact' : 'add-square'}
        onClick={this.onClick}
      >
        {type === 'add'
          ? this.addText || t('addText')
          : [<div>{`${t('name')}：${this.name}`}</div>, <div>{`${t('tel')}：${this.tel}`}</div>]}
      </Cell>
    );
  }
});
