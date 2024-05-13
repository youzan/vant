import ImageCrop from '..';
import { later, mount, trigger, triggerDrag } from '../../../test';

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

const createElement = document.createElement.bind(document);
global.document.createElement = (tagName) => {
  if (tagName === 'canvas') {
    return {
      setAttribute: () => {},
      toDataURL: () => `data:image/jpeg;base64`,
      getContext: () => ({
        drawImage: () => {},
        translate: () => {},
        rotate: () => {},
      }),
    };
  }
  return createElement(tagName);
};
const TEST_IMG_URL = 'https://img01.yzcdn.cn/vant/cat.jpeg';
global.File = function (data, name, type) {
  this.size = data.length;
  this.name = name;
  this.type = type;
};
global.URL.createObjectURL = () => TEST_IMG_URL;
global.Image = class {
  width = 200;

  height = 100;

  set src(v) {
    const fn = v === TEST_IMG_URL ? this.onload : this.onerror;
    fn && setTimeout(fn);
  }
};

const mockFile = new File([], 'test.jpg', 'image/jpg');
const mockEvent = { target: { files: [mockFile] } };

test('show crop area', async () => {
  const wrapper = mount(ImageCrop, {
    propsData: {
      value: TEST_IMG_URL,
    },
  });
  wrapper.vm.onImageChange(mockEvent);
  await later();

  expect(wrapper.vm.currentValue).toEqual(TEST_IMG_URL);
  await later();
  expect(wrapper.vm.visible).toBeTruthy();
});

test('input change', async () => {
  const wrapper = mount(ImageCrop, {
    propsData: {
      value: TEST_IMG_URL,
      disableCrop: true,
    },
  });

  wrapper.vm.onImageChange(mockEvent);
  await later();

  expect(wrapper.vm.fileType).toEqual('image/jpg');
  expect(wrapper.emitted().change[0]).toEqual([mockFile]);
});

test('move image', async () => {
  const wrapper = mount(ImageCrop);
  const image = wrapper.find('.van-image-crop__crop-image');

  triggerDrag(image, 100, 0);
  await later();
  expect(wrapper.vm.top).toBeDefined();
  expect(wrapper.vm.left).toBeDefined();
});

test('scale image', async () => {
  const wrapper = mount(ImageCrop);
  const image = wrapper.find('.van-image-crop__crop-image');

  triggerDrag;
  // 放大
  triggerZoom(image, 50, 50);
  await later();
  expect(wrapper.vm.point1).toBeDefined();
  expect(wrapper.vm.point2).toBeDefined();
});

test('rotate image', async () => {
  const wrapper = mount(ImageCrop);

  wrapper.vm.onRotate(); // 1
  wrapper.vm.onRotate(); // 2
  wrapper.vm.onRotate(); // 3
  wrapper.vm.onRotate(); // 0
  expect(wrapper.emitted().rotate.length).toBe(4);
});

test('submit image', async () => {
  const wrapper = mount(ImageCrop);

  wrapper.vm.onSubmit();

  expect(wrapper.emitted().input[0]).toContain('data:image/jpeg;base64');
});

test('delete content', async () => {
  const wrapper = mount(ImageCrop, {
    propsData: {
      deletable: true,
    },
  });
  expect(wrapper.contains('.van-image-crop__remove')).toBeTruthy();

  wrapper.find('.van-image-crop__remove').trigger('click');
  expect(wrapper.emitted().delete).toBeTruthy();

  wrapper.setProps({ deletable: false });
  expect(wrapper.find('.van-image-crop__remove').element).toBeFalsy();
});

test('cancel crop', async () => {
  const wrapper = mount(ImageCrop);

  wrapper.vm.onCancel();

  expect(wrapper.emitted().cancel).toBeTruthy();
});

/**
 * Methods
 */
it('initializes canvas correctly', () => {
  const wrapper = mount(ImageCrop, {
    propsData: {
      value: TEST_IMG_URL,
    },
  });

  const spy = jest.spyOn(document, 'createElement');
  wrapper.vm.initCanvas();
  expect(spy).toHaveBeenCalledWith('canvas');
});

/**
 * Lifecycle hooks
 */
it('calls `addEventDefault`', async () => {
  const wrapper = mount(ImageCrop);

  let spy = jest.spyOn(wrapper.vm, 'addEventDefault');
  wrapper.setData({ visible: true });
  expect(spy).toHaveBeenCalled();

  spy = jest.spyOn(wrapper.vm, 'removeEventDefault');
  wrapper.setData({ visible: false });
  expect(spy).toHaveBeenCalled();
  wrapper.destroy();
  expect(spy).toHaveBeenCalled();
});
