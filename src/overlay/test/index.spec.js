import { mount } from '../../../test';
import Overlay from '..';

test('z-index prop', () => {
  const wrapper = mount(Overlay, {
    propsData: {
      show: true,
      zIndex: 99,
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('class-name prop', () => {
  const wrapper = mount(Overlay, {
    propsData: {
      show: true,
      className: 'my-overlay',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('custom style prop', () => {
  const wrapper = mount(Overlay, {
    propsData: {
      show: true,
      customStyle: {
        backgroundColor: 'red',
      },
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('duration prop', () => {
  const wrapper = mount(Overlay, {
    propsData: {
      show: true,
      duration: 1,
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('click event', () => {
  const onClick = jest.fn();
  const wrapper = mount(Overlay, {
    context: {
      on: {
        click: onClick,
      },
    },
  });

  wrapper.trigger('click');
  expect(onClick).toHaveBeenCalledTimes(1);
});

test('default slot', () => {
  const wrapper = mount(Overlay, {
    scopedSlots: {
      default: () => 'Custom Default',
    },
  });

  expect(wrapper).toMatchSnapshot();
});
