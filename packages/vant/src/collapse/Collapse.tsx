import {
  defineComponent,
  type PropType,
  type InjectionKey,
  type ExtractPropTypes,
} from 'vue';
import {
  truthProp,
  createNamespace,
  BORDER_TOP_BOTTOM,
  type Numeric,
} from '../utils';
import { useChildren } from '@vant/use';

const [name, bem] = createNamespace('collapse');

export type CollapseProvide = {
  toggle: (name: Numeric, expanded: boolean) => void;
  isExpanded: (name: Numeric) => boolean;
};

export const COLLAPSE_KEY: InjectionKey<CollapseProvide> = Symbol(name);

const collapseProps = {
  border: truthProp,
  accordion: Boolean,
  modelValue: {
    type: [String, Number, Array] as PropType<Numeric | Numeric[]>,
    default: '',
  },
};

export type CollapseProps = ExtractPropTypes<typeof collapseProps>;

function validateModelValue(
  modelValue: Numeric | Numeric[],
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

  props: collapseProps,

  emits: ['change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const { linkChildren } = useChildren(COLLAPSE_KEY);

    const updateName = (name: Numeric | Numeric[]) => {
      emit('change', name);
      emit('update:modelValue', name);
    };

    const toggle = (name: Numeric, expanded: boolean) => {
      const { accordion, modelValue } = props;

      if (accordion) {
        updateName(name === modelValue ? '' : name);
      } else if (expanded) {
        updateName((modelValue as Numeric[]).concat(name));
      } else {
        updateName(
          (modelValue as Numeric[]).filter((activeName) => activeName !== name)
        );
      }
    };

    const isExpanded = (name: Numeric) => {
      const { accordion, modelValue } = props;

      if (
        process.env.NODE_ENV !== 'production' &&
        !validateModelValue(modelValue, accordion)
      ) {
        return false;
      }

      return accordion
        ? modelValue === name
        : (modelValue as Numeric[]).includes(name);
    };

    linkChildren({ toggle, isExpanded });

    return () => (
      <div class={[bem(), { [BORDER_TOP_BOTTOM]: props.border }]}>
        {slots.default?.()}
      </div>
    );
  },
});
