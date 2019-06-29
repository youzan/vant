/**
 * Listen to click outside event
 */
import Vue from 'vue';
import { on, off } from '../utils/dom/event';

export type ClickOutsideMixinConfig = {
  event: string;
  method: string;
};

export const ClickOutsideMixin = (config: ClickOutsideMixinConfig) =>
  Vue.extend({
    data() {
      const clickOutsideHandler = (event: Event) => {
        if (!this.$el.contains(event.target as Node)) {
          (this as any)[config.method]();
        }
      };

      return { clickOutsideHandler };
    },

    mounted() {
      on(document, config.event, this.clickOutsideHandler);
    },

    beforeDestroy() {
      off(document, config.event, this.clickOutsideHandler);
    }
  });
