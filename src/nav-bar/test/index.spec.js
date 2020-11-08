import NavBar from '..';
import { mount, mockGetBoundingClientRect } from '../../../test';

test('should render left/right slot and match snapshot', () => {
  const wrapper = mount(NavBar, {
    scopedSlots: {
      left: () => 'Custom Left',
      right: () => 'Custom Right',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('should render title slot and match snapshot', () => {
  const wrapper = mount(NavBar, {
    scopedSlots: {
      title: () => 'Custom Title',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('should render placeholder element when using placeholder prop', () => {
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

test('should emit click-left event when clicking left text', () => {
  const wrapper = mount(NavBar, {
    propsData: {
      leftText: 'left',
    },
  });

  wrapper.find('.van-nav-bar__left').trigger('click');
  expect(wrapper.emitted('click-left')).toBeTruthy();
});

test('should emit click-right event when clicking right text', () => {
  const wrapper = mount(NavBar, {
    propsData: {
      rightText: 'right',
    },
  });

  wrapper.find('.van-nav-bar__right').trigger('click');
  expect(wrapper.emitted('click-right')).toBeTruthy();
});

test('should have safe-area-inset-top class when using safe-area-inset-top prop', () => {
  const wrapper = mount(NavBar, {
    propsData: {
      safeAreaInsetTop: true,
    },
  });

  expect(wrapper.contains('.van-nav-bar--safe-area-inset-top')).toBeTruthy();
});
