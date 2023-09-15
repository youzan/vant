import TreeSelect from '..';
import { mount } from '../../../test';

test('empty list', () => {
  expect(mount(TreeSelect)).toMatchSnapshot();
});

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

test('click-nav event', () => {
  const onClickNav = jest.fn();

  const wrapper = mount(TreeSelect, {
    propsData: {
      items: mockItems,
    },
    context: {
      on: {
        'click-nav': onClickNav,
      },
    },
  });

  const navItems = wrapper.findAll('.van-tree-select__nav-item');
  navItems.at(1).trigger('click');

  expect(onClickNav).toHaveBeenCalledWith(1);
});

test('click-item event', () => {
  const onClickItem = jest.fn();

  const wrapper = mount(TreeSelect, {
    propsData: {
      items: mockItems,
    },
    context: {
      on: {
        'click-item': onClickItem,
      },
    },
  });

  const items = wrapper.findAll('.van-tree-select__item');
  items.at(0).trigger('click');
  expect(onClickItem).toHaveBeenCalledWith(mockItem);
});

test('click disabled nav', () => {
  const onClickNav = jest.fn();

  const wrapper = mount(TreeSelect, {
    propsData: {
      items: [
        {
          text: 'group1',
          children: [mockItem],
          disabled: true,
        },
      ],
    },
    context: {
      on: {
        'click-nav': onClickNav,
      },
    },
  });

  const items = wrapper.findAll('.van-tree-select__nav-item');
  items.at(0).trigger('click');
  expect(onClickNav).toHaveBeenCalledTimes(0);
});

test('click disabled item', () => {
  const onClickItem = jest.fn();
  const wrapper = mount(TreeSelect, {
    propsData: {
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
    context: {
      on: {
        'click-item': onClickItem,
      },
    },
  });

  const items = wrapper.findAll('.van-tree-select__item');
  items.at(0).trigger('click');
  expect(onClickItem).toHaveBeenCalledTimes(0);
});

test('content slot', () => {
  const wrapper = mount(TreeSelect, {
    propsData: {
      items: [
        {
          text: 'group1',
        },
      ],
    },
    scopedSlots: {
      content: () => 'Custom Content',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('height prop', () => {
  const wrapper = mount(TreeSelect, {
    propsData: {
      height: '100vh',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('nav render badge', () => {
  const wrapper = mount(TreeSelect, {
    propsData: {
      items: [
        {
          text: 'group1',
          badge: 3,
        },
      ],
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('use sync modifier in main-active-index', () => {
  const wrapper = mount({
    template: `
      <van-tree-select
        :items="items"
        :main-active-index.sync="mainActiveIndex"
      />
    `,
    data() {
      return {
        mainActiveIndex: -1,
        items: mockItems,
      };
    },
  });

  const navItems = wrapper.findAll('.van-tree-select__nav-item');
  navItems.at(0).trigger('click');

  expect(wrapper.vm.mainActiveIndex).toEqual(0);
});

test('use sync modifier in active-id', () => {
  const wrapper = mount({
    template: `
      <van-tree-select
        :items="items"
        :main-active-index="0"
        :active-id.sync="activeId"
      />
    `,
    data() {
      return {
        activeId: mockItem.id,
        mainActiveIndex: 0,
        items: [
          {
            text: 'group1',
            children: [mockItem, mockItem2],
          },
        ],
      };
    },
  });

  const items = wrapper.findAll('.van-tree-select__item');
  items.at(1).trigger('click');

  expect(wrapper.vm.activeId).toEqual(mockItem2.id);
});

test('multiple select', () => {
  const wrapper = mount({
    template: `
      <van-tree-select
        :items="items"
        :main-active-index="0"
        :active-id.sync="activeId"
      />
    `,
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
  });

  const items = wrapper.findAll('.van-tree-select__item');
  items.at(0).trigger('click');
  items.at(1).trigger('click');
  expect(wrapper.vm.activeId).toEqual([mockItem.id, mockItem2.id]);

  items.at(0).trigger('click');
  items.at(1).trigger('click');
  expect(wrapper.vm.activeId).toEqual([]);
});

test('max prop', () => {
  const wrapper = mount({
    template: `
      <van-tree-select
        :max="1"
        :items="items"
        :main-active-index="0"
        :active-id.sync="activeId"
      />
    `,
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
  });

  const items = wrapper.findAll('.van-tree-select__item');
  items.at(0).trigger('click');
  items.at(1).trigger('click');
  expect(wrapper.vm.activeId).toEqual([mockItem.id]);
});

test('className of nav', () => {
  const wrapper = mount(TreeSelect, {
    propsData: {
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
  expect(items.at(0).element.classList.contains('my-class')).toBeTruthy();
});

test('should sync value before trigger click-item event', (done) => {
  const wrapper = mount({
    template: `
      <van-tree-select
        :items="items"
        :main-active-index="0"
        :active-id.sync="activeId"
        @click-item="onClickItem"
      />
    `,
    data() {
      return {
        activeId: mockItem.id,
        mainActiveIndex: 0,
        items: [
          {
            text: 'group1',
            children: [mockItem, mockItem2],
          },
        ],
      };
    },
    methods: {
      onClickItem() {
        expect(wrapper.vm.activeId).toEqual(mockItem2.id);
        done();
      },
    },
  });

  const items = wrapper.findAll('.van-tree-select__item');
  items.at(1).trigger('click');
});

test('selected-icon prop', () => {
  const wrapper = mount(TreeSelect, {
    propsData: {
      items: mockItems,
      activeId: 1,
      mainActiveIndex: 0,
      selectedIcon: 'foo',
    },
  });

  expect(wrapper.find('.van-tree-select__item')).toMatchSnapshot();
});
