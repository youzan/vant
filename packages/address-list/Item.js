import { use } from '../utils';
import Icon from '../icon';
import Cell from '../cell';
import Radio from '../radio';

const [sfc, bem] = use('address-item');

export default sfc({
  props: {
    data: Object,
    disabled: Boolean,
    switchable: Boolean
  },

  methods: {
    onSelect() {
      if (this.switchable) {
        this.$emit('select');
      }
    },

    onClickRightIcon(event) {
      event.stopPropagation();
      this.$emit('edit');
    },

    renderRightIcon() {
      return <Icon name="edit" class={bem('edit')} onClick={this.onClickRightIcon} />;
    },

    renderContent() {
      const { data } = this;
      const Info = [
        <div class={bem('name')}>{`${data.name}，${data.tel}`}</div>,
        <div class={bem('address')}>{data.address}</div>
      ];

      return this.disabled ? Info : <Radio name={data.id}>{Info}</Radio>;
    }
  },

  render(h) {
    const { disabled, switchable } = this;

    return (
      <Cell
        class={bem({ disabled, unswitchable: !switchable })}
        valueClass={bem('value')}
        isLink={!disabled && switchable}
        scopedSlots={{
          default: this.renderContent,
          'right-icon': this.renderRightIcon
        }}
        onClick={this.onSelect}
      />
    );
  }
});
