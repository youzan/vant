import { nextTick } from 'vue';
import { Stepper } from '..';
import { mount, later } from '../../../test';
import { LONG_PRESS_START_TIME } from '../../utils';

test('should disable buttons and input when using disabled prop', () => {
  const wrapper = mount(Stepper, {
    props: {
      disabled: true,
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should make input readonly when using disable-input prop', () => {
  const wrapper = mount(Stepper, {
    props: {
      disableInput: true,
    },
  });
  expect(wrapper.find('input').element.hasAttribute('readonly')).toBeTruthy();
});

test('should emit minus event when clicking the minus button', async () => {
  const wrapper = mount(Stepper, {
    props: {
      modelValue: 2,
    },
  });
  const minus = wrapper.find('.van-stepper__minus');
  await minus.trigger('click');

  expect(wrapper.emitted('overlimit')).toBeFalsy();
  expect(wrapper.emitted('minus')).toBeTruthy();
  expect(wrapper.emitted('change')![0]).toEqual([1, { name: '' }]);
  expect(wrapper.emitted('update:modelValue')![0]).toEqual([1]);
});

test('should emit plus event when clicking the plus button', async () => {
  const wrapper = mount(Stepper, {
    props: {
      modelValue: 2,
    },
  });
  const plus = wrapper.find('.van-stepper__plus');
  await plus.trigger('click');

  expect(wrapper.emitted('overlimit')).toBeFalsy();
  expect(wrapper.emitted('plus')).toBeTruthy();
  expect(wrapper.emitted('change')![0]).toEqual([3, { name: '' }]);
  expect(wrapper.emitted('update:modelValue')![0]).toEqual([3]);
});

test('should emit overlimit event when clicking disabled buttons', async () => {
  const wrapper = mount(Stepper, {
    props: {
      max: 1,
      modelValue: 1,
    },
  });

  const minus = wrapper.find('.van-stepper__minus');
  await minus.trigger('click');
  expect(wrapper.emitted('overlimit')![0]).toEqual(['minus']);

  const plus = wrapper.find('.van-stepper__plus');
  await plus.trigger('click');
  expect(wrapper.emitted('overlimit')![1]).toEqual(['plus']);
});

test('should disable plus button when disable-plus prop is true', async () => {
  const wrapper = mount(Stepper);
  const plus = wrapper.find('.van-stepper__plus');

  expect(plus.classes()).not.toContain('van-stepper__plus--disabled');

  await wrapper.setProps({ disablePlus: true });
  expect(plus.classes()).toContain('van-stepper__plus--disabled');
});

test('should disable minus button when disable-minus prop is true', async () => {
  const wrapper = mount(Stepper, {
    props: {
      modelValue: 2,
    },
  });

  const minus = wrapper.find('.van-stepper__minus');
  expect(minus.classes()).not.toContain('van-stepper__minus--disabled');

  await wrapper.setProps({ disableMinus: true });
  expect(minus.classes()).toContain('van-stepper__minus--disabled');
});

test('should limit max value when using max prop', async () => {
  const wrapper = mount(Stepper, {
    props: {
      max: 2,
      modelValue: 1,
    },
  });

  const plus = wrapper.find('.van-stepper__plus');
  const minus = wrapper.find('.van-stepper__minus');

  await plus.trigger('click');
  await plus.trigger('click');
  await minus.trigger('click');
  await minus.trigger('click');

  expect(wrapper.emitted('update:modelValue')).toEqual([[2], [1]]);
  expect(wrapper.emitted('overlimit')).toEqual([['plus'], ['minus']]);
});

test('should update value after long pressing', async () => {
  const wrapper = mount(Stepper, {
    props: {
      modelValue: 1,
    },
  });

  const plus = wrapper.find('.van-stepper__plus');

  await plus.trigger('touchstart');
  await plus.trigger('touchend');
  await plus.trigger('click');
  expect(wrapper.emitted('update:modelValue')![0]).toEqual([2]);

  await plus.trigger('touchstart');
  await later(LONG_PRESS_START_TIME + 500);
  await plus.trigger('touchend');
  expect(wrapper.emitted('update:modelValue')).toEqual([[2], [3], [4], [5]]);
});

test('should allow to disable long press', async () => {
  const wrapper = mount(Stepper, {
    props: {
      longPress: false,
      modelValue: 1,
    },
  });

  const plus = wrapper.find('.van-stepper__plus');
  await plus.trigger('touchstart');
  await later(800);
  await plus.trigger('touchend');

  expect(wrapper.emitted('update:modelValue')).toBeFalsy();
});

test('should filter invalid value during user input', async () => {
  const wrapper = mount(Stepper, {
    props: {
      modelValue: 1,
    },
  });

  const input = wrapper.find('.van-stepper__input');
  const inputEl = input.element as HTMLInputElement;
  inputEl.value = '';
  await input.trigger('input');
  expect(wrapper.emitted('update:modelValue')![0]).toEqual(['']);

  inputEl.value = 'a';
  await input.trigger('input');
  expect(inputEl.value).toEqual('');
  expect(wrapper.emitted('update:modelValue')![1]).toBeFalsy();

  inputEl.value = '2';
  await input.trigger('input');
  expect(inputEl.value).toEqual('2');
  expect(wrapper.emitted('update:modelValue')![1]).toEqual([2]);
});

test('shoud watch modelValue and format it', async () => {
  const wrapper = mount(Stepper, {
    props: {
      max: 5,
      modelValue: 1,
    },
  });

  await wrapper.setProps({ modelValue: 10 });
  expect(wrapper.emitted('update:modelValue')![0]).toEqual([5]);
});

test('should format value to integer when using integer prop', async () => {
  const wrapper = mount(Stepper, {
    props: {
      integer: true,
      modelValue: 1,
    },
  });

  const input = wrapper.find('input');
  input.element.value = '2.2';
  await input.trigger('input');
  await input.trigger('blur');

  expect(wrapper.emitted('update:modelValue')![0]).toEqual([2]);
});

test('should format value to default value when input is invalid', async () => {
  const wrapper = mount(Stepper, {
    props: {
      modelValue: '',
    },
  });

  const input = wrapper.find('input');
  input.element.value = '.';
  await input.trigger('input');
  await input.trigger('blur');

  expect(wrapper.emitted('update:modelValue')!.pop()).toEqual([1]);
});

test('should emit focus event when input is focused', async () => {
  const wrapper = mount(Stepper, {
    props: {
      disableInput: true,
    },
  });

  const input = wrapper.find('input');
  await input.trigger('focus');
  expect(wrapper.emitted('focus')).toBeFalsy();

  await wrapper.setProps({ disableInput: false });
  await input.trigger('focus');
  expect(wrapper.emitted('focus')).toBeTruthy();
});

test('should format input value when stepper blurred', async () => {
  const wrapper = mount(Stepper, {
    props: {
      min: 3,
      modelValue: 5,
    },
  });

  const input = wrapper.find('input');
  input.element.value = '';
  await input.trigger('input');
  expect(wrapper.emitted('update:modelValue')![0]).toEqual(['']);

  await input.trigger('blur');
  expect(wrapper.emitted('update:modelValue')![1]).toEqual([3]);
  await nextTick();
  expect(wrapper.emitted('blur')).toBeTruthy();
});

test('should not format input value when stepper blurred if set auto-fixed to false', async () => {
  const wrapper = mount(Stepper, {
    props: {
      min: 5,
      max: 8,
      autoFixed: false,
    },
  });

  const input = wrapper.find('input');

  input.element.value = '2';
  await input.trigger('blur');
  expect(wrapper.emitted('update:modelValue')![1]).toEqual([2]);

  input.element.value = '10';
  await input.trigger('blur');
  expect(wrapper.emitted('update:modelValue')![2]).toEqual([10]);
});

test('should update input width when using input-width prop', () => {
  const wrapper = mount(Stepper, {
    props: {
      inputWidth: '10rem',
    },
  });
  expect(wrapper.find('input').style.width).toEqual('10rem');
});

test('should update input height and button size when using button-size prop', () => {
  const wrapper = mount(Stepper, {
    props: {
      buttonSize: '2rem',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should allow to using before-change prop', async () => {
  const wrapper = mount(Stepper, {
    props: {
      modelValue: 1,
      beforeChange: () => false,
    },
  });

  const plus = wrapper.find('.van-stepper__plus');
  await plus.trigger('click');
  expect(wrapper.emitted('update:modelValue')).toBeFalsy();
});

test('should allow min value to be 0', async () => {
  const wrapper = mount(Stepper, {
    props: {
      min: 0,
      modelValue: 1,
    },
  });

  const input = wrapper.find('input');
  input.element.value = '';
  await input.trigger('input');
  await input.trigger('blur');

  expect(input.element.value).toEqual('0');
});

test('should hide plus button when show-plus prop is false', () => {
  const wrapper = mount(Stepper, {
    props: {
      showPlus: false,
    },
  });
  const plus = wrapper.find('.van-stepper__plus');
  expect(plus.isVisible()).toBeFalsy();
});

test('should hide minus button when show-minus prop is false', () => {
  const wrapper = mount(Stepper, {
    props: {
      showMinus: false,
    },
  });
  const minus = wrapper.find('.van-stepper__minus');
  expect(minus.isVisible()).toBeFalsy();
});

test('should hide input when show-input prop is false', () => {
  const wrapper = mount(Stepper, {
    propsData: {
      showInput: false,
    },
  });
  expect(wrapper.find('input').isVisible()).toBeFalsy();
});

test('should limit decimal length when using decimal-length prop', async () => {
  const wrapper = mount(Stepper, {
    props: {
      step: 0.2,
      modelValue: 1,
      decimalLength: 2,
    },
  });
  const plus = wrapper.find('.van-stepper__plus');
  expect(wrapper.emitted('update:modelValue')![0]).toEqual(['1.00']);
  await plus.trigger('click');
  expect(wrapper.emitted('update:modelValue')![1]).toEqual(['1.20']);
});

test('should limit decimal-length when inputting', async () => {
  const wrapper = mount(Stepper, {
    props: {
      step: 0.2,
      modelValue: 1,
      decimalLength: 1,
    },
  });

  const input = wrapper.find('input');
  input.element.value = '1.25';
  await input.trigger('input');

  expect(input.element.value).toEqual('1.2');
});

test('should emit change event with name when using name prop', async () => {
  const wrapper = mount(Stepper);
  const plus = wrapper.find('.van-stepper__plus');

  await plus.trigger('click');
  expect(wrapper.emitted('change')![0]).toEqual([2, { name: '' }]);

  await wrapper.setProps({ name: 'name' });
  await plus.trigger('click');
  expect(wrapper.emitted('change')![1]).toEqual([3, { name: 'name' }]);
});

test('should watch min and max props and format modelValue', async () => {
  const wrapper = mount(Stepper, {
    props: {
      modelValue: 1,
    },
  });

  await wrapper.setProps({ min: 10 });
  expect(wrapper.emitted('update:modelValue')![0]).toEqual([10]);

  await wrapper.setProps({
    min: 3,
    max: 8,
  });
  expect(wrapper.emitted('update:modelValue')![1]).toEqual([8]);
});

test('should watch decimal-length prop and format modelValue', async () => {
  const wrapper = mount(Stepper, {
    props: {
      modelValue: 1.33,
    },
  });
  await wrapper.setProps({ decimalLength: 1 });
  expect(wrapper.emitted('update:modelValue')![0]).toEqual(['1.3']);
});

test('should watch integer prop and format modelValue', async () => {
  const wrapper = mount(Stepper, {
    props: {
      modelValue: 1.33,
    },
  });
  await wrapper.setProps({ integer: true });
  expect(wrapper.emitted('update:modelValue')![0]).toEqual([1]);
});

test('should render placeholder correctly', () => {
  const wrapper = mount(Stepper, {
    props: {
      placeholder: 'foo',
    },
  });
  const input = wrapper.find('.van-stepper__input').element;
  expect(input.getAttribute('placeholder')).toEqual('foo');
});

test('should allow input be to empty when using allow-empty prop', async () => {
  const wrapper = mount(Stepper, {
    props: {
      modelValue: '',
      allowEmpty: true,
    },
  });

  const input = wrapper.find('input');
  await input.trigger('blur');
  expect(wrapper.emitted('update:modelValue')).toBeFalsy();

  await wrapper.setProps({ allowEmpty: false });
  await input.trigger('blur');
  expect(wrapper.emitted('update:modelValue')![0]).toEqual([1]);
});
