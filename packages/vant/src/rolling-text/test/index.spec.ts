import { RollingText } from '..';
import { mount } from '../../../test';

test('should render comp', () => {
  const wrapper = mount(RollingText, {
    props: {
      'start-num': 0,
      'target-num': 123,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
