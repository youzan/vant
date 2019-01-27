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

    beforeDestroy() {
      off(document, config.event, config.handler);
    }
  };
}
