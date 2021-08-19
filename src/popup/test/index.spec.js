import { nextTick } from 'vue';
import { mount, triggerDrag } from '../../../test';
import { Popup } from '..';

let wrapper;
afterEach(() => {
  wrapper.unmount();
});

test('should lazy render content by default', async () => {
  wrapper = mount(Popup, {
    slots: {
      default: () => <div class="foo" />,
    },
  });

  expect(wrapper.find('.foo').exists()).toBeFalsy();

  await wrapper.setProps({ show: true });
  expect(wrapper.find('.foo').exists()).toBeTruthy();
});

test('should change z-index when using z-index prop', async () => {
  wrapper = mount(Popup, {
    props: {
      show: true,
      zIndex: 10,
    },
  });

  await nextTick();
  expect(wrapper.find('.van-popup').style.zIndex).toEqual('11');
  expect(wrapper.find('.van-overlay').style.zIndex).toEqual('11');
});

test('should lock scroll when showed', async () => {
  wrapper = mount(Popup);
  expect(document.body.classList.contains('van-overflow-hidden')).toBeFalsy();

  await wrapper.setProps({ show: true });
  expect(document.body.classList.contains('van-overflow-hidden')).toBeTruthy();
});

test('should lock page scroll by default', () => {
  const wrapper1 = mount(Popup, {
    props: {
      show: true,
    },
  });
  expect(document.body.classList.contains('van-overflow-hidden')).toBeTruthy();
  triggerDrag(document, 0, 100);
  triggerDrag(document, 0, -150);

  const wrapper2 = mount(Popup, {
    props: {
      show: true,
    },
  });
  wrapper1.unmount();
  expect(document.body.classList.contains('van-overflow-hidden')).toBeTruthy();

  wrapper2.unmount();
  expect(document.body.classList.contains('van-overflow-hidden')).toBeFalsy();
});

test('should allow to using teleport prop', async () => {
  const div = document.createElement('div');
  mount({
    render() {
      return <Popup show teleport={div} />;
    },
  });

  expect(div.querySelector('.van-popup')).toBeTruthy();
});

test('should render overlay by default', () => {
  wrapper = mount(Popup, {
    props: {
      show: true,
    },
  });
  expect(wrapper.find('.van-overlay').exists()).toBeTruthy();
});

test('should not render overlay when overlay prop is false', () => {
  wrapper = mount(Popup, {
    props: {
      show: true,
      overlay: false,
    },
  });
  expect(wrapper.find('.van-overlay').exists()).toBeFalsy();
});

test('should emit click-overlay event when overlay is clicked', async () => {
  wrapper = mount(Popup, {
    props: {
      show: true,
    },
  });
  const overlay = wrapper.find('.van-overlay');
  overlay.trigger('click');
  expect(wrapper.emitted('click-overlay').length).toEqual(1);
});

test('should emit open event when show prop is set to true', async () => {
  const onOpen = jest.fn();
  wrapper = mount(Popup, {
    props: {
      onOpen,
    },
  });

  await wrapper.setProps({ show: true });
  expect(onOpen).toHaveBeenCalledTimes(1);
});

test('should emit close event when show prop is set to false', async () => {
  const onClose = jest.fn();
  wrapper = mount(Popup, {
    props: {
      show: true,
      onClose,
    },
  });

  await wrapper.setProps({ show: false });
  expect(onClose).toHaveBeenCalledTimes(1);
});

test('should change duration when using duration prop', () => {
  wrapper = mount(Popup, {
    props: {
      show: true,
      duration: 0.5,
    },
  });

  const popup = wrapper.find('.van-popup').element;
  const overlay = wrapper.find('.van-overlay').element;
  expect(popup.style.animationDuration).toEqual('0.5s');
  expect(overlay.style.animationDuration).toEqual('0.5s');
});

test('should have "van-popup--round" class when setting the round prop', () => {
  wrapper = mount(Popup, {
    props: {
      show: true,
      round: true,
    },
  });

  expect(wrapper.find('.van-popup--round').exists()).toBeTruthy();
});

test('should render close icon when using closeable prop', () => {
  wrapper = mount(Popup, {
    props: {
      show: true,
      closeable: true,
    },
  });

  wrapper.find('.van-popup__close-icon').trigger('click');
  expect(wrapper.emitted('update:show')[0][0]).toEqual(false);
});

test('should emit click-close-icon event when close icon is clicked', () => {
  wrapper = mount(Popup, {
    propsData: {
      show: true,
      closeable: true,
    },
  });

  wrapper.find('.van-popup__close-icon').trigger('click');
  expect(wrapper.emitted('click-close-icon').length).toEqual(1);
});

test('should render correct close icon when using close-icon prop', () => {
  wrapper = mount(Popup, {
    props: {
      show: true,
      closeable: true,
      closeIcon: 'success',
    },
  });

  expect(wrapper.find('.van-popup__close-icon').html()).toMatchSnapshot();
});

test('should change icon class prefix when using icon-prefix prop', () => {
  const wrapper = mount(Popup, {
    props: {
      show: true,
      closeable: true,
      iconPrefix: 'my-icon',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render overlay-content slot correctly', () => {
  const wrapper = mount(Popup, {
    props: {
      show: true,
    },
    slots: {
      'overlay-content': () => 'Custom Overlay Content',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should allow to prevent close with before-close prop', async () => {
  const wrapper = mount(Popup, {
    props: {
      show: true,
      beforeClose: () => false,
    },
  });

  await wrapper.find('.van-overlay').trigger('click');
  expect(wrapper.emitted('update:show')).toBeFalsy();

  await wrapper.setProps({ beforeClose: () => true });
  await wrapper.find('.van-overlay').trigger('click');
  expect(wrapper.emitted('update:show')[0]).toEqual([false]);
});

test('should not call before-close when show prop becomes false', async () => {
  const beforeClose = jest.fn();
  const wrapper = mount(Popup, {
    props: {
      show: true,
      beforeClose,
    },
  });

  await wrapper.setProps({ show: false });
  expect(beforeClose).toHaveBeenCalledTimes(0);
});
