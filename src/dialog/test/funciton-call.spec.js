import { createApp } from 'vue';
import { later } from '../../../test';
import { Dialog } from '../function-call';
import DialogComponent from '../Dialog';

test('should update default options when calling setDefaultOptions method', () => {
  Dialog.setDefaultOptions({ lockScroll: false });
  expect(Dialog.currentOptions.lockScroll).toBeFalsy();
  Dialog.resetDefaultOptions();
  expect(Dialog.currentOptions.lockScroll).toBeTruthy();
});

test('should expose Dialog component', () => {
  expect(Dialog.Component.name).toEqual('van-dialog');
});

test('should register component to app', () => {
  const app = createApp();
  app.use(Dialog);
  expect(app.component(DialogComponent.name)).toBeTruthy();
});

test('should render dialog after calling Dialog', async () => {
  const wrapper = document.createElement('div');
  Dialog.alert({
    message: '1',
    teleport: wrapper,
  });

  await later();
  const dialog = wrapper.querySelector('.van-dialog');
  expect(dialog).toBeTruthy();
});

test('should close dialog after calling Dialog.call', async () => {
  const wrapper = document.createElement('div');
  Dialog.alert({
    message: '1',
    teleport: wrapper,
  });

  await later();
  const dialog = wrapper.querySelector('.van-dialog');
  expect(dialog.style.display).toEqual('');

  Dialog.close();
  await later();
  expect(dialog.className.split(' ')).toContain(
    'van-dialog-bounce-leave-active'
  );
});

test('should allow to render JSX message', async () => {
  const wrapper = document.createElement('div');
  Dialog.alert({
    message: () => <div>foo</div>,
    teleport: wrapper,
  });

  await later();
  const dialog = wrapper.querySelector('.van-dialog');
  expect(
    dialog.querySelector('.van-dialog__message').outerHTML
  ).toMatchSnapshot();
});
