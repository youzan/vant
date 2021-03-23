import { Row } from '..';
import { mount } from '../../../test';

test('should add "van-row--nowrap" class when wrap prop is false', () => {
  const wrapper = mount(Row, {
    props: {
      wrap: false,
    },
  });
  expect(wrapper.classes()).toContain('van-row--nowrap');
});
