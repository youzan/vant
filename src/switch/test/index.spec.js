import Switch from '..';
import { mount } from '../../../test';

test('emit event', () => {
  const input = jest.fn();
  const change = jest.fn();
  const wrapper = mount(Switch, {
    listeners: {
      input,
      change,
    },
  });
  wrapper.trigger('click');

  expect(input).toHaveBeenCalledWith(true);
  expect(change).toHaveBeenCalledWith(true);
});

test('disabled', () => {
  const input = jest.fn();
  const change = jest.fn();
  const wrapper = mount(Switch, {
    listeners: {
      input,
      change,
    },
    propsData: {
      disabled: true,
    },
  });
  wrapper.trigger('click');

  expect(input).toHaveBeenCalledTimes(0);
  expect(change).toHaveBeenCalledTimes(0);
});

test('active-value & inactive-value prop', () => {
  const input = jest.fn();
  const change = jest.fn();
  const wrapper = mount(Switch, {
    propsData: {
      value: '1',
      activeValue: '1',
      inactiveValue: '2',
    },
    listeners: {
      input,
      change,
    },
  });

  wrapper.trigger('click');

  expect(input).toHaveBeenCalledWith('2');
  expect(change).toHaveBeenCalledWith('2');
});

test('inactive-color prop', () => {
  const wrapper = mount(Switch, {
    propsData: {
      value: '2',
      inactiveValue: '2',
      inactiveColor: 'black',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('size prop', () => {
  const wrapper = mount(Switch, {
    propsData: {
      size: 20,
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('click event', () => {
  const click = jest.fn();
  const wrapper = mount(Switch, {
    listeners: {
      click,
    },
  });

  wrapper.trigger('click');

  expect(click).toHaveBeenCalledTimes(1);
});
