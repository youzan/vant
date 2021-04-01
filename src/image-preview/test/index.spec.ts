import { nextTick } from 'vue';
import { DOMWrapper } from '@vue/test-utils/dist/domWrapper';
import {
  mount,
  later,
  trigger,
  triggerDrag,
  mockGetBoundingClientRect,
} from '../../../test';
import { ImagePreview } from '../function-call';
import ImagePreviewComponent from '../ImagePreview';

const images = [
  'https://img.yzcdn.cn/1.png',
  'https://img.yzcdn.cn/2.png',
  'https://img.yzcdn.cn/3.png',
];

function triggerTwoFingerTouchmove(
  el: Element | DOMWrapper<Element>,
  x: number,
  y: number
) {
  trigger(el, 'touchmove', -x, -y, { x, y });
}

function triggerZoom(
  el: Element | DOMWrapper<Element>,
  x: number,
  y: number,
  direction = 'in'
) {
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

test('should swipe to currect index after calling the swipeTo method', async () => {
  const wrapper = mount(ImagePreviewComponent, {
    props: {
      show: true,
      images,
    },
  });

  await later();
  (wrapper.vm as Record<string, any>).swipeTo(2);

  await later(100);
  expect(wrapper.find('.van-image-preview__index').html()).toMatchSnapshot();
});

test('should allow to use the teleport prop', () => {
  const root = document.createElement('div');
  mount(ImagePreviewComponent, {
    props: {
      show: true,
      teleport: root,
    },
  });

  expect(root.querySelector('.van-image-preview')).toBeTruthy();
});

test('should render cover slot correctly', () => {
  const wrapper = mount(ImagePreviewComponent, {
    props: {
      show: true,
    },
    slots: {
      cover: () => 'Custom Cover',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render index slot correctly', () => {
  const wrapper = mount(ImagePreviewComponent, {
    props: {
      show: true,
    },
    slots: {
      index: ({ index }) => `Custom Index: ${index}`,
    },
  });

  expect(wrapper.find('.van-image-preview__index').html()).toMatchSnapshot();
});

test('should render close icon when using closeable prop', () => {
  const wrapper = mount(ImagePreviewComponent, {
    props: {
      show: true,
      images,
      closeable: true,
    },
  });

  wrapper.find('.van-image-preview__close-icon').trigger('click');
  expect(wrapper.emitted<[boolean]>('update:show')![0][0]).toEqual(false);
});

test('should change close icon when using close-icon prop', () => {
  const wrapper = mount(ImagePreviewComponent, {
    props: {
      show: true,
      closeable: true,
      closeIcon: 'success',
    },
  });

  expect(
    wrapper.find('.van-image-preview__close-icon').html()
  ).toMatchSnapshot();
});

test('should change close icon position when using close-icon-position prop', () => {
  const wrapper = mount(ImagePreviewComponent, {
    props: {
      show: true,
      closeable: true,
      closeIconPosition: 'top-left',
    },
  });

  expect(
    wrapper.find('.van-image-preview__close-icon').html()
  ).toMatchSnapshot();
});

test('should hide index when show-index prop is false', async () => {
  const wrapper = mount(ImagePreviewComponent, {
    props: {
      show: true,
    },
  });
  expect(wrapper.find('.van-image-preview__index').exists()).toBeTruthy();

  await wrapper.setProps({ showIndex: false });
  expect(wrapper.find('.van-image-preview__index').exists()).toBeFalsy();
});

test('should hide ImagePreview after popstate', async () => {
  const wrapper = mount(ImagePreviewComponent, {
    props: {
      images,
      show: true,
    },
  });

  window.dispatchEvent(new Event('popstate'));
  expect(wrapper.emitted<[boolean]>('update:show')![0][0]).toBeFalsy();
});

test('should not hide ImagePreview after popstate when close-on-popstate is false', async () => {
  const wrapper = mount(ImagePreviewComponent, {
    props: {
      images,
      show: true,
      closeOnPopstate: false,
    },
  });

  window.dispatchEvent(new Event('popstate'));
  expect(wrapper.emitted('update:show')).toBeFalsy();
});

test('render image', async () => {
  const wrapper = mount(ImagePreviewComponent, {
    props: { images, show: true },
  });

  expect(wrapper.html()).toMatchSnapshot();

  await later();

  const swipe = wrapper.find('.van-swipe-item');
  await triggerDrag(swipe, 500, 0);
  expect(wrapper.emitted('update:show')).toBeFalsy();
  expect(wrapper.emitted('change')![0]).toEqual([2]);

  triggerDrag(swipe, 0, 0);
  await later(250);
  expect(wrapper.emitted('update:show')![0]).toEqual([false]);
});

test('before close prop', async () => {
  const wrapper = mount(ImagePreviewComponent, {
    props: {
      images,
      show: true,
      beforeClose: () => true,
    },
  });

  const swipe = wrapper.find('.van-swipe__track');

  // should not emit input or close event when tapped
  triggerDrag(swipe, 0, 0);
  await later(250);
  expect(wrapper.emitted('input')).toBeFalsy();
  expect(wrapper.emitted('close')).toBeFalsy();

  await wrapper.setProps({ show: false });
  expect(wrapper.emitted('update:show')![0]).toBeTruthy();
  expect(wrapper.emitted('close')![0]).toBeTruthy();
});

test('function call', async () => {
  ImagePreview({ images });
  ImagePreview({ images: images.slice(0, 1) });

  await later();
  await nextTick();
  const wrapper = document.querySelector(
    '.van-image-preview'
  ) as HTMLDivElement;
  const swipe = wrapper.querySelector('.van-swipe__track') as HTMLDivElement;
  triggerDrag(swipe, 0, 0);

  expect(wrapper.querySelectorAll('img').length).toEqual(1);
});

test('double click', async () => {
  const onScale = jest.fn();
  const wrapper = mount(ImagePreviewComponent, {
    props: {
      images,
      show: true,
      onScale,
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

test('onClose option', async () => {
  const onClose = jest.fn();
  const instance = ImagePreview({
    images,
    startPosition: 1,
    onClose,
  });

  await instance?.close();

  expect(onClose).toHaveBeenCalledTimes(1);
  expect(onClose).toHaveBeenCalledWith({
    index: 0,
    url: images[0],
  });
});

test('onChange option', async () => {
  const onChange = jest.fn();
  ImagePreview({
    images,
    startPosition: 0,
    onChange,
  });

  await nextTick();
  const swipe = document.querySelector('.van-swipe__track') as HTMLDivElement;
  triggerDrag(swipe, 1000, 0);
  expect(onChange).toHaveBeenCalledWith(2);
});

test('onScale option', async () => {
  const restore = mockGetBoundingClientRect({ width: 100 });
  ImagePreview({
    images,
    startPosition: 0,
    onScale({ index, scale }) {
      expect(index).toEqual(2);
      expect(scale <= 2).toBeTruthy();
    },
  });

  await later();
  const image = document.querySelector('img') as HTMLImageElement;
  triggerZoom(image, 300, 300);
  restore();
});

test('zoom in and drag image to move', async () => {
  const restore = mockGetBoundingClientRect({ width: 100, height: 100 });

  const wrapper = mount(ImagePreviewComponent, {
    props: { images, show: true },
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
  expect(wrapper.find('.van-image').html()).toMatchSnapshot();

  // drag image after load
  image.trigger('load');
  triggerDrag(image, 300, 300);
  expect(wrapper.find('.van-image').html()).toMatchSnapshot();

  restore();
});

test('zoom out', async () => {
  const restore = mockGetBoundingClientRect({ width: 100, height: 100 });

  const onScale = jest.fn();
  const wrapper = mount(ImagePreviewComponent, {
    props: {
      images,
      show: true,
      onScale,
    },
  });

  await later();
  const image = wrapper.find('.van-image');
  triggerZoom(image, 300, 300, 'out');

  expect(onScale).toHaveBeenLastCalledWith({ index: 0, scale: 1 });

  restore();
});

test('should allow to use the teleport option', async () => {
  const element = document.createElement('div');
  element.id = 'parent-node';
  document.body.appendChild(element);
  ImagePreview({ images, teleport: element });

  await later();
  await nextTick();
  const wrapperDiv = document.querySelector(
    '.van-image-preview'
  ) as HTMLDivElement;
  expect(wrapperDiv.parentElement?.parentElement?.id).toEqual(element.id);
  document.body.removeChild(element);

  ImagePreview(images);

  await later();
  await nextTick();
  const wrapperBody = document.querySelector(
    '.van-image-preview'
  ) as HTMLDivElement;
  expect(wrapperBody.parentElement?.parentElement).toEqual(document.body);
});
