import 'vitest-canvas-mock';
import { cdnURL } from '../../../docs/site';
import ImageCrop from '..';
import { later, mount, triggerDrag } from '../../../test';
import { triggerZoom } from '../../image-preview/test/shared';

const TEST_IMG_URL = cdnURL('cat.jpeg');
const createElement = document.createElement.bind(document);
document.createElement = (tagName: string) => {
  if (tagName === 'canvas') {
    return {
      ...createElement(tagName),
      getContext: () => {
        () => {};
      },
      setAttribute: () => {},
      toDataURL: () => 'base64Url',
    };
  }
  return createElement(tagName);
};
global.Image = class {
  width = 100;

  height = 100;

  onload() {}

  set src(val: string) {
    this.onload();
  }
};
const MOCK_IMG_BASE64 = 'data:image/png;base64,';
global.URL.createObjectURL = vi.fn(() => MOCK_IMG_BASE64);
const mockFile = new File([], 'test.jpg', { type: 'image/jpeg' });
const mockEvent = { target: { files: [mockFile] } } as unknown as Event;

test('show crop area', async () => {
  const wrapper = mount(ImageCrop, {
    propsData: {
      modelValue: TEST_IMG_URL,
    },
  });
  expect(wrapper.vm.value).toEqual(TEST_IMG_URL);
  wrapper.vm.showCropView();

  await later();
  expect(wrapper.vm.visible).toBeTruthy();
  expect(wrapper.html()).toMatchSnapshot();
});

test('input change', async () => {
  const wrapper = mount(ImageCrop, {
    propsData: {
      modelValue: TEST_IMG_URL,
      disableCrop: true,
    },
  });

  // 选图片
  wrapper.vm.onImageChange(mockEvent);
  expect(wrapper.emitted().change[0]).toEqual([mockFile]);
  expect(wrapper.vm.targetImage).toBeDefined();

  await later();
  expect(wrapper.vm.fileType).toEqual('image/jpeg');
});

test('not skip alert', async () => {
  const wrapper = mount(ImageCrop, {
    propsData: {
      skipAlert: true,
    },
  });

  // 选图片
  wrapper.vm.setImage(mockFile);

  expect(wrapper.vm.targetImage).toBeDefined();
});

test('move and scale image', async () => {
  const wrapper = mount(ImageCrop, {
    propsData: {
      cropWidth: 1080,
    },
  });

  // 选图片
  wrapper.vm.setImage(mockFile);
  await later();
  const image = document.querySelector(
    '.van-image-crop__crop-image',
  ) as HTMLElement;
  expect(image).toBeTruthy();
  await triggerZoom(image, 300, 300);
  await triggerDrag(image, 100, 100);
  await later();
  expect(wrapper.vm.top).toBeDefined();
  expect(wrapper.vm.left).toBeDefined();
});

test('rotate image', async () => {
  const wrapper = mount(ImageCrop);

  wrapper.vm.setImage(mockFile);

  wrapper.vm.onRotate(); // 1
  wrapper.vm.onRotate(); // 2
  wrapper.vm.onRotate(); // 3
  wrapper.vm.onRotate(); // 0
  expect(wrapper.emitted().rotate.length).toBe(4);
});

test('submit image', async () => {
  const wrapper = mount(ImageCrop);

  wrapper.vm.onSubmit();

  expect(wrapper.emitted('submit')).toBeTruthy();
  expect(wrapper.emitted('update:modelValue')).toBeTruthy();
});

test('delete content', async () => {
  const wrapper = mount(ImageCrop, {
    propsData: {
      deletable: true,
    },
  });
  expect(wrapper.find('.van-image-crop__remove')).toBeTruthy();

  await wrapper.find('.van-image-crop__remove').trigger('click');
  expect(wrapper.emitted('delete')).toBeTruthy();

  await wrapper.setProps({ deletable: false });
  await wrapper.vm.$nextTick();
  expect(wrapper.find('.van-image-crop__remove').exists()).toBeFalsy();
});

test('cancel crop', async () => {
  const wrapper = mount(ImageCrop);

  wrapper.vm.onCancel();

  expect(wrapper.emitted().cancel).toBeTruthy();
});

/**
 * Lifecycle hooks
 */
it('calls `addEventDefault`', async () => {
  const wrapper = mount(ImageCrop);

  let spy = vi.spyOn(wrapper.vm, 'addEventDefault');
  await wrapper.setData({ visible: true });
  expect(spy).toBeCalled();

  spy = vi.spyOn(wrapper.vm, 'removeEventDefault');
  await wrapper.setData({ visible: false });
  expect(spy).toBeCalled();

  await wrapper.unmount();
  expect(spy).toBeCalled();
});
