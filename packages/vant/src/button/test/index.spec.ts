import { mount } from '../../../test';
import { Button } from '..';

test('should emit click event', () => {
  const wrapper = mount(Button);

  wrapper.trigger('click');
  expect(wrapper.emitted('click')).toHaveLength(1);
});

test('should not emit click event when disabled', () => {
  const wrapper = mount(Button, {
    props: {
      disabled: true,
    },
  });

  wrapper.trigger('click');
  expect(wrapper.emitted('click')).toBeFalsy();
});

test('should not emit click event when loading', () => {
  const wrapper = mount(Button, {
    props: {
      loading: true,
    },
  });

  wrapper.trigger('click');
  expect(wrapper.emitted('click')).toBeFalsy();
});

test('should hide border when color is gradient', () => {
  const wrapper = mount(Button, {
    props: {
      color: 'linear-gradient(#000, #fff)',
    },
  });

  expect(wrapper.style.border).toEqual('0px');
});

test('should change icon class prefix when using icon-prefix prop', () => {
  const wrapper = mount(Button, {
    props: {
      icon: 'success',
      iconPrefix: 'my-icon',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render loading slot correctly', () => {
  const wrapper = mount(Button, {
    props: {
      loading: true,
    },
    slots: {
      loading: () => 'Custom Loading',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render loading of a specific size when using loading-size prop', () => {
  const wrapper = mount(Button, {
    props: {
      loading: true,
      loadingSize: '10px',
    },
  });

  const loading = wrapper.find('.van-loading__spinner');
  expect(loading.style.width).toEqual('10px');
  expect(loading.style.height).toEqual('10px');
});

test('should render icon in the right side when setting icon-position to right', () => {
  const wrapper = mount(Button, {
    props: {
      icon: 'plus',
      iconPosition: 'right',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render icon slot correctly', () => {
  const wrapper = mount(Button, {
    slots: {
      default: () => 'Text',
      icon: () => 'Custom Icon',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});
