/**
 * Listen to click outside event
 */
import { on, off } from '../utils/dom/event';

export const ClickOutsideMixin = config => ({
  mounted() {
    this.clickOutsideHandler = event => {
      if (!this.$el.contains(event.target)) {
        this[config.method]();
      }
    };

    on(document, config.event, this.clickOutsideHandler);
  },

  beforeDestroy() {
    off(document, config.event, this.clickOutsideHandler);
  }
});
