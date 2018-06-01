import Vue from 'vue';
import Popup from '../';
import { mount, TransitionStub } from '@vue/test-utils';
import { triggerDrag } from '../../../test/utils';

Vue.component('transition', TransitionStub);

let wrapper;
afterEach(() => {
  wrapper.destroy();
});

test('lazy render', () => {
  wrapper = mount(Popup);
  expect(wrapper.vm.$el.tagName).toBeFalsy();
  wrapper.vm.value = true;
  expect(wrapper.vm.$el.tagName).toBeTruthy();
});

test('reset z-index', () => {
  wrapper = mount(Popup, {
    propsData: {
      value: true,
      zIndex: 10,
      lockScroll: false
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('popup lock scroll', () => {
  const wrapper1 = mount(Popup, {
    propsData: {
      value: true
    }
  });
  expect(document.body.classList.contains('van-overflow-hidden')).toBeTruthy();
  triggerDrag(document, 0, 100);
  triggerDrag(document, 0, -150);

  const wrapper2 = mount(Popup, {
    propsData: {
      value: true
    }
  });
  wrapper1.vm.$destroy();
  expect(document.body.classList.contains('van-overflow-hidden')).toBeTruthy();

  wrapper2.vm.$destroy();
  expect(document.body.classList.contains('van-overflow-hidden')).toBeFalsy();
});

test('get container with parent', () => {
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  wrapper = mount({
    template: `
      <div>
        <popup :value="true" :get-container="getContainer" />
      </div>
    `,
    components: {
      Popup
    },
    data() {
      return {
        getContainer: () => div1
      };
    }
  });
  const popup = wrapper.find('.van-popup').element;

  expect(popup.parentNode).toEqual(div1);
  wrapper.vm.getContainer = () => div2;
  expect(popup.parentNode).toEqual(div2);
  wrapper.vm.getContainer = null;
  expect(popup.parentNode).toEqual(wrapper.element);
});

test('get container without parent', () => {
  const div = document.createElement('div');
  wrapper = mount(Popup, {
    propsData: {
      getContainer: () => div
    }
  });
  const popup = wrapper.element;
  expect(popup.parentNode).toEqual(div);
  wrapper.vm.getContainer = null;
  expect(popup.parentNode).toEqual(div);
});

test('render overlay', () => {
  const div = document.createElement('div');
  wrapper = mount(Popup, {
    propsData: {
      value: true,
      overlay: false,
      getContainer: () => div
    }
  });

  expect(div.querySelector('.van-modal')).toBeFalsy();
  wrapper.vm.overlay = true;
  expect(div.querySelector('.van-modal')).toBeTruthy();
});

test('close on click modal', () => {
  const div = document.createElement('div');
  wrapper = mount(Popup, {
    propsData: {
      value: true,
      getContainer: () => div
    }
  });

  wrapper.vm.$on('input', val => {
    wrapper.vm.value = val;
  });

  const modal = div.querySelector('.van-modal');
  triggerDrag(modal, 0, -30);
  modal.click();
  expect(wrapper.vm.value).toBeFalsy();
});
