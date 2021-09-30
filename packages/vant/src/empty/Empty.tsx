import { defineComponent } from 'vue';
import {
  numericProp,
  getSizeStyle,
  makeStringProp,
  createNamespace,
} from '../utils';
import { Network } from './Network';

const [name, bem] = createNamespace('empty');

const PRESET_IMAGES = ['error', 'search', 'default'];

export default defineComponent({
  name,

  props: {
    image: makeStringProp('default'),
    imageSize: numericProp,
    description: String,
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

      if (PRESET_IMAGES.includes(image)) {
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
        <div class={bem('image')} style={getSizeStyle(props.imageSize)}>
          {renderImage()}
        </div>
        {renderDescription()}
        {renderBottom()}
      </div>
    );
  },
});
