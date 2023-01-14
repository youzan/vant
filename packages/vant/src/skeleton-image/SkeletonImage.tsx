import { defineComponent, type ExtractPropTypes } from 'vue';

import {
  numericProp,
  getSizeStyle,
  makeStringProp,
  createNamespace,
} from '../utils';

import { Icon } from '../icon';

const [name, bem] = createNamespace('skeleton-image');

export type SkeletonImageShape = 'square' | 'round';

export const skeletonImageProps = {
  imageSize: numericProp,
  imageShape: makeStringProp<SkeletonImageShape>('square'),
};

export type SkeletonImageProps = ExtractPropTypes<typeof skeletonImageProps>;

export default defineComponent({
  name,

  props: skeletonImageProps,

  setup(props) {
    return () => (
      <div
        class={bem([props.imageShape])}
        style={getSizeStyle(props.imageSize)}
      >
        <Icon name={'photo'} class={bem('icon')} />
      </div>
    );
  },
});
