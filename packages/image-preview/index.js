import Vue from 'vue';
import VueImagePreview from './ImagePreview';
import { isServer } from '../utils';

let instance;

const defaultConfig = {
  value: true,
  images: [],
  showIndex: true,
  showIndicators: false,
  startPosition: 0
};

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

  const options = Array.isArray(images) ? { images, startPosition } : images;

  Object.assign(instance, {
    ...defaultConfig,
    ...options
  });

  instance.$on('input', show => {
    instance.value = show;
    if (!show) {
      instance.$off('input');
      options.onClose && options.onClose();
    }
  });

  return instance;
};

ImagePreview.install = () => {
  Vue.use(VueImagePreview);
};

export default ImagePreview;
