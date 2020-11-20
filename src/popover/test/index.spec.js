import Popover from '..';
import { later, mount, trigger } from '../../../test';

const baseActions = [
  { text: 'Option 1' },
  { text: 'Option 2' },
  { text: 'Option 3' },
];

test('should emit select event when clicking the action', async () => {
  const wrapper = mount(Popover, {
    propsData: {
      show: true,
      teleport: null,
      actions: baseActions,
    },
  });

  await later();
  wrapper.find('.van-popover__action').trigger('click');
  expect(wrapper.emitted('select')[0]).toEqual([baseActions[0], 0]);
});

test('should not emit select event when the action is disabled', () => {
  const wrapper = mount(Popover, {
    propsData: {
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
    propsData: {
      show: true,
      teleport: null,
      actions: baseActions,
    },
  });

  wrapper.find('.van-popover__action').trigger('click');
  expect(wrapper.emitted('update:show')[0][0]).toEqual(false);

  await wrapper.setProps({ closeOnClickAction: false });
  wrapper.find('.van-popover__action').trigger('click');
  expect(wrapper.emitted('update:show').length).toEqual(1);
});

test('should allow to custom the className of action', () => {
  const wrapper = mount(Popover, {
    propsData: {
      show: true,
      teleport: null,
      actions: [{ text: 'Option', className: 'foo' }],
    },
  });

  expect(wrapper.find('.van-popover__action').html()).toMatchSnapshot();
});

test('should locate to reference element when showed', async () => {
  const root = document.createElement('div');
  const wrapper = mount(Popover, {
    propsData: {
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
    propsData: {
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
    propsData: {
      show: true,
      teleport: root,
    },
  });

  const popover = root.querySelector('.van-popover');
  trigger(popover, 'touchstart');
  expect(wrapper.emitted('update:show')).toBeFalsy();

  document.body.appendChild(root);
  trigger(document.body, 'touchstart');
  expect(wrapper.emitted('update:show')[0][0]).toEqual(false);
});
