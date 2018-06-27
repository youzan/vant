import Field from '../';
import { mount, later } from '../../../test/utils';

test('input event', () => {
  const wrapper = mount(Field);
  const input = wrapper.find('input');

  input.element.value = '1';
  input.trigger('input');
  expect(wrapper.emitted('input')[0][0]).toEqual('1');
});

test('click icon event', () => {
  const onIconClick = jest.fn();
  const wrapper = mount(Field, {
    propsData: {
      value: 'a',
      icon: 'search',
      onIconClick
    }
  });

  wrapper.find('.van-field__icon').trigger('click');
  expect(wrapper.emitted('click-icon')).toBeTruthy();
  expect(onIconClick.mock.calls.length).toBe(1);
});

test('keypress event', () => {
  const wrapper = mount(Field, {
    propsData: {
      value: '',
      type: 'number'
    }
  });

  const fn = jest.fn();
  const { calls } = fn.mock;
  const press = keyCode => wrapper.vm.onKeypress({
    keyCode,
    preventDefault: fn
  });

  press(0);
  expect(calls.length).toBe(1);

  press(50);
  expect(calls.length).toBe(1);

  wrapper.setProps({ value: '0.1' });
  press(46);
  expect(calls.length).toBe(2);

  wrapper.setProps({ type: 'text' });
  press(0);
  expect(calls.length).toBe(2);
});

test('render textarea', async() => {
  const wrapper = mount(Field, {
    propsData: {
      type: 'textarea',
      autosize: true
    }
  });

  await later();
  expect(wrapper).toMatchSnapshot();
});

test('autosize textarea field', () => {
  const wrapper = mount(Field, {
    propsData: {
      type: 'textarea',
      autosize: {}
    }
  });

  const value = '1'.repeat(20);
  const textarea = wrapper.find('.van-field__control');

  wrapper.setProps({ value });
  expect(textarea.element.value).toEqual(value);
});

test('autosize object', async() => {
  const wrapper = mount(Field, {
    propsData: {
      type: 'textarea',
      autosize: {
        maxHeight: 100,
        minHeight: 50
      }
    }
  });

  const textarea = wrapper.find('.van-field__control');

  await later();
  expect(textarea.element.style.height).toEqual(('50px'));
});

test('blur method', () => {
  const fn = jest.fn();
  const wrapper = mount(Field);

  wrapper.vm.$on('blur', fn);
  wrapper.find('input').element.focus();
  wrapper.vm.blur();

  expect(fn.mock.calls.length).toEqual(1);
});
