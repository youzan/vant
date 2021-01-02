import Field from '..';
import { mount, later } from '../../../test';

test('input event', () => {
  const wrapper = mount(Field);
  const input = wrapper.find('input');

  input.element.value = '1';
  input.trigger('input');
  expect(wrapper.emitted('input')[0][0]).toEqual('1');
});

test('click event', () => {
  const wrapper = mount(Field);

  wrapper.trigger('click');
  expect(wrapper.emitted('click')[0][0]).toBeTruthy();
});

test('click-input event', () => {
  const wrapper = mount(Field);

  wrapper.find('input').trigger('click');
  expect(wrapper.emitted('click-input')[0][0]).toBeTruthy();
});

test('click-input event when using input slot', () => {
  const wrapper = mount(Field, {
    slots: {
      input: () => 'Custom Input',
    },
  });

  wrapper.find('.van-field__control').trigger('click');
  expect(wrapper.emitted('click-input')[0][0]).toBeTruthy();
});

test('click-icon event', () => {
  const wrapper = mount(Field, {
    props: {
      value: 'a',
      leftIcon: 'contact',
      rightIcon: 'search',
    },
  });

  wrapper.find('.van-field__left-icon').trigger('click');
  wrapper.find('.van-field__right-icon').trigger('click');
  expect(wrapper.emitted('click').length).toEqual(2);
  expect(wrapper.emitted('click-left-icon')[0][0]).toBeTruthy();
  expect(wrapper.emitted('click-right-icon')[0][0]).toBeTruthy();
});

test('number type', () => {
  const wrapper = mount(Field, {
    props: {
      value: '',
      type: 'number',
    },
  });

  const input = wrapper.find('input');

  input.element.value = '1';
  input.trigger('input');
  expect(wrapper.emitted('input')[0][0]).toEqual('1');

  input.element.value = '1.2.';
  input.trigger('input');
  expect(wrapper.emitted('input')[1][0]).toEqual('1.2');

  input.element.value = '123abc';
  input.trigger('input');
  expect(wrapper.emitted('input')[2][0]).toEqual('123');
});

test('digit type', () => {
  const wrapper = mount(Field, {
    props: {
      value: '',
      type: 'digit',
    },
  });

  const input = wrapper.find('input');

  input.element.value = '1';
  input.trigger('input');
  expect(wrapper.emitted('input')[0][0]).toEqual('1');

  input.element.value = '1.';
  input.trigger('input');
  expect(wrapper.emitted('input')[1][0]).toEqual('1');

  input.element.value = '123abc';
  input.trigger('input');
  expect(wrapper.emitted('input')[2][0]).toEqual('123');
});

test('render textarea', async () => {
  const wrapper = mount(Field, {
    props: {
      type: 'textarea',
      autosize: true,
    },
  });

  await later();
  expect(wrapper.html()).toMatchSnapshot();
});

test('autosize textarea field', () => {
  const wrapper = mount(Field, {
    props: {
      type: 'textarea',
      autosize: {},
    },
  });

  const value = '1'.repeat(20);
  const textarea = wrapper.find('.van-field__control');

  wrapper.setProps({ value });
  expect(textarea.element.value).toEqual(value);
});

test('autosize object', async () => {
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
  expect(textarea.element.style.height).toEqual('50px');
});

test('blur method', () => {
  const fn = jest.fn();
  const wrapper = mount(Field);

  wrapper.vm.$on('blur', fn);
  wrapper.find('input').element.focus();
  wrapper.vm.blur();

  expect(fn).toHaveBeenCalledTimes(1);
});

test('focus method', () => {
  const fn = jest.fn();
  const wrapper = mount(Field);

  wrapper.vm.$on('focus', fn);
  wrapper.vm.focus();

  expect(fn).toHaveBeenCalledTimes(1);
});

test('maxlength', async () => {
  const wrapper = mount(Field, {
    attrs: {
      maxlength: 3,
    },
    props: {
      value: 1234,
      type: 'number',
    },
    listeners: {
      input(value) {
        wrapper && wrapper.setProps({ value });
      },
    },
  });

  const input = wrapper.find('input');
  expect(input.element.value).toEqual('123');

  input.element.value = 1234;
  input.trigger('input');
  expect(input.element.value).toEqual('123');
  expect(wrapper.emitted('input')[0][0]).toEqual('123');

  // see: https://github.com/youzan/vant/issues/7265
  input.element.value = 1423;
  input.trigger('input');
  expect(input.element.value).toEqual('123');
});

test('clearable prop', () => {
  const wrapper = mount(Field, {
    props: {
      value: 'test',
      clearable: true,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
  const input = wrapper.find('input');
  input.trigger('focus');
  expect(wrapper.html()).toMatchSnapshot();

  wrapper.find('.van-field__clear').trigger('touchstart');
  expect(wrapper.emitted('input')[0][0]).toEqual('');
  expect(wrapper.emitted('clear')[0][0]).toBeTruthy();
});

test('clear-trigger prop', () => {
  const wrapper = mount(Field, {
    props: {
      value: 'test',
      clearable: true,
      clearTrigger: 'always',
    },
  });

  expect(wrapper.contains('.van-field__clear')).toBeTruthy();
});

test('render input slot', () => {
  const wrapper = mount(Field, {
    slots: {
      input: () => 'Custom Input',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('render label slot', () => {
  const wrapper = mount(Field, {
    slots: {
      label: () => 'Custom Label',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('render extra slot', () => {
  const wrapper = mount(Field, {
    slots: {
      extra: () => 'Extra',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('size prop', () => {
  const wrapper = mount(Field, {
    props: {
      size: 'large',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('label-width prop with unit', () => {
  const wrapper = mount(Field, {
    props: {
      label: 'Label',
      labelWidth: '10rem',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('label-width prop without unit', () => {
  const wrapper = mount(Field, {
    props: {
      label: 'Label',
      labelWidth: 100,
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('label-class prop', () => {
  const wrapper = mount(Field, {
    props: {
      label: 'Label',
      labelClass: 'custom-label-class',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('arrow-direction prop', () => {
  const wrapper = mount(Field, {
    props: {
      isLink: true,
      arrowDirection: 'up',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('formatter prop', () => {
  const wrapper = mount(Field, {
    props: {
      value: 'abc123',
      formatter: (value) => value.replace(/\d/g, ''),
    },
  });

  expect(wrapper.emitted('input')[0][0]).toEqual('abc');

  const input = wrapper.find('input');
  input.element.value = '123efg';
  input.trigger('input');
  expect(wrapper.emitted('input')[1][0]).toEqual('efg');
});

test('format-trigger prop', () => {
  const wrapper = mount(Field, {
    props: {
      value: 'abc123',
      formatTrigger: 'onBlur',
      formatter: (value) => value.replace(/\d/g, ''),
    },
  });

  wrapper.vm.$on('input', (value) => {
    wrapper.setProps({ value });
  });

  expect(wrapper.emitted('input')[0][0]).toEqual('abc');

  const input = wrapper.find('input');
  input.element.value = '123efg';
  input.trigger('input');
  expect(wrapper.emitted('input')[1][0]).toEqual('123efg');
  input.trigger('blur');
  expect(wrapper.emitted('input')[2][0]).toEqual('efg');
});

test('reach max word-limit', () => {
  const wrapper = mount(Field, {
    props: {
      value: 'foo',
      maxlength: 3,
      showWordLimit: true,
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('reach max word-limit undefined', () => {
  const wrapper = mount(Field, {
    props: {
      value: undefined,
      maxlength: 3,
      showWordLimit: true,
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('reach max word-limit null', () => {
  const wrapper = mount(Field, {
    props: {
      value: null,
      maxlength: 3,
      showWordLimit: true,
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('name prop', () => {
  const wrapper = mount(Field, {
    props: {
      name: 'foo',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('call focus method before mounted', (done) => {
  mount(Field, {
    created() {
      this.focus();
      this.blur();
      done();
    },
  });
});

test('destroy field', () => {
  mount(Field).unmount();
});

test('colon prop', () => {
  const wrapper = mount(Field, {
    props: {
      label: 'foo',
      colon: true,
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should blur search input on enter', () => {
  const wrapper = mount(Field);

  wrapper.find('input').element.focus();
  wrapper.find('input').trigger('keypress.enter');
  expect(wrapper.emitted('blur')).toBeFalsy();

  wrapper.setProps({ type: 'textarea' });
  wrapper.find('textarea').element.focus();
  wrapper.find('textarea').trigger('keypress.enter');
  expect(wrapper.emitted('blur')).toBeFalsy();

  wrapper.setProps({ type: 'search' });
  wrapper.find('input').element.focus();
  wrapper.find('input').trigger('keypress.enter');
  expect(wrapper.emitted('blur')).toBeTruthy();
});

test('value is null', () => {
  const wrapper = mount(Field, {
    props: {
      value: null,
    },
  });

  expect(wrapper.find('input').element.value).toEqual('');
  expect(wrapper.emitted('input')[0][0]).toEqual('');
});
