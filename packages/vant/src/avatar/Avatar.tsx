import {
  defineComponent,
  type PropType,
  type CSSProperties,
  type ExtractPropTypes,
} from 'vue';
import { isDef, addUnit, makeStringProp, createNamespace } from '../utils';
import { AvatarShape, AvatarSize } from './types';

const [name, bem] = createNamespace('avatar');

export const avatarProps = {
  src: String,
  text: String,
  size: [Number, String] as PropType<number | string | AvatarSize>,
  shape: makeStringProp<AvatarShape>('round'),
  bgColor: String,
  color: String,
  icon: String,
  alt: String,
};

export type AvatarProps = ExtractPropTypes<typeof avatarProps>;

export default defineComponent({
  name,

  props: avatarProps,

  emits: ['error', 'click'],

  setup(props, { emit, slots }) {
    const style = (): CSSProperties => {
      const style: CSSProperties = {};

      if (isDef(props.size)) {
        const size = addUnit(props.size);
        style.width = size;
        style.height = size;
        style.fontSize = `calc(${size} * 0.45)`;
      }

      if (props.color) {
        style.color = props.color;
      }

      if (props.bgColor) {
        style.backgroundColor = props.bgColor;
        if (!props.color) {
          style.color = '#fff';
        }
      }

      return style;
    };

    const onImageError = (event: Event) => {
      emit('error', event);
    };

    const onImageClick = () => {
      emit('click');
    };

    const renderContent = () => {
      if (slots.default) {
        return slots.default();
      }

      if (props.src) {
        return (
          <img
            src={props.src}
            alt={props.alt}
            class={bem('img')}
            onError={onImageError}
            onClick={onImageClick}
          />
        );
      }

      if (props.text) {
        return <span class={bem('text')}>{props.text}</span>;
      }

      if (props.icon) {
        return <i class={[bem('icon'), `van-icon van-icon-${props.icon}`]} />;
      }

      return null;
    };

    return () => (
      <div class={bem([props.shape, props.size])} style={style()}>
        {renderContent()}
      </div>
    );
  },
});
