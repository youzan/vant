/**
 * Vue Router support
 */
import {
  PropType,
  ExtractPropTypes,
  getCurrentInstance,
  ComponentPublicInstance,
} from 'vue';
import type { RouteLocation } from 'vue-router';

export const routeProps = {
  to: [String, Object] as PropType<RouteLocation>,
  url: String,
  replace: Boolean,
};

export type RouteProps = ExtractPropTypes<typeof routeProps>;

export function route(vm: ComponentPublicInstance<RouteProps>) {
  const router = vm.$router;
  const { to, url, replace } = vm;

  if (to && router) {
    router[replace ? 'replace' : 'push'](to);
  } else if (url) {
    replace ? location.replace(url) : (location.href = url);
  }
}

export function useRoute() {
  const vm = getCurrentInstance()!.proxy as ComponentPublicInstance<RouteProps>;
  return () => {
    route(vm);
  };
}
