import { mount } from '../../../test';
import { ActionBarButton } from '..';

test('should render default slot correctly', () => {
  const wrapper = mount(ActionBarButton, {
    slots: {
      default: 'Content',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});
