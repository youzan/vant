import { Ref, watch, isRef, unref, onUnmounted, onDeactivated } from 'vue';
import { onMountedOrActivated } from '../onMountedOrActivated';
import { inBrowser } from '../utils';

// eslint-disable-next-line
export let supportsPassive = false;

if (inBrowser) {
  try {
    const opts = {};
    Object.defineProperty(opts, 'passive', {
      get() {
        supportsPassive = true;
      },
    });
    window.addEventListener('test-passive', null as any, opts);
    // eslint-disable-next-line no-empty
  } catch (e) {}
}

type TargetRef = EventTarget | Ref<EventTarget | undefined>;

export type UseEventListenerOptions = {
  target?: TargetRef;
  capture?: boolean;
  passive?: boolean;
};

export function useEventListener(
  type: string,
  listener: EventListener,
  options: UseEventListenerOptions = {}
) {
  if (!inBrowser) {
    return;
  }

  const { target = window, passive = false, capture = false } = options;

  let attached: boolean;

  const add = (target?: TargetRef) => {
    const element = unref(target);

    if (element && !attached) {
      element.addEventListener(
        type,
        listener,
        supportsPassive ? { capture, passive } : capture
      );
      attached = true;
    }
  };

  const remove = (target?: TargetRef) => {
    const element = unref(target);

    if (element && attached) {
      element.removeEventListener(type, listener, capture);
      attached = false;
    }
  };

  onUnmounted(() => remove(target));
  onDeactivated(() => remove(target));
  onMountedOrActivated(() => add(target));

  if (isRef(target)) {
    watch(target, (val, oldVal) => {
      remove(oldVal);
      add(val);
    });
  }
}
