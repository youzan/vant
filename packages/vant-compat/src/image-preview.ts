import { ImagePreview as VanImagePreview, showImagePreview } from 'vant';
import type { App } from 'vue';

export const ImagePreview = (...args: Parameters<typeof showImagePreview>) =>
  showImagePreview(...args);

ImagePreview.Component = VanImagePreview;

ImagePreview.install = (app: App) => {
  app.use(ImagePreview.Component);
};
