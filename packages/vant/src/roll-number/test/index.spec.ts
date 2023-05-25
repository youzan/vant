import { RollNumber } from '..';
import { mount } from '../../../test';

test('should render comp', () => {
  const wrapper = mount(RollNumber, {
    props: {
      'start-num': 0,
      'target-num': 123,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
