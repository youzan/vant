import { mount } from '@vue/test-utils';
import ActionBarButton from '..';

test('should render default slot correctly', () => {
  const wrapper = mount(ActionBarButton, {
    slots: {
      default: 'Content',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});
