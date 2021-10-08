import { PropType, defineComponent } from 'vue';

// Utils
import {
  addUnit,
  makeArrayProp,
  makeStringProp,
  makeNumericProp,
  createNamespace,
} from '../utils';

// Components
import { Icon } from '../icon';
import { Sidebar } from '../sidebar';
import { SidebarItem } from '../sidebar-item';

const [name, bem] = createNamespace('tree-select');

export type TreeSelectChild = {
  id: number | string;
  text: string;
  disabled?: boolean;
};

export type TreeSelectItem = {
  dot?: boolean;
  text: string;
  badge?: number | string;
  children?: TreeSelectChild[];
  disabled?: boolean;
  className?: unknown;
};

export default defineComponent({
  name,

  props: {
    max: makeNumericProp(Infinity),
    items: makeArrayProp<TreeSelectItem>(),
    height: makeNumericProp(300),
    selectedIcon: makeStringProp('success'),
    mainActiveIndex: makeNumericProp(0),
    activeId: {
      type: [Number, String, Array] as PropType<
        number | string | Array<number | string>
      >,
      default: 0,
    },
  },

  emits: [
    'click-nav',
    'click-item',
    'update:activeId',
    'update:mainActiveIndex',
  ],

  setup(props, { emit, slots }) {
    const isActiveItem = (id: number | string) =>
      Array.isArray(props.activeId)
        ? props.activeId.includes(id)
        : props.activeId === id;

    const renderSubItem = (item: TreeSelectChild) => {
      const onClick = () => {
        if (item.disabled) {
          return;
        }

        let activeId;
        if (Array.isArray(props.activeId)) {
          activeId = props.activeId.slice();

          const index = activeId.indexOf(item.id);

          if (index !== -1) {
            activeId.splice(index, 1);
          } else if (activeId.length < props.max) {
            activeId.push(item.id);
          }
        } else {
          activeId = item.id;
        }

        emit('update:activeId', activeId);
        emit('click-item', item);
      };

      return (
        <div
          key={item.id}
          class={[
            'van-ellipsis',
            bem('item', {
              active: isActiveItem(item.id),
              disabled: item.disabled,
            }),
          ]}
          onClick={onClick}
        >
          {item.text}
          {isActiveItem(item.id) && (
            <Icon name={props.selectedIcon} class={bem('selected')} />
          )}
        </div>
      );
    };

    const onSidebarChange = (index: number) => {
      emit('update:mainActiveIndex', index);
      emit('click-nav', index);
    };

    const renderSidebar = () => {
      const Items = props.items.map((item) => (
        <SidebarItem
          dot={item.dot}
          title={item.text}
          badge={item.badge}
          class={[bem('nav-item'), item.className]}
          disabled={item.disabled}
        />
      ));

      return (
        <Sidebar
          class={bem('nav')}
          modelValue={props.mainActiveIndex}
          onChange={onSidebarChange}
        >
          {Items}
        </Sidebar>
      );
    };

    const renderContent = () => {
      if (slots.content) {
        return slots.content();
      }

      const selected = props.items[+props.mainActiveIndex] || {};
      if (selected.children) {
        return selected.children.map(renderSubItem);
      }
    };

    return () => (
      <div class={bem()} style={{ height: addUnit(props.height) }}>
        {renderSidebar()}
        <div class={bem('content')}>{renderContent()}</div>
      </div>
    );
  },
});
