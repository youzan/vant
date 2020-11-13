import CellGroup from '..';
import { mount } from '@vue/test-utils';

test('should render title slot correctly', () => {
  const wrapper = mount(CellGroup, {
    slots: {
      title: () => 'Custom Title',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
