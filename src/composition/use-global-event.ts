import { on, off } from '../utils/dom/event';
import {
  Ref,
  unref,
  watch,
  onMounted,
  onActivated,
  onUnmounted,
  onDeactivated,
} from 'vue';

export function useGlobalEvent(
  target: EventTarget | Ref<EventTarget>,
  event: string,
  handler: EventListener,
  passive = false,
  flag?: Ref<boolean>
) {
  let binded: boolean;

  const add = () => {
    const element = unref(target);

    if (binded || (flag && !flag.value) || !element) {
      return;
    }

    on(element, event, handler, passive);
    binded = true;
  };

  const remove = () => {
    const element = unref(target);
    if (binded && element) {
      off(element, event, handler);
      binded = false;
    }
  };

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
