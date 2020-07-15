/**
 * Bind event when mounted or activated
 */
import { on, off } from '../utils/dom/event';

type BindEventMixinThis = {
  binded: boolean;
};

type BindEventHandler = (bind: Function, isBind: boolean) => void;

export function BindEventMixin(handler: BindEventHandler) {
  function bind(this: BindEventMixinThis) {
    if (!this.binded) {
      handler.call(this, on, true);
      this.binded = true;
    }
  }

  function unbind(this: BindEventMixinThis) {
    if (this.binded) {
      handler.call(this, off, false);
      this.binded = false;
    }
  }

  return {
    mounted: bind,
    activated: bind,
    deactivated: unbind,
    beforeDestroy: unbind,
  };
}
