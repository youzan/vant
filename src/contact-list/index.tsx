import { createNamespace } from '../utils';
import { RED } from '../utils/constant';
import { emit, inherit } from '../utils/functional';
import Icon from '../icon';
import Cell from '../cell';
import Button from '../button';
import Radio from '../radio';
import RadioGroup from '../radio-group';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../utils/types';

export type ContactListItem = {
  id: string | number;
  tel: string | number;
  name: string;
};

export type ContactListProps = {
  value?: any;
  list?: ContactListItem[];
  addText?: string;
};

const [createComponent, bem, t] = createNamespace('contact-list');

function ContactList(
  h: CreateElement,
  props: ContactListProps,
  slots: DefaultSlots,
  ctx: RenderContext<ContactListProps>
) {
  const List =
    props.list &&
    props.list.map((item, index) => {
      function onClick() {
        emit(ctx, 'input', item.id);
        emit(ctx, 'select', item, index);
      }

      function Content() {
        return (
          <Radio name={item.id} iconSize={16} checkedColor={RED} onClick={onClick}>
            <div class={bem('name')}>{`${item.name}，${item.tel}`}</div>
          </Radio>
        );
      }

      function RightIcon() {
        return (
          <Icon
            name="edit"
            class={bem('edit')}
            onClick={event => {
              event.stopPropagation();
              emit(ctx, 'edit', item, index);
            }}
          />
        );
      }

      return (
        <Cell
          key={item.id}
          isLink
          class={bem('item')}
          valueClass={bem('item-value')}
          scopedSlots={{
            default: Content,
            'right-icon': RightIcon
          }}
          onClick={onClick}
        />
      );
    });

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

export default createComponent(ContactList);
