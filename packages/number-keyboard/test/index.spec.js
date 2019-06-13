import NumberKeyboard from '..';
import { mount, trigger } from '../../../test/utils';

test('click number key', () => {
  const wrapper = mount(NumberKeyboard, {
    propsData: {
      theme: 'custom',
      closeButtonText: 'close'
    }
  });

  wrapper
    .findAll('.van-key')
    .at(0)
    .trigger('click');
  expect(wrapper.emitted('input')[0][0]).toEqual(1);

  wrapper.destroy();
});

it('click delete key', () => {
  const wrapper = mount(NumberKeyboard);
  wrapper
    .findAll('.van-key')
    .at(11)
    .trigger('click');
  expect(wrapper.emitted('delete')).toBeTruthy();
});

it('click empty key', () => {
  const wrapper = mount(NumberKeyboard);
  wrapper
    .findAll('.van-key')
    .at(9)
    .trigger('click');
  expect(wrapper.emitted('input')).toBeFalsy();
});

test('click close button', () => {
  const wrapper = mount(NumberKeyboard, {
    propsData: {
      theme: 'custom',
      closeButtonText: 'close'
    }
  });

  wrapper
    .findAll('.van-key')
    .at(12)
    .trigger('click');
  expect(wrapper.emitted('close')).toBeTruthy();
});

test('listen to show/hide event when has transtion', () => {
  const wrapper = mount(NumberKeyboard);
  wrapper.vm.show = true;
  wrapper.trigger('animationend');
  wrapper.vm.show = false;
  wrapper.trigger('animationend');
  expect(wrapper.emitted('show')).toBeTruthy();
  expect(wrapper.emitted('hide')).toBeTruthy();
});

test('listen to show event when no transtion', () => {
  const wrapper = mount(NumberKeyboard, {
    propsData: {
      transition: false
    }
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
      closeButtonText: 'Close'
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('title-left slot', () => {
  const wrapper = mount(NumberKeyboard, {
    scopedSlots: {
      'title-left': () => 'Custom Title Left'
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('hideOnClickOutside', () => {
  const wrapper = mount(NumberKeyboard, {
    propsData: {
      show: true
    }
  });

  trigger(document.body, 'touchstart');
  expect(wrapper.emitted('blur')).toBeTruthy();
});

test('disable hideOnClickOutside', () => {
  const wrapper = mount(NumberKeyboard, {
    propsData: {
      show: true,
      hideOnClickOutside: false
    }
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
