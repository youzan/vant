import { createNamespace } from '../utils';
import { ChildrenMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('col');

export default createComponent({
  mixins: [ChildrenMixin('vanRow')],

  props: {
    span: [Number, String],
    offset: [Number, String],
    tag: {
      type: String,
      default: 'div',
    },
  },

  setup(props, { slots }) {
    return (vm) => {
      const { tag, span, offset } = props;

      const getStyle = () => {
        const { index } = vm;
        const { spaces } = vm.parent || {};

        if (spaces && spaces[index]) {
          const { left, right } = spaces[index];
          return {
            paddingLeft: left ? `${left}px` : null,
            paddingRight: right ? `${right}px` : null,
          };
        }
      };

      return (
        <tag
          style={getStyle()}
          class={bem({ [span]: span, [`offset-${offset}`]: offset })}
        >
          {slots.default?.()}
        </tag>
      );
    };
  },
});
