import Vue from 'vue';
import ImagePreview from './image-preview.vue';
import merge from 'src/utils/merge';

let instance;

const ImagePreviewConstructor = Vue.extend(ImagePreview);

const initInstance = () => {
  instance = new ImagePreviewConstructor({
    el: document.createElement('div')
  });
};

var ImagePreviewBox = image => {
  if (!instance) {
    initInstance();
  }

  if (!instance.value) {
    instance.image = image;

    document.body.appendChild(instance.$el);

    Vue.nextTick(() => {
      instance.value = true;
    });
  }
};

export default ImagePreviewBox;
