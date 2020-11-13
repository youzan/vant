import NavBar from '..';
import { mount, mockGetBoundingClientRect } from '../../../test';

test('should render left/right slot and match snapshot', () => {
  const wrapper = mount(NavBar, {
    slots: {
      left: () => 'Custom Left',
      right: () => 'Custom Right',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render title slot and match snapshot', () => {
  const wrapper = mount(NavBar, {
    slots: {
      title: () => 'Custom Title',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render placeholder element when using placeholder prop', () => {
  const restore = mockGetBoundingClientRect({ height: 50 });

  const wrapper = mount(NavBar, {
    props: {
      fixed: true,
      placeholder: true,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();

  restore();
});

test('should emit click-left event when clicking left text', () => {
  const wrapper = mount(NavBar, {
    props: {
      leftText: 'left',
    },
  });

  wrapper.find('.van-nav-bar__left').trigger('click');
  expect(wrapper.emitted('click-left')).toBeTruthy();
});

test('should emit click-right event when clicking right text', () => {
  const wrapper = mount(NavBar, {
    props: {
      rightText: 'right',
    },
  });

  wrapper.find('.van-nav-bar__right').trigger('click');
  expect(wrapper.emitted('click-right')).toBeTruthy();
});

test('should have safe-area-inset-top class when using safe-area-inset-top prop', () => {
  const wrapper = mount(NavBar, {
    props: {
      safeAreaInsetTop: true,
    },
  });

  expect(wrapper.contains('.van-nav-bar--safe-area-inset-top')).toBeTruthy();
});
