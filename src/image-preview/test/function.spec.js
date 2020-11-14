import { createApp } from 'vue';
import ImagePreview from '..';
import ImagePreviewComponent from '../ImagePreview';

test('should expose ImagePreviewComponent in ImagePreview.Component', () => {
  expect(ImagePreview.Component).toEqual(ImagePreviewComponent);
});

test('should register component to app', () => {
  const app = createApp();
  app.use(ImagePreview);
  expect(app.component(ImagePreviewComponent.name)).toBeTruthy();
});
