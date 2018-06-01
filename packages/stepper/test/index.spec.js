import Stepper from '..';
import { mount } from '@vue/test-utils';

test('disabled stepper', () => {
  const wrapper = mount(Stepper, {
    propsData: {
      disabled: true
    }
  });
  expect(wrapper).toMatchSnapshot();
});

test('disable stepper input', () => {
  const wrapper = mount(Stepper, {
    propsData: {
      disableInput: true
    }
  });
  expect(wrapper).toMatchSnapshot();
});

test('click button', () => {
  const wrapper = mount(Stepper, {
    propsData: {
      value: 1,
      max: 2
    }
  });

  const plus = wrapper.find('.van-stepper__plus');
  const minus = wrapper.find('.van-stepper__minus');

  plus.trigger('click');
  plus.trigger('click');
  minus.trigger('click');
  minus.trigger('click');

  expect(wrapper.emitted('input')).toEqual([[2], [1]]);
  expect(wrapper.emitted('overlimit')).toEqual([['plus'], ['minus']]);
});

test('correct value when value is not correct', () => {
  const wrapper = mount(Stepper, {
    propsData: {
      value: 50,
      max: 30,
      min: 10
    }
  });

  const input = wrapper.find('input');
  input.element.value = 1;
  input.trigger('input');
  input.element.value = 'abc';
  input.trigger('input');
  wrapper.setData({ value: 'abc' });
  input.trigger('input');
  wrapper.setData({ value: '' });
  input.trigger('input');
  wrapper.setData({ value: 40 });
  input.trigger('input');
  wrapper.setData({ value: 30 });
  input.trigger('input');

  expect(wrapper.emitted('input')).toEqual([
    [30],
    [10],
    [''],
    [10],
    [10],
    [30],
    [30]
  ]);
});

test('only allow interger', () => {
  const wrapper = mount(Stepper, {
    propsData: {
      integer: true
    }
  });

  const fn = jest.fn();
  wrapper.vm.onKeypress({
    keyCode: 46,
    preventDefault: fn
  });
  wrapper.vm.onKeypress({
    keyCode: 45,
    preventDefault: fn
  });

  expect(fn.mock.calls.length).toEqual(1);
});
