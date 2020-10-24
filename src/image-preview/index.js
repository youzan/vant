import { inBrowser } from '../utils';
import { mountComponent, usePopupState } from '../utils/mount-component';
import VanImagePreview from './ImagePreview';

let instance;

const defaultConfig = {
  loop: true,
  images: [],
  maxZoom: 3,
  minZoom: 1 / 3,
  onScale: null,
  onClose: null,
  onChange: null,
  teleport: 'body',
  className: '',
  showIndex: true,
  closeable: false,
  closeIcon: 'clear',
  beforeClose: null,
  startPosition: 0,
  swipeDuration: 500,
  showIndicators: false,
  closeOnPopstate: true,
  closeIconPosition: 'top-right',
};

function initInstance() {
  ({ instance } = mountComponent({
    setup() {
      const { state, toggle } = usePopupState();

      const onClosed = () => {
        state.images = [];
      };

      return () => (
        <VanImagePreview
          {...{
            ...state,
            onClosed,
            'onUpdate:show': toggle,
          }}
        />
      );
    },
  }));
}

const ImagePreview = (images, startPosition = 0) => {
  /* istanbul ignore if */
  if (!inBrowser) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  const options = Array.isArray(images) ? { images, startPosition } : images;

  instance.open({
    ...defaultConfig,
    ...options,
  });

  return instance;
};

ImagePreview.Component = VanImagePreview;

ImagePreview.install = (app) => {
  app.use(VanImagePreview);
};

export default ImagePreview;
