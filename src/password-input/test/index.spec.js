import PasswordInput from '..';
import { mount } from '../../../test';

test('focus event', () => {
  const focus = jest.fn();
  const wrapper = mount(PasswordInput, {
    context: {
      on: {
        focus,
      },
    },
  });

  wrapper.find('.van-password-input__security').trigger('touchstart');
  expect(focus).toHaveBeenCalledTimes(1);
});
