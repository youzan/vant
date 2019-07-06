import { mount } from '../../../test/utils';
import Overlay from '..';

test('z-index prop', () => {
  const wrapper = mount(Overlay, {
    propsData: {
      show: true,
      zIndex: 99
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('class-name prop', () => {
  const wrapper = mount(Overlay, {
    propsData: {
      show: true,
      className: 'my-overlay'
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('duration prop', () => {
  const wrapper = mount(Overlay, {
    propsData: {
      show: true,
      duration: 1
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('click event', () => {
  const onClick = jest.fn();
  const wrapper = mount(Overlay, {
    context: {
      on: {
        click: onClick
      }
    }
  });

  wrapper.trigger('click');
  expect(onClick).toHaveBeenCalledTimes(1);
});
