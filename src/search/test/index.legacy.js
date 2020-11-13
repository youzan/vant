import Search from '..';
import { mount } from '@vue/test-utils';

test('input event', () => {
  const onInput = jest.fn();
  const wrapper = mount(Search, {
    context: {
      on: {
        input: onInput,
      },
    },
  });

  const input = wrapper.find('input');
  input.element.value = '1';
  input.trigger('input');

  expect(onInput).toHaveBeenCalledWith('1');
});

test('cancel event', () => {
  const onInput = jest.fn();
  const onCancel = jest.fn();

  const wrapper = mount(Search, {
    props: {
      value: 'test',
      showAction: true,
    },
    context: {
      on: {
        input: onInput,
        cancel: onCancel,
      },
    },
  });

  const cancel = wrapper.find('.van-search__action');
  cancel.trigger('click');

  expect(onInput).toHaveBeenCalledWith('');
  expect(onCancel).toHaveBeenCalled();
});

test('search event', () => {
  const onSearch = jest.fn();
  const onKeypress = jest.fn();

  const wrapper = mount(Search, {
    context: {
      on: {
        search: onSearch,
        keypress: onKeypress,
      },
    },
  });

  const input = wrapper.find('input');
  input.trigger('keypress.enter');
  input.trigger('keypress.a');

  expect(onSearch).toHaveBeenCalled();
  expect(onKeypress).toHaveBeenCalled();
});

test('label slot', () => {
  const wrapper = mount(Search, {
    slots: {
      label: () => 'Custom Label',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('left slot', () => {
  const wrapper = mount(Search, {
    slots: {
      left: () => 'Custom Left Content',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('left-icon prop', () => {
  const wrapper = mount(Search, {
    props: {
      leftIcon: 'setting-o',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('right-icon prop', () => {
  const wrapper = mount(Search, {
    props: {
      rightIcon: 'setting-o',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('right-icon slot', () => {
  const wrapper = mount(Search, {
    slots: {
      'right-icon': () => 'Custom Right Icon',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('action-text prop', () => {
  const wrapper = mount(Search, {
    props: {
      actionText: 'Custom Text',
      showAction: true,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
