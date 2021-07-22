import { CellGroup } from '..';
import { mount } from '../../../test';

test('should render title slot correctly', () => {
  const wrapper = mount(CellGroup, {
    slots: {
      title: () => 'Custom Title',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
