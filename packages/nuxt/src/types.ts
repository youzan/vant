/** name: export name from the library, as: the name you want to use in your project, from: the name of library */
export type PresetImport = string | [name: string, as?: string, from?: string];

/** Used to filter files that need to automatically import styles and other functions */
export interface TransformOptions {
  include: RegExp[];
  exclude: RegExp[];
}

export interface Options extends TransformOptions {
  /**
   * Whether to automatically load lazyload directives and components.
   *
   * @default false
   *
   * @example
   * ```ts
   * lazyload: true,
   * // or
   * lazyload: { lazyComponent: true },
   * ```
   */
  lazyload: boolean | { lazyComponent?: boolean; lazyImage?: boolean };
  /**
   * If there are components that are not imported automatically from Vant, you need to add the component here.
   */
  components: PresetImport[];
  /**
   * If you wish to add automatically import content from Vant, you can add it here.
   */
  imports: PresetImport[];
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    vant?: Partial<Options>;
  }
  interface NuxtOptions {
    vant?: Partial<Options>;
  }
}
