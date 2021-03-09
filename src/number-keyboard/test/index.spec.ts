import { NumberKeyboard } from '..';
import { mount, trigger, later } from '../../../test';

function clickKey(key: Parameters<typeof trigger>[0]) {
  trigger(key, 'touchstart');
  trigger(key, 'touchend');
}

test('should emit input event after clicking number key', () => {
  const wrapper = mount(NumberKeyboard);
  clickKey(wrapper.findAll('.van-key')[0]);
  expect(wrapper.emitted('input')![0]).toEqual([1]);
  wrapper.unmount();
});

test('should emit delete event after clicking delete key', () => {
  const wrapper = mount(NumberKeyboard);
  clickKey(wrapper.findAll('.van-key')[11]);
  expect(wrapper.emitted('delete')).toBeTruthy();
});

test('should emit blur event after clicking collapse key', () => {
  const wrapper = mount(NumberKeyboard, {
    props: {
      show: true,
    },
  });
  clickKey(wrapper.findAll('.van-key')[9]);
  expect(wrapper.emitted('blur')).toBeTruthy();
});

test('should should emit blur event when hidden', () => {
  const wrapper = mount(NumberKeyboard);
  clickKey(wrapper.findAll('.van-key')[9]);
  expect(wrapper.emitted('input')).toBeFalsy();
  expect(wrapper.emitted('blur')).toBeFalsy();
});

test('should emit close event after clicking close button', () => {
  const wrapper = mount(NumberKeyboard, {
    props: {
      show: true,
      theme: 'custom',
    },
  });

  clickKey(wrapper.findAll('.van-key')[12]);
  expect(wrapper.emitted('blur')).toBeTruthy();
  expect(wrapper.emitted('close')).toBeTruthy();
});

test('should emit show/blur event when visibility changed and transition is disabled', async () => {
  const wrapper = mount(NumberKeyboard, {
    props: {
      transition: false,
    },
  });

  wrapper.setProps({ show: true });
  await later();
  expect(wrapper.emitted('show')).toBeTruthy();
  wrapper.setProps({ show: false });
  await later();
  expect(wrapper.emitted('hide')).toBeTruthy();
});

test('should render title and close button correctly', () => {
  const wrapper = mount(NumberKeyboard, {
    props: {
      title: 'Title',
      closeButtonText: 'Close',
    },
  });

  expect(wrapper.find('.van-number-keyboard__header').html()).toMatchSnapshot();
});

test('should render title-left slot correctly', () => {
  const wrapper = mount(NumberKeyboard, {
    slots: {
      'title-left': () => 'Custom Title Left',
    },
  });

  expect(wrapper.find('.van-number-keyboard__header').html()).toMatchSnapshot();
});

test('should render extra key correctly when using extra-key prop', () => {
  const wrapper = mount(NumberKeyboard, {
    props: {
      extraKey: 'foo',
    },
  });

  expect(wrapper.findAll('.van-key')[9].html()).toMatchSnapshot();
});

test('should render extra-key slot correctly', () => {
  const wrapper = mount(NumberKeyboard, {
    slots: {
      'extra-key': () => 'Custom Extra Key',
    },
  });

  expect(wrapper.findAll('.van-key')[9].html()).toMatchSnapshot();
});

test('should emit blur event after clicking outside', () => {
  const wrapper = mount(NumberKeyboard, {
    props: {
      show: true,
    },
  });

  trigger(document.body, 'touchstart');
  expect(wrapper.emitted('blur')).toBeTruthy();
});

test('should not emit blur event after clicking outside when hideOnClickOutside is false', () => {
  const wrapper = mount(NumberKeyboard, {
    props: {
      show: true,
      hideOnClickOutside: false,
    },
  });

  trigger(document.body, 'touchstart');
  expect(wrapper.emitted('blur')).toBeFalsy();
});

test('should add "van-key--active" className to key when focused', async () => {
  const wrapper = mount(NumberKeyboard);
  const key = wrapper.find('.van-key');

  await trigger(key, 'touchstart');
  expect(key.classes()).toContain('van-key--active');

  await trigger(key, 'touchend');
  expect(key.classes()).not.toContain('van-key--active');

  expect(wrapper.emitted('input')).toBeTruthy();
});

test('should remove "van-key--active" className from key when touch moved', async () => {
  const wrapper = mount(NumberKeyboard);
  const key = wrapper.find('.van-key');

  await trigger(key, 'touchstart');
  expect(key.classes()).toContain('van-key--active');

  await trigger(key, 'touchmove', 0, 0);
  expect(key.classes()).toContain('van-key--active');

  await trigger(key, 'touchmove', 100, 0);
  expect(key.classes()).not.toContain('van-key--active');

  await trigger(key, 'touchend');
  expect(wrapper.emitted('input')).toBeFalsy();
});

test('should emit "update:modelValue" event after clicking key', () => {
  const wrapper = mount(NumberKeyboard);
  const keys = wrapper.findAll('.van-key');

  clickKey(keys[0]);
  expect(wrapper.emitted('update:modelValue')![0]).toEqual(['1']);

  clickKey(keys[1]);
  expect(wrapper.emitted('update:modelValue')![1]).toEqual(['2']);
});

test('should limit max length of modelValue when using maxlength prop', async () => {
  const onInput = jest.fn();
  const wrapper = mount(NumberKeyboard, {
    props: {
      onInput,
      maxlength: 1,
    },
  });

  const keys = wrapper.findAll('.van-key');

  clickKey(keys[0]);
  expect(onInput).toHaveBeenCalledTimes(1);
  expect(wrapper.emitted('update:modelValue')![0]).toEqual(['1']);
  await wrapper.setProps({ modelValue: '1' });

  clickKey(keys[1]);
  expect(onInput).toHaveBeenCalledTimes(1);
  expect(wrapper.emitted('update:modelValue')!.length).toEqual(1);
});

test('should not render delete key when show-delete-key prop is false', async () => {
  const wrapper = mount(NumberKeyboard, {
    props: {
      showDeleteKey: true,
    },
  });
  expect(wrapper.find('.van-key--delete').exists()).toBeTruthy();

  await wrapper.setProps({ showDeleteKey: false });
  expect(wrapper.find('.van-key--delete').exists()).toBeFalsy();
});

test('should render loading icon when using close-button-loading prop', () => {
  const wrapper = mount(NumberKeyboard, {
    props: {
      show: true,
      theme: 'custom',
      closeButtonLoading: true,
    },
  });

  expect(wrapper.find('.van-key__loading-icon').exists()).toBeTruthy();
});

test('should shuffle key order when using random-key-order prop', () => {
  const wrapper = mount(NumberKeyboard, {
    propsData: {
      show: true,
      randomKeyOrder: true,
    },
  });

  const keys: number[] = [];
  const clickKeys: number[] = [];

  for (let i = 0; i < 9; i++) {
    keys.push(i + 1);
    clickKey(wrapper.findAll('.van-key')[i]);
    clickKeys.push(wrapper.emitted<number[]>('input')![i][0]);
  }

  expect(keys.every((v, k) => keys[k] === clickKeys[k])).toEqual(false);
});

test('should not emit close event after clicking close button when blur-on-close is false', () => {
  const wrapper = mount(NumberKeyboard, {
    props: {
      show: true,
      theme: 'custom',
      blurOnClose: false,
    },
  });

  clickKey(wrapper.findAll('.van-key')[12]);
  expect(wrapper.emitted('blur')).toBeFalsy();
});
