// Utils
import { createNamespace, addUnit, isDef } from '../utils';

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
    return function () {
      const { items, height, activeId, selectedIcon, mainActiveIndex } = props;

      const selectedItem = items[+mainActiveIndex] || {};
      const subItems = selectedItem.children || [];
      const isMultiple = Array.isArray(activeId);

      function isActiveItem(id) {
        return isMultiple ? activeId.indexOf(id) !== -1 : activeId === id;
      }

      const Navs = items.map((item) => (
        <SidebarItem
          dot={item.dot}
          info={isDef(item.badge) ? item.badge : item.info}
          title={item.text}
          disabled={item.disabled}
          class={[bem('nav-item'), item.className]}
        />
      ));

      function Content() {
        if (slots.content) {
          return slots.content();
        }

        return subItems.map((item) => (
          <div
            key={item.id}
            class={[
              'van-ellipsis',
              bem('item', {
                active: isActiveItem(item.id),
                disabled: item.disabled,
              }),
            ]}
            onClick={() => {
              if (!item.disabled) {
                let newActiveId = item.id;
                if (isMultiple) {
                  newActiveId = activeId.slice();

                  const index = newActiveId.indexOf(item.id);

                  if (index !== -1) {
                    newActiveId.splice(index, 1);
                  } else if (newActiveId.length < props.max) {
                    newActiveId.push(item.id);
                  }
                }

                emit('update:activeId', newActiveId);
                emit('click-item', item);
              }
            }}
          >
            {item.text}
            {isActiveItem(item.id) && (
              <Icon name={selectedIcon} class={bem('selected')} />
            )}
          </div>
        ));
      }

      return (
        <div class={bem()} style={{ height: addUnit(height) }}>
          <Sidebar
            class={bem('nav')}
            modelValue={mainActiveIndex}
            onChange={(index) => {
              emit('update:mainActiveIndex', index);
              emit('click-nav', index);
            }}
          >
            {Navs}
          </Sidebar>
          <div class={bem('content')}>{Content()}</div>
        </div>
      );
    };
  },
});
