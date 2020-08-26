import { provide, computed, reactive } from 'vue';
import { createNamespace } from '../utils';

const [createComponent, bem] = createNamespace('row');

export const ROW_KEY = 'van-row';

export default createComponent({
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

  setup(props, { slots }) {
    const children = reactive([]);

    const groups = computed(() => {
      const groups = [[]];

      let totalSpan = 0;
      children.forEach((getSpan, index) => {
        totalSpan += getSpan();

        if (totalSpan > 24) {
          groups.push([index]);
          totalSpan -= 24;
        } else {
          groups[groups.length - 1].push(index);
        }
      });

      return groups;
    });

    const spaces = computed(() => {
      const gutter = Number(props.gutter);

      if (!gutter) {
        return;
      }

      const spaces = [];

      groups.value.forEach((group) => {
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
    });

    provide(ROW_KEY, {
      spaces,
      children,
    });

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
