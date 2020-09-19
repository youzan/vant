import { isDef, createNamespace } from '../utils';

const [createComponent, bem] = createNamespace('badge');

export default createComponent({
  props: {
    dot: Boolean,
    badge: [Number, String],
  },

  setup(props) {
    return () => {
      const { dot, badge } = props;
      const hasBadge = isDef(badge) && badge !== '';

      if (dot || hasBadge) {
        return <div class={bem({ dot })}>{dot ? '' : badge}</div>;
      }
    };
  },
});
