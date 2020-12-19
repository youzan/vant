import Popover from '..';
import { later, mount, trigger } from '../../../test';

const baseActions = [
  { text: 'Option 1' },
  { text: 'Option 2' },
  { text: 'Option 3' },
];

test('should toggle popover when trigger is "click" and the reference element is clicked', () => {
  const wrapper = mount(Popover, {
    propsData: {
      value: true,
    },
    scopedSlots: {
      reference: '<div class="reference"></div>',
    },
  });

  wrapper.find('.reference').trigger('click');
  expect(wrapper.emitted('input')).toBeFalsy();

  wrapper.setProps({ trigger: 'click' });
  wrapper.find('.reference').trigger('click');
  expect(wrapper.emitted('input')[0][0]).toEqual(false);
});

test('should emit select event when clicking the action', () => {
  const wrapper = mount(Popover, {
    propsData: {
      value: true,
      actions: baseActions,
    },
  });

  wrapper.find('.van-popover__action').trigger('click');
  expect(wrapper.emitted('select')[0]).toEqual([baseActions[0], 0]);
});

test('should not emit select event when the action is disabled', () => {
  const wrapper = mount(Popover, {
    propsData: {
      value: true,
      actions: [{ text: 'Option', disabled: true }],
    },
  });

  wrapper.find('.van-popover__action').trigger('click');
  expect(wrapper.emitted('select')).toBeFalsy();
});

test('should close popover when clicking the action', () => {
  const wrapper = mount(Popover, {
    propsData: {
      value: true,
      actions: baseActions,
    },
  });

  wrapper.find('.van-popover__action').trigger('click');
  expect(wrapper.emitted('input')[0][0]).toEqual(false);

  wrapper.setProps({ closeOnClickAction: false });
  wrapper.find('.van-popover__action').trigger('click');
  expect(wrapper.emitted('input').length).toEqual(1);
});

test('should allow to custom the className of action', () => {
  const wrapper = mount(Popover, {
    propsData: {
      value: true,
      actions: [{ text: 'Option', className: 'foo' }],
    },
  });

  expect(wrapper.find('.van-popover__action').html()).toMatchSnapshot();
});

test('should not init popper.js instance before showed', async () => {
  const wrapper = mount(Popover);
  expect(wrapper.vm.popper).toBeFalsy();
  wrapper.destroy();
});

test('should destroy popper.js instance when unmouted', async () => {
  const wrapper = mount(Popover, {
    propsData: {
      value: true,
    },
  });

  await later();
  expect(wrapper.vm.popper).toBeTruthy();
  wrapper.destroy();
  expect(wrapper.vm.popper).toEqual(null);
});

test('should locate to reference element when showed', async () => {
  const root = document.createElement('div');
  const wrapper = mount(Popover, {
    propsData: {
      getContainer: () => root,
    },
  });

  expect(root.innerHTML).toMatchSnapshot();

  wrapper.setProps({ value: true });
  await later();
  expect(root.innerHTML).toMatchSnapshot();

  wrapper.setProps({ value: false });
  expect(root.innerHTML).toMatchSnapshot();
});

test('should watch placement prop and update location', async () => {
  const root = document.createElement('div');
  const wrapper = mount(Popover, {
    propsData: {
      value: true,
      getContainer: () => root,
    },
  });

  wrapper.setProps({
    placement: 'top',
  });

  await later();
  expect(root.innerHTML).toMatchSnapshot();
});

test('should close popover when touch outside content', async () => {
  const root = document.createElement('div');
  const wrapper = mount(Popover, {
    propsData: {
      value: true,
      getContainer: () => root,
    },
  });

  const popover = root.querySelector('.van-popover');
  trigger(popover, 'touchstart');
  expect(wrapper.emitted('input')).toBeFalsy();

  document.body.appendChild(root);
  trigger(document.body, 'touchstart');
  expect(wrapper.emitted('input')[0][0]).toEqual(false);
});
