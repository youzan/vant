import Vue from 'vue';
import Dialog from '..';
import DialogVue from '../Dialog';
import { mount, later, transitionStub } from '../../../test/utils';

transitionStub();

test('Dialog function call', async () => {
  Dialog.close();
  Dialog.alert('1');

  await later();

  const callback = jest.fn();
  const dialog = document.querySelector('.van-dialog');

  expect(dialog.style.display).toEqual('');
  Dialog.close();

  await later();
  expect(dialog.style.display).toEqual('none');
  Dialog.confirm().catch(callback);
  document.querySelector('.van-dialog__cancel').click();

  await later();
  expect(callback.mock.calls[0][0]).toEqual('cancel');
  Dialog.confirm().then(callback);
  document.querySelector('.van-dialog__confirm').click();

  await later();
  expect(callback.mock.calls[1][0]).toEqual('confirm');
});

test('before close', () => {
  const wrapper = mount(DialogVue, {
    propsData: {
      value: true,
      beforeClose: (action, done) => done(false)
    }
  });

  const cancel = wrapper.find('.van-dialog__cancel');

  cancel.trigger('click');
  expect(wrapper.emitted('input')).toBeFalsy();

  wrapper.setProps({
    beforeClose: (action, done) => done()
  });
  cancel.trigger('click');
  expect(wrapper.emitted('input')).toBeTruthy();
});

test('set default options', () => {
  Dialog.setDefaultOptions({ lockScroll: false });
  expect(Dialog.currentOptions.lockScroll).toBeFalsy();
  Dialog.resetDefaultOptions();
  expect(Dialog.currentOptions.lockScroll).toBeTruthy();
});

test('register component', () => {
  Vue.use(Dialog);
  expect(Vue.component(DialogVue.name)).toBeTruthy();
});
