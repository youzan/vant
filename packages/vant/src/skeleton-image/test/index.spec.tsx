import { mount } from '../../../test';
import { SkeletonImage } from '..';

test('should skeleton image render correctly', () => {
  const wrapper = mount(SkeletonImage);

  expect(wrapper.html()).toMatchSnapshot();
});

test('should skeleton image works with imageSize prop', () => {
  const wrapper = mount(SkeletonImage, {
    props: {
      imageSize: '20rem',
    },
  });
  const dom = wrapper.find('.van-skeleton-image');

  expect(dom.style.width).toBe('20rem');
  expect(dom.style.height).toBe('20rem');
});

test('should skeleton image works with imageShape prop', () => {
  const wrapper = mount(SkeletonImage, {
    props: {
      imageShape: 'round',
    },
  });

  expect(wrapper.find('.van-skeleton-image--round')).toBeTruthy();
});
