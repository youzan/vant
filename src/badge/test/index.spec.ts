import { Badge } from '..';
import { mount } from '../../../test';

test('should render nothing when content is empty string', () => {
  const wrapper = mount(Badge, {
    props: {
      content: '',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render nothing when content is undefined', () => {
  const wrapper = mount(Badge, {
    props: {
      content: undefined,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render nothing when content is zero', () => {
  const wrapper = mount(Badge, {
    props: {
      content: 0,
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render content slot correctly', () => {
  const wrapper = mount(Badge, {
    slots: {
      content: () => 'Custom Content',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should change dot position when using offset prop', async () => {
  const wrapper = mount(Badge, {
    props: {
      dot: true,
      offset: [2, 4],
    },
    slots: {
      default: () => 'Child',
    },
  });

  const badge = wrapper.find('.van-badge');
  expect(badge.style.top).toEqual('4px');
  expect(badge.style.right).toEqual('-2px');

  await wrapper.setProps({
    offset: [-2, -4],
  });
  expect(badge.style.top).toEqual('-4px');
  expect(badge.style.right).toEqual('2px');
});

test('should change dot position when using offset prop with custom unit', async () => {
  const wrapper = mount(Badge, {
    props: {
      dot: true,
      offset: ['2rem', '4em'],
    },
    slots: {
      default: () => 'Child',
    },
  });

  const badge = wrapper.find('.van-badge');
  expect(badge.style.top).toEqual('4em');
  expect(badge.style.right).toEqual('-2rem');

  await wrapper.setProps({
    offset: ['-2rem', '-4em'],
  });
  expect(badge.style.top).toEqual('-4em');
  expect(badge.style.right).toEqual('2rem');
});

test('should change dot position when using offset prop without children', () => {
  const wrapper = mount(Badge, {
    props: {
      dot: true,
      offset: [2, 4],
    },
  });

  const badge = wrapper.find('.van-badge');
  expect(badge.style.marginTop).toEqual('4px');
  expect(badge.style.marginLeft).toEqual('2px');
});

test('should not render zero when show-zero is false', async () => {
  const wrapper = mount(Badge, {
    props: {
      content: 0,
    },
  });

  expect(wrapper.find('.van-badge').exists()).toBeTruthy();

  await wrapper.setProps({ showZero: false });
  expect(wrapper.find('.van-badge').exists()).toBeFalsy();
});
