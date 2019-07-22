import TreeSelect from '..';
import { mount } from '../../../test/utils';

test('empty list', () => {
  expect(mount(TreeSelect)).toMatchSnapshot();
});

test('click-nav event', () => {
  const onNavClick = jest.fn();
  const onClickNav = jest.fn();
  const item = {
    text: 'city1',
    id: 1
  };

  const wrapper = mount(TreeSelect, {
    propsData: {
      items: [
        {
          text: 'group1',
          children: [item]
        }
      ]
    },
    context: {
      on: {
        navclick: onNavClick,
        'click-nav': onClickNav
      }
    }
  });

  const items = wrapper.findAll('.van-tree-select__nav-item');
  items.at(0).trigger('click');
  expect(onNavClick).toHaveBeenCalledWith(0);
  expect(onClickNav).toHaveBeenCalledWith(0);
});

test('click-item event', () => {
  const onItemClick = jest.fn();
  const onClickItem = jest.fn();
  const item = {
    text: 'city1',
    id: 1
  };

  const wrapper = mount(TreeSelect, {
    propsData: {
      items: [
        {
          text: 'group1',
          children: [item]
        }
      ]
    },
    context: {
      on: {
        itemclick: onItemClick,
        'click-item': onClickItem
      }
    }
  });

  const items = wrapper.findAll('.van-tree-select__item');
  items.at(0).trigger('click');
  expect(onItemClick).toHaveBeenCalledWith(item);
  expect(onClickItem).toHaveBeenCalledWith(item);
});

test('click disabled nav', () => {
  const onClickNav = jest.fn();
  const item = {
    text: 'city1',
    id: 1
  };

  const wrapper = mount(TreeSelect, {
    propsData: {
      items: [
        {
          text: 'group1',
          children: [item],
          disabled: true
        }
      ]
    },
    context: {
      on: {
        'click-nav': onClickNav
      }
    }
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
              text: 'city1',
              id: 1,
              disabled: true
            }
          ]
        }
      ]
    },
    context: {
      on: {
        'click-item': onClickItem
      }
    }
  });

  const items = wrapper.findAll('.van-tree-select__item');
  items.at(0).trigger('click');
  expect(onClickItem).toHaveBeenCalledTimes(0);
});
