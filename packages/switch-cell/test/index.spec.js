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

  wrapper.find('.van-switch').trigger('click');

  expect(onChange).toHaveBeenCalledWith(true);
});
