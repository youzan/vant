import { computed, CSSProperties, defineComponent, PropType } from 'vue';
import { createNamespace } from '../utils';

const [name, bem] = createNamespace('config-provider');

export function kebabCase(word: string) {
  return word
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
}

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
    themeVars: Object as PropType<Record<string, string | number>>,
    tag: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: 'div',
    },
  },

  setup(props, { slots }) {
    const style = computed<CSSProperties | undefined>(() => {
      if (props.themeVars) {
        return mapThemeVarsToCSSVars(props.themeVars);
      }
    });

    return () => (
      <props.tag class={bem()} style={style.value}>
        {slots.default?.()}
      </props.tag>
    );
  },
});
