import { PropType, defineComponent, InjectionKey } from 'vue';
import { truthProp, createNamespace, BORDER_TOP_BOTTOM } from '../utils';
import { useChildren } from '@vant/use';

const [name, bem] = createNamespace('collapse');

export type CollapseProvide = {
  toggle: (name: number | string, expanded: boolean) => void;
  isExpanded: (name: number | string) => boolean;
};

export const COLLAPSE_KEY: InjectionKey<CollapseProvide> = Symbol(name);

function validateModelValue(
  modelValue: string | number | Array<string | number>,
  accordion: boolean
) {
  if (accordion && Array.isArray(modelValue)) {
    console.error(
      '[Vant] Collapse: "v-model" should not be Array in accordion mode'
    );
    return false;
  }
  if (!accordion && !Array.isArray(modelValue)) {
    console.error(
      '[Vant] Collapse: "v-model" should be Array in non-accordion mode'
    );
    return false;
  }
  return true;
}

export default defineComponent({
  name,

  props: {
    border: truthProp,
    accordion: Boolean,
    modelValue: {
      type: [String, Number, Array] as PropType<
        string | number | Array<string | number>
      >,
      default: '',
    },
  },

  emits: ['change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const { linkChildren } = useChildren(COLLAPSE_KEY);

    const updateName = (name: number | string | Array<number | string>) => {
      emit('change', name);
      emit('update:modelValue', name);
    };

    const toggle = (name: number | string, expanded: boolean) => {
      const { accordion, modelValue } = props;

      if (accordion) {
        updateName(name === modelValue ? '' : name);
      } else if (expanded) {
        updateName((modelValue as Array<number | string>).concat(name));
      } else {
        updateName(
          (modelValue as Array<number | string>).filter(
            (activeName) => activeName !== name
          )
        );
      }
    };

    const isExpanded = (name: number | string) => {
      const { accordion, modelValue } = props;

      if (
        process.env.NODE_ENV !== 'production' &&
        !validateModelValue(modelValue, accordion)
      ) {
        return false;
      }

      return accordion
        ? modelValue === name
        : (modelValue as Array<number | string>).includes(name);
    };

    linkChildren({ toggle, isExpanded });

    return () => (
      <div class={[bem(), { [BORDER_TOP_BOTTOM]: props.border }]}>
        {slots.default?.()}
      </div>
    );
  },
});
