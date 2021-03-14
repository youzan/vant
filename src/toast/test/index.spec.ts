import Toast from '../Toast';
import { mount, later } from '../../../test';

test('should change overlay style after using overlay-style prop', async () => {
  const wrapper = mount(Toast, {
    props: {
      show: true,
      overlay: true,
      overlayStyle: {
        background: 'red',
      },
    },
  });

  await later();
  expect(wrapper.find('.van-overlay').style.background).toEqual('red');
});

test('should close Toast when using closeOnClick prop and clicked', () => {
  const wrapper = mount(Toast, {
    props: {
      show: true,
      closeOnClick: true,
    },
  });

  wrapper.find('.van-toast').trigger('click');
  expect(wrapper.emitted('update:show')![0]).toEqual([false]);
});

test('should close Toast when using closeOnClickOverlay prop and overlay is clicked', () => {
  const wrapper = mount(Toast, {
    props: {
      show: true,
      overlay: true,
      closeOnClickOverlay: true,
    },
  });

  wrapper.find('.van-overlay').trigger('click');
  expect(wrapper.emitted('update:show')![0]).toEqual([false]);
});

test('create a forbidClick toast', async () => {
  const wrapper = mount(Toast, {
    props: {
      show: true,
      forbidClick: true,
      type: 'success',
    },
  });

  await later();
  expect(wrapper.html()).toMatchSnapshot();
  expect(
    document.body.classList.contains('van-toast--unclickable')
  ).toBeTruthy();

  await wrapper.setProps({ forbidClick: false });
  expect(
    document.body.classList.contains('van-toast--unclickable')
  ).toBeFalsy();
});

test('should change icon size when using icon-size prop', async () => {
  const wrapper = mount(Toast, {
    props: {
      show: true,
      icon: 'success',
      iconSize: '10',
    },
  });

  await later();
  expect(wrapper.find('.van-icon').style.fontSize).toEqual('10px');
});

test('should change loading icon size when using icon-size prop', async () => {
  const wrapper = mount(Toast, {
    props: {
      show: true,
      type: 'loading',
      iconSize: '10',
    },
  });

  await later();
  expect(wrapper.find('.van-loading__spinner').style.width).toEqual('10px');
  expect(wrapper.find('.van-loading__spinner').style.height).toEqual('10px');
});
