import { defineComponent, type ExtractPropTypes } from 'vue';

// Utils
import {
  extend,
  addUnit,
  numericProp,
  getSizeStyle,
  makeStringProp,
  createNamespace,
} from '../utils';

export const DEFAULT_ROW_WIDTH = '100%';

export type SkeletonItemType = 'cell' | 'title' | 'avatar';

export type SkeletonAvatarShape = 'square' | 'round';

export const skeletonCommonProps = {
  round: Boolean,
  titleWidth: numericProp,
  avatarSize: numericProp,
  avatarShape: makeStringProp<SkeletonAvatarShape>('round'),
};

export const skeletonItemProps = extend({}, skeletonCommonProps, {
  rowWidth: numericProp,
  type: makeStringProp<SkeletonItemType>('cell'),
});

export type SkeletonItemProps = ExtractPropTypes<typeof skeletonItemProps>;

const [name, bem] = createNamespace('skeleton-item');

export default defineComponent({
  name,

  props: skeletonItemProps,

  setup(props) {
    const renderCell = () => (
        <div
          class={bem('cell')}
          style={{ width: props.rowWidth || DEFAULT_ROW_WIDTH }}
        />
      );

    const renderTitle = () => (
        <h3 class={bem('title')} style={{ width: addUnit(props.titleWidth) }} />
      );

    const renderAvatar = () => {
      <div
        class={bem('avatar', props.avatarShape)}
        style={getSizeStyle(props.avatarSize)}
      />;
    };

    const renderContent = () => {
      switch (props.type) {
        case 'cell':
          return renderCell();
        case 'title':
          return renderTitle();
        case 'avatar':
          return renderAvatar();
        default:
          return renderCell();
      }
    };

    return () => renderContent();
  },
});
