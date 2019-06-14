import { on, off } from '../utils/dom/event';

export function BindEventMixin(handler) {
  function bind() {
    if (!this.binded) {
      handler.call(this, on, true);
      this.binded = true;
    }
  }

  function unbind() {
    if (this.binded) {
      handler.call(this, off, false);
      this.binded = false;
    }
  }

  return {
    mounted: bind,
    activated: bind,
    deactivated: unbind,
    beforeDestroy: unbind
  };
}
