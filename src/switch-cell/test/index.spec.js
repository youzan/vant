import SwitchCell from '..';
import { mount } from '../../../test';

test('change event', () => {
  const onChange = jest.fn();
  const wrapper = mount(SwitchCell, {
    context: {
      on: {
        change: onChange,
      },
    },
  });

  wrapper.find('.van-switch').trigger('click');

  expect(onChange).toHaveBeenCalledWith(true);
});

test('border prop', () => {
  const wrapper = mount(SwitchCell, {
    propsData: {
      border: false,
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('cell-size prop', () => {
  const wrapper = mount(SwitchCell, {
    propsData: {
      cellSize: 'large',
    },
  });

  expect(wrapper).toMatchSnapshot();
});
