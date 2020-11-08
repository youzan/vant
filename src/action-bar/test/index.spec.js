import ActionBar from '..';
import { mount } from '../../../test';

test('should allow to disable safe-area-inset-bottom prop', () => {
  const wrapper = mount(ActionBar, {
    propsData: {
      safeAreaInsetBottom: false,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
