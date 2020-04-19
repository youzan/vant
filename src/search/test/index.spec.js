import Search from '..';
import { mount } from '../../../test';

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
    propsData: {
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
    scopedSlots: {
      label: () => 'Custom Label',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('left slot', () => {
  const wrapper = mount(Search, {
    scopedSlots: {
      left: () => 'Custom Left Content',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('left-icon prop', () => {
  const wrapper = mount(Search, {
    propsData: {
      leftIcon: 'setting-o',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('right-icon prop', () => {
  const wrapper = mount(Search, {
    propsData: {
      rightIcon: 'setting-o',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('right-icon slot', () => {
  const wrapper = mount(Search, {
    scopedSlots: {
      'right-icon': () => 'Custom Right Icon',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('action-text prop', () => {
  const wrapper = mount(Search, {
    propsData: {
      actionText: 'Custom Text',
      showAction: true,
    },
  });

  expect(wrapper).toMatchSnapshot();
});
