import Popup from '..';
import { mount, triggerDrag, transitionStub } from '../../../test/utils';

transitionStub();

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

test('get container with selector', () => {
  wrapper = mount({
    template: `
      <div>
        <popup class="get-container-selector-1" :value="true" get-container="body"></popup>
        <popup class="get-container-selector-2" :value="true" get-container="unknown"></popup>
      </div>
    `,
    components: {
      Popup
    }
  });

  const dom1 = document.querySelector('.get-container-selector-1');
  const dom2 = wrapper.vm.$el.querySelector('.get-container-selector-2');

  expect(dom1.parentNode).toEqual(document.body);
  expect(dom2.parentNode).toEqual(wrapper.vm.$el);
});

test('render overlay', () => {
  const div = document.createElement('div');
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
        getContainer: () => div
      };
    }
  });

  expect(div.querySelector('.van-overlay')).toBeTruthy();
});

test('watch overlay prop', () => {
  const div = document.createElement('div');
  wrapper = mount({
    template: `
      <div>
        <popup :value="show" :overlay="overlay" :get-container="getContainer" />
      </div>
    `,
    components: {
      Popup
    },
    data() {
      return {
        show: false,
        overlay: false,
        getContainer: () => div
      };
    }
  });

  expect(div.querySelector('.van-overlay')).toBeFalsy();

  wrapper.setData({ overlay: true });
  expect(div.querySelector('.van-overlay')).toBeFalsy();

  wrapper.setData({ show: true });
  expect(div.querySelector('.van-overlay')).toBeTruthy();
});

test('close on click modal', () => {
  const div = document.createElement('div');
  wrapper = mount({
    template: `
      <div>
        <popup v-model="value" :get-container="getContainer" />
      </div>
    `,
    components: {
      Popup
    },
    data() {
      return {
        value: true,
        getContainer: () => div
      };
    }
  });

  const modal = div.querySelector('.van-overlay');
  triggerDrag(modal, 0, -30);
  modal.click();
  expect(wrapper.vm.value).toBeFalsy();
});

test('oepn & close event', () => {
  wrapper = mount(Popup);
  wrapper.vm.value = true;
  expect(wrapper.emitted('open')).toBeTruthy();
  wrapper.vm.value = false;
  expect(wrapper.emitted('close')).toBeTruthy();
});
