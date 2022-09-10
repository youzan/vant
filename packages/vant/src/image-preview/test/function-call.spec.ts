import { later, triggerDrag, mockGetBoundingClientRect } from '../../../test';
import { nextTick } from 'vue';
import { showImagePreview } from '../function-call';
import { images, triggerZoom } from './shared';

test('should allow to use the teleport option', async () => {
  const root = document.createElement('div');
  showImagePreview({ images: [], teleport: root });

  await later();
  expect(root.querySelector('.van-image-preview')).toBeTruthy();
});

test('should trigger onClose option correctly', async () => {
  const onClose = jest.fn();
  const instance = showImagePreview({
    images,
    startPosition: 1,
    onClose,
  });

  await instance?.close();

  expect(onClose).toHaveBeenCalledTimes(1);
  expect(onClose).toHaveBeenCalledWith({
    index: 1,
    url: images[1],
  });
});

test('should trigger onChange option correctly', async () => {
  const onChange = jest.fn();
  showImagePreview({
    images,
    startPosition: 0,
    onChange,
  });

  await nextTick();
  const swipe = document.querySelector('.van-swipe__track') as HTMLDivElement;
  triggerDrag(swipe, 1000, 0);
  expect(onChange).toHaveBeenCalledWith(2);
});

test('should trigger onScale option correctly', async () => {
  const restore = mockGetBoundingClientRect({ width: 100 });
  showImagePreview({
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
