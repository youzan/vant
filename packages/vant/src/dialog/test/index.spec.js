import Dialog from '../Dialog';
import { mount } from '../../../test';

test('should allow to intercept closing action with before-close prop', async () => {
  const wrapper = mount(Dialog, {
    props: {
      show: true,
      showCancelButton: true,
      beforeClose: (action) => action === 'cancel',
    },
  });

  const confirm = wrapper.find('.van-dialog__confirm');
  confirm.trigger('click');
  expect(wrapper.emitted('update:show')).toBeFalsy();

  const cancel = wrapper.find('.van-dialog__cancel');
  cancel.trigger('click');
  expect(wrapper.emitted('update:show')).toBeTruthy();
});

test('should change confirm button color when using confirm-button-color prop', () => {
  const wrapper = mount(Dialog, {
    props: {
      show: true,
      confirmButtonColor: 'red',
    },
  });
  const confirmButton = wrapper.find('.van-dialog__confirm');
  expect(confirmButton.style.color).toEqual('red');
});

test('should change cancel button color when using cancel-button-color prop', () => {
  const wrapper = mount(Dialog, {
    props: {
      show: true,
      showCancelButton: true,
      cancelButtonColor: 'red',
    },
  });
  const cancelButton = wrapper.find('.van-dialog__cancel');
  expect(cancelButton.style.color).toEqual('red');
});

test('should render button text correctly', () => {
  const wrapper = mount(Dialog, {
    props: {
      show: true,
      showCancelButton: true,
      cancelButtonText: 'Custom Cancel',
      confirmButtonText: 'Custom Confirm',
    },
  });
  expect(wrapper.find('.van-dialog__footer').html()).toMatchSnapshot();
});

test('should render default slot correctly', () => {
  const wrapper = mount(Dialog, {
    props: {
      show: true,
    },
    slots: {
      default: () => 'Custom Message',
    },
  });
  expect(wrapper.find('.van-dialog__content').html()).toMatchSnapshot();
});

test('should render title slot correctly', () => {
  const wrapper = mount(Dialog, {
    props: {
      show: true,
    },
    slots: {
      title: () => 'Custom Title',
    },
  });
  expect(wrapper.find('.van-dialog__header').html()).toMatchSnapshot();
});

test('should render message as html when using allow-html prop', async () => {
  const wrapper = mount(Dialog, {
    props: {
      show: true,
      message: '<span class="foo">text</span>',
      allowHtml: false,
    },
  });

  expect(wrapper.find('.foo').exists()).toBeFalsy();

  await wrapper.setProps({ allowHtml: true });
  expect(wrapper.find('.foo').exists()).toBeTruthy();
});

test('should emit open event when show prop is set to true', async () => {
  const onOpen = vi.fn();
  const wrapper = mount(Dialog, {
    props: {
      onOpen,
    },
  });

  await wrapper.setProps({ show: true });
  expect(onOpen).toHaveBeenCalledTimes(1);
});

test('should emit close event when show prop is set to false', async () => {
  const onClose = vi.fn();
  const wrapper = mount(Dialog, {
    props: {
      show: true,
      onClose,
    },
  });

  await wrapper.setProps({ show: false });
  expect(onClose).toHaveBeenCalledTimes(1);
});

test('should update width when using width prop', async () => {
  const wrapper = mount(Dialog, {
    props: {
      show: true,
      width: 200,
    },
  });

  const dialog = wrapper.find('.van-dialog').element;
  expect(dialog.style.width).toEqual('200px');
});

test('should render footer slot correctly', () => {
  const wrapper = mount(Dialog, {
    props: {
      show: true,
      message: 'message',
    },
    slots: {
      footer: () => 'Custom Footer',
    },
  });
  expect(wrapper.find('.van-dialog').html()).toMatchSnapshot();
});

test('should allow to disable confirm button', () => {
  const wrapper = mount(Dialog, {
    props: {
      show: true,
      message: 'message',
      confirmButtonDisabled: true,
    },
  });
  expect(wrapper.find('.van-dialog__confirm').classes()).toContain(
    'van-button--disabled',
  );
});

test('should allow to disable cancel button', () => {
  const wrapper = mount(Dialog, {
    props: {
      show: true,
      showCancelButton: true,
      message: 'message',
      cancelButtonDisabled: true,
    },
  });
  expect(wrapper.find('.van-dialog__cancel').classes()).toContain(
    'van-button--disabled',
  );
});
