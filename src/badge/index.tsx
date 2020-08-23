import { isDef, createNamespace } from '../utils';

const [createComponent, bem] = createNamespace('badge');

export type BadgeProps = {
  dot?: boolean;
  badge?: number | string;
};

export default createComponent({
  props: {
    dot: Boolean,
    badge: [Number, String],
  },

  setup(props: BadgeProps) {
    return () => {
      const { dot, badge } = props;
      const hasBadge = isDef(badge) && badge !== '';

      if (dot || hasBadge) {
        return <div class={bem({ dot })}>{dot ? '' : badge}</div>;
      }
    };
  },
});
