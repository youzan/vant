import { mount } from '../../../test/utils';
import Actionsheet from '..';

test('callback events', () => {
  const callback = jest.fn();
  const onInput = jest.fn();
  const onCancel = jest.fn();
  const onSelect = jest.fn();

  const wrapper = mount(Actionsheet, {
    propsData: {
      value: true,
      actions: [
        { name: 'Option', callback },
        { name: 'Option', disabled: true }
      ],
      cancelText: 'Cancel'
    },
    context: {
      on: {
        input: onInput,
        cancel: onCancel,
        select: onSelect
      }
    }
  });

  const options = wrapper.findAll('.van-actionsheet__item');
  options.at(0).trigger('click');
  options.at(1).trigger('click');
  wrapper.find('.van-actionsheet__cancel').trigger('click');

  expect(callback.mock.calls.length).toBe(1);
  expect(onCancel.mock.calls.length).toBeTruthy();
  expect(onInput.mock.calls[0][0]).toBeFalsy();
  expect(onSelect.mock.calls[0][0]).toBeTruthy();
  expect(onSelect.mock.calls[0][1]).toBeFalsy();
  expect(wrapper).toMatchSnapshot();
});

test('disable lazy-render', () => {
  const wrapper = mount(Actionsheet, {
    propsData: {
      lazyRender: false,
      actions: [
        { name: 'Option' },
        { name: 'Option' }
      ],
      cancelText: 'Cancel'
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('get container', () => {
  const wrapper = mount(Actionsheet, {
    propsData: {
      value: true,
      getContainer: 'body'
    }
  });

  expect(wrapper.vm.$el.parentNode).toEqual(document.body);
});
