import { use } from '../utils';
import { emit, inherit } from '../utils/functional';
import Icon from '../icon';
import Cell from '../cell';
import Button from '../button';
import Radio from '../radio';
import RadioGroup from '../radio-group';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/use/sfc';

export type ContactListItem = {
  id: string | number;
  tel: string | number;
  name: string;
};

export type ContactListProps = {
  value?: any;
  list: ContactListItem[];
  addText?: string;
};

const [sfc, bem, t] = use('contact-list');

function ContactList(
  h: CreateElement,
  props: ContactListProps,
  slots: DefaultSlots,
  ctx: RenderContext<ContactListProps>
) {
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
              emit(ctx, 'edit', item, index);
            }}
          />
        )
      }}
      onClick={() => {
        emit(ctx, 'input', item.id);
        emit(ctx, 'select', item, index);
      }}
    />
  ));

  return (
    <div class={bem()} {...inherit(ctx)}>
      <RadioGroup value={props.value} class={bem('group')}>
        {List}
      </RadioGroup>
      <Button
        square
        size="large"
        type="danger"
        class={bem('add')}
        text={props.addText || t('addText')}
        onClick={() => {
          emit(ctx, 'add');
        }}
      />
    </div>
  );
}

ContactList.props = {
  value: null as any,
  list: Array,
  addText: String
};

export default sfc(ContactList);
