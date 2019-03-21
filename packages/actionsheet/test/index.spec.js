import { mount } from '../../../test/utils';
import Actionsheet from '..';

test('callback events', () => {
  const callback = jest.fn();
  const onInput = jest.fn();
  const onCancel = jest.fn();
  const onSelect = jest.fn();

  const actions = [
    { name: 'Option', callback },
    { name: 'Option', disabled: true }
  ];

  const wrapper = mount(Actionsheet, {
    propsData: {
      value: true,
      actions,
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

  expect(callback).toHaveBeenCalled();
  expect(onCancel).toHaveBeenCalled();
  expect(onInput).toHaveBeenCalledWith(false);
  expect(onSelect).toHaveBeenCalledWith(actions[0], 0);
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
