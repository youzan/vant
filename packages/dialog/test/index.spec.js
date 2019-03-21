import Vue from 'vue';
import Dialog from '..';
import DialogVue from '../Dialog';
import { mount, later, trigger, transitionStub } from '../../../test/utils';

transitionStub();

test('Dialog function call', async () => {
  Dialog.close();
  Dialog.alert({
    message: '1',
    showCancelButton: true
  });

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
  expect(callback).toHaveBeenCalledWith('cancel');
  Dialog.confirm().then(callback);
  document.querySelector('.van-dialog__confirm').click();

  await later();
  expect(callback).toHaveBeenNthCalledWith(2, 'confirm');
});

test('before close', () => {
  const wrapper = mount(DialogVue, {
    propsData: {
      value: true,
      showCancelButton: true,
      closeOnClickOverlay: true,
      beforeClose: (action, done) => done(false)
    }
  });

  const cancel = wrapper.find('.van-dialog__cancel');

  cancel.trigger('click');
  expect(wrapper.emitted('input')).toBeFalsy();

  wrapper.setProps({
    beforeClose: (action, done) => {
      if (action === 'cancel') {
        done();
      }
    }
  });

  const overlay = document.querySelector('.van-overlay');
  trigger(overlay, 'click');
  expect(wrapper.emitted('input')).toBeFalsy();

  cancel.trigger('click');
  expect(wrapper.emitted('input')[0]).toBeTruthy();
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
