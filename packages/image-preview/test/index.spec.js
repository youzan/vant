import Vue from 'vue';
import ImagePreview from '..';
import ImagePreviewVue from '../ImagePreview';
import {
  mount,
  trigger,
  triggerDrag,
  transitionStub
} from '../../../test/utils';

transitionStub();

function triggerZoom(el, x, y) {
  trigger(el, 'touchstart', 0, 0, { x, y });
  trigger(el, 'touchmove', -x / 4, -y / 4, { x, y });
  trigger(el, 'touchmove', -x / 3, -y / 3, { x, y });
  trigger(el, 'touchmove', -x / 2, -y / 2, { x, y });
  trigger(el, 'touchmove', -x, -y, { x, y });
  trigger(el, 'touchend', 0, 0, { touchList: [] });
}

const images = [
  'https://img.yzcdn.cn/1.png',
  'https://img.yzcdn.cn/2.png',
  'https://img.yzcdn.cn/3.png'
];

test('render image', () => {
  const wrapper = mount(ImagePreviewVue, {
    propsData: { images, value: true }
  });

  expect(wrapper).toMatchSnapshot();

  const swipe = wrapper.find('.van-swipe__track');
  triggerDrag(swipe, 500, 0);
  expect(wrapper.emitted('input')).toBeFalsy();
  triggerDrag(swipe, 0, 0);
  expect(wrapper.emitted('input')[0][0]).toBeFalsy();
});

test('async close', () => {
  const wrapper = mount(ImagePreviewVue, {
    propsData: {
      images,
      value: true,
      asyncClose: true
    }
  });

  const swipe = wrapper.find('.van-swipe__track');
  triggerDrag(swipe, 0, 0);
  expect(wrapper.emitted('input')).toBeFalsy();
  wrapper.vm.close();
  expect(wrapper.emitted('input')[0][0]).toBeFalsy();
});

test('function call', done => {
  ImagePreview(images);
  ImagePreview(images.slice(0, 1));
  Vue.nextTick(() => {
    const wrapper = document.querySelector('.van-image-preview');
    const swipe = wrapper.querySelector('.van-swipe__track');
    triggerDrag(swipe, 0, 0);

    expect(wrapper.querySelectorAll('img').length).toEqual(1);
    done();
  });
});

test('function call options', done => {
  const onClose = jest.fn();
  const instance = ImagePreview({
    images,
    startPostion: 1,
    onClose
  });

  instance.$emit('input', true);
  expect(onClose).toHaveBeenCalledTimes(0);

  Vue.nextTick(() => {
    const wrapper = document.querySelector('.van-image-preview');
    const swipe = wrapper.querySelector('.van-swipe__track');
    triggerDrag(swipe, 0, 0);
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledWith({ index: 0, url: 'https://img.yzcdn.cn/1.png' });
    done();
  });
});

test('register component', () => {
  Vue.use(ImagePreview);
  expect(Vue.component(ImagePreviewVue.name)).toBeTruthy();
});

test('zoom', async () => {
  const { getBoundingClientRect } = Element.prototype;
  Element.prototype.getBoundingClientRect = jest.fn(() => ({ width: 100 }));

  const wrapper = mount(ImagePreviewVue, {
    propsData: { images, value: true }
  });

  const image = wrapper.find('img');
  triggerZoom(image, 300, 300);
  triggerDrag(image, 300, 300);
  expect(wrapper).toMatchSnapshot();
  Element.prototype.getBoundingClientRect = getBoundingClientRect;
});
