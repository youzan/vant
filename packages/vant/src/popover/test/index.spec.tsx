import { Popover } from '..';
import { later, mount, trigger } from '../../../test';

const baseActions = [
  { text: 'Option 1' },
  { text: 'Option 2' },
  { text: 'Option 3' },
];

test('should toggle popover when trigger is "click" and the reference element is clicked', async () => {
  const wrapper = mount(Popover, {
    props: {
      show: true,
      trigger: 'manual',
    },
    slots: {
      reference: () => <div class="reference"></div>,
    },
  });

  await wrapper.find('.reference').trigger('click');
  expect(wrapper.emitted('update:show')).toBeFalsy();

  await wrapper.setProps({ trigger: 'click' });
  await wrapper.find('.reference').trigger('click');
  expect(wrapper.emitted('update:show')![0]).toEqual([false]);
});

test('should emit select event when clicking the action', async () => {
  const wrapper = mount(Popover, {
    props: {
      show: true,
      teleport: null,
      actions: baseActions,
    },
  });

  await later();
  await wrapper.find('.van-popover__action').trigger('click');
  expect(wrapper.emitted('select')![0]).toEqual([baseActions[0], 0]);
});

test('should not emit select event when the action is disabled', () => {
  const wrapper = mount(Popover, {
    props: {
      show: true,
      teleport: null,
      actions: [{ text: 'Option', disabled: true }],
    },
  });

  wrapper.find('.van-popover__action').trigger('click');
  expect(wrapper.emitted('select')).toBeFalsy();
});

test('should close popover when clicking the action', async () => {
  const wrapper = mount(Popover, {
    props: {
      show: true,
      teleport: null,
      actions: baseActions,
    },
  });

  await wrapper.find('.van-popover__action').trigger('click');
  expect(wrapper.emitted('update:show')![0]).toEqual([false]);

  await wrapper.setProps({ closeOnClickAction: false });
  await wrapper.find('.van-popover__action').trigger('click');
  expect(wrapper.emitted('update:show')).toHaveLength(1);
});

test('should allow to custom the className of action', () => {
  const wrapper = mount(Popover, {
    props: {
      show: true,
      teleport: null,
      actions: [{ text: 'Option', className: 'foo' }],
    },
  });

  expect(wrapper.find('.van-popover__action').html()).toMatchSnapshot();
});

test('should allow to custom the color of action test', () => {
  const wrapper = mount(Popover, {
    props: {
      show: true,
      teleport: null,
      actions: [{ text: 'Option', color: 'red' }],
    },
  });

  expect(wrapper.find('.van-popover__action').style.color).toEqual('red');
});

test('should locate to reference element when showed', async () => {
  const root = document.createElement('div');
  const wrapper = mount(Popover, {
    props: {
      teleport: root,
    },
  });

  expect(root.innerHTML).toMatchSnapshot();

  await wrapper.setProps({ show: true });
  await later();
  expect(root.innerHTML).toMatchSnapshot();

  await wrapper.setProps({ show: false });
  expect(root.innerHTML).toMatchSnapshot();
});

test('should watch placement prop and update location', async () => {
  const root = document.createElement('div');
  const wrapper = mount(Popover, {
    props: {
      show: true,
      teleport: root,
    },
  });

  await wrapper.setProps({
    placement: 'top',
  });

  await later();
  expect(root.innerHTML).toMatchSnapshot();
});

test('should close popover when touch outside content', async () => {
  const root = document.createElement('div');
  const wrapper = mount(Popover, {
    props: {
      show: true,
      teleport: root,
    },
  });

  const popover = root.querySelector('.van-popover');
  await trigger(popover!, 'touchstart');
  expect(wrapper.emitted('update:show')).toBeFalsy();

  document.body.appendChild(root);
  await trigger(document.body, 'touchstart');
  expect(wrapper.emitted('update:show')![0]).toEqual([false]);
});

test('should emit clickOverlay event when overlay is clicked', () => {
  const onClickOverlay = vi.fn();
  const wrapper = mount(Popover, {
    props: {
      show: true,
      overlay: true,
      teleport: null,
      onClickOverlay,
    },
  });

  wrapper.find('.van-overlay').trigger('click');
  expect(onClickOverlay).toHaveBeenCalledTimes(1);
});

test('should not close Popover when overlay is clicked and close-on-click-overlay is false', () => {
  const wrapper = mount(Popover, {
    props: {
      show: true,
      overlay: true,
      closeOnClickOverlay: false,
    },
  });

  const overlay = document.querySelector('.van-overlay')!;
  trigger(overlay, 'touchstart');
  expect(wrapper.emitted('update:show')).toBeFalsy();
});

test('should not close Popover when outside is clicked and close-on-click-outside is false', () => {
  const wrapper = mount(Popover, {
    props: {
      show: true,
      closeOnClickOutside: false,
    },
  });

  trigger(document.body, 'touchstart');
  expect(wrapper.emitted('update:show')).toBeFalsy();
});

test('should change icon class prefix when using icon-prefix prop', () => {
  const wrapper = mount(Popover, {
    props: {
      show: true,
      teleport: null,
      iconPrefix: 'my-icon',
      actions: [{ icon: 'success', text: 'foo' }],
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should allow to hide arrow', () => {
  const wrapper = mount(Popover, {
    props: {
      show: true,
      teleport: null,
      showArrow: false,
    },
  });

  expect(wrapper.find('.van-popover__arrow').exists()).toBeFalsy();
});

test('should render action slot correctly', () => {
  const wrapper = mount(Popover, {
    props: {
      show: true,
      actions: [{ text: 'Text' }],
      teleport: null,
    },
    slots: {
      action: ({ action, index }) => `name: ${action.text}, index: ${index}`,
    },
  });

  expect(wrapper.find('.van-popover__action').html()).toMatchSnapshot();
});

test('should add "van-popover__content--horizontal" class when actions-direction prop is horizontal', () => {
  const wrapper = mount(Popover, {
    props: {
      show: true,
      actions: baseActions,
      actionsDirection: 'horizontal',
      teleport: null,
    },
  });

  expect(wrapper.find('.van-popover__content').classes()).toContain(
    'van-popover__content--horizontal',
  );
});
