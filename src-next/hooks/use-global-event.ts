import { on, off } from '../../src/utils/dom/event';
import {
  Ref,
  watch,
  onMounted,
  onActivated,
  onUnmounted,
  onDeactivated
} from 'vue';

export function useGlobalEvent(
  target: EventTarget,
  event: string,
  handler: EventListener,
  passive = false,
  flag?: Ref<boolean>
) {
  let binded: boolean;

  function add() {
    if (binded || (flag && !flag.value)) {
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

  if (flag) {
    watch(() => {
      flag.value ? add() : remove();
    });
  }

  onMounted(add);
  onActivated(add);
  onUnmounted(remove);
  onDeactivated(remove);
}
