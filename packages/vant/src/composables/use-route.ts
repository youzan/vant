/**
 * Vue Router support
 */
import {
  getCurrentInstance,
  type PropType,
  type ExtractPropTypes,
  type ComponentPublicInstance,
} from 'vue';
import type { RouteLocationRaw } from 'vue-router';

export const routeProps = {
  to: [String, Object] as PropType<RouteLocationRaw>,
  url: String,
  replace: Boolean,
};

export type RouteProps = ExtractPropTypes<typeof routeProps>;

export function route({
  to,
  url,
  replace,
  $router: router,
}: ComponentPublicInstance<RouteProps>) {
  if (to && router) {
    router[replace ? 'replace' : 'push'](to);
  } else if (url) {
    replace ? location.replace(url) : (location.href = url);
  }
}

export function useRoute() {
  const vm = getCurrentInstance()!.proxy as ComponentPublicInstance<RouteProps>;
  return () => route(vm);
}
