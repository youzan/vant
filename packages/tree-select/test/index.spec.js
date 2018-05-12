import TreeSelect from '../';
import demoTest from '../../../test/demo-test';
import { mount } from '@vue/test-utils';

demoTest(TreeSelect);

test('empty list', () => {
  expect(mount(TreeSelect).html()).toMatchSnapshot();
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
