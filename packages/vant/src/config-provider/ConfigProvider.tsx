import {
  watch,
  provide,
  computed,
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

const configProviderProps = {
  tag: makeStringProp<keyof HTMLElementTagNameMap>('div'),
  theme: makeStringProp<ConfigProviderTheme>('light'),
  zIndex: Number,
  themeVars: Object as PropType<Record<string, Numeric>>,
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

export default defineComponent({
  name,

  props: configProviderProps,

  setup(props, { slots }) {
    const style = computed<CSSProperties | undefined>(() => {
      if (props.themeVars) {
        return mapThemeVarsToCSSVars(props.themeVars);
      }
    });

    if (inBrowser) {
      const addTheme = () => {
        document.body.classList.add(`van-theme-${props.theme}`);
      };
      const removeTheme = (theme = props.theme) => {
        document.body.classList.remove(`van-theme-${theme}`);
      };

      watch(
        () => props.theme,
        (newVal, oldVal) => {
          if (oldVal) {
            removeTheme(oldVal);
          }
          addTheme();
        },
        { immediate: true }
      );

      onActivated(addTheme);
      onDeactivated(removeTheme);
      onBeforeUnmount(removeTheme);
    }

    provide(CONFIG_PROVIDER_KEY, props);

    watchEffect(() => {
      if (props.zIndex !== undefined) {
        setGlobalZIndex(props.zIndex);
      }
    });

    return () => (
      <props.tag class={bem()} style={style.value}>
        {slots.default?.()}
      </props.tag>
    );
  },
});
