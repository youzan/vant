import { later } from '../../../test';
import {
  showDialog,
  closeDialog,
  setDialogDefaultOptions,
  resetDialogDefaultOptions,
} from '../function-call';

test('should update default options when calling setDefaultOptions method', async () => {
  const wrapper = document.createElement('div');
  const text = 'hello world';

  setDialogDefaultOptions({ message: text });
  showDialog({ teleport: wrapper });
  await later();
  const dialog = wrapper.querySelector('.van-dialog');

  assert(dialog);
  expect(dialog.innerHTML.includes(text)).toBeTruthy();

  resetDialogDefaultOptions();
  showDialog({ teleport: wrapper });
  await later();
  const dialog2 = wrapper.querySelector('.van-dialog');

  assert(dialog2);
  expect(dialog2.innerHTML.includes(text)).toBeFalsy();
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
  const dialog = wrapper.querySelector('.van-dialog') as HTMLElement;

  expect(dialog.style.display).toEqual('');

  closeDialog();
  await later();
  expect(dialog.className.split(' ')).toContain(
    'van-dialog-bounce-leave-active',
  );
});

test('should allow to render JSX message', async () => {
  const wrapper = document.createElement('div');
  showDialog({
    message: () => <div>foo</div>,
    teleport: wrapper,
  });

  await later();
  const dialog = wrapper.querySelector('.van-dialog') as HTMLElement;
  expect(
    dialog.querySelector('.van-dialog__message')?.outerHTML,
  ).toMatchSnapshot();
});
