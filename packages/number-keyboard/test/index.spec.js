import NumberKeyboard from '..';
import { mount } from '../../../test/utils';

function mockTouch(wrapper, event, keyIndex) {
  const key = wrapper.element.querySelectorAll('.van-key')[keyIndex];
  const touchStart = document.createEvent('CustomEvent');
  touchStart.initCustomEvent(event, true, true, {});
  key.dispatchEvent(touchStart);
}

test('click number key', () => {
  const wrapper = mount(NumberKeyboard, {
    propsData: {
      theme: 'custom',
      closeButtonText: 'close'
    }
  });

  mockTouch(wrapper, 'touchstart', 10);
  mockTouch(wrapper, 'touchstart', 0);
  mockTouch(wrapper, 'touchend', 0);
  wrapper.destroy();
  expect(wrapper.emitted('input')[0][0]).toEqual(1);
});

it('click delete key', () => {
  const wrapper = mount(NumberKeyboard);
  mockTouch(wrapper, 'touchstart', 11);
  expect(wrapper.emitted('delete')).toBeTruthy();
});

test('click close button', () => {
  const wrapper = mount(NumberKeyboard, {
    propsData: {
      theme: 'custom',
      closeButtonText: 'close'
    }
  });

  mockTouch(wrapper, 'touchstart', 12);
  expect(wrapper.emitted('close')).toBeTruthy();
});

test('keey-alive live cycle', () => {
  const wrapper = mount({
    template: `
      <keep-alive>
        <number-keyboard v-if="show" />
      </keep-alive>
    `,
    props: ['show'],
    components: { NumberKeyboard }
  }, {
    attachToDocument: true,
    propsData: {
      show: true
    }
  });

  expect(wrapper.vm.$el).toBeTruthy();
  wrapper.vm.show = false;
  expect(wrapper.vm.el).toBeFalsy();
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
