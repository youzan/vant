import { mount } from '@vue/test-utils';
import ActionBarButton from '..';

test('should render default slot and match snapshot', () => {
  const wrapper = mount(ActionBarButton, {
    slots: {
      default: 'Content',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});
