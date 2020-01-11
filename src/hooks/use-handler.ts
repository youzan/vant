import { on, off } from '../utils';
import { onMounted, onActivated, onUnmounted, onDeactivated } from 'vue';

export function useHandler(
  target: HTMLElement | Document | Window,
  event: string,
  handler: any,
  passive = false
) {
  let added: boolean;

  function add() {
    if (!added) {
      on(target, event, handler, passive);
      added = true;
    }
  }

  function remove() {
    if (added) {
      off(target, event, handler);
      added = false;
    }
  }

  onMounted(add);
  onActivated(add);
  onUnmounted(remove);
  onDeactivated(remove);
}
