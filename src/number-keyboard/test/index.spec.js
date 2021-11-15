import NumberKeyboard from '..';
import { mount, trigger } from '../../../test';

function clickKey(key) {
  trigger(key, 'touchstart');
  trigger(key, 'touchend');
}

test('click number key', () => {
  const wrapper = mount(NumberKeyboard, {
    propsData: {
      theme: 'custom',
      closeButtonText: 'close',
    },
  });

  clickKey(wrapper.findAll('.van-key').at(0));
  expect(wrapper.emitted('input')[0][0]).toEqual(1);

  wrapper.destroy();
});

test('click delete key', () => {
  const wrapper = mount(NumberKeyboard);

  clickKey(wrapper.findAll('.van-key').at(11));
  expect(wrapper.emitted('delete')).toBeTruthy();
});

test('click collapse key', () => {
  const wrapper = mount(NumberKeyboard);
  clickKey(wrapper.findAll('.van-key').at(9));
  expect(wrapper.emitted('input')).toBeFalsy();
  expect(wrapper.emitted('blur')).toBeFalsy();

  wrapper.setProps({ show: true });
  clickKey(wrapper.findAll('.van-key').at(9));
  expect(wrapper.emitted('blur')).toBeTruthy();
});

test('click close button', () => {
  const wrapper = mount(NumberKeyboard, {
    propsData: {
      theme: 'custom',
      closeButtonText: 'close',
    },
  });

  clickKey(wrapper.findAll('.van-key').at(12));
  expect(wrapper.emitted('close')).toBeTruthy();
});

test('listen to show/hide event when has transition', () => {
  const wrapper = mount(NumberKeyboard);
  wrapper.vm.show = true;
  wrapper.trigger('animationend');
  wrapper.vm.show = false;
  wrapper.trigger('animationend');
  expect(wrapper.emitted('show')).toBeTruthy();
  expect(wrapper.emitted('hide')).toBeTruthy();
});

test('listen to show event when no transition', () => {
  const wrapper = mount(NumberKeyboard, {
    propsData: {
      transition: false,
    },
  });
  wrapper.vm.show = true;
  wrapper.vm.show = false;
  expect(wrapper.emitted('show')).toBeTruthy();
  expect(wrapper.emitted('hide')).toBeTruthy();
});

test('render title', () => {
  const wrapper = mount(NumberKeyboard, {
    propsData: {
      title: 'Title',
      closeButtonText: 'Close',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('title-left slot', () => {
  const wrapper = mount(NumberKeyboard, {
    scopedSlots: {
      'title-left': () => 'Custom Title Left',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('extra-key prop', () => {
  const wrapper = mount(NumberKeyboard, {
    propsData: {
      extraKey: 'foo',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('extra-key slot', () => {
  const wrapper = mount(NumberKeyboard, {
    scopedSlots: {
      'extra-key': () => 'Custom Extra Key',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('hideOnClickOutside', () => {
  const wrapper = mount(NumberKeyboard, {
    propsData: {
      show: true,
    },
  });

  trigger(document.body, 'touchstart');
  expect(wrapper.emitted('blur')).toBeTruthy();
});

test('disable hideOnClickOutside', () => {
  const wrapper = mount(NumberKeyboard, {
    propsData: {
      show: true,
      hideOnClickOutside: false,
    },
  });

  trigger(document.body, 'touchstart');
  expect(wrapper.emitted('blur')).toBeFalsy();
});

test('focus on key', () => {
  const wrapper = mount(NumberKeyboard);

  const key = wrapper.find('.van-key');
  trigger(key, 'touchstart');
  expect(wrapper).toMatchSnapshot();
  trigger(key, 'touchend');
  expect(wrapper).toMatchSnapshot();
});

test('move and blur key', () => {
  const wrapper = mount(NumberKeyboard);

  const key = wrapper.find('.van-key');
  trigger(key, 'touchstart');
  expect(wrapper).toMatchSnapshot();
  trigger(key, 'touchmove', 0, 0);
  expect(wrapper).toMatchSnapshot();
  trigger(key, 'touchmove', 100, 0);
  expect(wrapper).toMatchSnapshot();
  trigger(key, 'touchend');
  expect(wrapper.emitted('input')).toBeFalsy();
});

test('bind value', () => {
  const wrapper = mount(NumberKeyboard, {
    propsData: {
      value: '',
    },
    listeners: {
      'update:value': (value) => {
        wrapper.setProps({ value });
      },
    },
  });

  const keys = wrapper.findAll('.van-key');
  clickKey(keys.at(0));
  clickKey(keys.at(1));

  expect(wrapper.vm.value).toEqual('12');

  clickKey(keys.at(11));
  expect(wrapper.vm.value).toEqual('1');
});

test('maxlength', () => {
  const onInput = jest.fn();
  const wrapper = mount(NumberKeyboard, {
    propsData: {
      value: '',
      maxlength: 1,
    },
    listeners: {
      input: onInput,
      'update:value': (value) => {
        wrapper.setProps({ value });
      },
    },
  });

  const keys = wrapper.findAll('.van-key');
  clickKey(keys.at(0));
  clickKey(keys.at(1));

  expect(wrapper.vm.value).toEqual('1');
  expect(onInput).toHaveBeenCalledTimes(1);
});

test('show-delete-key prop', () => {
  const wrapper = mount(NumberKeyboard, {
    propsData: {
      showDeleteKey: true,
    },
  });

  expect(wrapper.contains('.van-key--delete')).toBeTruthy();

  wrapper.setData({ showDeleteKey: false });
  expect(wrapper.contains('.van-key--delete')).toBeFalsy();

  wrapper.setData({
    theme: 'custom',
    showDeleteKey: true,
  });
  expect(wrapper.contains('.van-key--delete')).toBeTruthy();

  wrapper.setData({ showDeleteKey: false });
  expect(wrapper.contains('.van-key--delete')).toBeFalsy();
});

test('close-button-loading prop', () => {
  const wrapper = mount(NumberKeyboard, {
    propsData: {
      show: true,
      theme: 'custom',
      closeButtonLoading: true,
    },
  });

  expect(wrapper.contains('.van-key__loading-icon')).toBeTruthy();
});
test('random-key-order prop', () => {
  const wrapper = mount(NumberKeyboard, {
    propsData: {
      show: true,
      randomKeyOrder: true,
    },
  });

  const keys = [];
  const clickKeys = [];
  for (let i = 0; i < 9; i++) {
    keys.push(i + 1);

    clickKey(wrapper.findAll('.van-key').at(i));
    clickKeys.push(wrapper.emitted('input')[i][0]);
  }

  expect(keys.every((v, k) => keys[k] === clickKeys[k])).toEqual(false);
});
