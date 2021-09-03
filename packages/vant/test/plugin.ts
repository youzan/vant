/* eslint-disable max-classes-per-file */
import { ComponentPublicInstance } from 'vue';
import { config, VueWrapper, DOMWrapper } from '@vue/test-utils';

declare module '@vue/test-utils' {
  // eslint-disable-next-line
  export class DOMWrapper<ElementType extends Element> {
    style: CSSStyleDeclaration;
  }

  // eslint-disable-next-line
  class VueWrapper<T extends ComponentPublicInstance> {
    style: CSSStyleDeclaration;
  }
}

const stylePlugin = (
  wrapper: VueWrapper<ComponentPublicInstance> | DOMWrapper<Element>
) => ({
  style: (wrapper.element as HTMLElement).style,
});

config.plugins.DOMWrapper.install(stylePlugin);
config.plugins.VueWrapper.install(stylePlugin);
