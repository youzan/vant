import NavBar from '..';
import { mount, mockGetBoundingClientRect } from '../../../test';

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

test('placeholder prop', () => {
  const restore = mockGetBoundingClientRect({ height: 50 });

  const wrapper = mount(NavBar, {
    propsData: {
      fixed: true,
      placeholder: true,
    },
  });

  expect(wrapper).toMatchSnapshot();

  restore();
});

test('click-left event', () => {
  const wrapper = mount(NavBar, {
    propsData: {
      leftText: 'left',
    },
  });

  wrapper.find('.van-nav-bar__left').trigger('click');
  expect(wrapper.emitted('click-left')).toBeTruthy();
});

test('click-right event', () => {
  const wrapper = mount(NavBar, {
    propsData: {
      rightText: 'right',
    },
  });

  wrapper.find('.van-nav-bar__right').trigger('click');
  expect(wrapper.emitted('click-right')).toBeTruthy();
});
