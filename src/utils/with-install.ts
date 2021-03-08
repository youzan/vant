import { App } from 'vue';
import { camelize } from './format/string';

export type WithInstall<T> = T & {
  install(app: App): void;
};

// using any here because tsc will generate some weird results when using generics
export function withInstall<T>(options: any): WithInstall<T> {
  (options as Record<string, unknown>).install = (app: App) => {
    const { name } = options as any;
    app.component(name, options);
    app.component(camelize(`-${name}`), options);
  };

  return options;
}
