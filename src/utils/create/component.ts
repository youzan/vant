/**
 * Create a basic component with common options
 */
import { camelize } from '../format/string';
import type { App, ComponentOptions } from 'vue';

export function createComponent(name: string) {
  return function (sfc: ComponentOptions) {
    sfc.name = name;
    sfc.install = (app: App) => {
      app.component(name as string, sfc);
      app.component(camelize(`-${name}`), sfc);
    };

    return sfc;
  };
}
