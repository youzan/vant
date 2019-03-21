import Search from '..';
import { mount } from '../../../test/utils';

test('listen input event', () => {
  const onInput = jest.fn();
  const wrapper = mount(Search, {
    context: {
      on: {
        input: onInput
      }
    }
  });

  const input = wrapper.find('input');
  input.element.value = '1';
  input.trigger('input');

  expect(onInput).toBeCalledWith('1');
});

test('cancel search', () => {
  const onInput = jest.fn();
  const onCancel = jest.fn();

  const wrapper = mount(Search, {
    propsData: {
      value: 'test',
      showAction: true
    },
    context: {
      on: {
        input: onInput,
        cancel: onCancel
      }
    }
  });

  const cancel = wrapper.find('.van-search__action div');
  cancel.trigger('click');

  expect(onInput).toBeCalledWith('');
  expect(onCancel).toBeCalled();
});

test('emit a search event', () => {
  const onSearch = jest.fn();
  const onKeypress = jest.fn();

  const wrapper = mount(Search, {
    context: {
      on: {
        search: onSearch,
        keypress: onKeypress
      }
    }
  });

  const input = wrapper.find('input');
  input.trigger('keypress.enter');
  input.trigger('keypress.a');

  expect(onSearch).toBeCalled();
  expect(onKeypress).toBeCalled();
});

test('render label slot', () => {
  const wrapper = mount(Search, {
    scopedSlots: {
      label() {
        return 'Custom Label';
      }
    }
  });

  expect(wrapper).toMatchSnapshot();
});
