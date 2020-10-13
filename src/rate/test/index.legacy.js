import Rate from '..';
import { mount, triggerDrag } from '../../../test';

function mockGetBoundingClientRect(items) {
  items.filter((icon, index) => {
    icon.element.getBoundingClientRect = () => ({
      left: index * 25,
      width: 25,
    });
    return true;
  });
}

test('change event', () => {
  const onInput = jest.fn();
  const onChange = jest.fn();

  const wrapper = mount(Rate, {
    listeners: {
      input: (value) => {
        onInput(value);
        wrapper.setProps({ value });
      },
      change: onChange,
    },
  });
  const item4 = wrapper.findAll('.van-rate__icon').at(3);

  item4.trigger('click');
  item4.trigger('click');

  expect(onInput).toHaveBeenCalledWith(4);
  expect(onInput).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith(4);
  expect(onChange).toHaveBeenCalledTimes(1);
});

test('allow half', () => {
  const onInput = jest.fn();
  const onChange = jest.fn();

  const wrapper = mount(Rate, {
    propsData: {
      allowHalf: true,
    },
    listeners: {
      input: onInput,
      change: onChange,
    },
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
      disabled: true,
    },
    listeners: {
      input: onInput,
      change: onChange,
    },
  });
  const item4 = wrapper.findAll('.van-rate__item').at(3);

  triggerDrag(wrapper, 100, 0);
  item4.trigger('click');

  expect(onInput).toHaveBeenCalledTimes(0);
  expect(onChange).toHaveBeenCalledTimes(0);
});

test('touchmove to select item', () => {
  const onChange = jest.fn();
  const wrapper = mount(Rate, {
    listeners: {
      change: onChange,
    },
  });

  const icons = wrapper.findAll('.van-rate__item');

  mockGetBoundingClientRect(icons);
  triggerDrag(wrapper, 100, 0);

  expect(onChange).toHaveBeenNthCalledWith(1, 1);
  expect(onChange).toHaveBeenNthCalledWith(2, 2);
  expect(onChange).toHaveBeenNthCalledWith(3, 2);
  expect(onChange).toHaveBeenNthCalledWith(4, 4);
});

test('touchmove to select half item', () => {
  const onChange = jest.fn();
  const wrapper = mount(Rate, {
    propsData: {
      allowHalf: true,
    },
    listeners: {
      change: onChange,
    },
  });

  const icons = wrapper.findAll('.van-rate__item');

  mockGetBoundingClientRect(icons);
  triggerDrag(wrapper, 100, 0);

  expect(onChange).toHaveBeenNthCalledWith(1, 1);
  expect(onChange).toHaveBeenNthCalledWith(2, 1.5);
  expect(onChange).toHaveBeenNthCalledWith(3, 2);
  expect(onChange).toHaveBeenNthCalledWith(4, 4);
});

test('gutter prop', () => {
  const wrapper = mount(Rate, {
    propsData: {
      gutter: 10,
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('size prop', () => {
  const wrapper = mount(Rate, {
    propsData: {
      size: '2rem',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('untouchable', () => {
  const onChange = jest.fn();
  const wrapper = mount(Rate, {
    propsData: {
      touchable: false,
    },
    listeners: {
      change: onChange,
    },
  });

  triggerDrag(wrapper, 100, 0);
  expect(onChange).toHaveBeenCalledTimes(0);
});
