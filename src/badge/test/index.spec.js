import { mount } from '../../../test';
import Badge from '..';

test('count prop', () => {
  const wrapper = mount(Badge, {
    propsData: {
      count: 10,
    },
  });
  expect(wrapper).toMatchSnapshot();
});

test('dot prop', () => {
  const wrapper = mount(Badge, {
    propsData: {
      dot: true,
    },
  });
  expect(wrapper).toMatchSnapshot();
});

test('max-count prop', () => {
  const wrapper = mount(Badge, {
    propsData: {
      maxCount: 50,
      count: 51,
    },
  });
  expect(wrapper).toMatchSnapshot();
});

test('offset prop', () => {
  const wrapper = mount(Badge, {
    propsData: {
      count: 10,
      offset: [10, 10],
    },
  });
  expect(wrapper).toMatchSnapshot();
});

test('show-zero prop', () => {
  const wrapper = mount(Badge, {
    propsData: {
      count: 0,
      showZero: true,
    },
  });
  expect(wrapper).toMatchSnapshot();
});
