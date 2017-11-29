import Vue, { PluginFunction } from 'vue';

export interface Lazyload {
  install: PluginFunction<void>
}

export const Lazyload: Lazyload;
