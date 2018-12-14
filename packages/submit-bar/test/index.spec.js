import SubmitBar from '..';
import { mount } from '../../../test/utils';

test('submit', () => {
  const wrapper = mount(SubmitBar, {
    propsData: {
      price: 0.01,
      disabled: true
    }
  });

  expect(wrapper).toMatchSnapshot();

  // disabled
  const button = wrapper.find('.van-button');
  button.trigger('click');
  expect(wrapper.emitted('submit')).toBeFalsy();

  // submit
  wrapper.vm.disabled = false;
  button.trigger('click');
  expect(wrapper.emitted('submit')).toBeTruthy();
});
