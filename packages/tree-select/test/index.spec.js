import TreeSelect from '..';
import { mount } from '../../../test/utils';

test('empty list', () => {
  expect(mount(TreeSelect)).toMatchSnapshot();
});

test('select item', () => {
  const onItemClick = jest.fn();
  const item = {
    text: 'city1',
    id: 1
  };

  const wrapper = mount(TreeSelect, {
    propsData: {
      items: [{
        text: 'group1',
        children: [
          item,
          { ...item, disabled: true }
        ]
      }]
    },
    context: {
      on: {
        itemclick: onItemClick
      }
    }
  });

  const items = wrapper.findAll('.van-tree-select__item');
  items.at(0).trigger('click');
  expect(onItemClick).toHaveBeenCalledWith(item);
  items.at(1).trigger('click');
  expect(onItemClick).toHaveBeenCalledTimes(1);
});
