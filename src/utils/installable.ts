import { App } from 'vue';
import { camelize } from './format/string';

export function installable<T>(options: T) {
  return {
    ...options,
    install(app: App) {
      const { name } = options as any;
      app.component(name, options);
      app.component(camelize(`-${name}`), options);
    },
  };
}
