import Switch from '..';
import { mount } from '../../../test/utils';

test('emit event', () => {
  const input = jest.fn();
  const change = jest.fn();
  const wrapper = mount(Switch, {
    context: {
      on: {
        input,
        change
      }
    }
  });
  wrapper.trigger('click');

  expect(input).toHaveBeenCalledWith(true);
  expect(change).toHaveBeenCalledWith(true);
});

test('disabled', () => {
  const input = jest.fn();
  const change = jest.fn();
  const wrapper = mount(Switch, {
    context: {
      on: {
        input,
        change
      }
    },
    propsData: {
      disabled: true
    }
  });
  wrapper.trigger('click');

  expect(input).toHaveBeenCalledTimes(0);
  expect(change).toHaveBeenCalledTimes(0);
});
