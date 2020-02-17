import Info from '..';
import { mount } from '../../../test';

test('should not render when info is empty string', () => {
  const wrapper = mount(Info, {
    propsData: {
      info: '',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('should not render when info is empty undefined', () => {
  const wrapper = mount(Info, {
    propsData: {
      info: undefined,
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('should render when info is zero', () => {
  const wrapper = mount(Info, {
    propsData: {
      info: 0,
    },
  });

  expect(wrapper).toMatchSnapshot();
});
