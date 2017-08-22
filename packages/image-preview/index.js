import Vue from 'vue';
import ImagePreview from './image-preview';

let instance;

const ImagePreviewConstructor = Vue.extend(ImagePreview);

const initInstance = () => {
  /* istanbul ignore if */
  if (Vue.prototype.$isServer) return;
  instance = new ImagePreviewConstructor({
    el: document.createElement('div')
  });
};

var ImagePreviewBox = images => {
  /* istanbul ignore if */
  if (Vue.prototype.$isServer) return;
  if (!instance) {
    initInstance();
  }

  /* istanbul ignore else */
  if (!instance.value) {
    instance.images = images;

    document.body.appendChild(instance.$el);

    Vue.nextTick(() => {
      instance.value = true;
    });
  }
};

export default ImagePreviewBox;
