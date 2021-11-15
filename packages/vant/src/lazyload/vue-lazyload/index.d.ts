import type { App } from 'vue';

declare type ListenEvent =
  | 'scroll'
  | 'wheel'
  | 'mousewheel'
  | 'resize'
  | 'animationend'
  | 'transitionend'
  | 'touchmove';

// eslint-disable-next-line
declare type Callback = (listener: any, options: LazyloadOptions) => void;

declare type Filter = {
  webp?: Callback;
  progressive?: Callback;
};

declare type Adapter = {
  error?: Callback;
  loaded?: Callback;
  loading?: Callback;
};

export declare type LazyloadOptions = {
  error?: string;
  filter?: Filter;
  silent?: boolean;
  adapter?: Adapter;
  loading?: string;
  attempt?: number;
  preLoad?: number;
  observer?: boolean;
  lazyImage?: boolean;
  throttleWait?: number;
  listenEvents?: ListenEvent[];
  dispatchEvent?: boolean;
  lazyComponent?: boolean;
  observerOptions?: IntersectionObserverInit;
};

export declare const Lazyload: {
  install(app: App, options?: LazyloadOptions): void;
};

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $Lazyload: {
      $on: (event: string, handler: Callback) => void;
      $off: (event: string, handler?: Callback) => void;
      $once: (event: string, handler: Callback) => void;
    };
  }
}
