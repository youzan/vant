import TreeSelect from '../';
import { mount } from '../../../test/utils';

test('empty list', () => {
  expect(mount(TreeSelect)).toMatchSnapshot();
});

test('select item', () => {
  const item = {
    text: 'city1',
    id: 1
  };
  const wrapper = mount(TreeSelect, {
    propsData: {
      items: [{
        text: 'group1',
        children: [item]
      }]
    }
  });

  wrapper.find('.van-tree-select__item').trigger('click');
  expect(wrapper.emitted('itemclick')[0][0]).toEqual(item);
});
