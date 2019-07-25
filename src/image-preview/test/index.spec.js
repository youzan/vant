import Vue from 'vue';
import ImagePreview from '..';
import ImagePreviewVue from '../ImagePreview';
import { mount, trigger, triggerDrag, later } from '../../../test/utils';

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

test('render image', async () => {
  const wrapper = mount(ImagePreviewVue, {
    propsData: { images, value: true }
  });

  expect(wrapper).toMatchSnapshot();

  const swipe = wrapper.find('.van-swipe__track');
  triggerDrag(swipe, 500, 0);
  expect(wrapper.emitted('input')).toBeFalsy();
  triggerDrag(swipe, 0, 0);

  await later(300);

  expect(wrapper.emitted('input')[0][0]).toBeFalsy();
  expect(wrapper.emitted('change')[0][0]).toEqual(2);
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

test('double click', async done => {
  const instance = ImagePreview(images);

  const swipe = instance.$el.querySelector('.van-swipe__track');
  triggerDrag(swipe, 0, 0);
  triggerDrag(swipe, 0, 0);
  expect(instance.scale).toEqual(2);

  await later();

  triggerDrag(swipe, 0, 0);
  triggerDrag(swipe, 0, 0);
  expect(instance.scale).toEqual(1);
  done();
});

test('onClose option', async done => {
  const onClose = jest.fn();
  const instance = ImagePreview({
    images,
    startPostion: 1,
    onClose
  });

  instance.$emit('input', true);
  expect(onClose).toHaveBeenCalledTimes(0);

  await later(300);

  const wrapper = document.querySelector('.van-image-preview');
  const swipe = wrapper.querySelector('.van-swipe__track');
  triggerDrag(swipe, 0, 0);
  expect(onClose).toHaveBeenCalledTimes(1);
  expect(onClose).toHaveBeenCalledWith({ index: 0, url: 'https://img.yzcdn.cn/1.png' });
  done();
});

test('onChange option', async done => {
  const instance = ImagePreview({
    images,
    startPostion: 0,
    onChange(index) {
      expect(index).toEqual(2);
      done();
    }
  });

  const swipe = instance.$el.querySelector('.van-swipe__track');
  triggerDrag(swipe, 1000, 0);
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

test('index slot', () => {
  const wrapper = mount({
    template: `
      <van-image-preview :value="true">
        <template v-slot:index>Custom Index</template>
      </van-image-preview>
    `
  });

  expect(wrapper).toMatchSnapshot();
});

test('closeOnPopstate', () => {
  const wrapper = mount(ImagePreviewVue, {
    propsData: {
      images,
      value: true,
      closeOnPopstate: true
    }
  });

  trigger(window, 'popstate');
  expect(wrapper.emitted('input')[0][0]).toBeFalsy();

  wrapper.setProps({
    value: true,
    closeOnPopstate: false
  });

  trigger(window, 'popstate');
  expect(wrapper.emitted('input')[1]).toBeFalsy();
});

test('lazy-load prop', () => {
  const wrapper = mount(ImagePreviewVue, {
    propsData: {
      images,
      lazyLoad: true
    }
  });

  wrapper.setProps({
    value: true
  });

  expect(wrapper).toMatchSnapshot();
});
