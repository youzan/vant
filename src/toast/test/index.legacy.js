import Vue from 'vue';
import Toast from '..';
import ToastVue from '../Toast';
import { later } from '../../../test';
import { lockClick } from '../lock-click';

test('create a forbidClick toast', async () => {
  const toast = Toast({
    forbidClick: true,
    type: 'success',
  });

  await later();
  expect(toast.$el.outerHTML).toMatchSnapshot();

  await later();
  expect(
    document.body.classList.contains('van-toast--unclickable')
  ).toBeTruthy();
  toast.forbidClick = false;

  await later();
  expect(
    document.body.classList.contains('van-toast--unclickable')
  ).toBeFalsy();
});

test('toast disappeared after duration', async () => {
  const toast = Toast({
    duration: 10,
  });

  await later(50);
  expect(toast.$el.style.display).toEqual('none');
});

test('show loading toast', async () => {
  const toast = Toast.loading({
    message: 'Message',
  });

  await later();
  expect(toast.$el.outerHTML).toMatchSnapshot();
});

test('show html toast', async () => {
  const toast = Toast({
    type: 'html',
    message: '<div>Message</div>',
  });

  await later();
  expect(toast.$el.outerHTML).toMatchSnapshot();
});

test('icon prop', async () => {
  const toast = Toast({
    message: 'Message',
    icon: 'star-o',
  });

  await later();
  expect(toast.$el.outerHTML).toMatchSnapshot();
});

test('icon-prefix prop', async () => {
  const toast = Toast({
    message: 'Message',
    icon: 'star-o',
    iconPrefix: 'my-icon',
  });

  await later();
  expect(toast.$el.outerHTML).toMatchSnapshot();
});

test('clear toast', async () => {
  const toast1 = Toast('1');
  await later();
  expect(toast1.value).toBeTruthy();
  Toast.clear();
  expect(toast1.value).toBeFalsy();

  Toast.allowMultiple();
  const toast2 = Toast('2');
  await later();
  const toast3 = Toast('3');
  await later();
  Toast.clear(true);
  expect(toast2.value).toBeFalsy();
  expect(toast3.value).toBeFalsy();
  Toast.allowMultiple(false);
});

test('clear multiple toast', async () => {
  Toast.allowMultiple();
  Toast.clear(true);
  const toast1 = Toast.success('1');
  await later();
  const toast2 = Toast.success('2');
  await later();
  Toast.clear();
  expect(toast1.value).toBeFalsy();
  expect(toast2.value).toBeTruthy();
  Toast.clear();
  Toast.clear();
  expect(toast2.value).toBeFalsy();
  Toast.allowMultiple(false);
});

test('remove toast DOM when cleared in multiple mode', async () => {
  Toast.allowMultiple();
  Toast.clear(true);
  const toast = Toast({ message: '1' });
  await later();

  // mock onAfterLeave
  toast.clear();
  toast.onAfterLeave();
  await later();

  expect(toast.$el.parentNode).toEqual(null);
  Toast.allowMultiple(false);
});

test('set default options', () => {
  const className = 'my-toast';
  Toast.setDefaultOptions({ className });
  expect(Toast().className).toEqual(className);
  Toast.resetDefaultOptions();
  expect(Toast().className).toEqual('');
});

test('set default options by type', () => {
  const className = 'my-toast';
  Toast.setDefaultOptions('loading', { className });
  expect(Toast.loading().className).toEqual(className);
  expect(Toast.success().className).toEqual('');
  Toast.resetDefaultOptions();
  expect(Toast.loading().className).toEqual('');
});

test('toast duration 0', () => {
  Toast.allowMultiple();
  const toast = Toast({
    message: 'toast',
    duration: 0,
  });
  expect(toast.timer).toBeFalsy();
  Toast.allowMultiple(false);
});

test('onClose callback', () => {
  Toast.allowMultiple();
  const onClose = jest.fn();
  const toast = Toast({
    message: 'toast',
    onClose,
  });

  toast.clear();
  expect(onClose).toHaveBeenCalledTimes(1);
  Toast.allowMultiple(false);
});

test('closeOnClick option', async () => {
  Toast.allowMultiple();
  const toast = Toast({
    message: 'toast',
  });

  await later();
  toast.$el.click();
  expect(toast.value).toBeTruthy();

  toast.closeOnClick = true;
  toast.$el.click();
  expect(toast.value).toBeFalsy();

  Toast.allowMultiple(false);
});

test('register component', () => {
  Vue.use(Toast);
  expect(Vue.component(ToastVue.name)).toBeTruthy();
});

test('lockClick function', () => {
  const CLASSNAME = 'van-toast--unclickable';
  expect(document.body.classList.contains(CLASSNAME)).toBeFalsy();

  lockClick(true);
  expect(document.body.classList.contains(CLASSNAME)).toBeTruthy();

  lockClick(true);
  lockClick(false);
  expect(document.body.classList.contains(CLASSNAME)).toBeTruthy();

  lockClick(false);
  expect(document.body.classList.contains(CLASSNAME)).toBeFalsy();
});
