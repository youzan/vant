import { NavBar } from '..';
import { mount, mockGetBoundingClientRect, later } from '../../../test';

test('should render left slot correctly', () => {
  const wrapper = mount(NavBar, {
    slots: {
      left: () => 'Custom Left',
    },
  });

  expect(wrapper.find('.van-nav-bar__left').html()).toMatchSnapshot();
});

test('should render left slot correctly', () => {
  const wrapper = mount(NavBar, {
    slots: {
      right: () => 'Custom Right',
    },
  });

  expect(wrapper.find('.van-nav-bar__right').html()).toMatchSnapshot();
});

test('should render title slot correctly', () => {
  const wrapper = mount(NavBar, {
    slots: {
      title: () => 'Custom Title',
    },
  });

  expect(wrapper.find('.van-nav-bar__title').html()).toMatchSnapshot();
});

test('should render placeholder element when using placeholder prop', async () => {
  const restore = mockGetBoundingClientRect({ height: 50 });
  const wrapper = mount(NavBar, {
    props: {
      fixed: true,
      placeholder: true,
    },
  });

  await later();
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

  expect(wrapper.classes()).toContain('van-nav-bar--safe-area-inset-top');
});

test('should change z-index when using z-index prop', () => {
  const wrapper = mount(NavBar, {
    props: {
      zIndex: 100,
    },
  });
  expect(wrapper.style.zIndex).toEqual('100');
});
