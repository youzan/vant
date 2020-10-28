// Utils
import { createNamespace, addUnit } from '../utils';
import { BORDER } from '../utils/constant';
import { route, routeProps } from '../utils/router';

// Mixins
import { ChildrenMixin } from '../mixins/relation';

// Components
import Info from '../info';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('grid-item');

export default createComponent({
  mixins: [ChildrenMixin('vanGrid')],

  props: {
    ...routeProps,
    dot: Boolean,
    text: String,
    icon: String,
    iconPrefix: String,
    // @deprecated
    info: [Number, String],
    badge: [Number, String],
  },

  computed: {
    style() {
      const { square, gutter, columnNum } = this.parent;
      const percent = `${100 / columnNum}%`;

      const style = {
        flexBasis: percent,
      };

      if (square) {
        style.paddingTop = percent;
      } else if (gutter) {
        const gutterValue = addUnit(gutter);
        style.paddingRight = gutterValue;

        if (this.index >= columnNum) {
          style.marginTop = gutterValue;
        }
      }

      return style;
    },

    contentStyle() {
      const { square, gutter } = this.parent;

      if (square && gutter) {
        const gutterValue = addUnit(gutter);

        return {
          right: gutterValue,
          bottom: gutterValue,
          height: 'auto',
        };
      }
    },
  },

  methods: {
    onClick(event) {
      this.$emit('click', event);
      route(this.$router, this);
    },

    genIcon() {
      const iconSlot = this.slots('icon');
      const info = this.badge ?? this.info;

      if (process.env.NODE_ENV === 'development' && this.info) {
        console.warn(
          '[Vant] GridItem: "info" prop is deprecated, use "badge" prop instead.'
        );
      }

      if (iconSlot) {
        return (
          <div class={bem('icon-wrapper')}>
            {iconSlot}
            <Info dot={this.dot} info={info} />
          </div>
        );
      }

      if (this.icon) {
        return (
          <Icon
            name={this.icon}
            dot={this.dot}
            badge={info}
            size={this.parent.iconSize}
            class={bem('icon')}
            classPrefix={this.iconPrefix}
          />
        );
      }
    },

    getText() {
      const textSlot = this.slots('text');

      if (textSlot) {
        return textSlot;
      }

      if (this.text) {
        return <span class={bem('text')}>{this.text}</span>;
      }
    },

    genContent() {
      const slot = this.slots();

      if (slot) {
        return slot;
      }

      return [this.genIcon(), this.getText()];
    },
  },

  render() {
    const {
      center,
      border,
      square,
      gutter,
      direction,
      clickable,
    } = this.parent;

    return (
      <div class={[bem({ square })]} style={this.style}>
        <div
          style={this.contentStyle}
          role={clickable ? 'button' : null}
          tabindex={clickable ? 0 : null}
          class={[
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
          ]}
          onClick={this.onClick}
        >
          {this.genContent()}
        </div>
      </div>
    );
  },
});
