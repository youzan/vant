import { Field } from '..';
import { mount, later } from '../../../test';

test('should emit "update:modelValue" event when after inputting', () => {
  const wrapper = mount(Field);
  const input = wrapper.find('input');

  input.element.value = '1';
  input.trigger('input');
  expect(wrapper.emitted('update:modelValue')[0][0]).toEqual('1');
});

test('should emit clickInput event when input is clicked', () => {
  const wrapper = mount(Field);
  wrapper.find('input').trigger('click');
  expect(wrapper.emitted('clickInput')[0][0]).toBeTruthy();
});

test('should emit clickInput event when using input slot', () => {
  const wrapper = mount(Field, {
    slots: {
      input: () => 'Custom Input',
    },
  });

  wrapper.find('.van-field__control').trigger('click');
  expect(wrapper.emitted('clickInput')[0][0]).toBeTruthy();
});

test('should emit clickLeftIcon event when left icon is clicked', () => {
  const wrapper = mount(Field, {
    props: {
      leftIcon: 'contact',
    },
  });

  wrapper.find('.van-field__left-icon').trigger('click');
  expect(wrapper.emitted('clickLeftIcon')[0][0]).toBeTruthy();
});

test('should emit clickRightIcon event when right icon is clicked', () => {
  const wrapper = mount(Field, {
    props: {
      rightIcon: 'search',
    },
  });

  wrapper.find('.van-field__right-icon').trigger('click');
  expect(wrapper.emitted('clickRightIcon')[0][0]).toBeTruthy();
});

test('should format input value when type is number', () => {
  const wrapper = mount(Field, {
    props: {
      type: 'number',
      modelValue: '',
    },
  });

  const input = wrapper.find('input');

  input.element.value = '01';
  input.trigger('input');
  expect(wrapper.emitted('update:modelValue')[0][0]).toEqual('01');

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

test('should limit input value based on min and max props', async () => {
  const wrapper = mount(Field, {
    props: {
      type: 'number',
      min: 2,
      max: 10,
      modelValue: '',
    },
  });

  const input = wrapper.find('input');

  // Test input value less than min
  await wrapper.setProps({ modelValue: '1' });
  await input.trigger('blur');
  expect(wrapper.emitted('update:modelValue')[0][0]).toEqual('2');

  // Test input value greater than max
  await wrapper.setProps({ modelValue: '15' });
  await input.trigger('blur');
  expect(wrapper.emitted('update:modelValue')[1][0]).toEqual('10');

  // Test input value within range
  input.element.value = '5';
  input.trigger('input');
  expect(wrapper.emitted('update:modelValue')[2][0]).toEqual('5');
});

test('should not modify the value if it is within the min/max', async () => {
  const wrapper = mount(Field, {
    props: {
      type: 'number',
      min: 2,
      max: 10,
      modelValue: '',
    },
  });

  const input = wrapper.find('input');

  await wrapper.setProps({ modelValue: '2.00' });
  await input.trigger('blur');
  expect(wrapper.emitted('update:modelValue')).toBeFalsy();
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

test('should show required icon when using rules which contain required', async () => {
  const wrapper = mount(Field, {
    props: {
      modelValue: '123',
      label: '123',
      required: 'auto',
      rules: [{ required: false }],
    },
  });

  expect(wrapper.find('.van-field__label--required').exists()).toBeFalsy();
  await wrapper.setProps({ rules: [{ required: true }] });
  expect(wrapper.find('.van-field__label--required').exists()).toBeTruthy();
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
  window.scrollTo = vi.fn();

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
  const onFocus = vi.fn();
  wrapper.find('input').element.focus = onFocus;

  wrapper.vm.focus();
  expect(onFocus).toHaveBeenCalledTimes(1);
});

test('should call input.blur when vm.blur is called', () => {
  const wrapper = mount(Field);
  const onBlur = vi.fn();
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

  // see: https://github.com/vant-ui/vant/issues/7265
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
  expect(wrapper.find('.van-field__word-limit').html()).toMatchSnapshot();
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

  const onBlur = vi.fn();
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
    'on',
  );
});

test('should allow to set enterkeyhint attribute', () => {
  const wrapper = mount(Field, {
    props: {
      enterkeyhint: 'done',
    },
  });
  expect(wrapper.find('input').element.getAttribute('enterkeyhint')).toEqual(
    'done',
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

test('should limit maxlength with emoji correctly', async () => {
  const wrapper = mount(Field, {
    props: {
      maxlength: 3,
      modelValue: '😀😀😀😀',
    },
  });

  const input = wrapper.find('input');
  expect(input.element.value).toEqual('😀😀😀');
});

test('should render word limit with emoji correctly', () => {
  const wrapper = mount(Field, {
    props: {
      modelValue: '😀😀',
      maxlength: 3,
      showWordLimit: true,
    },
  });
  expect(wrapper.find('.van-field__word-limit').html()).toMatchSnapshot();
});

test('should render left icon inside label when label-align is top', () => {
  const wrapper = mount(Field, {
    props: {
      label: 'Label',
      labelAlign: 'top',
      leftIcon: 'success',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render label correctly when dynamically set empty label', async () => {
  const wrapper = mount(Field, {
    props: {
      label: 'abc',
    },
  });

  expect(wrapper.find('.van-field__label').html()).toMatchSnapshot();

  await wrapper.setProps({ label: '' });
  expect(wrapper.find('.van-field__label').exists()).toBeFalsy();
});

test("should not be set label's for attribute when using input slot", async () => {
  const wrapper = mount(Field, {
    props: {
      label: 'abc',
    },
    slots: {
      input: '',
    },
  });

  expect(
    wrapper.find('.van-field__label label').attributes('for'),
  ).toBeUndefined();
});
