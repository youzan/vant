import Vue from 'vue';
import VueImagePreview from './ImagePreview';
import { isServer } from '../utils';

let instance;

const defaultConfig = {
  loop: true,
  images: [],
  value: true,
  minZoom: 1 / 3,
  maxZoom: 3,
  className: '',
  onClose: null,
  onChange: null,
  showIndex: true,
  closeable: false,
  closeIcon: 'clear',
  asyncClose: false,
  startPosition: 0,
  swipeDuration: 500,
  showIndicators: false,
  closeOnPopstate: false,
  closeIconPosition: 'top-right',
};

const initInstance = () => {
  instance = new (Vue.extend(VueImagePreview))({
    el: document.createElement('div'),
  });
  document.body.appendChild(instance.$el);

  instance.$on('change', index => {
    if (instance.onChange) {
      instance.onChange(index);
    }
  });

  instance.$on('scale', data => {
    if (instance.onScale) {
      instance.onScale(data);
    }
  });
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

  instance.$once('closed', () => {
    instance.images = [];
  });

  if (options.onClose) {
    instance.$off('close');
    instance.$once('close', options.onClose);
  }

  return instance;
};

ImagePreview.install = () => {
  Vue.use(VueImagePreview);
};

export default ImagePreview;
