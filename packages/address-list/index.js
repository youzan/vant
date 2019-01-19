import { use } from '../utils';
import Button from '../button';
import RadioGroup from '../radio-group';
import AddressItem from './Item';

const [sfc, bem, t] = use('address-list');

export default sfc({
  props: {
    list: Array,
    disabledList: Array,
    disabledText: String,
    addButtonText: String,
    value: [String, Number],
    switchable: {
      type: Boolean,
      default: true
    }
  },

  render(h) {
    const getList = (list, disabled) =>
      list.map((item, index) => (
        <AddressItem
          data={item}
          key={item.id}
          disabled={disabled}
          switchable={this.switchable && !disabled}
          onSelect={() => {
            this.$emit(disabled ? 'select-disabled' : 'select', item, index);
          }}
          onEdit={() => {
            this.$emit(disabled ? 'edit-disabled' : 'edit', item, index);
          }}
        />
      ));

    const List = getList(this.list);
    const DisabledList = getList(this.disabledList, true);

    return (
      <div class={bem()}>
        {this.$slots.top}
        <RadioGroup value={this.value} onInput={event => this.$emit('input', event)}>
          {List}
        </RadioGroup>
        {this.disabledText && <div class={bem('disabled-text')}>{this.disabledText}</div>}
        {DisabledList}
        {this.$slots.default}
        <Button
          square
          size="large"
          type="danger"
          class={bem('add')}
          text={this.addButtonText || t('add')}
          onClick={() => {
            this.$emit('add');
          }}
        />
      </div>
    );
  }
});
