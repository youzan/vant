import {
  Ref,
  unref,
  onMounted,
  onActivated,
  onUnmounted,
  onDeactivated,
} from 'vue';

const inBrowser = typeof window !== 'undefined';

let supportsPassive = false;
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

export type UseEventListenerOptions = {
  type: string;
  target: EventTarget | Ref<EventTarget>;
  capture?: boolean;
  passive?: boolean;
  listener: EventListener;
};

export function useEventListener({
  type,
  target,
  passive = false,
  capture = false,
  listener,
}: UseEventListenerOptions) {
  let attached: boolean;

  const add = () => {
    const element = unref(target);

    if (element && inBrowser && !attached) {
      element.addEventListener(
        type,
        listener,
        supportsPassive ? { capture, passive } : capture
      );
      attached = true;
    }
  };

  const remove = () => {
    const element = unref(target);

    if (element && inBrowser && attached) {
      element.removeEventListener(type, listener, capture);
      attached = false;
    }
  };

  onMounted(add);
  onActivated(add);
  onUnmounted(remove);
  onDeactivated(remove);
}
