import Search from '..';
import { mount } from '../../../test/utils';

test('listen input event', () => {
  const wrapper = mount(Search);
  const input = wrapper.find('input');
  input.element.value = '1';
  input.trigger('input');

  expect(wrapper.emitted('input')[0][0]).toEqual('1');
});

test('cancel search', () => {
  const wrapper = mount(Search, {
    propsData: {
      value: 'test',
      showAction: true
    }
  });

  const cancel = wrapper.find('.van-search__action div');
  cancel.trigger('click');
  expect(wrapper.emitted('input')[0][0]).toEqual('');
  expect(wrapper.emitted('cancel')).toBeTruthy();
});

test('emit a search event', () => {
  const wrapper = mount(Search);
  const input = wrapper.find('input');
  input.trigger('keypress.enter');
  input.trigger('keypress.a');

  expect(wrapper.emitted('search')).toBeTruthy();
  expect(wrapper.emitted('keypress')).toBeTruthy();
});
