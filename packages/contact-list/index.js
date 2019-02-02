import { use, noop } from '../utils';
import Icon from '../icon';
import Cell from '../cell';
import Button from '../button';
import Radio from '../radio';
import RadioGroup from '../radio-group';

const [sfc, bem, t] = use('contact-list');

export default sfc(
  {
    props: {
      value: null,
      list: Array,
      addText: String
    },

    render(h, context) {
      const { props, listeners } = context;

      const List = props.list.map((item, index) => (
        <Cell
          key={item.id}
          isLink
          onClick={() => {
            listeners.input && listeners.input(item.id);
            listeners.select && listeners.select(item, index);
          }}
        >
          <Radio name={item.id}>
            <div class={bem('name')}>{`${item.name}，${item.tel}`}</div>
          </Radio>
          <Icon
            slot="right-icon"
            name="edit"
            class={bem('edit')}
            onClick={event => {
              event.stopPropagation();
              listeners.edit && listeners.edit(item, index);
            }}
          />
        </Cell>
      ));

      return (
        <div class={bem()} {...context.data}>
          <RadioGroup value={props.value} class={bem('group')}>
            {List}
          </RadioGroup>
          <Button
            square
            size="large"
            type="danger"
            class={bem('add')}
            text={props.addText || t('addText')}
            onClick={listeners.add || noop}
          />
        </div>
      );
    }
  },
  true
);
