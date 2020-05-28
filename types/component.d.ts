import Vue from 'vue';

export class VanComponent extends Vue {
  static name: string;

  static install(vue: typeof Vue): void;
}
