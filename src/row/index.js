import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('row');

export default createComponent({
  mixins: [ParentMixin('vanRow')],

  props: {
    type: String,
    align: String,
    justify: String,
    tag: {
      type: String,
      default: 'div',
    },
    gutter: {
      type: [Number, String],
      default: 0,
    },
  },

  computed: {
    groups() {
      const groups = [[]];

      let totalSpan = 0;
      this.children.forEach((item, index) => {
        totalSpan += Number(item.span);

        if (totalSpan > 24) {
          groups.push([index]);
          totalSpan -= 24;
        } else {
          groups[groups.length - 1].push(index);
        }
      });

      return groups;
    },

    spaces() {
      const gutter = Number(this.gutter);

      if (!gutter) {
        return;
      }

      const spaces = [];

      this.groups.forEach((group) => {
        const averagePadding = (gutter * (group.length - 1)) / group.length;

        group.forEach((item, index) => {
          if (index === 0) {
            spaces.push({ right: averagePadding });
          } else {
            const left = gutter - spaces[item - 1].right;
            const right = averagePadding - left;
            spaces.push({ left, right });
          }
        });
      });

      return spaces;
    },
  },

  setup(props, { slots }) {
    return () => {
      const { tag, type, align, justify } = props;
      const flex = type === 'flex';

      return (
        <tag
          class={bem({
            flex,
            [`align-${align}`]: flex && align,
            [`justify-${justify}`]: flex && justify,
          })}
        >
          {slots.default?.()}
        </tag>
      );
    };
  },
});
