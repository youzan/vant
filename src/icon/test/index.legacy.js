import Icon from '..';
import { mount } from '@vue/test-utils';

test('render icon with builtin icon name', () => {
  const wrapper = mount(Icon, {
    props: {
      name: 'success',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('render icon with url name', () => {
  const wrapper = mount(Icon, {
    props: {
      name: 'https://img.yzcdn.com/icon.jpg',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('render icon with local image', () => {
  const wrapper = mount(Icon, {
    props: {
      name: '/assets/icon.jpg',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('render icon default slot', () => {
  const wrapper = mount({
    render(h) {
      return h(Icon, { props: { name: 'success' } }, ['Default slot']);
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('tag prop', () => {
  const wrapper = mount(Icon, {
    props: {
      tag: 'div',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('dot prop', () => {
  const wrapper = mount(Icon, {
    props: {
      dot: true,
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('size without unit', () => {
  const wrapper = mount(Icon, {
    props: {
      size: 20,
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});
