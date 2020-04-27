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

  computed: {
    gutter() {
      return (this.parent && Number(this.parent.gutter)) || 0;
    },

    style() {
      const { index, gutter } = this;

      if (gutter) {
        const count = this.parent.children.length;
        const padding = (gutter * (count - 1)) / count;

        if (index === 0) {
          return { paddingRight: `${padding}px` };
        }

        if (index === count - 1) {
          return { paddingLeft: `${padding}px` };
        }

        return {
          paddingLeft: `${padding / 2}px`,
          paddingRight: `${padding / 2}px`,
        };
      }
    },
  },

  methods: {
    onClick(event) {
      this.$emit('click', event);
    },
  },

  render() {
    const { span, offset } = this;
    return (
      <this.tag
        style={this.style}
        class={bem({ [span]: span, [`offset-${offset}`]: offset })}
        onClick={this.onClick}
      >
        {this.slots()}
      </this.tag>
    );
  },
});
