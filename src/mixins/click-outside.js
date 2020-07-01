/**
 * Listen to click outside event
 */
import { on, off } from '../utils/dom/event';

export const ClickOutsideMixin = (config) => ({
  props: {
    closeOnClickOutside: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    const clickOutsideHandler = (event) => {
      if (this.closeOnClickOutside && !this.$el.contains(event.target)) {
        this[config.method]();
      }
    };

    return { clickOutsideHandler };
  },

  mounted() {
    on(document, config.event, this.clickOutsideHandler);
  },

  beforeDestroy() {
    off(document, config.event, this.clickOutsideHandler);
  },
});
