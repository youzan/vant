import { Radio } from '..';
import { mount } from '../../../test';

test('should emit "update:modelValue" event when radio icon or label is clicked', async () => {
  const props = { name: 'a' };
  const wrapper = mount(Radio, {
    props,
    slots: {
      default: () => 'Label',
    },
  });

  const icon = wrapper.find('.van-radio__icon');
  const label = wrapper.find('.van-radio__label');
  icon.trigger('click');
  expect(wrapper.emitted('update:modelValue')![0]).toEqual([props.name]);

  label.trigger('click');
  expect(wrapper.emitted('update:modelValue')![0]).toEqual([props.name]);
});

test('should not emit "update:modelValue" event when radio icon is disabled and clicked', () => {
  const wrapper = mount(Radio, {
    props: {
      disabled: true,
    },
  });

  wrapper.find('.van-radio__icon').trigger('click');
  expect(wrapper.emitted('update:modelValue')).toBeFalsy();
});

test('should render "van-radio--label-disabled" class when using label-disabled prop', () => {
  const wrapper = mount(Radio, {
    props: {
      labelDisabled: true,
    },
    slots: {
      default: () => 'Label',
    },
  });

  expect(wrapper.classes()).toContain('van-radio--label-disabled');
});

test('should not emit "update:modelValue" event when label is disabled and clicked', () => {
  const wrapper = mount(Radio, {
    props: {
      labelDisabled: true,
    },
    slots: {
      default: () => 'Label',
    },
  });

  const label = wrapper.find('.van-radio__label');
  label.trigger('click');
  expect(wrapper.emitted('update:modelValue')).toBeFalsy();
});

test('should adjust label position when using label-position prop', () => {
  const wrapper = mount(Radio, {
    props: {
      labelPosition: 'left',
    },
    slots: {
      default: () => 'Label',
    },
  });

  const label = wrapper.find('.van-radio__label');
  expect(label.classes()).toContain('van-radio__label--left');
});

test('should emit click event when radio icon is clicked', async () => {
  const onClick = vi.fn();
  const wrapper = mount(Radio, {
    props: {
      onClick,
    },
  });

  wrapper.trigger('click');
  expect(onClick).toHaveBeenCalledTimes(1);

  const icon = wrapper.find('.van-radio__icon');
  icon.trigger('click');
  expect(onClick).toHaveBeenCalledTimes(2);
});
