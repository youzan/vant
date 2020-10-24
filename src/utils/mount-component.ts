import { createApp, reactive, Component, nextTick } from 'vue';
import { useExpose } from '../composition/use-expose';

export function usePopupState() {
  const state = reactive({
    show: false,
  });

  const toggle = (show: boolean) => {
    state.show = show;
  };

  const open = (props: Record<string, any>) => {
    Object.assign(state, props);

    nextTick(() => {
      toggle(true);
    });
  };

  const close = () => {
    toggle(false);
  };

  useExpose({ open, close, toggle });

  return {
    open,
    close,
    state,
    toggle,
  };
}

export function mountComponent(RootComponent: Component) {
  const app = createApp(RootComponent);
  const root = document.createElement('div');

  document.body.appendChild(root);

  return {
    instance: app.mount(root),
    unmount() {
      app.unmount(root);
      document.body.removeChild(root);
    },
  };
}
