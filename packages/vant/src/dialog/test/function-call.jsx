import { later } from '../../../test';
import {
  showDialog,
  closeDialog,
  setDialogDefaultOptions,
  resetDialogDefaultOptions,
} from '../function-call';

test('should update default options when calling setDefaultOptions method', () => {
  const wrapper = document.createElement('div');

  setDialogDefaultOptions({ message: 'foo', teleport: wrapper, });
  showDialog();
  await later();
  const dialog = wrapper.querySelector('.van-dialog');
  expect(dialog.innerHTML.includes('foo')).toBeTruthy();

  resetDialogDefaultOptions();
  showDialog({ teleport: wrapper });
  await later();
  const dialog2 = wrapper.querySelector('.van-dialog');
  expect(dialog2.innerHTML.includes('foo')).toBeFalsy();
});

test('should render dialog after calling showDialog', async () => {
  const wrapper = document.createElement('div');
  showDialog({
    message: '1',
    teleport: wrapper,
  });

  await later();
  const dialog = wrapper.querySelector('.van-dialog');
  expect(dialog).toBeTruthy();
});

test('should close dialog after calling closeDialog', async () => {
  const wrapper = document.createElement('div');
  showDialog({
    message: '1',
    teleport: wrapper,
  });

  await later();
  const dialog = wrapper.querySelector('.van-dialog');
  expect(dialog.style.display).toEqual('');

  closeDialog();
  await later();
  expect(dialog.className.split(' ')).toContain(
    'van-dialog-bounce-leave-active'
  );
});

test('should allow to render JSX message', async () => {
  const wrapper = document.createElement('div');
  showDialog({
    message: () => <div>foo</div>,
    teleport: wrapper,
  });

  await later();
  const dialog = wrapper.querySelector('.van-dialog');
  expect(
    dialog.querySelector('.van-dialog__message').outerHTML
  ).toMatchSnapshot();
});
