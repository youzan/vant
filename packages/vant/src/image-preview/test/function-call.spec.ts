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
  const root = document.createElement('div');
  const onClose = vi.fn();
  const instance = showImagePreview({
    images,
    startPosition: 1,
    onClose,
    teleport: root,
  });

  await later();
  await instance?.close();

  expect(onClose).toHaveBeenCalledTimes(1);
  expect(onClose).toHaveBeenCalledWith({
    index: 1,
    url: images[1],
  });
});

test('should trigger onChange option correctly', async () => {
  const root = document.createElement('div');
  const onChange = vi.fn();
  showImagePreview({
    images,
    startPosition: 0,
    onChange,
    teleport: root,
  });

  await nextTick();
  const swipe = root.querySelector('.van-swipe__track') as HTMLDivElement;
  triggerDrag(swipe, 1000, 0);
  expect(onChange).toHaveBeenCalledWith(2);
});

test('should trigger onScale option correctly', async () => {
  const root = document.createElement('div');
  const restore = mockGetBoundingClientRect({ width: 100 });
  showImagePreview({
    images,
    startPosition: 0,
    onScale({ scale }) {
      expect(scale <= 2).toBeTruthy();
    },
    teleport: root,
  });

  await later();
  const image = root.querySelector('img') as HTMLImageElement;
  triggerZoom(image, 300, 300);
  restore();
});
