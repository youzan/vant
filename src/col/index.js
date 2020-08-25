import { computed } from 'vue';
import { createNamespace } from '../utils';
import { useParent } from '../api/use-relation';
import { ROW_KEY } from '../row';

const [createComponent, bem] = createNamespace('col');

export default createComponent({
  props: {
    span: [Number, String],
    offset: [Number, String],
    tag: {
      type: String,
      default: 'div',
    },
  },

  setup(props, { slots }) {
    const { parent, index } = useParent(ROW_KEY, () => +props.span);

    const style = computed(() => {
      const { spaces } = parent || {};

      if (spaces && spaces.value && spaces.value[index.value]) {
        const { left, right } = spaces.value[index.value];
        return {
          paddingLeft: left ? `${left}px` : null,
          paddingRight: right ? `${right}px` : null,
        };
      }
    });

    return () => {
      const { tag, span, offset } = props;

      return (
        <tag
          style={style.value}
          class={bem({ [span]: span, [`offset-${offset}`]: offset })}
        >
          {slots.default?.()}
        </tag>
      );
    };
  },
});
