import { mount } from '@vue/test-utils';
import Skeleton from '..';

test('row-width array', () => {
  const wrapper = mount(Skeleton, {
    propsData: {
      row: 4,
      rowWidth: ['100%', 30, '5rem'],
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('render chidren', () => {
  const wrapper = mount({
    template: `
      <skeleton :loading="false">
        <div>Content</div>
      </skeleton>
    `,
    components: { Skeleton },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('avatar shape', () => {
  const wrapper = mount(Skeleton, {
    propsData: {
      avatar: true,
      avatarSize: 20,
      avatarShape: 'square',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('round prop', () => {
  const wrapper = mount(Skeleton, {
    propsData: {
      title: true,
      round: true,
      avatar: true,
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('disable animate', () => {
  const wrapper = mount(Skeleton, {
    propsData: {
      row: 1,
      aniamte: false,
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});
