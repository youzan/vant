import NavBar from '..';
import { mount } from '../../../test';

test('render left & right slot', () => {
  const wrapper = mount(NavBar, {
    scopedSlots: {
      left: () => 'Custom Left',
      right: () => 'Custom Right',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('render title slot', () => {
  const wrapper = mount(NavBar, {
    scopedSlots: {
      title: () => 'Custom Title',
    },
  });

  expect(wrapper).toMatchSnapshot();
});
