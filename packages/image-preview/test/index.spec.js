import Vue from 'vue';
import ImagePreview from '..';
import ImagePreviewVue from '../image-preview';
import { mount } from '@vue/test-utils';
import { triggerDrag } from '../../../test/utils';

const images = [
  'https://img.yzcdn.cn/1.png',
  'https://img.yzcdn.cn/2.png',
  'https://img.yzcdn.cn/3.png'
];

test('render image', () => {
  const wrapper = mount(ImagePreviewVue, {
    propsData: { images }
  });

  expect(wrapper).toMatchSnapshot();

  const swipe = wrapper.find('.van-swipe__track');
  triggerDrag(swipe, 500, 0);
  expect(wrapper.emitted('input')).toBeFalsy();
  triggerDrag(swipe, 0, 0);
  expect(wrapper.emitted('input')[0][0]).toBeFalsy();
});

test('function call', (done) => {
  ImagePreview(images);
  ImagePreview(images.slice(0, 1));
  Vue.nextTick(() => {
    const wrapper = document.querySelector('.van-image-preview');
    const swipe = wrapper.querySelector('.van-swipe__track');
    triggerDrag(swipe, 0, 0);

    expect(wrapper.querySelectorAll('img').length).toEqual(1);

    Vue.nextTick(() => {
      expect(wrapper.style.display).toEqual('none');
      done();
    });
  });
});

test('register component', () => {
  Vue.use(ImagePreview);
  expect(Vue.component(ImagePreviewVue.name)).toBeTruthy();
});
