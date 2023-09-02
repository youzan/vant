import {
  watch,
  provide,
  computed,
  watchEffect,
  onActivated,
  onDeactivated,
  onBeforeUnmount,
  defineComponent,
  type PropType,
  type InjectionKey,
  type CSSProperties,
  type ExtractPropTypes,
} from 'vue';
import {
  extend,
  inBrowser,
  kebabCase,
  makeStringProp,
  createNamespace,
  type Numeric,
} from '../utils';
import { setGlobalZIndex } from '../composables/use-global-z-index';

const [name, bem] = createNamespace('config-provider');

export type ConfigProviderTheme = 'light' | 'dark';

export type ConfigProviderProvide = {
  iconPrefix?: string;
};

export const CONFIG_PROVIDER_KEY: InjectionKey<ConfigProviderProvide> =
  Symbol(name);

export type ThemeVars = PropType<Record<string, Numeric>>;

export const configProviderProps = {
  tag: makeStringProp<keyof HTMLElementTagNameMap>('div'),
  theme: makeStringProp<ConfigProviderTheme>('light'),
  zIndex: Number,
  themeVars: Object as ThemeVars,
  themeVarsDark: Object as ThemeVars,
  themeVarsLight: Object as ThemeVars,
  themeVarsInRoot: Boolean,
  iconPrefix: String,
};

export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>;

function mapThemeVarsToCSSVars(themeVars: Record<string, Numeric>) {
  const cssVars: Record<string, Numeric> = {};
  Object.keys(themeVars).forEach((key) => {
    cssVars[`--van-${kebabCase(key)}`] = themeVars[key];
  });
  return cssVars;
}

function syncThemeVarsInRoot(style: Record<string, Numeric>, enable: boolean) {
  if (enable) {
    Object.keys(style).forEach((key) => {
      document.documentElement.style.setProperty(key, style[key] as string);
    });
  } else {
    Object.keys(style).forEach((key) => {
      document.documentElement.style.removeProperty(key);
    });
  }
}

export default defineComponent({
  name,

  props: configProviderProps,

  setup(props, { slots }) {
    const style = computed<CSSProperties | undefined>(() =>
      mapThemeVarsToCSSVars(
        extend(
          {},
          props.themeVars,
          props.theme === 'dark' ? props.themeVarsDark : props.themeVarsLight,
        ),
      ),
    );

    if (inBrowser) {
      const addTheme = () => {
        document.documentElement.classList.add(`van-theme-${props.theme}`);
      };
      const removeTheme = (theme = props.theme) => {
        document.documentElement.classList.remove(`van-theme-${theme}`);
      };

      watch(
        () => props.theme,
        (newVal, oldVal) => {
          if (oldVal) {
            removeTheme(oldVal);
          }
          addTheme();
        },
        { immediate: true },
      );

      onActivated(addTheme);
      onDeactivated(removeTheme);
      onBeforeUnmount(removeTheme);

      syncThemeVarsInRoot(
        style.value as Record<string, Numeric>,
        props.themeVarsInRoot,
      );

      let timer: ReturnType<typeof setTimeout>;
      watch([style, () => props.themeVarsInRoot], () => {
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
          syncThemeVarsInRoot(
            style.value as Record<string, Numeric>,
            props.themeVarsInRoot,
          );
        }, 100);
      });
    }

    provide(CONFIG_PROVIDER_KEY, props);

    watchEffect(() => {
      if (props.zIndex !== undefined) {
        setGlobalZIndex(props.zIndex);
      }
    });

    return () => (
      <props.tag
        class={bem()}
        style={!props.themeVarsInRoot ? style.value : undefined}
      >
        {slots.default?.()}
      </props.tag>
    );
  },
});
