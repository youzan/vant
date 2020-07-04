// Utils
import { isDef } from '../../src/utils';
import { createNamespace } from '../utils/create';

const [createComponent, bem] = createNamespace('info');

export default createComponent({
  props: {
    dot: Boolean,
    info: [Number, String],
  },

  render() {
    const { dot, info } = this;
    const showInfo = isDef(info) && info !== '';

    if (!dot && !showInfo) {
      return;
    }

    return <div class={bem({ dot })}>{dot ? '' : info}</div>;
  },
});
