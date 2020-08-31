import { createApp, reactive, Component } from 'vue';
import { usePublicApi } from '../composition/use-public-api';

export function usePopupState() {
  const state = reactive({
    show: false,
  });

  const toggle = (show: boolean) => {
    state.show = show;
  };

  const close = () => {
    toggle(false);
  };

  const setState = (props: Record<string, any>) => {
    Object.assign(state, props);
  };

  usePublicApi({ close, toggle, setState });

  return {
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
