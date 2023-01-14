import { mount } from '../../../test';
import { SkeletonAvatar } from '..';

test('should skeleton avatar render correctly without props', () => {
  const wrapper = mount(SkeletonAvatar);

  expect(wrapper.html()).toMatchSnapshot();
});

test('should skeleton avatar render correctly when change props', () => {
  const wrapper = mount(SkeletonAvatar, {
    props: {
      avatarSize: 50,
      avatarShape: 'square',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
