import Vue from 'vue';
import ImagePreview from '..';
import ImagePreviewVue from '../ImagePreview';
import { mount, trigger, triggerDrag, later } from '../../../test';

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
  'https://img.yzcdn.cn/3.png',
];

test('render image', async () => {
  const wrapper = mount(ImagePreviewVue, {
    propsData: { images, value: true },
  });

  expect(wrapper).toMatchSnapshot();

  await later();

  const swipe = wrapper.find('.van-swipe__track');
  triggerDrag(swipe, 500, 0);
  expect(wrapper.emitted('input')).toBeFalsy();
  triggerDrag(swipe, 0, 0);

  await later(300);

  expect(wrapper.emitted('input')[0][0]).toBeFalsy();
  expect(wrapper.emitted('change')[0][0]).toEqual(2);
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
  await later(300);
  expect(wrapper.emitted('input')).toBeFalsy();
  expect(wrapper.emitted('close')).toBeFalsy();

  wrapper.vm.close();
  expect(wrapper.emitted('input')[0]).toBeTruthy();
  expect(wrapper.emitted('close')[0]).toBeTruthy();
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

  await later();
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

test('onChange option', async done => {
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

test('onScale option', async done => {
  const { getBoundingClientRect } = Element.prototype;
  Element.prototype.getBoundingClientRect = jest.fn(() => ({ width: 100 }));

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
  Element.prototype.getBoundingClientRect = getBoundingClientRect;
});

test('register component', () => {
  Vue.use(ImagePreview);
  expect(Vue.component(ImagePreviewVue.name)).toBeTruthy();
});

test('zoom', async () => {
  const { getBoundingClientRect } = Element.prototype;
  Element.prototype.getBoundingClientRect = jest.fn(() => ({ width: 100 }));

  const wrapper = mount(ImagePreviewVue, {
    propsData: { images, value: true },
  });

  await later();
  const image = wrapper.find('.van-image');
  triggerZoom(image, 300, 300);
  triggerDrag(image, 300, 300);

  expect(image).toMatchSnapshot();
  Element.prototype.getBoundingClientRect = getBoundingClientRect;
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
