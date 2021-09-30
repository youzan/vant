import {
  provide,
  computed,
  PropType,
  InjectionKey,
  CSSProperties,
  defineComponent,
} from 'vue';
import { kebabCase, makeStringProp, createNamespace } from '../utils';

const [name, bem] = createNamespace('config-provider');

export type ConfigProviderProvide = {
  iconPrefix?: string;
};

export const CONFIG_PROVIDER_KEY: InjectionKey<ConfigProviderProvide> =
  Symbol(name);

function mapThemeVarsToCSSVars(themeVars: Record<string, string | number>) {
  const cssVars: Record<string, string | number> = {};
  Object.keys(themeVars).forEach((key) => {
    cssVars[`--van-${kebabCase(key)}`] = themeVars[key];
  });
  return cssVars;
}

export default defineComponent({
  name,

  props: {
    tag: makeStringProp<keyof HTMLElementTagNameMap>('div'),
    themeVars: Object as PropType<Record<string, string | number>>,
    iconPrefix: String,
  },

  setup(props, { slots }) {
    const style = computed<CSSProperties | undefined>(() => {
      if (props.themeVars) {
        return mapThemeVarsToCSSVars(props.themeVars);
      }
    });

    provide(CONFIG_PROVIDER_KEY, props);

    return () => (
      <props.tag class={bem()} style={style.value}>
        {slots.default?.()}
      </props.tag>
    );
  },
});
