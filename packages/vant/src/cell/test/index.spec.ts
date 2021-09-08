import { Cell } from '..';
import { mount } from '../../../test';

test('should render value slot correctly', () => {
  const wrapper = mount(Cell, {
    slots: {
      value: () => 'Custom Value',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render title slot correctly', () => {
  const wrapper = mount(Cell, {
    slots: {
      title: () => 'Custom Title',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render label slot correctly', () => {
  const wrapper = mount(Cell, {
    props: {
      title: 'Title',
    },
    slots: {
      label: () => 'Custom Label',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render icon slot correctly', () => {
  const wrapper = mount(Cell, {
    slots: {
      icon: () => 'Custom Icon',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render extra slot correctly', () => {
  const wrapper = mount(Cell, {
    slots: {
      extra: () => 'Custom Extra',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should change arrow direction when using arrow-direction prop', () => {
  const wrapper = mount(Cell, {
    props: {
      isLink: true,
      arrowDirection: 'down',
    },
  });

  expect(wrapper.find('.van-cell__right-icon').html()).toMatchSnapshot();
});

test('should change title style when using title-style prop', () => {
  const wrapper = mount(Cell, {
    props: {
      title: 'title',
      titleStyle: {
        color: 'red',
      },
    },
  });

  const title = wrapper.find('.van-cell__title');
  expect(title.style.color).toEqual('red');
});

test('should change icon class prefix when using icon-prefix prop', () => {
  const wrapper = mount(Cell, {
    props: {
      icon: 'success',
      iconPrefix: 'my-icon',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should allow to disable clicakble when using is-link prop', () => {
  const wrapper = mount(Cell, {
    props: {
      isLink: true,
      clickable: false,
    },
  });
  expect(wrapper.classes()).not.toContain('van-cell--clickable');
});
