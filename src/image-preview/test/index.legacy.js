import Vue from 'vue';
import ImagePreview from '..';
import ImagePreviewVue from '../ImagePreview';
import {
  later,
  mount,
  trigger,
  triggerDrag,
  mockGetBoundingClientRect,
} from '../../../test';

function triggerTwoFingerTouchmove(el, x, y) {
  trigger(el, 'touchmove', -x, -y, { x, y });
}

function triggerZoom(el, x, y, direction = 'in') {
  trigger(el, 'touchstart', 0, 0, { x, y });

  if (direction === 'in') {
    triggerTwoFingerTouchmove(el, x / 4, y / 4);
    triggerTwoFingerTouchmove(el, x / 3, y / 3);
    triggerTwoFingerTouchmove(el, x / 2, y / 2);
    triggerTwoFingerTouchmove(el, x, y);
  } else if (direction === 'out') {
    triggerTwoFingerTouchmove(el, x, y);
    triggerTwoFingerTouchmove(el, x / 2, y / 2);
    triggerTwoFingerTouchmove(el, x / 3, y / 3);
    triggerTwoFingerTouchmove(el, x / 4, y / 4);
  }

  trigger(el, 'touchend', 0, 0, { touchList: [] });
}

const images = [
  'https://img.yzcdn.cn/1.png',
  'https://img.yzcdn.cn/2.png',
  'https://img.yzcdn.cn/3.png',
];

test('render image', async () => {
  const wrapper = mount(ImagePreviewVue, {
    propsData: { images, value: true },
  });

  expect(wrapper).toMatchSnapshot();

  await later();

  const swipe = wrapper.find('.van-swipe-item');
  triggerDrag(swipe, 500, 0);
  expect(wrapper.emitted('input')).toBeFalsy();
  expect(wrapper.emitted('change')[0][0]).toEqual(2);

  triggerDrag(swipe, 0, 0);
  await later(250);
  expect(wrapper.emitted('input')[0][0]).toEqual(false);
});

test('closeable prop', () => {
  const wrapper = mount(ImagePreviewVue, {
    propsData: {
      images,
      value: true,
      closeable: true,
    },
  });

  wrapper.find('.van-image-preview__close-icon').trigger('click');
  expect(wrapper.emitted('input')[0][0]).toEqual(false);
});

test('close-icon prop', () => {
  const wrapper = mount(ImagePreviewVue, {
    propsData: {
      value: true,
      closeable: true,
      closeIcon: 'close',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('close-icon-position prop', () => {
  const wrapper = mount(ImagePreviewVue, {
    propsData: {
      value: true,
      closeable: true,
      closeIcon: 'close',
      closeIconPosition: 'top-left',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('async close prop', async () => {
  const wrapper = mount(ImagePreviewVue, {
    propsData: {
      images,
      value: true,
      asyncClose: true,
    },
    listeners: {
      input(value) {
        wrapper.setProps({ value });
      },
    },
  });

  const swipe = wrapper.find('.van-swipe__track');

  // should not emit input or close event when tapped
  triggerDrag(swipe, 0, 0);
  await later(250);
  expect(wrapper.emitted('input')).toBeFalsy();
  expect(wrapper.emitted('close')).toBeFalsy();

  wrapper.vm.close();
  expect(wrapper.emitted('input')[0]).toBeTruthy();
  expect(wrapper.emitted('close')[0]).toBeTruthy();
});

test('function call', (done) => {
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

test('double click', async () => {
  const onScale = jest.fn();
  const wrapper = mount(ImagePreviewVue, {
    propsData: {
      images,
      value: true,
    },
    listeners: {
      scale: onScale,
    },
  });

  await later();
  const swipe = wrapper.find('.van-swipe-item');
  triggerDrag(swipe, 0, 0);
  triggerDrag(swipe, 0, 0);
  expect(onScale).toHaveBeenCalledWith({
    index: 0,
    scale: 2,
  });

  await later();
  triggerDrag(swipe, 0, 0);
  triggerDrag(swipe, 0, 0);
  expect(onScale).toHaveBeenLastCalledWith({
    index: 0,
    scale: 1,
  });
});

test('onClose option', () => {
  const onClose = jest.fn();
  const instance = ImagePreview({
    images,
    startPostion: 1,
    onClose,
  });

  instance.close();

  expect(onClose).toHaveBeenCalledTimes(1);
  expect(onClose).toHaveBeenCalledWith({
    index: 0,
    url: 'https://img.yzcdn.cn/1.png',
  });
});

test('onChange option', async (done) => {
  const instance = ImagePreview({
    images,
    startPostion: 0,
    onChange(index) {
      expect(index).toEqual(2);
      done();
    },
  });

  const swipe = instance.$el.querySelector('.van-swipe__track');
  triggerDrag(swipe, 1000, 0);
});

test('onScale option', async (done) => {
  const restore = mockGetBoundingClientRect({ width: 100 });
  const instance = ImagePreview({
    images,
    startPosition: 0,
    onScale({ index, scale }) {
      expect(index).toEqual(2);
      expect(scale <= 2).toBeTruthy();
      done();
    },
  });

  await later();
  const image = instance.$el.querySelector('img');
  triggerZoom(image, 300, 300);
  restore();
});

test('register component', () => {
  Vue.use(ImagePreview);
  expect(Vue.component(ImagePreviewVue.name)).toBeTruthy();
});

test('zoom in and drag image to move', async () => {
  const restore = mockGetBoundingClientRect({ width: 100, height: 100 });

  const wrapper = mount(ImagePreviewVue, {
    propsData: { images, value: true },
  });

  await later();
  const image = wrapper.find('img');
  triggerZoom(image, 300, 300);

  // mock image size
  ['naturalWidth', 'naturalHeight'].forEach((key) => {
    Object.defineProperty(image.element, key, { value: 300 });
  });

  // drag image before load
  triggerDrag(image, 300, 300);
  expect(wrapper.find('.van-image')).toMatchSnapshot();

  // drag image after load
  image.trigger('load');
  triggerDrag(image, 300, 300);
  expect(wrapper.find('.van-image')).toMatchSnapshot();

  restore();
});

test('zoom out', async () => {
  const restore = mockGetBoundingClientRect({ width: 100 });

  const onScale = jest.fn();
  const wrapper = mount(ImagePreviewVue, {
    propsData: { images, value: true },
    listeners: {
      scale: onScale,
    },
  });

  await later();
  const image = wrapper.find('.van-image');
  triggerZoom(image, 300, 300, 'out');

  expect(onScale).toHaveBeenLastCalledWith({ index: 0, scale: 1 });

  restore();
});

test('set show-index prop to false', () => {
  const wrapper = mount(ImagePreviewVue, {
    propsData: {
      value: true,
      showIndex: false,
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('index slot', () => {
  const wrapper = mount({
    template: `
      <van-image-preview :value="true">
        <template #index>Custom Index</template>
      </van-image-preview>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});

test('cover slot', () => {
  const wrapper = mount({
    template: `
      <van-image-preview :value="true">
        <template #cover>Custom Cover Content</template>
      </van-image-preview>
    `,
  });

  expect(wrapper).toMatchSnapshot();
});

test('closeOnPopstate', () => {
  const wrapper = mount(ImagePreviewVue, {
    propsData: {
      images,
      value: true,
      closeOnPopstate: true,
    },
  });

  trigger(window, 'popstate');
  expect(wrapper.emitted('input')[0][0]).toBeFalsy();

  wrapper.setProps({
    value: true,
    closeOnPopstate: false,
  });

  trigger(window, 'popstate');
  expect(wrapper.emitted('input')[1]).toBeFalsy();
});

test('ImagePreview.Component', () => {
  expect(ImagePreview.Component).toEqual(ImagePreviewVue);
});

test('get container with function call ', async (done) => {
  const element = document.createElement('div');
  document.body.appendChild(element);
  ImagePreview({ images, teleport: element });

  await Vue.nextTick();
  const wrapperDiv = document.querySelector('.van-image-preview');
  expect(wrapperDiv.parentNode).toEqual(element);
  document.body.removeChild(element);

  ImagePreview(images);

  await Vue.nextTick();
  const wrapperBody = document.querySelector('.van-image-preview');
  expect(wrapperBody.parentNode).toEqual(document.body);

  done();
});

test('get container with component call', () => {
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const wrapper = mount({
    template: `
    <div>
      <van-image-preview :value="true" :teleport="teleport">
      </van-image-preview>
    </div>
    `,
    data() {
      return {
        teleport: () => div1,
      };
    },
  });
  const imageView = wrapper.find('.van-image-preview').element;

  expect(imageView.parentNode).toEqual(div1);
  wrapper.vm.teleport = () => div2;
  expect(imageView.parentNode).toEqual(div2);
  wrapper.vm.teleport = null;
  expect(wrapper.element).toEqual(wrapper.element);
});

test('swipeTo method', async () => {
  const wrapper = mount({
    template: `
    <div>
      <van-image-preview ref="imagePreview" :value="true" :images="images">
      </van-image-preview>
    </div>
    `,
    data() {
      return {
        images,
      };
    },
  });
  const { imagePreview } = wrapper.vm.$refs;
  imagePreview.swipeTo(2);

  await later(100);
  expect(imagePreview.active).toEqual(2);
});
