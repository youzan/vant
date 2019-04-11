import Rate from '..';
import { mount, triggerDrag } from '../../../test/utils';

test('change event', () => {
  const onInput = jest.fn();
  const onChange = jest.fn();

  const wrapper = mount(Rate, {
    context: {
      on: {
        input: onInput,
        change: onChange
      }
    }
  });
  const item4 = wrapper.findAll('.van-rate__icon').at(3);

  item4.trigger('click');
  expect(onInput).toHaveBeenCalledWith(4);
  expect(onChange).toHaveBeenCalledWith(4);
});

test('allow half', () => {
  const onInput = jest.fn();
  const onChange = jest.fn();

  const wrapper = mount(Rate, {
    propsData: {
      allowHalf: true
    },
    context: {
      on: {
        input: onInput,
        change: onChange
      }
    }
  });
  const item4 = wrapper.findAll('.van-rate__icon--half').at(3);

  item4.trigger('click');
  expect(onInput).toHaveBeenCalledWith(3.5);
  expect(onChange).toHaveBeenCalledWith(3.5);
});

test('disabled', () => {
  const onInput = jest.fn();
  const onChange = jest.fn();

  const wrapper = mount(Rate, {
    propsData: {
      disabled: true
    },
    context: {
      on: {
        input: onInput,
        change: onChange
      }
    }
  });
  const item4 = wrapper.findAll('.van-rate__item').at(3);

  item4.trigger('click');
  expect(onInput).toHaveBeenCalledTimes(0);
  expect(onChange).toHaveBeenCalledTimes(0);
});

test('touchmove', () => {
  const onChange = jest.fn();
  const wrapper = mount(Rate, {
    context: {
      on: {
        change: onChange
      }
    }
  });
  triggerDrag(wrapper, 100, 0);

  const icons = wrapper.findAll('.van-icon');
  document.elementFromPoint = function (x) {
    const index = Math.round(x / 20);
    if (index < icons.length) {
      return icons.at(index).element;
    }
  };

  triggerDrag(wrapper, 100, 0);
  expect(onChange).toHaveBeenNthCalledWith(1, 2);
  expect(onChange).toHaveBeenNthCalledWith(2, 3);
  expect(onChange).toHaveBeenNthCalledWith(3, 4);
});
