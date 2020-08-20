import { isDef, createNamespace } from '../utils';

const [createComponent, bem] = createNamespace('badge');

export default createComponent({
  props: {
    dot: Boolean,
    badge: [Number, String],
  },

  render() {
    const { dot, badge } = this;
    const showBadge = isDef(badge) && badge !== '';

    if (!dot && !showBadge) {
      return;
    }

    return <div class={bem({ dot })}>{dot ? '' : badge}</div>;
  },
});
