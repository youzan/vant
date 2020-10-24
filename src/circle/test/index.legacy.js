import Vue from 'vue';
import Circle from '..';
import { mount, later } from '../../../test';

test('speed is 0', async () => {
  const wrapper = mount(Circle, {
    propsData: {
      rate: 50,
      value: 0,
    },
    listeners: {
      input(value) {
        Vue.nextTick(() => {
          wrapper.setProps({ value });
        });
      },
    },
  });

  await later();
  expect(wrapper).toMatchSnapshot();
});

test('animate', async () => {
  const onInput = jest.fn();
  mount(Circle, {
    propsData: {
      rate: 50,
      speed: 100,
    },
    listeners: {
      input: onInput,
    },
  });

  await later(50);
  expect(onInput).toHaveBeenCalled();
  expect(onInput.mock.calls[0][0]).not.toEqual(0);
});

test('size prop', () => {
  const wrapper = mount(Circle, {
    propsData: {
      size: 100,
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('stroke-linecap prop', () => {
  const wrapper = mount(Circle, {
    propsData: {
      strokeLinecap: 'square',
    },
  });

  expect(wrapper).toMatchSnapshot();
});
