import { shallow } from '@vue/test-utils';
import Actionsheet from '../';
import demoTest from '../../../test/demo-test';

demoTest(Actionsheet);

test('callback events', () => {
  const callback = jest.fn();
  const wrapper = shallow(Actionsheet, {
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
  expect(wrapper.html()).toMatchSnapshot();
});
