/**
 * Vue Router support
 */

import type { Router, RouteLocation } from 'vue-router';

export type RouteConfig = {
  url?: string;
  to?: RouteLocation;
  replace?: boolean;
};

function isRedundantNavigation(err: Error) {
  return (
    err.name === 'NavigationDuplicated' ||
    // compatible with vue-router@3.3
    (err.message && err.message.indexOf('redundant navigation') !== -1)
  );
}

export function route(router: Router, config: RouteConfig) {
  const { to, url, replace } = config;
  if (to && router) {
    const promise = router[replace ? 'replace' : 'push'](to);

    /* istanbul ignore else */
    if (promise && promise.catch) {
      promise.catch((err) => {
        if (err && !isRedundantNavigation(err)) {
          throw err;
        }
      });
    }
  } else if (url) {
    replace ? location.replace(url) : (location.href = url);
  }
}

export type RouteProps = {
  url?: string;
  replace?: boolean;
  to?: RouteLocation;
};

export const routeProps = {
  url: String,
  replace: Boolean,
  to: [String, Object],
};
