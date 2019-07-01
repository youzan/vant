import Vue from 'vue';
import { on, off } from '../utils/dom/event';
import { BindEventMixin } from './bind-event';

export const CloseOnPopstateMixin = Vue.extend({
  mixins: [BindEventMixin(function (this: any, bind, isBind) {
    this.onPopstate(isBind);
  })],

  props: {
    closeOnPopstate: Boolean
  },

  data() {
    return {
      bindStatus: false
    };
  },

  watch: {
    closeOnPopstate(val: boolean) {
      this.onPopstate(val);
    }
  },

  methods: {
    onPopstate(bind: boolean) {
      /* istanbul ignore if */
      if (this.$isServer) {
        return;
      }

      if (this.bindStatus !== bind) {
        this.bindStatus = bind;
        const action = bind ? on : off;
        action(window, 'popstate', (this as any).close);
      }
    }
  }
});
