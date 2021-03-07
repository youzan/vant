/**
 * Create a basic component with common options
 */
/* eslint-disable @typescript-eslint/ban-types */
import {
  App,
  EmitsOptions,
  MethodOptions,
  defineComponent,
  DefineComponent,
  ComputedOptions,
  ComponentPropsOptions,
  ComponentOptionsMixin,
  ComponentOptionsWithoutProps,
  ComponentOptionsWithObjectProps,
} from 'vue';
import { camelize } from '../format/string';

type Install = (app: App) => void;

export function createComponent(name: string) {
  // extend defineComponent and attach install method
  // mostly copied from @vue/runtime-core
  function defineComponentWithInstall<
    PropsOptions extends Readonly<ComponentPropsOptions>,
    RawBindings,
    D,
    C extends ComputedOptions = {},
    M extends MethodOptions = {},
    Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
    Extends extends ComponentOptionsMixin = ComponentOptionsMixin,
    E extends EmitsOptions = Record<string, any>,
    EE extends string = string
  >(
    options: ComponentOptionsWithObjectProps<
      PropsOptions,
      RawBindings,
      D,
      C,
      M,
      Mixin,
      Extends,
      E,
      EE
    >
  ): DefineComponent<
    PropsOptions,
    RawBindings,
    D,
    C,
    M,
    Mixin,
    Extends,
    E,
    EE
  > & {
    install: Install;
  };

  function defineComponentWithInstall<
    Props = {},
    RawBindings = {},
    D = {},
    C extends ComputedOptions = {},
    M extends MethodOptions = {},
    Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
    Extends extends ComponentOptionsMixin = ComponentOptionsMixin,
    E extends EmitsOptions = EmitsOptions,
    EE extends string = string
  >(
    options: ComponentOptionsWithoutProps<
      Props,
      RawBindings,
      D,
      C,
      M,
      Mixin,
      Extends,
      E,
      EE
    >
  ): DefineComponent<Props, RawBindings, D, C, M, Mixin, Extends, E, EE> & {
    install: Install;
  };

  function defineComponentWithInstall(sfc: Record<string, unknown>) {
    sfc.name = name;
    sfc.install = (app: App) => {
      app.component(name as string, sfc);
      app.component(camelize(`-${name}`), sfc);
    };

    return defineComponent(sfc) as unknown;
  }

  return defineComponentWithInstall;
}
