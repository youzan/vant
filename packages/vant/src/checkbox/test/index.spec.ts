import { Checkbox } from '..';
import { mount } from '../../../test';

test('should emit "update:modelValue" event when checkbox icon is clicked', async () => {
  const wrapper = mount(Checkbox);

  const icon = wrapper.find('.van-checkbox__icon');
  icon.trigger('click');
  expect(wrapper.emitted('update:modelValue')![0]).toEqual([true]);

  await wrapper.setProps({ modelValue: true });
  icon.trigger('click');
  expect(wrapper.emitted('update:modelValue')![1]).toEqual([false]);
});

test('should emit change event when modelValue is changed', async () => {
  const wrapper = mount(Checkbox);

  const icon = wrapper.find('.van-checkbox__icon');
  icon.trigger('click');
  await wrapper.setProps({ modelValue: true });
  expect(wrapper.emitted('change')![0]).toEqual([true]);

  icon.trigger('click');
  await wrapper.setProps({ modelValue: false });
  expect(wrapper.emitted('change')![1]).toEqual([false]);
});

test('should not emit "update:modelValue" event when checkbox icon is disabled and clicked', () => {
  const wrapper = mount(Checkbox, {
    props: {
      disabled: true,
    },
  });

  wrapper.find('.van-checkbox__icon').trigger('click');
  expect(wrapper.emitted('update:modelValue')).toBeFalsy();
});

test('should render "van-checkbox--label-disabled" class when using label-disabled prop', () => {
  const wrapper = mount(Checkbox, {
    props: {
      labelDisabled: true,
    },
    slots: {
      default: () => 'Label',
    },
  });

  expect(wrapper.classes()).toContain('van-checkbox--label-disabled');
});

test('should emit "update:modelValue" event when label is clicked', () => {
  const wrapper = mount(Checkbox, {
    slots: {
      default: () => 'Label',
    },
  });

  const icon = wrapper.find('.van-checkbox__label');
  icon.trigger('click');
  expect(wrapper.emitted('update:modelValue')![0]).toEqual([true]);
});

test('should not emit "update:modelValue" event when label is disabled and clicked', () => {
  const wrapper = mount(Checkbox, {
    props: {
      labelDisabled: true,
    },
    slots: {
      default: () => 'Label',
    },
  });

  const icon = wrapper.find('.van-checkbox__label');
  icon.trigger('click');
  expect(wrapper.emitted('update:modelValue')).toBeFalsy();
});

test('should adjust label position when using label-position prop', () => {
  const wrapper = mount(Checkbox, {
    props: {
      labelPosition: 'left',
    },
    slots: {
      default: () => 'Label',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should emit click event when checkbox icon is clicked', async () => {
  const onClick = vi.fn();
  const wrapper = mount(Checkbox, {
    props: {
      onClick,
    },
  });

  wrapper.trigger('click');
  expect(onClick).toHaveBeenCalledTimes(1);

  const icon = wrapper.find('.van-checkbox__icon');
  icon.trigger('click');
  expect(onClick).toHaveBeenCalledTimes(2);
});

test('should render icon slot correctly', async () => {
  const wrapper = mount(Checkbox, {
    slots: {
      icon: ({ checked, disabled }) =>
        `checked: ${checked}, disabled: ${disabled}`,
    },
  });

  expect(wrapper.find('.van-checkbox__icon').html()).toMatchSnapshot();
});

test('should render label slot correctly', async () => {
  const slot = vi.fn();
  const wrapper = mount(Checkbox, {
    slots: {
      default: slot,
    },
  });

  expect(slot.mock.calls[0]).toEqual([{ checked: false, disabled: false }]);

  await wrapper.setProps({ modelValue: true });
  expect(slot.mock.calls[1]).toEqual([{ checked: true, disabled: false }]);

  await wrapper.setProps({ disabled: true });
  expect(slot.mock.calls[2]).toEqual([{ checked: true, disabled: true }]);
});
