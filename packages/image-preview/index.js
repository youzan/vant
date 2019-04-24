import Vue from 'vue';
import VueImagePreview from './ImagePreview';
import { isServer } from '../utils';

let instance;

const defaultConfig = {
  images: [],
  loop: true,
  value: true,
  minZoom: 1 / 3,
  maxZoom: 3,
  className: '',
  lazyLoad: false,
  showIndex: true,
  asyncClose: false,
  startPosition: 0,
  showIndicators: false
};

const initInstance = () => {
  instance = new (Vue.extend(VueImagePreview))({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
};

const ImagePreview = (images, startPosition = 0) => {
  /* istanbul ignore if */
  if (isServer) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  const options = Array.isArray(images) ? { images, startPosition } : images;

  Object.assign(instance, defaultConfig, options);

  instance.$once('input', show => {
    instance.value = show;
  });

  if (options.onClose) {
    instance.$once('close', options.onClose);
  }

  return instance;
};

ImagePreview.install = () => {
  Vue.use(VueImagePreview);
};

export default ImagePreview;
