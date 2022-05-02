import { defineComponent, PropType, type ExtractPropTypes } from 'vue';
import {
  Numeric,
  getSizeStyle,
  makeStringProp,
  createNamespace,
} from '../utils';
import {
  renderError,
  renderSearch,
  renderNetwork,
  renderMaterial,
} from './Images';

const [name, bem] = createNamespace('empty');

const PRESET_IMAGES: Record<string, () => JSX.Element> = {
  error: renderError,
  search: renderSearch,
  network: renderNetwork,
  default: renderMaterial,
};

const emptyProps = {
  image: makeStringProp('default'),
  imageSize: [Number, String, Array] as PropType<Numeric | [Numeric, Numeric]>,
  description: String,
};

export type EmptyProps = ExtractPropTypes<typeof emptyProps>;

export default defineComponent({
  name,

  props: emptyProps,

  setup(props, { slots }) {
    const renderImage = () => {
      if (slots.image) {
        return slots.image();
      }
      return PRESET_IMAGES[props.image]?.() || <img src={props.image} />;
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
