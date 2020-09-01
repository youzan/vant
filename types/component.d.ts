import { App } from 'vue';

export class VanComponent {
  static name: string;

  static install: (app: App) => any;
}
