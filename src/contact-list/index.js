// Utils
import { createNamespace } from '../utils';
import { RED } from '../utils/constant';

// Components
import Tag from '../tag';
import Icon from '../icon';
import Cell from '../cell';
import Radio from '../radio';
import Button from '../button';
import RadioGroup from '../radio-group';

const [createComponent, bem, t] = createNamespace('contact-list');

export default createComponent({
  props: {
    list: Array,
    addText: String,
    modelValue: null,
    defaultTagText: String,
  },

  emits: ['add', 'edit', 'select', 'update:modelValue'],

  setup(props, { emit }) {
    const renderItem = (item, index) => {
      const onClick = () => {
        emit('update:modelValue', item.id);
        emit('select', item, index);
      };

      const renderRightIcon = () => (
        <Radio name={item.id} iconSize={16} checkedColor={RED} />
      );

      const renderLeftIcon = () => (
        <Icon
          name="edit"
          class={bem('edit')}
          onClick={(event) => {
            event.stopPropagation();
            emit('edit', item, index);
          }}
        />
      );

      const renderContent = () => {
        const nodes = [`${item.name}，${item.tel}`];

        if (item.isDefault && props.defaultTagText) {
          nodes.push(
            <Tag type="danger" round class={bem('item-tag')}>
              {props.defaultTagText}
            </Tag>
          );
        }

        return nodes;
      };

      return (
        <Cell
          v-slots={{
            icon: renderLeftIcon,
            default: renderContent,
            'right-icon': renderRightIcon,
          }}
          key={item.id}
          isLink
          center
          class={bem('item')}
          valueClass={bem('item-value')}
          onClick={onClick}
        />
      );
    };

    return () => (
      <div class={bem()}>
        <RadioGroup modelValue={props.modelValue} class={bem('group')}>
          {props.list && props.list.map(renderItem)}
        </RadioGroup>
        <div class={bem('bottom')}>
          <Button
            round
            block
            type="danger"
            class={bem('add')}
            text={props.addText || t('addText')}
            onClick={() => {
              emit('add');
            }}
          />
        </div>
      </div>
    );
  },
});
