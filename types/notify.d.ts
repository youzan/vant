import Vue from 'vue';

type NotifyMessage = string | number;

export type NotifyOptions = {
  message?: NotifyMessage;
  color?: string;
  background?: string;
  duration?: number;
}

export interface VanNotify extends Vue {
  message: NotifyMessage;
  color: string;
  background: string;
  duration: number;
}

export interface Notify {
  (message: NotifyOptions | NotifyMessage): VanNotify;
  clear(): void;
  install(): void;
  setDefaultOptions(options: NotifyOptions): void;
  resetDefaultOptions(): void;
}

declare module 'vue/types/vue' {
  interface Vue {
    $notify: Notify
  }
}

export const Notify: Notify;
