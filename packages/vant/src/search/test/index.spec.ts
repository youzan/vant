import { Search } from '..';
import { mount } from '../../../test';
import type { SearchInstance } from '../types';

test('should emit update:modelValue event when input value changed', () => {
  const onUpdateModelValue = vi.fn();
  const wrapper = mount(Search, {
    props: {
      'onUpdate:modelValue': onUpdateModelValue,
    },
  });

  const input = wrapper.find('input');
  input.element.value = '1';
  input.trigger('input');

  expect(onUpdateModelValue).toHaveBeenCalledTimes(1);
  expect(onUpdateModelValue).toHaveBeenCalledWith('1');
});

test('should emit cancel event when cancel button click is clicked', () => {
  const wrapper = mount(Search, {
    props: {
      value: 'test',
      showAction: true,
    },
  });

  const cancel = wrapper.find('.van-search__action');
  cancel.trigger('click');

  expect(wrapper.emitted('cancel')).toHaveLength(1);
  expect(wrapper.emitted('update:modelValue')![0]).toEqual(['']);
});

test('should not emit cancel event when using action slot', () => {
  const wrapper = mount(Search, {
    props: {
      value: 'test',
      showAction: true,
    },
    slots: {
      action: () => 'Custom Action',
    },
  });

  const cancel = wrapper.find('.van-search__action');
  cancel.trigger('click');

  expect(wrapper.emitted('cancel')).toBeFalsy();
});

test('should emit search event when enter key is pressed', () => {
  const wrapper = mount(Search);

  const input = wrapper.find('input');
  input.trigger('keypress.enter');
  input.trigger('keypress.a');

  expect(wrapper.emitted('search')).toHaveLength(1);
});

test('should render label slot correctly', () => {
  const wrapper = mount(Search, {
    slots: {
      label: () => 'Custom Label',
    },
  });

  expect(wrapper.find('.van-search__label').html()).toMatchSnapshot();
});

test('should render left slot correctly', () => {
  const wrapper = mount(Search, {
    slots: {
      left: () => 'Custom Left Content',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render left icon when using left-icon prop', () => {
  const wrapper = mount(Search, {
    props: {
      leftIcon: 'setting-o',
    },
  });

  expect(wrapper.find('.van-field__left-icon').html()).toMatchSnapshot();
});

test('should render right icon when using right-icon prop', () => {
  const wrapper = mount(Search, {
    props: {
      rightIcon: 'setting-o',
    },
  });

  expect(wrapper.find('.van-field__right-icon').html()).toMatchSnapshot();
});

test('should render right-icon slot correctly', () => {
  const wrapper = mount(Search, {
    slots: {
      'right-icon': () => 'Custom Right Icon',
    },
  });

  expect(wrapper.find('.van-field__right-icon').html()).toMatchSnapshot();
});

test('should render action text when using action-text prop', () => {
  const wrapper = mount(Search, {
    props: {
      actionText: 'Custom Text',
      showAction: true,
    },
  });

  expect(wrapper.find('.van-search__action').html()).toMatchSnapshot();
});

test('should call input.focus when vm.focus is called', () => {
  const wrapper = mount(Search);
  const onFocus = vi.fn();
  wrapper.find('input').element.focus = onFocus;

  (wrapper.vm as SearchInstance).focus();
  expect(onFocus).toHaveBeenCalledTimes(1);
});

test('should call input.blur when vm.blur is called', () => {
  const wrapper = mount(Search);
  const onBlur = vi.fn();
  wrapper.find('input').element.blur = onBlur;

  (wrapper.vm as SearchInstance).blur();
  expect(onBlur).toHaveBeenCalledTimes(1);
});

test('should render id prop correctly', async () => {
  const wrapper = mount(Search, {
    props: {
      label: 'Label',
      id: 'my-id',
    },
  });

  expect(wrapper.find('input').attributes('id')).toEqual('my-id');
  expect(wrapper.find('label').attributes('for')).toEqual('my-id');
});

test('should allow to set autocomplete attribute', () => {
  const wrapper = mount(Search, {
    props: {
      autocomplete: 'on',
    },
  });
  expect(wrapper.find('input').element.getAttribute('autocomplete')).toEqual(
    'on',
  );
});

test('should render input name when using name prop', () => {
  const wrapper = mount(Search, {
    props: {
      name: 'foo',
    },
  });
  expect(wrapper.find('input').element.getAttribute('name')).toEqual('foo');
});

test('should emit clickLeftIcon event after clicking the left icon', async () => {
  const wrapper = mount(Search, {
    props: {
      leftIcon: 'foo',
    },
  });

  await wrapper.find('.van-field__left-icon').trigger('click');
  expect(wrapper.emitted('clickLeftIcon')).toHaveLength(1);
});

test('should emit clickRightIcon event after clicking the right icon', async () => {
  const wrapper = mount(Search, {
    props: {
      rightIcon: 'foo',
    },
  });

  await wrapper.find('.van-field__right-icon').trigger('click');
  expect(wrapper.emitted('clickRightIcon')).toHaveLength(1);
});
