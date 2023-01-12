import { mount } from '../../../test';
import { SkeletonTitle } from '..';

test('should skeleton title works', () => {
  const wrapper = mount(SkeletonTitle);

  expect(wrapper.html()).toMatchSnapshot();
});

test('should skeleton title works with props', () => {
  const wrapper = mount(SkeletonTitle, {
    props: {
      round: true,
      titleWidth: '200rem',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
