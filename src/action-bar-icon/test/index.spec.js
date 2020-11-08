import { mount } from '@vue/test-utils';
import ActionBarIcon from '..';

test('should render default slot and match snapshot', () => {
  const wrapper = mount(ActionBarIcon, {
    slots: {
      default: 'Content',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render icon slot and match snapshot', () => {
  const wrapper = mount(ActionBarIcon, {
    slots: {
      default: 'Content',
      icon: 'Custom Icon',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render icon slot with badge and match snapshot', () => {
  const wrapper = mount(ActionBarIcon, {
    props: {
      badge: '1',
    },
    slots: {
      default: 'Content',
      icon: 'Custom Icon',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render icon slot with dot and match snapshot', () => {
  const wrapper = mount(ActionBarIcon, {
    props: {
      dot: true,
    },
    slots: {
      default: 'Content',
      icon: 'Custom Icon',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
