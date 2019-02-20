import Vue from 'vue';

export class VanComponent {
  static name: string;
  static install(vue: typeof Vue): void;
}
