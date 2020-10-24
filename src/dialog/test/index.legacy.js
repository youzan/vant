import Vue from 'vue';
import Dialog from '..';
import DialogComponent from '../Dialog';
import { mount, later, trigger } from '../../../test';

test('Dialog function call', async () => {
  Dialog.close();
  Dialog.alert({
    message: '1',
    showCancelButton: true,
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
  const wrapper = mount(DialogComponent, {
    propsData: {
      value: true,
      showCancelButton: true,
      closeOnClickOverlay: true,
      beforeClose: (action, done) => done(false),
    },
  });

  const cancel = wrapper.find('.van-dialog__cancel');

  cancel.trigger('click');
  expect(wrapper.emitted('input')).toBeFalsy();

  wrapper.setProps({
    beforeClose: (action, done) => {
      if (action === 'cancel') {
        done();
      }
    },
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
  expect(Vue.component(DialogComponent.name)).toBeTruthy();
});

test('button color', () => {
  const wrapper = mount(DialogComponent, {
    propsData: {
      value: true,
      showCancelButton: true,
      cancelButtonColor: 'white',
      confirmButtonColor: 'red',
    },
  });
  expect(wrapper).toMatchSnapshot();
});

test('button text', () => {
  const wrapper = mount(DialogComponent, {
    propsData: {
      value: true,
      showCancelButton: true,
      cancelButtonText: 'Custom cancel',
      confirmButtonText: 'Custom confirm',
    },
  });
  expect(wrapper).toMatchSnapshot();
});

test('dialog component', () => {
  expect(Dialog.Component).toEqual(DialogComponent);
});

test('default slot', () => {
  const wrapper = mount(DialogComponent, {
    propsData: {
      value: true,
    },
    scopedSlots: {
      default: () => 'Custom Message',
    },
  });
  expect(wrapper).toMatchSnapshot();
});

test('title slot', () => {
  const wrapper = mount(DialogComponent, {
    propsData: {
      value: true,
    },
    scopedSlots: {
      title: () => 'Custom Title',
    },
  });
  expect(wrapper).toMatchSnapshot();
});

test('allow-html prop', () => {
  const wrapper = mount(DialogComponent, {
    propsData: {
      value: true,
      message: '<span>text</span>',
      allowHtml: false,
    },
  });
  expect(wrapper.find('.van-dialog__message')).toMatchSnapshot();
});

test('open & close event', () => {
  const wrapper = mount(DialogComponent);
  wrapper.vm.value = true;
  expect(wrapper.emitted('open')).toBeTruthy();
  wrapper.vm.value = false;
  expect(wrapper.emitted('close')).toBeTruthy();
});

test('width prop', () => {
  const wrapper = mount(DialogComponent, {
    propsData: {
      value: true,
      width: 200,
    },
  });

  expect(wrapper.element.style.width).toEqual('200px');
});
