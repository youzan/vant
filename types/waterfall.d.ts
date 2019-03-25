import { DirectiveFunction, PluginFunction } from 'vue';

export interface Waterfall {
  (type: string): DirectiveFunction;
  install: PluginFunction<void>;
}

export const Waterfall: Waterfall;
