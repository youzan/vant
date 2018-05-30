import SwitchCell from '..';
import { mount } from '@vue/test-utils';

test('emit event', () => {
  const wrapper = mount(SwitchCell);

  wrapper.vm.$on('input', value => {
    wrapper.setProps({ value });
  });
  wrapper.find('.van-switch').trigger('click');

  expect(wrapper.emitted('change')).toBeTruthy();
});
