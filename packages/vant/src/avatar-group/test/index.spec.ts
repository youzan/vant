import { h } from 'vue';
import { AvatarGroup } from '..';
import { Avatar } from '../../avatar';
import { mount } from '../../../test';

test('should render avatar group correctly', () => {
  const wrapper = mount(AvatarGroup, {
    slots: {
      default: () => [
        h(Avatar, { src: 'avatar1.jpg' }),
        h(Avatar, { src: 'avatar2.jpg' }),
        h(Avatar, { src: 'avatar3.jpg' }),
      ],
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
  expect(wrapper.findAll('.van-avatar')).toHaveLength(3);
});

test('should limit avatars when maxCount is set', () => {
  const wrapper = mount(AvatarGroup, {
    props: {
      maxCount: 2,
    },
    slots: {
      default: () => [
        h(Avatar, { src: 'avatar1.jpg' }),
        h(Avatar, { src: 'avatar2.jpg' }),
        h(Avatar, { src: 'avatar3.jpg' }),
        h(Avatar, { src: 'avatar4.jpg' }),
      ],
    },
  });

  expect(wrapper.html()).toMatchSnapshot();

  // Should show 2 avatars + 1 collapse avatar
  const avatars = wrapper.findAll('.van-avatar');
  expect(avatars).toHaveLength(3);

  // The last avatar should show the count
  expect(wrapper.text()).toContain('+2');
});

test('should not show collapse avatar when total equals maxCount', () => {
  const wrapper = mount(AvatarGroup, {
    props: {
      maxCount: 3,
    },
    slots: {
      default: () => [
        h(Avatar, { src: 'avatar1.jpg' }),
        h(Avatar, { src: 'avatar2.jpg' }),
        h(Avatar, { src: 'avatar3.jpg' }),
      ],
    },
  });

  const avatars = wrapper.findAll('.van-avatar');
  expect(avatars).toHaveLength(3);
  expect(wrapper.text()).not.toContain('+');
});

test('should apply cascading prop correctly', () => {
  const wrapper = mount(AvatarGroup, {
    props: {
      cascading: 'right-up',
    },
    slots: {
      default: () => [
        h(Avatar, { src: 'avatar1.jpg' }),
        h(Avatar, { src: 'avatar2.jpg' }),
      ],
    },
  });

  expect(wrapper.classes()).toContain('van-avatar-group__right-up');

  // Test left-up cascading
  const wrapper2 = mount(AvatarGroup, {
    props: {
      cascading: 'left-up',
    },
    slots: {
      default: () => [
        h(Avatar, { src: 'avatar1.jpg' }),
        h(Avatar, { src: 'avatar2.jpg' }),
      ],
    },
  });

  expect(wrapper2.classes()).toContain('van-avatar-group__left-up');
});

test('should pass size prop to child avatars', () => {
  const wrapper = mount(AvatarGroup, {
    props: {
      size: 'large',
    },
    slots: {
      default: () => [
        h(Avatar, { src: 'avatar1.jpg' }),
        h(Avatar, { src: 'avatar2.jpg' }),
      ],
    },
  });

  const avatars = wrapper.findAll('.van-avatar');
  avatars.forEach((avatar) => {
    expect(avatar.classes()).toContain('van-avatar--large');
  });
});

test('should pass shape prop to child avatars', () => {
  const wrapper = mount(AvatarGroup, {
    props: {
      shape: 'square',
    },
    slots: {
      default: () => [
        h(Avatar, { src: 'avatar1.jpg' }),
        h(Avatar, { src: 'avatar2.jpg' }),
      ],
    },
  });

  const avatars = wrapper.findAll('.van-avatar');
  avatars.forEach((avatar) => {
    expect(avatar.classes()).toContain('van-avatar--square');
  });
});

test('should pass numeric size prop to child avatars', () => {
  const wrapper = mount(AvatarGroup, {
    props: {
      size: 60,
    },
    slots: {
      default: () => [
        h(Avatar, { src: 'avatar1.jpg' }),
        h(Avatar, { src: 'avatar2.jpg' }),
      ],
    },
  });

  const avatars = wrapper.findAll('.van-avatar');
  avatars.forEach((avatar) => {
    expect(avatar.element.style.width).toBe('60px');
    expect(avatar.element.style.height).toBe('60px');
  });
});

test('should prioritize child avatar props over group props', () => {
  const wrapper = mount(AvatarGroup, {
    props: {
      size: 'large',
      shape: 'square',
    },
    slots: {
      default: () => [
        h(Avatar, { src: 'avatar1.jpg', size: 'small', shape: 'round' }),
        h(Avatar, { src: 'avatar2.jpg' }),
      ],
    },
  });

  const avatars = wrapper.findAll('.van-avatar');

  // First avatar should keep its own props (small, round)
  expect(avatars[0].classes()).toContain('van-avatar--small');
  expect(avatars[0].classes()).not.toContain('van-avatar--square');
  expect(avatars[0].classes()).not.toContain('van-avatar--large');

  // Second avatar should use group props (large, square)
  expect(avatars[1].classes()).toContain('van-avatar--large');
  expect(avatars[1].classes()).toContain('van-avatar--square');
});

test('should render empty group when no children provided', () => {
  const wrapper = mount(AvatarGroup);

  expect(wrapper.html()).toMatchSnapshot();
  expect(wrapper.findAll('.van-avatar')).toHaveLength(0);
});

test('should handle single avatar correctly', () => {
  const wrapper = mount(AvatarGroup, {
    props: {
      maxCount: 5,
    },
    slots: {
      default: () => [h(Avatar, { src: 'avatar1.jpg' })],
    },
  });

  expect(wrapper.findAll('.van-avatar')).toHaveLength(1);
  expect(wrapper.text()).not.toContain('+');
});

test('should handle non-avatar children gracefully', () => {
  const wrapper = mount(AvatarGroup, {
    slots: {
      default: () => [
        h(Avatar, { src: 'avatar1.jpg' }),
        h('div', 'Not an avatar'),
        h(Avatar, { src: 'avatar2.jpg' }),
      ],
    },
  });

  // Should still render all children
  expect(wrapper.findAll('.van-avatar')).toHaveLength(2);
  expect(wrapper.text()).toContain('Not an avatar');
});

test('should calculate collapse count correctly with non-avatar children', () => {
  const wrapper = mount(AvatarGroup, {
    props: {
      maxCount: 2,
    },
    slots: {
      default: () => [
        h(Avatar, { src: 'avatar1.jpg' }),
        h('div', 'Not an avatar'),
        h(Avatar, { src: 'avatar2.jpg' }),
        h(Avatar, { src: 'avatar3.jpg' }),
        h(Avatar, { src: 'avatar4.jpg' }),
      ],
    },
  });

  // Should show 2 children (1 avatar + 1 div) + collapse avatar showing +3 (remaining children)
  const avatars = wrapper.findAll('.van-avatar');
  expect(avatars).toHaveLength(2); // 1 displayed avatar + 1 collapse avatar
  expect(wrapper.text()).toContain('+3');
});

test('should apply z-index correctly for cascading effect', () => {
  const wrapper = mount(AvatarGroup, {
    props: {
      cascading: 'right-up',
    },
    slots: {
      default: () => [
        h(Avatar, { src: 'avatar1.jpg' }),
        h(Avatar, { src: 'avatar2.jpg' }),
        h(Avatar, { src: 'avatar3.jpg' }),
      ],
    },
  });

  const items = wrapper.findAll('.van-avatar-group__item');

  // First item should have highest z-index for right-up
  expect((items[0].element as HTMLElement).style.zIndex).toBe('3');
  expect((items[1].element as HTMLElement).style.zIndex).toBe('2');
  expect((items[2].element as HTMLElement).style.zIndex).toBe('1');
});

test('should handle maxCount of 0', () => {
  const wrapper = mount(AvatarGroup, {
    props: {
      maxCount: 0,
    },
    slots: {
      default: () => [
        h(Avatar, { src: 'avatar1.jpg' }),
        h(Avatar, { src: 'avatar2.jpg' }),
      ],
    },
  });

  // Should show all avatars when maxCount is 0 (same as negative values)
  const avatars = wrapper.findAll('.van-avatar');
  expect(avatars).toHaveLength(2);
  expect(wrapper.text()).not.toContain('+');
});

test('should handle negative maxCount', () => {
  const wrapper = mount(AvatarGroup, {
    props: {
      maxCount: -1,
    },
    slots: {
      default: () => [
        h(Avatar, { src: 'avatar1.jpg' }),
        h(Avatar, { src: 'avatar2.jpg' }),
      ],
    },
  });

  // Should show all avatars when maxCount is negative
  expect(wrapper.findAll('.van-avatar')).toHaveLength(2);
  expect(wrapper.text()).not.toContain('+');
});
