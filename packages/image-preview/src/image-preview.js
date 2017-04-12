import Vue from 'vue';
import ImagePreview from './image-preview.vue';

let instance;

const ImagePreviewConstructor = Vue.extend(ImagePreview);

const initInstance = () => {
  instance = new ImagePreviewConstructor({
    el: document.createElement('div')
  });
};

var ImagePreviewBox = images => {
  if (!instance) {
    initInstance();
  }

  if (!instance.value) {
    instance.images = images;

    document.body.appendChild(instance.$el);

    Vue.nextTick(() => {
      instance.value = true;
    });
  }
};

export default ImagePreviewBox;
