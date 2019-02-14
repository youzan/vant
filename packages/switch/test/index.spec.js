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
  wrapper.trigger('click');

  expect(input.mock.calls).toEqual([[true], [true]]);
  expect(change.mock.calls).toEqual([[true], [true]]);
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

  expect(input.mock.calls.length).toBeFalsy();
  expect(change.mock.calls.length).toBeFalsy();
});
