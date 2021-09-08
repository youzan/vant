import { Icon } from '..';
import { mount } from '../../../test';

test('should render icon with builtin icon name correctly', () => {
  const wrapper = mount(Icon, {
    props: {
      name: 'success',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render icon with url name correctly', () => {
  const wrapper = mount(Icon, {
    props: {
      name: 'https://img.yzcdn.com/icon.jpg',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render icon with local image correctly', () => {
  const wrapper = mount(Icon, {
    props: {
      name: '/assets/icon.jpg',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render default slot correctly', () => {
  const wrapper = mount(Icon, {
    props: {
      name: 'success',
    },
    slots: {
      default: () => 'Default Slot',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should change root tag after using tag prop', () => {
  const wrapper = mount(Icon, {
    props: {
      tag: 'div',
    },
  });
  expect(wrapper.element.tagName).toEqual('DIV');
});

test('should render dot correctly', () => {
  const wrapper = mount(Icon, {
    props: {
      dot: true,
    },
  });
  expect(wrapper.find('.van-badge').html()).toMatchSnapshot();
});

test('should render badge correctly', () => {
  const wrapper = mount(Icon, {
    props: {
      badge: '1',
    },
  });
  expect(wrapper.find('.van-badge').html()).toMatchSnapshot();
});

test('should change icon size when using size prop', () => {
  const wrapper = mount(Icon, {
    props: {
      size: 20,
    },
  });
  expect(wrapper.style.fontSize).toEqual('20px');
});
