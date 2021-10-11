import { extend, inBrowser, withInstall, ComponentInstance } from '../utils';
import { mountComponent, usePopupState } from '../utils/mount-component';
import VanImagePreview from './ImagePreview';
import type { App } from 'vue';
import type { ImagePreviewOptions } from './types';

let instance: ComponentInstance;

const defaultConfig: ImagePreviewOptions = {
  loop: true,
  images: [],
  maxZoom: 3,
  minZoom: 1 / 3,
  onScale: undefined,
  onClose: undefined,
  onChange: undefined,
  teleport: 'body',
  className: '',
  showIndex: true,
  closeable: false,
  closeIcon: 'clear',
  transition: undefined,
  beforeClose: undefined,
  overlayStyle: undefined,
  startPosition: 0,
  swipeDuration: 300,
  showIndicators: false,
  closeOnPopstate: true,
  closeIconPosition: 'top-right',
};

function initInstance() {
  ({ instance } = mountComponent({
    setup() {
      const { state, toggle } = usePopupState();
      const onClosed = () => {
        (state as any).images = [];
      };

      return () => (
        <VanImagePreview
          {...state}
          onClosed={onClosed}
          onUpdate:show={toggle}
        />
      );
    },
  }));
}

const ImagePreview = (
  options: string[] | ImagePreviewOptions,
  startPosition = 0
) => {
  /* istanbul ignore if */
  if (!inBrowser) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  options = Array.isArray(options)
    ? { images: options, startPosition }
    : options;

  instance.open(extend({}, defaultConfig, options));

  return instance;
};

ImagePreview.Component = withInstall(VanImagePreview);

ImagePreview.install = (app: App) => {
  app.use(ImagePreview.Component);
};

export { ImagePreview };
