/**
 * v-clickoutside
 *
 * ```vue
 * <div v-clickoutside="onClose">
 * ```
 */

import { on, off } from '../utils/event';

export default function (config) {
  return {
    mounted() {
      config.handler = event => {
        if (!this.$el.contains(event.target)) {
          this[config.method]();
        }
      };

      on(document, config.event, config.handler);
    },

    beforeDestroyed() {
      off(document, config.event, config.handler);
    }
  };
}
