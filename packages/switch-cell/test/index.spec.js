import SwitchCell from '..';
import { mount } from '../../../test/utils';

test('change event', () => {
  const onChange = jest.fn();
  const wrapper = mount(SwitchCell, {
    context: {
      on: {
        change: onChange
      }
    }
  });

  wrapper.vm.$on('input', value => {
    wrapper.setProps({ value });
  });
  wrapper.find('.van-switch').trigger('click');

  expect(onChange.mock.calls[0]).toBeTruthy();
});
