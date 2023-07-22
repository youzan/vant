import { ref } from 'vue';
import { config } from 'site-desktop-shared';

let queue = [];
let isIframeReady = false;

function iframeReady(callback) {
  if (isIframeReady) {
    callback();
  } else {
    queue.push(callback);
  }
}

if (window.top === window) {
  window.addEventListener('message', (event) => {
    if (event.data.type === 'iframeReady') {
      isIframeReady = true;
      queue.forEach((callback) => callback());
      queue = [];
    }
  });
} else {
  window.top.postMessage({ type: 'iframeReady' }, '*');
}

function getCurrentDir() {
  const router = window.vueRouter;
  const { path } = router.currentRoute.value;

  if (config.site.simulator?.routeMapper) {
    return config.site.simulator?.routeMapper(path);
  }
  return path;
}

export function syncPathToParent() {
  window.top.postMessage(
    {
      type: 'replacePath',
      value: getCurrentDir(),
    },
    '*',
  );
}

export function syncPathToChild() {
  const iframe = document.querySelector('iframe');
  if (iframe) {
    iframeReady(() => {
      iframe.contentWindow.postMessage(
        {
          type: 'replacePath',
          value: getCurrentDir(),
        },
        '*',
      );
    });
  }
}

export function syncThemeToChild(theme) {
  const iframe = document.querySelector('iframe');
  if (iframe) {
    iframeReady(() => {
      iframe.contentWindow.postMessage(
        {
          type: 'updateTheme',
          value: theme,
        },
        '*',
      );
    });
  }
}

export function getDefaultTheme() {
  const cache = window.localStorage.getItem('vantTheme');

  if (cache) {
    return cache;
  }

  const useDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  return useDark ? 'dark' : 'light';
}

export function useCurrentTheme() {
  const theme = ref(getDefaultTheme());

  window.addEventListener('message', (event) => {
    if (event.data?.type !== 'updateTheme') {
      return;
    }

    const newTheme = event.data?.value || '';
    theme.value = newTheme;
  });

  return theme;
}

export function listenToSyncPath(router) {
  window.addEventListener('message', (event) => {
    if (event.data?.type !== 'replacePath') {
      return;
    }

    const path = event.data?.value || '';
    // should preserve hash for anchor
    if (router.currentRoute.value.path !== path) {
      router.replace(path).catch(() => {});
    }
  });
}
