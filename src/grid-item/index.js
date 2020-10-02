import { computed } from 'vue';

// Utils
import { createNamespace, addUnit } from '../utils';
import { BORDER } from '../utils/constant';
import { GRID_KEY } from '../grid';

// Composition
import { useParent } from '@vant/use';
import { useRoute, routeProps } from '../composition/use-route';

// Components
import Icon from '../icon';
import Badge from '../badge';

const [createComponent, bem] = createNamespace('grid-item');

export default createComponent({
  props: {
    ...routeProps,
    dot: Boolean,
    text: String,
    icon: String,
    badge: [Number, String],
    iconPrefix: String,
  },

  setup(props, { slots }) {
    const { parent, index } = useParent(GRID_KEY);
    const route = useRoute();

    const rootStyle = computed(() => {
      const { square, gutter, columnNum } = parent.props;
      const percent = `${100 / columnNum}%`;
      const style = {
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
          <Badge dot={props.dot} content={props.badge}>
            {slots.icon()}
          </Badge>
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
      const {
        center,
        border,
        square,
        gutter,
        direction,
        clickable,
      } = parent.props;

      const classes = [
        bem('content', [
          direction,
          {
            center,
            square,
            clickable,
            surround: border && gutter,
          },
        ]),
        { [BORDER]: border },
      ];

      return (
        <div class={[bem({ square })]} style={rootStyle.value}>
          <div
            role={clickable ? 'button' : null}
            class={classes}
            style={contentStyle.value}
            tabindex={clickable ? 0 : null}
            onClick={route}
          >
            {renderContent()}
          </div>
        </div>
      );
    };
  },
});
