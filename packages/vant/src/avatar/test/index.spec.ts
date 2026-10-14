import { Avatar } from '..';
import { mount } from '../../../test';

test('should render image avatar correctly', () => {
  const wrapper = mount(Avatar, {
    props: {
      src: 'https://example.com/avatar.jpg',
      alt: 'User Avatar',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
  const img = wrapper.find('img');
  expect(img.attributes('src')).toBe('https://example.com/avatar.jpg');
  expect(img.attributes('alt')).toBe('User Avatar');
});

test('should render text avatar correctly when no src provided', () => {
  const wrapper = mount(Avatar, {
    props: {
      text: 'AB',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
  expect(wrapper.text()).toBe('AB');
});

test('should render icon avatar correctly', () => {
  const wrapper = mount(Avatar, {
    props: {
      icon: 'user-o',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
  const icon = wrapper.find('.van-icon-user-o');
  expect(icon.exists()).toBe(true);
});

test('should render default slot when no props provided', () => {
  const wrapper = mount(Avatar, {
    slots: {
      default: () => 'Custom Content',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
  expect(wrapper.text()).toBe('Custom Content');
});

test('should apply different sizes correctly', () => {
  const wrapper = mount(Avatar, {
    props: {
      size: 'large',
      text: 'A',
    },
  });

  expect(wrapper.classes()).toContain('van-avatar--large');

  // Test number size
  const wrapper2 = mount(Avatar, {
    props: {
      size: 60,
      text: 'B',
    },
  });

  expect(wrapper2.style.width).toBe('60px');
  expect(wrapper2.style.height).toBe('60px');

  // Test string size
  const wrapper3 = mount(Avatar, {
    props: {
      size: '80px',
      text: 'C',
    },
  });

  expect(wrapper3.style.width).toBe('80px');
  expect(wrapper3.style.height).toBe('80px');
});

test('should apply different shapes correctly', () => {
  const wrapper = mount(Avatar, {
    props: {
      shape: 'square',
      text: 'A',
    },
  });

  expect(wrapper.classes()).toContain('van-avatar--square');
});

test('should apply background color and text color', () => {
  const wrapper = mount(Avatar, {
    props: {
      bgColor: '#ff0000',
      color: '#ffffff',
      text: 'A',
    },
  });

  expect(wrapper.style.backgroundColor).toBe('rgb(255, 0, 0)');
  expect(wrapper.style.color).toBe('rgb(255, 255, 255)');
});

test('should emit error event when image load fails', async () => {
  const wrapper = mount(Avatar, {
    props: {
      src: 'invalid-url.jpg',
    },
  });

  const img = wrapper.find('img');
  await img.trigger('error');

  expect(wrapper.emitted('error')).toHaveLength(1);
});

test('should prioritize src over text and icon', () => {
  const wrapper = mount(Avatar, {
    props: {
      src: 'https://example.com/avatar.jpg',
      text: 'AB',
      icon: 'user-o',
    },
  });

  expect(wrapper.find('img').exists()).toBe(true);
  expect(wrapper.text()).toBe('');
  expect(wrapper.find('.van-icon-user-o').exists()).toBe(false);
});

test('should prioritize text over icon when no src', () => {
  const wrapper = mount(Avatar, {
    props: {
      text: 'AB',
      icon: 'user-o',
    },
  });

  expect(wrapper.text()).toBe('AB');
  expect(wrapper.find('.van-icon-user-o').exists()).toBe(false);
});

test('should handle empty text correctly', () => {
  const wrapper = mount(Avatar, {
    props: {
      text: '',
      icon: 'user-o',
    },
  });

  expect(wrapper.find('.van-icon-user-o').exists()).toBe(true);
});
