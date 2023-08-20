import { later } from '../../../test';
import {
  showNotify,
  closeNotify,
  setNotifyDefaultOptions,
  resetNotifyDefaultOptions,
} from '../function-call';

test('should not throw error if calling clear method before render notify', () => {
  closeNotify();
});

test('should render Notify correctly', async () => {
  showNotify('test');
  await later();
  expect(document.querySelector('.van-notify')).toMatchSnapshot();
});

test('should add "van-notify--success" class when type is success', async () => {
  showNotify({
    message: 'test',
    type: 'success',
  });

  await later();
  const notify = document.querySelector('.van-notify') as HTMLElement;
  expect(notify.classList.contains('van-notify--success')).toBeTruthy();
});

test('should change default options after calling setDefaultOptions method', async () => {
  setNotifyDefaultOptions({ message: 'foo' });
  showNotify({});
  await later();
  const notify = document.querySelector('.van-notify') as HTMLElement;
  expect(notify.innerHTML.includes('foo')).toBeTruthy();

  resetNotifyDefaultOptions();
  showNotify({});
  await later();
  const notify2 = document.querySelector('.van-notify') as HTMLElement;
  expect(notify2.innerHTML.includes('foo')).toBeFalsy();
});

test('should call onClose option when closing', async () => {
  const onClose = vi.fn();
  showNotify({
    message: 'test',
    onClose,
    duration: 1,
  });

  await later(20);
  expect(onClose).toHaveBeenCalledTimes(1);
});

test('should call onClick option when clicked', async () => {
  const onClick = vi.fn();
  showNotify({
    message: 'test',
    onClick,
  });

  await later();
  const notify = document.querySelector('.van-notify') as HTMLElement;
  notify.click();
  expect(onClick).toHaveBeenCalledTimes(1);
});

test('should align to bottom when position option is bottom', async () => {
  showNotify({
    message: 'test',
    position: 'bottom',
  });

  await later();
  const notify = document.querySelector('.van-notify') as HTMLElement;
  expect(notify.classList.contains('van-popup--bottom')).toBeTruthy();
});
