import {
  computed,
  defineComponent,
  type PropType,
  type CSSProperties,
  type ExtractPropTypes,
} from 'vue';
import {
  isDef,
  addUnit,
  truthProp,
  numericProp,
  makeStringProp,
  createNamespace,
  type Numeric,
} from '../utils';

const [name, bem] = createNamespace('badge');

export type BadgePosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

const badgeProps = {
  dot: Boolean,
  max: numericProp,
  tag: makeStringProp<keyof HTMLElementTagNameMap>('div'),
  color: String,
  offset: Array as unknown as PropType<[Numeric, Numeric]>,
  content: numericProp,
  showZero: truthProp,
  position: makeStringProp<BadgePosition>('top-right'),
};

export type BadgeProps = ExtractPropTypes<typeof badgeProps>;

export default defineComponent({
  name,

  props: badgeProps,

  setup(props, { slots }) {
    const { content, dot, max, color, position, tag } = props;
    const { content: slotContent, default: slotDefault } = slots;

    const shouldSkipBadge = computed(() => {
      if (slotContent) {
        return false;
      }

      const isVerify = isDef(content) && content !== '';
      const isZero = !props.showZero && (content === 0 || content === '0');
      return (!isVerify || isZero) && !dot;
    });

    const renderedContent = (() => {
      if (slotContent) {
        return slotContent();
      }
      if (isDef(max) && Number(content) > max) {
        return `${max}+`;
      }
      return content;
    })();

    const style = computed(() => {
      const style: CSSProperties = {
        background: color,
      };

      const { offset } = props;

      if (offset) {
        const [x, y] = offset;
        if (slotDefault) {
          style.top = addUnit(y);

          if (typeof x === 'number') {
            style.right = addUnit(-x);
          } else {
            style.right = x.startsWith('-') ? x.replace('-', '') : `-${x}`;
          }
        } else {
          style.marginTop = addUnit(y);
          style.marginLeft = addUnit(x);
        }
      }

      return style;
    });

    const renderBadge = () => {
      if (shouldSkipBadge.value) return;

      return (
        <div
          class={bem([position, { dot, fixed: !!slotDefault }])}
          style={style.value}
        >
          {renderedContent}
        </div>
      );
    };

    return () => {
      if (slotDefault) {
        return (
          <tag class={bem('wrapper')}>
            {slotDefault()}
            {renderBadge()}
          </tag>
        );
      }

      return renderBadge();
    };
  },
});
