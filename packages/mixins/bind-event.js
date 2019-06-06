import { on, off } from '../utils/dom/event';

export function BindEventMixin(handler) {
  function bind() {
    if (!this.binded) {
      handler.call(this, on);
      this.binded = true;
    }
  }

  function unbind() {
    if (this.binded) {
      handler.call(this, off);
      this.binded = false;
    }
  }

  return {
    mounted: bind,
    activated: bind,
    destroyed: unbind,
    deactivated: unbind
  };
}
