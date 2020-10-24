import Stepper from '..';
import { mount, later } from '../../../test';

test('disabled stepper', () => {
  const wrapper = mount(Stepper, {
    propsData: {
      disabled: true,
    },
  });
  expect(wrapper).toMatchSnapshot();
});

test('disable stepper input', () => {
  const wrapper = mount(Stepper, {
    propsData: {
      disableInput: true,
    },
  });
  expect(wrapper).toMatchSnapshot();
});

test('disable button', async () => {
  const wrapper = mount(Stepper, {
    propsData: {
      value: 5,
    },
  });

  const plus = wrapper.find('.van-stepper__plus');
  const minus = wrapper.find('.van-stepper__minus');

  minus.trigger('click');

  expect(wrapper.emitted('overlimit')).toBeFalsy();
  expect(wrapper.emitted('minus')).toBeTruthy();
  expect(wrapper.emitted('change')[0]).toEqual([4, { name: '' }]);

  wrapper.setProps({
    disablePlus: true,
    disableMinus: true,
  });

  await later();

  minus.trigger('click');
  expect(wrapper.emitted('overlimit')[0][0]).toBe('minus');
  plus.trigger('click');
  expect(wrapper.emitted('overlimit')[1][0]).toBe('plus');
});

test('click button', () => {
  const wrapper = mount(Stepper, {
    propsData: {
      value: 1,
      max: 2,
    },
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

test('long press', async () => {
  const wrapper = mount(Stepper, {
    propsData: {
      value: 1,
    },
  });

  const plus = wrapper.find('.van-stepper__plus');

  plus.trigger('touchstart');
  plus.trigger('touchend');
  plus.trigger('click');

  expect(wrapper.emitted('input')[0][0]).toEqual(2);

  plus.trigger('touchstart');
  await later(1000);
  plus.trigger('touchend');
  expect(wrapper.emitted('input')).toEqual([[2], [3], [4]]);
});

test('disable long press', async () => {
  const wrapper = mount(Stepper, {
    propsData: {
      value: 1,
      longPress: false,
    },
  });

  const plus = wrapper.find('.van-stepper__plus');
  plus.trigger('touchstart');
  await later(800);
  plus.trigger('touchend');

  expect(wrapper.emitted('input')).toBeFalsy();
});

test('filter value during user input', () => {
  const wrapper = mount(Stepper, {
    propsData: {
      value: 1,
    },
  });

  const input = wrapper.find('.van-stepper__input');
  input.element.value = '';
  input.trigger('input');
  expect(wrapper.emitted('input')[0][0]).toEqual('');

  input.element.value = 'a';
  input.trigger('input');
  expect(input.element.value).toEqual('');
  expect(wrapper.emitted('input')[1]).toBeFalsy();

  input.element.value = '2';
  input.trigger('input');
  expect(input.element.value).toEqual('2');
  expect(wrapper.emitted('input')[1][0]).toEqual('2');
});

test('shoud watch value and format it', () => {
  const wrapper = mount(Stepper, {
    propsData: {
      value: 1,
      max: 5,
    },
  });

  wrapper.setData({ value: 10 });
  expect(wrapper.emitted('input')[0][0]).toEqual(5);
});

test('only allow interger', () => {
  const wrapper = mount(Stepper, {
    propsData: {
      value: 1,
      integer: true,
    },
  });

  const input = wrapper.find('input');
  input.element.value = '1.2';
  input.trigger('input');
  input.trigger('blur');

  expect(wrapper.emitted('input')[0][0]).toEqual('1');
  expect(wrapper.emitted('input')[1][0]).toEqual(1);
});

test('input invalid value and blur', () => {
  const wrapper = mount(Stepper, {
    propsData: {
      value: '',
    },
  });

  const input = wrapper.find('input');
  input.element.value = '.';
  input.trigger('input');
  input.trigger('blur');

  expect(wrapper.emitted('input').pop()).toEqual([1]);
});

test('stepper focus', () => {
  const wrapper = mount(Stepper, {
    propsData: {
      disableInput: true,
    },
  });
  const input = wrapper.find('input');

  input.trigger('focus');
  expect(wrapper.emitted('focus')).toBeFalsy();

  wrapper.setProps({ disableInput: false });
  input.trigger('focus');
  expect(wrapper.emitted('focus')).toBeTruthy();
});

test('stepper blur', () => {
  const wrapper = mount(Stepper, {
    propsData: {
      value: 5,
      min: 3,
    },
  });

  wrapper.vm.$on('input', (value) => {
    wrapper.setProps({ value });
  });

  const input = wrapper.find('input');
  input.element.value = '';
  input.trigger('input');
  expect(wrapper.emitted('input')[0][0]).toEqual('');

  input.trigger('blur');
  expect(wrapper.emitted('input')[1][0]).toEqual(3);
  expect(wrapper.emitted('blur')).toBeTruthy();
});

test('input-width prop', () => {
  const wrapper = mount(Stepper, {
    propsData: {
      inputWidth: '10rem',
    },
  });
  expect(wrapper).toMatchSnapshot();
});

test('button-size prop', () => {
  const wrapper = mount(Stepper, {
    propsData: {
      buttonSize: '2rem',
    },
  });
  expect(wrapper).toMatchSnapshot();
});

test('async-change prop', () => {
  const wrapper = mount(Stepper, {
    propsData: {
      value: 1,
      asyncChange: true,
    },
  });

  const plus = wrapper.find('.van-stepper__plus');
  plus.trigger('click');

  expect(wrapper.emitted('input')[0][0]).toEqual(2);
  expect(wrapper.emitted('change')[0][0]).toEqual(2);

  const input = wrapper.find('input');
  input.element.value = '3';
  input.trigger('input');

  expect(wrapper.emitted('input')[1][0]).toEqual('3');
  expect(wrapper.emitted('change')[1][0]).toEqual('3');
});

test('min value is 0', () => {
  const wrapper = mount(Stepper, {
    propsData: {
      value: 1,
      min: 0,
    },
  });

  const input = wrapper.find('input');
  input.element.value = '';
  input.trigger('input');
  input.trigger('blur');

  expect(input.element.value).toEqual('0');
});

test('show-plus & show-minus props', () => {
  const wrapper = mount(Stepper, {
    propsData: {
      showPlus: false,
      showMinus: false,
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('decimal-length prop', () => {
  const wrapper = mount(Stepper, {
    propsData: {
      value: 1,
      step: 0.2,
      decimalLength: 2,
    },
  });

  expect(wrapper.emitted('input')[0][0]).toEqual('1.00');

  const plus = wrapper.find('.van-stepper__plus');
  plus.trigger('click');
  expect(wrapper.emitted('input')[1][0]).toEqual('1.20');
});

test('should limit decimal-length when input', () => {
  const wrapper = mount(Stepper, {
    propsData: {
      value: 1,
      step: 0.2,
      decimalLength: 1,
    },
  });

  const input = wrapper.find('input');
  input.element.value = '1.25';
  input.trigger('input');

  expect(input.element.value).toEqual('1.2');
});

test('name prop', () => {
  const wrapper = mount(Stepper);

  const plus = wrapper.find('.van-stepper__plus');

  plus.trigger('click');
  expect(wrapper.emitted('change')[0][1]).toEqual({ name: '' });

  wrapper.setProps({ name: 'name' });
  plus.trigger('click');
  expect(wrapper.emitted('change')[1][1]).toEqual({ name: 'name' });
});

test('change min and max', async () => {
  const wrapper = mount(Stepper, {
    propsData: {
      value: 1,
    },
  });

  wrapper.setProps({
    min: 10,
  });

  await later();

  expect(wrapper.emitted('input')[0][0]).toEqual(10);

  wrapper.setProps({
    min: 3,
    max: 8,
  });

  await later();

  expect(wrapper.emitted('input')[1][0]).toEqual(8);
});

test('change decimal-length', async () => {
  const wrapper = mount(Stepper, {
    propsData: {
      value: 1.33,
    },
  });

  wrapper.setProps({
    decimalLength: 1,
  });

  await later();

  expect(wrapper.emitted('input')[0][0]).toEqual('1.3');
});

test('change integer', async () => {
  const wrapper = mount(Stepper, {
    propsData: {
      value: 1.33,
    },
  });

  wrapper.setProps({
    integer: true,
  });

  await later();

  expect(wrapper.emitted('input')[0][0]).toEqual(1);
});

test('placeholder prop', () => {
  const wrapper = mount(Stepper, {
    propsData: {
      placeholder: 'foo',
    },
  });
  expect(wrapper.find('.van-stepper__input')).toMatchSnapshot();
});

test('allow-empty prop', () => {
  const wrapper = mount(Stepper, {
    propsData: {
      value: '',
      allowEmpty: true,
    },
  });

  const input = wrapper.find('input');
  input.trigger('blur');
  expect(wrapper.emitted('input')).toBeFalsy();

  wrapper.setProps({ allowEmpty: false });
  input.trigger('blur');
  expect(wrapper.emitted('input')[0][0]).toEqual(1);
});
