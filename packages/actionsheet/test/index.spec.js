import { mount } from '@vue/test-utils';
import Actionsheet from '../';
import demoTest from '../../../test/demo-test';

demoTest('actionsheet');

describe('Actionsheet', () => {
  it('Callback events', () => {
    const callback = jest.fn();
    const wrapper = mount(Actionsheet, {
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
});
