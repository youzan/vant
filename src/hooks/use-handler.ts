import { on, off } from '../utils/dom/event';
import {
  Ref,
  watch,
  onMounted,
  onActivated,
  onUnmounted,
  onDeactivated
} from 'vue';

export function useHandler(
  target: HTMLElement | Document | Window,
  event: string,
  handler: any,
  passive = false,
  ref?: Ref<boolean>
) {
  let binded: boolean;

  function add() {
    if (binded || (ref && !ref.value)) {
      return;
    }

    on(target, event, handler, passive);
    binded = true;
  }

  function remove() {
    if (binded) {
      off(target, event, handler);
      binded = false;
    }
  }

  if (ref) {
    watch(() => {
      ref.value ? add() : remove();
    });
  }

  onMounted(add);
  onActivated(add);
  onUnmounted(remove);
  onDeactivated(remove);
}
