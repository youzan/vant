import { createApp } from 'vue';
import { later } from '../../../test';
import { Toast } from '../function-call';
import ToastComponent from '../Toast';

test('toast disappeared after duration', async () => {
  const onClose = jest.fn();
  Toast({
    duration: 10,
    onClose,
  });

  expect(onClose).toHaveBeenCalledTimes(0);
  await later(50);
  expect(onClose).toHaveBeenCalledTimes(1);
});

test('show loading toast', async () => {
  Toast.loading({ className: 'loading-toast' });

  await later();
  expect(
    document.querySelector('.van-toast.van-toast--loading.loading-toast')
  ).toBeTruthy();
});

test('show html toast', async () => {
  Toast({
    type: 'html',
    className: 'html-toast',
    message: '<div>Message</div>',
  });

  await later(1000);
  const toastText = document.querySelector(
    '.html-toast .van-toast__text'
  ) as HTMLDivElement;
  expect(toastText.innerHTML).toEqual('<div>Message</div>');
});

test('icon prop', async () => {
  Toast({ icon: 'star-o' });

  await later();
  expect(document.querySelector('.van-icon-star-o')).toBeTruthy();
});

test('icon-prefix prop', async () => {
  Toast({
    icon: 'star-o',
    iconPrefix: 'my-icon',
  });

  await later();
  expect(document.querySelector('.my-icon.my-icon-star-o')).toBeTruthy();
});

test('clear toast', async () => {
  const onClose1 = jest.fn();
  const onClose2 = jest.fn();
  const onClose3 = jest.fn();

  Toast({ onClose: onClose1 });

  await later();
  expect(onClose1).toBeCalledTimes(0);
  await Toast.clear();
  expect(onClose1).toBeCalledTimes(1);

  Toast.allowMultiple();

  Toast({ onClose: onClose2 });
  await later();

  Toast({ onClose: onClose3 });
  await later();

  await Toast.clear(true);

  expect(onClose2).toBeCalledTimes(1);
  expect(onClose3).toBeCalledTimes(1);
  Toast.allowMultiple(false);
});

test('clear multiple toast', async () => {
  Toast.allowMultiple();
  Toast.clear(true);

  const onClose1 = jest.fn();
  const onClose2 = jest.fn();

  Toast.success({ onClose: onClose1 });
  await later();
  Toast.success({ onClose: onClose2 });
  await later();
  await Toast.clear();
  expect(onClose1).toHaveBeenCalledTimes(1);
  expect(onClose2).toHaveBeenCalledTimes(0);
  await Toast.clear();
  expect(onClose2).toHaveBeenCalledTimes(1);
  Toast.allowMultiple(false);
});

test('remove toast DOM when cleared in multiple mode', async () => {
  Toast.allowMultiple();
  Toast.clear(true);
  const toast = Toast({ className: 'remove-toast' });
  await later();

  await toast.clear();
  await later(100);
  expect(document.querySelector('.remove-toast')).toBeNull();
  Toast.allowMultiple(false);
});

test('set default options', async () => {
  const className = 'my-toast';
  Toast.setDefaultOptions({ className });
  Toast();
  await later();
  expect(document.querySelector('.my-toast')).toBeTruthy();

  Toast.resetDefaultOptions();
  Toast();
  await later();
  expect(document.querySelector('.my-toast')).toBeFalsy();
});

test('set default options by type', async () => {
  const className = 'my-toast';
  Toast.setDefaultOptions('loading', { className });

  Toast.loading('');
  await later();
  expect(document.querySelector('.my-toast')).toBeTruthy();

  Toast.success('');
  await later();
  expect(document.querySelector('.my-toast')).toBeFalsy();

  Toast.resetDefaultOptions();
  Toast.loading('');
  await later();
  expect(document.querySelector('.my-toast')).toBeFalsy();
});

test('toast duration 0', async () => {
  Toast.allowMultiple();
  const onClose = jest.fn();
  Toast({ duration: 0, onClose });

  await later(2100);
  expect(onClose).toHaveBeenCalledTimes(0);
  Toast.allowMultiple(false);
});

test('should trigger onClose callback after closed', async () => {
  Toast.allowMultiple();
  const onClose = jest.fn();
  const toast = Toast({ onClose });

  await later();
  await toast.clear();
  expect(onClose).toHaveBeenCalledTimes(1);

  // onClose should only be called once
  await toast.clear();
  expect(onClose).toHaveBeenCalledTimes(1);
  Toast.allowMultiple(false);
});

test('should register component to app', () => {
  const app = createApp(document.body);
  app.use(Toast);
  expect(app.component(ToastComponent.name)).toBeTruthy();
});
