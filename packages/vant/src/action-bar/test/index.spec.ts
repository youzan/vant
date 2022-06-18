import { ActionBar } from '..';
import { later, mockGetBoundingClientRect, mount } from '../../../test';

test('should allow to disable safe-area-inset-bottom prop', () => {
  const wrapper = mount(ActionBar, {
    props: {
      safeAreaInsetBottom: false,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render placeholder element when using placeholder prop', async () => {
  const restore = mockGetBoundingClientRect({ height: 50 });
  const wrapper = mount(ActionBar, {
    props: {
      placeholder: true,
    },
  });

  await later();
  expect(wrapper.html()).toMatchSnapshot();
  restore();
});
