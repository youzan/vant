import { later } from '../../../test';
import {
  showToast,
  closeToast,
  showLoadingToast,
  allowMultipleToast,
  showSuccessToast,
  resetToastDefaultOptions,
  setToastDefaultOptions,
} from '../function-call';

test('toast disappeared after duration', async () => {
  const onClose = jest.fn();
  showToast({
    duration: 10,
    onClose,
  });

  expect(onClose).toHaveBeenCalledTimes(0);
  await later(50);
  expect(onClose).toHaveBeenCalledTimes(1);
});

test('show loading toast', async () => {
  showLoadingToast({ className: 'loading-toast' });

  await later();
  expect(
    document.querySelector('.van-toast.van-toast--loading.loading-toast')
  ).toBeTruthy();
});

test('show html toast', async () => {
  showToast({
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
  showToast({ icon: 'star-o' });

  await later();
  expect(document.querySelector('.van-icon-star-o')).toBeTruthy();
});

test('icon-prefix prop', async () => {
  showToast({
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

  showToast({ onClose: onClose1 });

  await later();
  expect(onClose1).toBeCalledTimes(0);
  await closeToast();
  expect(onClose1).toBeCalledTimes(1);

  allowMultipleToast();

  showToast({ onClose: onClose2 });
  await later();

  showToast({ onClose: onClose3 });
  await later();

  await closeToast(true);

  expect(onClose2).toBeCalledTimes(1);
  expect(onClose3).toBeCalledTimes(1);
  allowMultipleToast(false);
});

test('clear multiple toast', async () => {
  allowMultipleToast();
  closeToast(true);

  const onClose1 = jest.fn();
  const onClose2 = jest.fn();

  showSuccessToast({ onClose: onClose1 });
  await later();
  showSuccessToast({ onClose: onClose2 });
  await later();
  await closeToast();
  expect(onClose1).toHaveBeenCalledTimes(1);
  expect(onClose2).toHaveBeenCalledTimes(0);
  await closeToast();
  expect(onClose2).toHaveBeenCalledTimes(1);
  allowMultipleToast(false);
});

test('remove toast DOM when cleared in multiple mode', async () => {
  allowMultipleToast();
  closeToast(true);
  const toast = showToast({ className: 'remove-toast' });
  await later();

  await toast.close();
  await later(100);
  expect(document.querySelector('.remove-toast')).toBeNull();
  allowMultipleToast(false);
});

test('set default options', async () => {
  const className = 'my-toast';
  setToastDefaultOptions({ className });
  showToast();
  await later();
  expect(document.querySelector('.my-toast')).toBeTruthy();

  resetToastDefaultOptions();
  showToast();
  await later();
  expect(document.querySelector('.my-toast')).toBeFalsy();
});

test('set default options by type', async () => {
  const className = 'my-toast';
  setToastDefaultOptions('loading', { className });

  showLoadingToast('');
  await later();
  expect(document.querySelector('.my-toast')).toBeTruthy();

  showSuccessToast('');
  await later();
  expect(document.querySelector('.my-toast')).toBeFalsy();

  resetToastDefaultOptions();
  showLoadingToast('');
  await later();
  expect(document.querySelector('.my-toast')).toBeFalsy();
});

test('toast duration 0', async () => {
  allowMultipleToast();
  const onClose = jest.fn();
  showToast({ duration: 0, onClose });

  await later(2100);
  expect(onClose).toHaveBeenCalledTimes(0);
  allowMultipleToast(false);
});

test('should trigger onClose callback after closed', async () => {
  allowMultipleToast();
  const onClose = jest.fn();
  const toast = showToast({ onClose });

  await later();
  await toast.close();
  expect(onClose).toHaveBeenCalledTimes(1);

  // onClose should only be called once
  await toast.close();
  expect(onClose).toHaveBeenCalledTimes(1);
  allowMultipleToast(false);
});
