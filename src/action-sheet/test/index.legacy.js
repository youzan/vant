import { mount } from '../../../test';
import ActionSheet from '..';

test('callback events', () => {
  const callback = jest.fn();
  const onInput = jest.fn();
  const onCancel = jest.fn();
  const onSelect = jest.fn();

  const actions = [
    { name: 'Option', callback },
    { name: 'Option', disabled: true },
    { name: 'Option', loading: true },
    { name: 'Option', subname: 'Subname' },
  ];

  const wrapper = mount(ActionSheet, {
    propsData: {
      value: true,
      actions,
      cancelText: 'Cancel',
    },
    context: {
      on: {
        input: onInput,
        cancel: onCancel,
        select: onSelect,
      },
    },
  });

  const options = wrapper.findAll('.van-action-sheet__item');
  options.at(0).trigger('click');
  options.at(1).trigger('click');
  wrapper.find('.van-action-sheet__cancel').trigger('click');

  expect(callback).toHaveBeenCalled();
  expect(onCancel).toHaveBeenCalled();
  expect(onInput).toHaveBeenCalledWith(false);
  expect(onSelect).toHaveBeenCalledWith(actions[0], 0);
  expect(wrapper.html()).toMatchSnapshot();
});
