import { on, off } from '../utils/dom/event';
import {
  Ref,
  watch,
  onMounted,
  onActivated,
  onUnmounted,
  onDeactivated,
} from 'vue';

export function useGlobalEvent(
  target: Ref<EventTarget>,
  event: string,
  handler: EventListener,
  passive = false,
  flag?: Ref<boolean>
) {
  let binded: boolean;

  function add() {
    if (binded || (flag && !flag.value) || !target.value) {
      return;
    }

    on(target.value, event, handler, passive);
    binded = true;
  }

  function remove() {
    if (binded && target.value) {
      off(target.value, event, handler);
      binded = false;
    }
  }

  if (flag) {
    watch(flag, () => {
      flag.value ? add() : remove();
    });
  }

  onMounted(add);
  onActivated(add);
  onUnmounted(remove);
  onDeactivated(remove);
}
