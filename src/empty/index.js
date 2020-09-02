import { createNamespace } from '../utils';
import { Network } from './Network';

const [createComponent, bem] = createNamespace('empty');

const PRESET_IMAGES = ['error', 'search', 'default'];

export default createComponent({
  props: {
    description: String,
    image: {
      type: String,
      default: 'default',
    },
  },

  setup(props, { slots }) {
    const renderImage = () => {
      if (slots.image) {
        return slots.image();
      }

      let { image } = props;

      if (image === 'network') {
        return Network;
      }

      if (PRESET_IMAGES.indexOf(image) !== -1) {
        image = `https://img.yzcdn.cn/vant/empty-image-${image}.png`;
      }

      return <img src={image} />;
    };

    const renderDescription = () => {
      const description = slots.description
        ? slots.description()
        : props.description;

      if (description) {
        return <p class={bem('description')}>{description}</p>;
      }
    };

    const renderBottom = () => {
      if (slots.default) {
        return <div class={bem('bottom')}>{slots.default()}</div>;
      }
    };

    return () => (
      <div class={bem()}>
        <div class={bem('image')}>{renderImage()}</div>
        {renderDescription()}
        {renderBottom()}
      </div>
    );
  },
});
