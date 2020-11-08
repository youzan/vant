import { mount } from '@vue/test-utils';
import Button from '..';

test('should emit click event', () => {
  const wrapper = mount(Button);

  wrapper.trigger('click');
  expect(wrapper.emitted('click').length).toEqual(1);
});

test('should not emit click event when disabled', () => {
  const wrapper = mount(Button, {
    propsData: {
      disabled: true,
    },
  });

  wrapper.trigger('click');
  expect(wrapper.emitted('click')).toBeFalsy();
});

test('should not emit click event when loading', () => {
  const wrapper = mount(Button, {
    propsData: {
      loading: true,
    },
  });

  wrapper.trigger('click');
  expect(wrapper.emitted('click')).toBeFalsy();
});

test('should hide border when color is gradient', () => {
  const wrapper = mount(Button, {
    propsData: {
      color: 'linear-gradient(#000, #fff)',
    },
  });

  expect(wrapper.element.style.border).toEqual('0px');
});

test('should change icon class prefix when using icon-prefix prop', () => {
  const wrapper = mount(Button, {
    propsData: {
      icon: 'success',
      iconPrefix: 'my-icon',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render loading slot and match snapshot', () => {
  const wrapper = mount(Button, {
    propsData: {
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
    propsData: {
      loading: true,
      loadingSize: '10px',
    },
  });

  const loading = wrapper.find('.van-loading__spinner').element;
  expect(loading.style.width).toEqual('10px');
  expect(loading.style.height).toEqual('10px');
});

test('should render icon in the right side when setting icon-position to right', () => {
  const wrapper = mount(Button, {
    propsData: {
      icon: 'plus',
      iconPosition: 'right',
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});
