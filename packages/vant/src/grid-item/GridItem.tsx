import { computed, CSSProperties, defineComponent } from 'vue';

// Utils
import {
  BORDER,
  extend,
  addUnit,
  numericProp,
  createNamespace,
} from '../utils';
import { GRID_KEY } from '../grid/Grid';

// Composables
import { useParent } from '@vant/use';
import { useRoute, routeProps } from '../composables/use-route';

// Components
import { Icon } from '../icon';
import { Badge } from '../badge';

const [name, bem] = createNamespace('grid-item');

export default defineComponent({
  name,

  props: extend({}, routeProps, {
    dot: Boolean,
    text: String,
    icon: String,
    badge: numericProp,
    iconColor: String,
    iconPrefix: String,
  }),

  setup(props, { slots }) {
    const { parent, index } = useParent(GRID_KEY);
    const route = useRoute();

    if (!parent) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('[Vant] <GridItem> must be a child component of <Grid>.');
      }
      return;
    }

    const rootStyle = computed(() => {
      const { square, gutter, columnNum } = parent.props;
      const percent = `${100 / +columnNum}%`;
      const style: CSSProperties = {
        flexBasis: percent,
      };

      if (square) {
        style.paddingTop = percent;
      } else if (gutter) {
        const gutterValue = addUnit(gutter);
        style.paddingRight = gutterValue;

        if (index.value >= columnNum) {
          style.marginTop = gutterValue;
        }
      }

      return style;
    });

    const contentStyle = computed(() => {
      const { square, gutter } = parent.props;

      if (square && gutter) {
        const gutterValue = addUnit(gutter);
        return {
          right: gutterValue,
          bottom: gutterValue,
          height: 'auto',
        };
      }
    });

    const renderIcon = () => {
      if (slots.icon) {
        return (
          <Badge
            v-slots={{ default: slots.icon }}
            dot={props.dot}
            content={props.badge}
          />
        );
      }

      if (props.icon) {
        return (
          <Icon
            dot={props.dot}
            name={props.icon}
            size={parent.props.iconSize}
            badge={props.badge}
            class={bem('icon')}
            classPrefix={props.iconPrefix}
            color={props.iconColor}
          />
        );
      }
    };

    const renderText = () => {
      if (slots.text) {
        return slots.text();
      }
      if (props.text) {
        return <span class={bem('text')}>{props.text}</span>;
      }
    };

    const renderContent = () => {
      if (slots.default) {
        return slots.default();
      }
      return [renderIcon(), renderText()];
    };

    return () => {
      const { center, border, square, gutter, reverse, direction, clickable } =
        parent.props;

      const classes = [
        bem('content', [
          direction,
          {
            center,
            square,
            reverse,
            clickable,
            surround: border && gutter,
          },
        ]),
        { [BORDER]: border },
      ];

      return (
        <div class={[bem({ square })]} style={rootStyle.value}>
          <div
            role={clickable ? 'button' : undefined}
            class={classes}
            style={contentStyle.value}
            tabindex={clickable ? 0 : undefined}
            onClick={route}
          >
            {renderContent()}
          </div>
        </div>
      );
    };
  },
});
