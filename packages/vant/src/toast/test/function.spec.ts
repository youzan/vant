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
  vi.useFakeTimers();
  const onClose = vi.fn();
  showToast({
    duration: 10,
    onClose,
  });

  expect(onClose).not.toHaveBeenCalled();
  await vi.advanceTimersByTimeAsync(100);
  expect(onClose).toHaveBeenCalledTimes(1);
  vi.useRealTimers();
});

test('show loading toast', async () => {
  showLoadingToast({ className: 'loading-toast' });

  await later();
  expect(
    document.querySelector('.van-toast.van-toast--loading.loading-toast'),
  ).toBeTruthy();
});

test('show html toast', async () => {
  vi.useFakeTimers();
  showToast({
    type: 'html',
    className: 'html-toast',
    message: '<div>Message</div>',
  });
  await vi.runAllTimersAsync();

  const toastText = document.querySelector(
    '.html-toast .van-toast__text',
  ) as HTMLDivElement;
  expect(toastText.innerHTML).toEqual('<div>Message</div>');
  vi.useRealTimers();
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
  const onClose1 = vi.fn();
  const onClose2 = vi.fn();
  const onClose3 = vi.fn();

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

  const onClose1 = vi.fn();
  const onClose2 = vi.fn();

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
  vi.useFakeTimers();
  allowMultipleToast();
  closeToast(true);
  const toast = showToast({ className: 'remove-toast' });
  toast.close();
  await vi.advanceTimersByTimeAsync(100);
  expect(document.querySelector('.remove-toast')).toBeNull();
  allowMultipleToast(false);
  vi.useRealTimers();
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
  vi.useFakeTimers();
  allowMultipleToast();
  const onClose = vi.fn();
  showToast({ duration: 0, onClose });

  await vi.advanceTimersByTimeAsync(100);
  expect(onClose).not.toHaveBeenCalled();
  allowMultipleToast(false);
  vi.useRealTimers();
});

test('should trigger onClose callback after closed', async () => {
  allowMultipleToast();
  const onClose = vi.fn();
  const toast = showToast({ onClose });

  await later();
  await toast.close();
  expect(onClose).toHaveBeenCalledTimes(1);

  // onClose should only be called once
  await toast.close();
  expect(onClose).toHaveBeenCalledTimes(1);
  allowMultipleToast(false);
});
