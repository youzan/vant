import { mount } from '../../../test';
import { SkeletonParagraph } from '..';

test('should skeleton paragraph works', () => {
  const wrapper = mount(SkeletonParagraph);

  expect(wrapper.html()).toMatchSnapshot();
});

test('should skeleton paragraph works with props', () => {
  const wrapper = mount(SkeletonParagraph, {
    props: {
      round: true,
      rowWidth: '200rem',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
