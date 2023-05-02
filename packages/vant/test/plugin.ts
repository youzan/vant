/* eslint-disable max-classes-per-file */
import { config } from '@vue/test-utils';

declare module '@vue/test-utils' {
  // eslint-disable-next-line
  export class DOMWrapper<NodeType extends Node> {
    style: CSSStyleDeclaration;
  }

  export class VueWrapper {
    style: CSSStyleDeclaration;
  }
}

const stylePlugin = (wrapper: any) => ({
  style: wrapper.element.style,
});

config.plugins.DOMWrapper.install(stylePlugin);
config.plugins.VueWrapper.install(stylePlugin);
