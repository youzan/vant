import {
  defineComponent,
  computed,
  cloneVNode,
  type PropType,
  type CSSProperties,
  type ExtractPropTypes,
} from 'vue';
import { numericProp, makeStringProp, createNamespace } from '../utils';
import type { AvatarSize, AvatarShape } from '../avatar';
import VanAvatar from '../avatar';
import type { AvatarGroupCascadingValue } from './types';

const [name, bem] = createNamespace('avatar-group');

export const avatarGroupProps = {
  maxCount: numericProp,
  cascading: makeStringProp<AvatarGroupCascadingValue>('left-up'),
  shape: String as PropType<AvatarShape>,
  size: String as PropType<number | string | AvatarSize>,
  collapseAvatar: String,
};

export type AvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>;

export default defineComponent({
  name,

  props: avatarGroupProps,

  setup(props, { slots }) {
    const groupClass = computed(() => {
      const classes = [bem()];
      classes.push(bem(props.cascading as string));
      return classes;
    });

    const renderCollapseAvatar = (restCount: number) => {
      if (slots.collapseAvatar) {
        const collapseContent = slots.collapseAvatar({ restCount });

        const collapseNode = Array.isArray(collapseContent)
          ? collapseContent[0]
          : collapseContent;

        if (Array.isArray(collapseContent) && collapseContent.length > 1) {
          if (process.env.NODE_ENV !== 'production') {
            // eslint-disable-next-line no-console
            console.warn(
              '[Vant] <AvatarGroup> Multiple elements found in collapseAvatar slot, only the first element will be rendered.',
            );
          }
        }
        if (collapseNode && typeof collapseNode === 'object') {
          const childProps = collapseNode.props || {};
          return cloneVNode(collapseNode, {
            shape: props.shape || childProps.shape,
            size: props.size || childProps.size,
          });
        }
        return collapseContent;
      }

      const content = props.collapseAvatar || `+${restCount}`;

      return (
        <VanAvatar
          class={bem('collapse')}
          text={content}
          shape={props.shape}
          size={props.size}
          bgColor="var(--van-gray-3)"
          color="var(--van-gray-6)"
        />
      );
    };

    return () => {
      const children = slots.default?.() || [];
      const rawMaxCount = props.maxCount
        ? Number(props.maxCount)
        : children.length;
      const maxCount = rawMaxCount <= 0 ? children.length : rawMaxCount;
      const displayChildren = children.slice(0, maxCount);
      const restCount = Math.max(0, children.length - maxCount);

      return (
        <div class={groupClass.value}>
          {displayChildren.map((child, index) => {
            const itemStyle: CSSProperties = {};

            if (props.cascading === 'left-up') {
              itemStyle.zIndex = index + 1;
            } else {
              itemStyle.zIndex = displayChildren.length - index;
            }

            const childProps = child.props || {};
            const clonedChild = cloneVNode(child, {
              shape: childProps.shape || props.shape,
              size: childProps.size || props.size,
            });

            return (
              <div key={index} class={bem('item')} style={itemStyle}>
                {clonedChild}
              </div>
            );
          })}
          {restCount > 0 && (
            <div
              class={bem('item')}
              style={{
                zIndex:
                  props.cascading === 'left-up'
                    ? displayChildren.length + 1
                    : 0,
              }}
            >
              {renderCollapseAvatar(restCount)}
            </div>
          )}
        </div>
      );
    };
  },
});
