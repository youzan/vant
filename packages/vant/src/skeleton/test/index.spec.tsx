import { mount } from '../../../test';
import { Skeleton, SkeletonImage } from '..';

test('should render with row width array correctly', () => {
  const wrapper = mount(Skeleton, {
    props: {
      row: 4,
      rowWidth: ['100%', 30, '5rem'],
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render default slot when loading is false', () => {
  const wrapper = mount({
    render: () => (
      <Skeleton loading={false}>
        <div>Content</div>
      </Skeleton>
    ),
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should change avatar size when using avatar-size prop', () => {
  const wrapper = mount(Skeleton, {
    props: {
      avatar: true,
      avatarSize: '20rem',
    },
  });

  const avatar = wrapper.find('.van-skeleton-avatar');
  expect(avatar.style.width).toMatchSnapshot('20rem');
  expect(avatar.style.height).toMatchSnapshot('20ren');
});

test('should change avatar shape when using avatar-shape prop', () => {
  const wrapper = mount(Skeleton, {
    props: {
      avatar: true,
      avatarShape: 'square',
    },
  });
  expect(wrapper.find('.van-skeleton-avatar').html()).toMatchSnapshot();
});

test('should be round when using round prop', () => {
  const wrapper = mount(Skeleton, {
    props: {
      title: true,
      round: true,
      avatar: true,
    },
  });
  expect(wrapper.find('.van-skeleton--round').exists()).toBeTruthy();
});

test('should Skeleton works with template slots', () => {
  const wrapper = mount(Skeleton, {
    slots: {
      template: () => 'custom content',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should allow to disable animation', async () => {
  const wrapper = mount(Skeleton, {
    props: {
      row: 1,
    },
  });

  expect(wrapper.find('.van-skeleton--animate').exists()).toBeTruthy();

  await wrapper.setProps({ animate: false });
  expect(wrapper.find('.van-skeleton--animate').exists()).toBeFalsy();
});

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
