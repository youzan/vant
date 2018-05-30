import Vue from 'vue';
import ImagePreview from '..';
import ImagePreviewVue from '../image-preview';
import { mount } from '@vue/test-utils';
import { triggerDrag } from '../../../test/utils';

const images = [
  'https://img.yzcdn.cn/upload_files/2017/03/15/FkubrzN7AgGwLlTeb1E89-T_ZjBg.png',
  'https://img.yzcdn.cn/upload_files/2017/03/14/FmTPs0SeyQaAOSK1rRe1sL8RcwSY.jpeg',
  'https://img.yzcdn.cn/upload_files/2017/03/15/FvexrWlG_WxtCE9Omo5l27n_mAG_.jpeg'
];

test('render image', () => {
  const wrapper = mount(ImagePreviewVue, {
    propsData: {
      images
    }
  });

  expect(wrapper.html()).toMatchSnapshot();

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
  expect(Vue.component('van-image-preview')).toBeTruthy();
});
