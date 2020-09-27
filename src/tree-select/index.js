// Utils
import { createNamespace, addUnit } from '../utils';

// Components
import Icon from '../icon';
import Sidebar from '../sidebar';
import SidebarItem from '../sidebar-item';

const [createComponent, bem] = createNamespace('tree-select');

export default createComponent({
  props: {
    max: {
      type: [Number, String],
      default: Infinity,
    },
    items: {
      type: Array,
      default: () => [],
    },
    height: {
      type: [Number, String],
      default: 300,
    },
    activeId: {
      type: [Number, String, Array],
      default: 0,
    },
    selectedIcon: {
      type: String,
      default: 'success',
    },
    mainActiveIndex: {
      type: [Number, String],
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
    const isMultiple = () => Array.isArray(props.activeId);

    const isActiveItem = (id) => {
      return isMultiple()
        ? props.activeId.indexOf(id) !== -1
        : props.activeId === id;
    };

    const renderSubItem = (item) => {
      const onClick = () => {
        if (item.disabled) {
          return;
        }

        let activeId;
        if (isMultiple()) {
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

    const renderSidebar = () => {
      const Items = props.items.map((item) => (
        <SidebarItem
          dot={item.dot}
          title={item.text}
          badge={item.badge}
          disabled={item.disabled}
          class={[bem('nav-item'), item.className]}
        />
      ));

      return (
        <Sidebar
          class={bem('nav')}
          modelValue={props.mainActiveIndex}
          onChange={(index) => {
            emit('update:mainActiveIndex', index);
            emit('click-nav', index);
          }}
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
