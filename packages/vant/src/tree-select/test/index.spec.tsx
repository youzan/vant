import { TreeSelect } from '..';
import { mount } from '../../../test';

const mockItem = {
  text: 'city1',
  id: 1,
};

const mockItem2 = {
  text: 'city2',
  id: 2,
};

const mockItems = [
  {
    text: 'group1',
    children: [mockItem],
  },
  {
    text: 'group2',
    children: [mockItem],
  },
];

test('should render empty TreeSelect correctly', () => {
  expect(mount(TreeSelect).html()).toMatchSnapshot();
});

test('should emit update:mainActiveIndex event when mainActiveIndex is changed', async () => {
  const wrapper = mount(TreeSelect, {
    props: {
      items: mockItems,
      mainActiveIndex: 0,
    },
  });

  const navItems = wrapper.findAll('.van-tree-select__nav-item');
  await navItems[0].trigger('click');
  expect(wrapper.emitted('update:mainActiveIndex')).toBeFalsy();

  await navItems[1].trigger('click');
  expect(wrapper.emitted('update:mainActiveIndex')?.[0]).toEqual([1]);
});

test('should emit clickNav event when nav item is clicked', async () => {
  const wrapper = mount(TreeSelect, {
    props: {
      items: mockItems,
    },
  });

  const navItems = wrapper.findAll('.van-tree-select__nav-item');
  await navItems[0].trigger('click');
  expect(wrapper.emitted('clickNav')?.[0]).toEqual([0]);
  await navItems[0].trigger('click');
  expect(wrapper.emitted('clickNav')?.[1]).toEqual([0]);
});

test('should emit clickItem event when item is clicked', () => {
  const wrapper = mount(TreeSelect, {
    props: {
      items: mockItems,
    },
  });

  const items = wrapper.findAll('.van-tree-select__item');
  items[0].trigger('click');
  expect(wrapper.emitted('update:activeId')?.[0]).toEqual([mockItem.id]);
  expect(wrapper.emitted('clickItem')?.[0]).toEqual([mockItem]);
});

test('should not emit clickNav event when disabled nav item is clicked', () => {
  const wrapper = mount(TreeSelect, {
    props: {
      items: [
        {
          text: 'group1',
          children: [mockItem],
          disabled: true,
        },
      ],
    },
  });

  const items = wrapper.findAll('.van-tree-select__nav-item');
  items[0].trigger('click');
  expect(wrapper.emitted('clickNav')).toBeFalsy();
});

test('should not emit clickItem event when disabled item is clicked', () => {
  const wrapper = mount(TreeSelect, {
    props: {
      items: [
        {
          text: 'group1',
          children: [
            {
              ...mockItem,
              disabled: true,
            },
          ],
        },
      ],
    },
  });

  const items = wrapper.findAll('.van-tree-select__item');
  items[0].trigger('click');
  expect(wrapper.emitted('clickItem')).toBeFalsy();
});

test('should render content slot correctly', () => {
  const wrapper = mount(TreeSelect, {
    props: {
      items: [
        {
          text: 'group1',
        },
      ],
    },
    slots: {
      content: () => 'Custom Content',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should change height when using height prop', () => {
  const wrapper = mount(TreeSelect, {
    props: {
      height: '100vh',
    },
  });

  expect(wrapper.style.height).toEqual('100vh');
});

test('should render nav badge correctly', () => {
  const wrapper = mount(TreeSelect, {
    props: {
      items: [
        {
          text: 'group1',
          badge: 3,
        },
      ],
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should allow to select multiple items when activeId is array', async () => {
  const wrapper = mount({
    data() {
      return {
        activeId: [],
        mainActiveIndex: 0,
        items: [
          {
            text: 'group1',
            children: [mockItem, mockItem2],
          },
        ],
      };
    },
    render() {
      return (
        <TreeSelect
          v-model:activeId={this.activeId}
          items={this.items}
          mainActiveIndex={0}
        />
      );
    },
  });

  const items = wrapper.findAll('.van-tree-select__item');
  await items[0].trigger('click');
  await items[1].trigger('click');
  expect(wrapper.vm.activeId).toEqual([mockItem.id, mockItem2.id]);

  await items[0].trigger('click');
  await items[1].trigger('click');
  expect(wrapper.vm.activeId).toEqual([]);
});

test('should limit the selected item number when using max prop', async () => {
  const wrapper = mount({
    data() {
      return {
        activeId: [],
        items: [
          {
            text: 'group1',
            children: [mockItem, mockItem2],
          },
        ],
      };
    },
    render() {
      return (
        <TreeSelect
          v-model:activeId={this.activeId}
          max={1}
          items={this.items}
          mainActiveIndex={0}
        />
      );
    },
  });

  const items = wrapper.findAll('.van-tree-select__item');
  await items[0].trigger('click');
  await items[1].trigger('click');
  expect(wrapper.vm.activeId).toEqual([mockItem.id]);
});

test('should allow to custom nav item className', () => {
  const wrapper = mount(TreeSelect, {
    props: {
      mainActiveIndex: 0,
      items: [
        {
          text: 'group1',
          className: 'my-class',
          children: [],
        },
      ],
    },
  });

  const items = wrapper.findAll('.van-tree-select__nav-item');
  expect(items[0].classes()).toContain('my-class');
});

test('should change selected icon when using selected-icon prop', () => {
  const wrapper = mount(TreeSelect, {
    props: {
      items: mockItems,
      activeId: 1,
      mainActiveIndex: 0,
      selectedIcon: 'foo',
    },
  });

  expect(wrapper.find('.van-tree-select__item').html()).toMatchSnapshot();
});

test('should render nav-text slot correctly', async () => {
  const wrapper = mount(TreeSelect, {
    props: {
      items: mockItems,
    },
    slots: {
      'nav-text': (item) => `Custom nav text, ${item.text}`,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
