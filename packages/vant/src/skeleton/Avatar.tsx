import { defineComponent, ExtractPropTypes } from 'vue';

// Utils
import {
  numericProp,
  getSizeStyle,
  makeStringProp,
  createNamespace,
} from '../utils';

const [name, bem] = createNamespace('skeleton-avatar');

export type SkeletonAvatarShape = 'square' | 'round';

export const skeletonAvatarProps = {
  avatarSize: numericProp,
  avatarShape: makeStringProp<SkeletonAvatarShape>('round'),
};

export type SkeletonAvatarProps = ExtractPropTypes<typeof skeletonAvatarProps>;

export default defineComponent({
  name,

  props: skeletonAvatarProps,

  setup(props) {
    return () => (
      <div
        class={bem(['', props.avatarShape])}
        style={getSizeStyle(props.avatarSize)}
      />
    );
  },
});
