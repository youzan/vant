import { Field } from '..';
import { mount, later } from '../../../test';

test('should emit "update:modelValue" event when after inputting', () => {
  const wrapper = mount(Field);
  const input = wrapper.find('input');

  input.element.value = '1';
  input.trigger('input');
  expect(wrapper.emitted('update:modelValue')[0][0]).toEqual('1');
});

test('should emit click-input event when input is clicked', () => {
  const wrapper = mount(Field);
  wrapper.find('input').trigger('click');
  expect(wrapper.emitted('click-input')[0][0]).toBeTruthy();
});

test('should emit click-input event when using input slot', () => {
  const wrapper = mount(Field, {
    slots: {
      input: () => 'Custom Input',
    },
  });

  wrapper.find('.van-field__control').trigger('click');
  expect(wrapper.emitted('click-input')[0][0]).toBeTruthy();
});

test('should emit click-left-icon event when left icon is clicked', () => {
  const wrapper = mount(Field, {
    props: {
      leftIcon: 'contact',
    },
  });

  wrapper.find('.van-field__left-icon').trigger('click');
  expect(wrapper.emitted('click-left-icon')[0][0]).toBeTruthy();
});

test('should emit click-right-icon event when right icon is clicked', () => {
  const wrapper = mount(Field, {
    props: {
      rightIcon: 'search',
    },
  });

  wrapper.find('.van-field__right-icon').trigger('click');
  expect(wrapper.emitted('click-right-icon')[0][0]).toBeTruthy();
});

test('should format input value when type is number', () => {
  const wrapper = mount(Field, {
    props: {
      type: 'number',
      modelValue: '',
    },
  });

  const input = wrapper.find('input');

  input.element.value = '1';
  input.trigger('input');
  expect(wrapper.emitted('update:modelValue')[0][0]).toEqual('1');

  input.element.value = '1.2.';
  input.trigger('input');
  expect(wrapper.emitted('update:modelValue')[1][0]).toEqual('1.2');

  input.element.value = '123abc';
  input.trigger('input');
  expect(wrapper.emitted('update:modelValue')[2][0]).toEqual('123');
});

test('should format input value when type is digit', () => {
  const wrapper = mount(Field, {
    props: {
      type: 'digit',
      modelValue: '',
    },
  });

  const input = wrapper.find('input');

  input.element.value = '1';
  input.trigger('input');
  expect(wrapper.emitted('update:modelValue')[0][0]).toEqual('1');

  input.element.value = '1.';
  input.trigger('input');
  expect(wrapper.emitted('update:modelValue')[1][0]).toEqual('1');

  input.element.value = '123abc';
  input.trigger('input');
  expect(wrapper.emitted('update:modelValue')[2][0]).toEqual('123');
});

test('should render textarea when type is textarea', async () => {
  const wrapper = mount(Field, {
    props: {
      type: 'textarea',
      autosize: true,
    },
  });

  await later();
  expect(wrapper.html()).toMatchSnapshot();
});

test('should autosize textarea field', async () => {
  const wrapper = mount(Field, {
    props: {
      type: 'textarea',
      autosize: {},
    },
  });

  const value = '1'.repeat(20);
  const textarea = wrapper.find('.van-field__control');

  await wrapper.setProps({ modelValue: value });
  expect(textarea.element.value).toEqual(value);
});

test('should allow autosize prop be be an object', async () => {
  window.scrollTo = jest.fn();

  const wrapper = mount(Field, {
    props: {
      type: 'textarea',
      autosize: {
        maxHeight: 100,
        minHeight: 50,
      },
    },
  });

  const textarea = wrapper.find('.van-field__control');

  await later();
  expect(textarea.style.height).toEqual('50px');
});

test('should call input.focus when vm.focus is called', () => {
  const wrapper = mount(Field);
  const onFocus = jest.fn();
  wrapper.find('input').element.focus = onFocus;

  wrapper.vm.focus();
  expect(onFocus).toHaveBeenCalledTimes(1);
});

test('should call input.blur when vm.blur is called', () => {
  const wrapper = mount(Field);
  const onBlur = jest.fn();
  wrapper.find('input').element.blur = onBlur;

  wrapper.vm.blur();
  expect(onBlur).toHaveBeenCalledTimes(1);
});

test('should limit maxlength of input value when using maxlength prop', async () => {
  const wrapper = mount(Field, {
    props: {
      type: 'number',
      maxlength: 3,
      modelValue: 1234,
    },
  });

  const input = wrapper.find('input');
  expect(input.element.value).toEqual('123');

  input.element.value = 1234;
  input.trigger('input');
  expect(input.element.value).toEqual('123');
  expect(wrapper.emitted('update:modelValue')[0][0]).toEqual('123');
  await wrapper.setProps({ modelValue: '123' });

  // see: https://github.com/youzan/vant/issues/7265
  input.element.value = 1423;
  input.trigger('input');
  expect(input.element.value).toEqual('123');
});

test('should render clear icon when using clearable prop', async () => {
  const wrapper = mount(Field, {
    props: {
      clearable: true,
      modelValue: 'test',
    },
  });

  expect(wrapper.find('.van-field__clear').exists()).toBeFalsy();
  const input = wrapper.find('input');
  await input.trigger('focus');
  expect(wrapper.find('.van-field__clear').exists()).toBeTruthy();

  wrapper.find('.van-field__clear').trigger('touchstart');
  expect(wrapper.emitted('update:modelValue')[0][0]).toEqual('');
  expect(wrapper.emitted('clear')[0][0]).toBeTruthy();
});

test('should always render clear icon when clear-trigger prop is always', () => {
  const wrapper = mount(Field, {
    props: {
      clearable: true,
      modelValue: 'test',
      clearTrigger: 'always',
    },
  });

  expect(wrapper.find('.van-field__clear').exists()).toBeTruthy();
});

test('should render input slot correctly', () => {
  const wrapper = mount(Field, {
    slots: {
      input: () => 'Custom Input',
    },
  });

  expect(wrapper.find('.van-field__control').html()).toMatchSnapshot();
});

test('should render label slot correctly', () => {
  const wrapper = mount(Field, {
    slots: {
      label: () => 'Custom Label',
    },
  });

  expect(wrapper.find('.van-field__label').html()).toMatchSnapshot();
});

test('should render extra slot correctly', () => {
  const wrapper = mount(Field, {
    slots: {
      extra: () => 'Extra',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should change cell size when using size prop', () => {
  const wrapper = mount(Field, {
    props: {
      size: 'large',
    },
  });
  expect(wrapper.classes()).toContain('van-cell--large');
});

test('should allow to set label width with unit', () => {
  const wrapper = mount(Field, {
    props: {
      label: 'Label',
      labelWidth: '10rem',
    },
  });

  const label = wrapper.find('.van-field__label').element;
  expect(label.style.width).toEqual('10rem');
});

test('should allow to set label width without unit', () => {
  const wrapper = mount(Field, {
    props: {
      label: 'Label',
      labelWidth: 100,
    },
  });

  const label = wrapper.find('.van-field__label').element;
  expect(label.style.width).toEqual('100px');
});

test('should render label class name when using label-class prop', () => {
  const wrapper = mount(Field, {
    props: {
      label: 'Label',
      labelClass: 'custom-class',
    },
  });

  expect(wrapper.find('.van-field__label').classes()).toContain('custom-class');
});

test('should change arrow direction when using arrow-direction prop', () => {
  const wrapper = mount(Field, {
    props: {
      isLink: true,
      arrowDirection: 'up',
    },
  });
  expect(wrapper.find('.van-icon-arrow-up').exists()).toBeTruthy();
});

test('should allow to format value with formatter prop', () => {
  const wrapper = mount(Field, {
    props: {
      modelValue: 'abc123',
      formatter: (value) => value.replace(/\d/g, ''),
    },
  });

  expect(wrapper.emitted('update:modelValue')[0][0]).toEqual('abc');

  const input = wrapper.find('input');
  input.element.value = '123efg';
  input.trigger('input');
  expect(wrapper.emitted('update:modelValue')[1][0]).toEqual('efg');
});

test('should trigger format after blurring when format-trigger prop is blur', async () => {
  const wrapper = mount(Field, {
    props: {
      modelValue: 'abc123',
      formatTrigger: 'onBlur',
      formatter: (value) => value.replace(/\d/g, ''),
    },
  });

  expect(wrapper.emitted('update:modelValue')[0][0]).toEqual('abc');
  await wrapper.setProps({ modelValue: 'abc' });

  const input = wrapper.find('input');
  input.element.value = '123efg';
  input.trigger('input');
  expect(wrapper.emitted('update:modelValue')[1][0]).toEqual('123efg');
  await wrapper.setProps({ modelValue: '123efg' });

  input.trigger('blur');
  expect(wrapper.emitted('update:modelValue')[2][0]).toEqual('efg');
});

test('should render word limit correctly', () => {
  const wrapper = mount(Field, {
    props: {
      modelValue: 'foo',
      maxlength: 3,
      showWordLimit: true,
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render word limit correctly when modelValue is undefined', () => {
  const wrapper = mount(Field, {
    props: {
      modelValue: undefined,
      maxlength: 3,
      showWordLimit: true,
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render word limit correctly when modelValue is null', () => {
  const wrapper = mount(Field, {
    props: {
      modelValue: undefined,
      maxlength: 3,
      showWordLimit: true,
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render input name when using name prop', () => {
  const wrapper = mount(Field, {
    props: {
      name: 'foo',
    },
  });
  expect(wrapper.find('input').element.getAttribute('name')).toEqual('foo');
});

test('should allow to destroy field', () => {
  mount(Field).unmount();
});

test('should render colon when using colon prop', () => {
  const wrapper = mount(Field, {
    props: {
      label: 'foo',
      colon: true,
    },
  });
  expect(wrapper.find('.van-field__label').html()).toMatchSnapshot();
});

test('should blur search input after pressing enter', async () => {
  const wrapper = mount(Field, {
    props: {
      type: 'search',
    },
  });

  const onBlur = jest.fn();
  wrapper.find('input').element.blur = onBlur;
  await wrapper.find('input').trigger('keypress.enter');
  expect(onBlur).toHaveBeenCalledTimes(1);
});

test('should format value after mounted if initial modelValue is null', () => {
  const wrapper = mount(Field, {
    props: {
      modelValue: null,
    },
  });

  expect(wrapper.find('input').element.value).toEqual('');
  expect(wrapper.emitted('update:modelValue')[0][0]).toEqual('');
});

test('should allow to set autocomplete attribute', () => {
  const wrapper = mount(Field, {
    props: {
      autocomplete: 'on',
    },
  });
  expect(wrapper.find('input').element.getAttribute('autocomplete')).toEqual(
    'on'
  );
});

test('should change clear icon when using clear-icon prop', async () => {
  const wrapper = mount(Field, {
    props: {
      clearable: true,
      clearIcon: 'cross',
      modelValue: 'test',
    },
  });

  const input = wrapper.find('input');
  await input.trigger('focus');
  expect(wrapper.find('.van-field__clear').html()).toMatchSnapshot();
});

test('should render autofocus attribute to input when using autofocus prop', async () => {
  const wrapper = mount(Field, {
    props: {
      autofocus: true,
    },
  });

  const input = wrapper.find('input');
  expect(input.element.hasAttributes('autofocus')).toBeTruthy();
});

test('should render id prop correctly', async () => {
  const wrapper = mount(Field, {
    props: {
      label: 'Label',
      id: 'my-id',
    },
  });

  expect(wrapper.find('input').attributes('id')).toEqual('my-id');
  expect(wrapper.find('label').attributes('for')).toEqual('my-id');
});

test('should render error-message slot correctly', async () => {
  const wrapper = mount(Field, {
    props: {
      errorMessage: 'error',
    },
    slots: {
      'error-message': ({ message }) => `Custom ${message}`,
    },
  });

  expect(wrapper.find('.van-field__error-message').html()).toMatchSnapshot();
});
