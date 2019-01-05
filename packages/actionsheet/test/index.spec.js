import { mount } from '../../../test/utils';
import Actionsheet from '..';

test('callback events', () => {
  const callback = jest.fn();
  const wrapper = mount(Actionsheet, {
    propsData: {
      value: true,
      actions: [
        { name: 'Option', callback },
        { name: 'Option', disabled: true }
      ],
      cancelText: 'Cancel'
    }
  });

  const options = wrapper.findAll('.van-actionsheet__item');
  options.at(0).trigger('click');
  options.at(1).trigger('click');
  wrapper.find('.van-actionsheet__cancel').trigger('click');

  expect(callback.mock.calls.length).toBe(1);
  expect(wrapper.emitted('cancel')).toBeTruthy();
  expect(wrapper.emitted('input')[0][0]).toBeFalsy();
  expect(wrapper.emitted('select')[0][0]).toBeTruthy();
  expect(wrapper.emitted('select')[0][1]).toBeFalsy();
  expect(wrapper).toMatchSnapshot();
});
