import Vue from 'vue';
import VueImagePreview from './image-preview';

let instance;

const initInstance = () => {
  instance = new (Vue.extend(VueImagePreview))({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
};

const ImagePreview = (images, startPosition = 0) => {
  if (!instance) {
    initInstance();
  }

  instance.images = images;
  instance.startPosition = startPosition;
  instance.value = true;
  instance.$on('input', show => {
    instance.value = show;
  });

  return instance;
};

ImagePreview.install = () => {
  Vue.use(VueImagePreview);
};

export default ImagePreview;
