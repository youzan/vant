import { createNamespace } from '../utils';
import { BORDER_TOP_BOTTOM } from '../utils/constant';
import { useChildren } from '@vant/use';

const [createComponent, bem] = createNamespace('collapse');

export const COLLAPSE_KEY = 'vanCollapse';

export default createComponent({
  props: {
    accordion: Boolean,
    modelValue: [String, Number, Array],
    border: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['change', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const { linkChildren } = useChildren(COLLAPSE_KEY);

    const toggle = (name, expanded) => {
      const { accordion, modelValue } = props;

      if (accordion) {
        if (name === modelValue) {
          name = '';
        }
      } else if (expanded) {
        name = modelValue.concat(name);
      } else {
        name = modelValue.filter((activeName) => activeName !== name);
      }

      emit('change', name);
      emit('update:modelValue', name);
    };

    const isExpanded = (name) => {
      const { accordion, modelValue } = props;

      if (process.env.NODE_ENV !== 'production') {
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
      }

      return accordion ? modelValue === name : modelValue.indexOf(name) !== -1;
    };

    linkChildren({ toggle, isExpanded });

    return () => (
      <div class={[bem(), { [BORDER_TOP_BOTTOM]: props.border }]}>
        {slots.default?.()}
      </div>
    );
  },
});
