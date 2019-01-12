import { use } from '../utils';
import Icon from '../icon';
import Cell from '../cell';
import Button from '../button';
import Radio from '../radio';
import RadioGroup from '../radio-group';

const [sfc, bem, t] = use('contact-list');

export default sfc({
  props: {
    value: null,
    list: Array,
    addText: String
  },

  render(h) {
    return (
      <div class={bem()}>
        <RadioGroup
          value={this.value}
          onInput={event => {
            this.$emit('input', event);
          }}
        >
          {this.list.map((item, index) => (
            <Cell key={item.id} isLink>
              <Radio
                name={item.id}
                onClick={() => {
                  this.$emit('select', item, index);
                }}
              >
                <div class={bem('name')}>{`${item.name}，${item.tel}`}</div>
              </Radio>
              <Icon
                slot="right-icon"
                name="edit"
                class={bem('edit')}
                onClick={() => {
                  this.$emit('edit', item, index);
                }}
              />
            </Cell>
          ))}
        </RadioGroup>
        <Button
          square
          size="large"
          type="danger"
          class={bem('add')}
          text={this.addText || t('addText')}
          onClick={() => {
            this.$emit('add');
          }}
        />
      </div>
    );
  }
});
