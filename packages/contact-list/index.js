import { use, noop } from '../utils';
import { emit, inherit } from '../utils/functional';
import Icon from '../icon';
import Cell from '../cell';
import Button from '../button';
import Radio from '../radio';
import RadioGroup from '../radio-group';

const [sfc, bem, t] = use('contact-list');

export default sfc({
  functional: true,

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
        class={bem('item')}
        valueClass={bem('item-value')}
        scopedSlots={{
          default: () => (
            <Radio name={item.id}>
              <div class={bem('name')}>{`${item.name}，${item.tel}`}</div>
            </Radio>
          ),
          'right-icon': () => (
            <Icon
              name="edit"
              class={bem('edit')}
              onClick={event => {
                event.stopPropagation();
                emit(context, 'edit', item, index);
              }}
            />
          )
        }}
        onClick={() => {
          emit(context, 'input', item.id);
          emit(context, 'select', item, index);
        }}
      />
    ));

    return (
      <div class={bem()} {...inherit(context)}>
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
});
