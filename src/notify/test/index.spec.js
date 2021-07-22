import { createApp } from 'vue';
import { later } from '../../../test';
import { trigger } from '../../utils';
import { Notify } from '../function-call';
import NotifyComponent from '../Notify';

test('should not throw error if calling clear method before render notify', () => {
  Notify.clear();
});

test('should render Notify correctly', async () => {
  Notify('test');
  await later();
  expect(document.querySelector('.van-notify')).toMatchSnapshot();
});

test('should add "van-notify--success" class when type is success', async () => {
  Notify({
    message: 'test',
    type: 'success',
  });

  await later();
  const notify = document.querySelector('.van-notify');
  expect(notify.classList.contains('van-notify--success')).toBeTruthy();
});

test('should register component to app', () => {
  const app = createApp();
  app.use(Notify);
  expect(app.component(NotifyComponent.name)).toBeTruthy();
});

test('should change default duration after calling setDefaultOptions method', () => {
  Notify.setDefaultOptions({ duration: 1000 });
  expect(Notify.currentOptions.duration).toEqual(1000);
  Notify.resetDefaultOptions();
  expect(Notify.currentOptions.duration).toEqual(3000);
});

test('should reset to default duration after calling resetDefaultOptions method', () => {
  Notify.setDefaultOptions({ duration: 1000 });
  Notify.resetDefaultOptions();
  expect(Notify.currentOptions.duration).toEqual(3000);
});

test('should call onClose option when closing', async () => {
  const onClose = jest.fn();
  Notify({
    message: 'test',
    onClose,
    duration: 1,
  });

  await later(20);
  expect(onClose).toHaveBeenCalledTimes(1);
});

test('should call onClick option when clicked', async () => {
  const onClick = jest.fn();
  Notify({
    message: 'test',
    onClick,
  });

  await later();
  const notify = document.querySelector('.van-notify');
  trigger(notify, 'click');
  expect(onClick).toHaveBeenCalledTimes(1);
});
