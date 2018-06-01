import { shallowMount } from '@vue/test-utils';
import Actionsheet from '../';

test('callback events', () => {
  const callback = jest.fn();
  const wrapper = shallowMount(Actionsheet, {
    propsData: {
      actions: [
        { name: 'Option', callback },
        { name: 'Option' }
      ],
      cancelText: 'Cancel'
    }
  });

  wrapper.findAll('li').trigger('click');
  wrapper.find('.van-actionsheet__cancel').trigger('click');

  expect(callback.mock.calls.length).toBe(1);
  expect(wrapper.emitted('cancel')).toBeTruthy();
  expect(wrapper.emitted('input')[0][0]).toBeFalsy();
  expect(wrapper).toMatchSnapshot();
});
