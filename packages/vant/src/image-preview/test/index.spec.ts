import {
  mount,
  later,
  triggerDrag,
  mockGetBoundingClientRect,
} from '../../../test';
import ImagePreviewComponent from '../ImagePreview';
import { images, triggerZoom } from './shared';

test('should swipe to current index after calling the swipeTo method', async () => {
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
  expect(wrapper.emitted('close')![0]).toBeTruthy();
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
