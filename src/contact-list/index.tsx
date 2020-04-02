// Utils
import { createNamespace } from '../utils';
import { RED } from '../utils/constant';
import { emit, inherit } from '../utils/functional';

// Components
import Tag from '../tag';
import Icon from '../icon';
import Cell from '../cell';
import Radio from '../radio';
import Button from '../button';
import RadioGroup from '../radio-group';

// Types
import { DefaultSlots } from '../utils/types';
import { CreateElement, RenderContext, VNode } from 'vue/types';

export type ContactListItem = {
  id: string | number;
  tel: string | number;
  name: string;
  isDefault: boolean;
};

export type ContactListProps = {
  value?: any;
  list?: ContactListItem[];
  addText?: string;
  defaultTagText?: string;
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

      function RightIcon() {
        return (
          <Radio
            name={item.id}
            iconSize={16}
            checkedColor={RED}
            onClick={onClick}
          />
        );
      }

      function LeftIcon() {
        return (
          <Icon
            name="edit"
            class={bem('edit')}
            onClick={(event) => {
              event.stopPropagation();
              emit(ctx, 'edit', item, index);
            }}
          />
        );
      }

      function Content() {
        const nodes = ([`${item.name}，${item.tel}`] as unknown[]) as VNode[];

        if (item.isDefault && props.defaultTagText) {
          nodes.push(
            <Tag type="danger" round class={bem('item-tag')}>
              {props.defaultTagText}
            </Tag>
          );
        }

        return nodes;
      }

      return (
        <Cell
          key={item.id}
          isLink
          center
          class={bem('item')}
          valueClass={bem('item-value')}
          scopedSlots={{
            icon: LeftIcon,
            default: Content,
            'right-icon': RightIcon,
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
      <div class={bem('bottom')}>
        <Button
          round
          block
          type="danger"
          class={bem('add')}
          text={props.addText || t('addText')}
          onClick={() => {
            emit(ctx, 'add');
          }}
        />
      </div>
    </div>
  );
}

ContactList.props = {
  value: null as any,
  list: Array,
  addText: String,
  defaultTagText: String,
};

export default createComponent(ContactList);
