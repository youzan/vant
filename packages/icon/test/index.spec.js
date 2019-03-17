import Icon from '..';
import { mount } from '../../../test/utils';

test('render icon with builtin icon name', () => {
  const wrapper = mount(Icon, {
    propsData: {
      name: 'success'
    }
  });
  expect(wrapper).toMatchSnapshot();
});

test('render icon with url name', () => {
  const wrapper = mount(Icon, {
    propsData: {
      name: 'https://img.yzcdn.com/icon.jpg'
    }
  });
  expect(wrapper).toMatchSnapshot();
});

test('render icon default slot', () => {
  const wrapper = mount({
    render(h) {
      return h(Icon, { props: { name: 'success' } }, ['Default slot']);
    }
  });
  expect(wrapper).toMatchSnapshot();
});

test('tag prop', () => {
  const wrapper = mount(Icon, {
    propsData: {
      tag: 'div'
    }
  });
  expect(wrapper).toMatchSnapshot();
});
