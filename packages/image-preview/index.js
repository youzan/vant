import Vue from 'vue';
import VueImagePreview from './ImagePreview';
import { isServer } from '../utils';

let instance;

const initInstance = () => {
  instance = new (Vue.extend(VueImagePreview))({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
};

const ImagePreview = (images, startPosition) => {
  /* istanbul ignore if */
  if (isServer) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  const config = Array.isArray(images) ? { images, startPosition } : images;

  instance.value = true;
  instance.images = config.images;
  instance.showIndex = config.showIndex || true;
  instance.startPosition = config.startPosition || 0;
  instance.$on('input', show => {
    instance.value = show;
    if (!show) {
      instance.$off('input');
      config.onClose && config.onClose();
    }
  });

  return instance;
};

ImagePreview.install = () => {
  Vue.use(VueImagePreview);
};

export default ImagePreview;
