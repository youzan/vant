import Vue from 'vue';
import ImagePreview from './image-preview';

let instance;

const ImagePreviewConstructor = Vue.extend(ImagePreview);

const initInstance = () => {
  instance = new ImagePreviewConstructor({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
};

const ImagePreviewBox = (images, startPosition = 0) => {
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

export default ImagePreviewBox;
