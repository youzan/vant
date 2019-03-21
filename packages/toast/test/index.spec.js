import Toast from '..';
import { transitionStub, later } from '../../../test/utils';

transitionStub();

test('create a forbidClick toast', async () => {
  const toast = Toast({
    forbidClick: true,
    type: 'success'
  });

  expect(toast.$el.outerHTML).toMatchSnapshot();

  await later();
  expect(document.body.classList.contains('van-toast--unclickable')).toBeTruthy();
  toast.forbidClick = false;

  await later();
  expect(document.body.classList.contains('van-toast--unclickable')).toBeFalsy();
});

it('toast disappeared after duration', async () => {
  const toast = Toast({
    duration: 10
  });

  await later(50);
  expect(toast.$el.style.display).toEqual('none');
});

test('clear toast', () => {
  const toast1 = Toast();
  expect(toast1.value).toBeTruthy();
  Toast.clear();
  expect(toast1.value).toBeFalsy();

  Toast.allowMultiple();
  const toast2 = Toast('2');
  const toast3 = Toast('3');
  Toast.clear(true);
  expect(toast2.value).toBeFalsy();
  expect(toast3.value).toBeFalsy();
  Toast.allowMultiple(false);
});

test('multiple toast', () => {
  Toast.allowMultiple();
  Toast.clear(true);
  const toast1 = Toast.success('1');
  const toast2 = Toast.success('2');
  Toast.clear();
  expect(toast1.value).toBeFalsy();
  expect(toast2.value).toBeTruthy();
  Toast.clear();
  Toast.clear();
  expect(toast2.value).toBeFalsy();
  Toast.allowMultiple(false);
});

test('set default options', () => {
  Toast.setDefaultOptions({ duration: 1000 });
  expect(Toast().duration).toEqual(1000);
  Toast.resetDefaultOptions();
  expect(Toast().duration).toEqual(3000);
});

test('toast duration 0', () => {
  Toast.allowMultiple();
  const toast = Toast({
    message: 'toast',
    duration: 0
  });
  expect(toast.timer).toBeFalsy();
  Toast.allowMultiple(false);
});

test('onClose callback', () => {
  Toast.allowMultiple();
  const onClose = jest.fn();
  const toast = Toast({
    message: 'toast',
    onClose
  });

  toast.clear();
  Toast.allowMultiple(false);
  expect(onClose).toHaveBeenCalledTimes(1);
});
