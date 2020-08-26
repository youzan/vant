// Utils
import { createNamespace, addUnit } from '../utils';
import { BORDER } from '../utils/constant';
import { route, routeProps } from '../composition/use-route';

// Mixins
import { ChildrenMixin } from '../mixins/relation';

// Components
import Icon from '../icon';
import Badge from '../badge';

const [createComponent, bem] = createNamespace('grid-item');

export default createComponent({
  mixins: [ChildrenMixin('vanGrid')],

  props: {
    ...routeProps,
    dot: Boolean,
    text: String,
    icon: String,
    iconPrefix: String,
    badge: [Number, String],
  },

  emits: ['click'],

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
      if (this.$slots.icon) {
        return (
          <div class={bem('icon-wrapper')}>
            {this.$slots.icon()}
            <Badge dot={this.dot} badge={this.badge} />
          </div>
        );
      }

      if (this.icon) {
        return (
          <Icon
            dot={this.dot}
            name={this.icon}
            size={this.parent.iconSize}
            badge={this.badge}
            class={bem('icon')}
            classPrefix={this.iconPrefix}
          />
        );
      }
    },

    getText() {
      if (this.$slots.text) {
        return this.$slots.text();
      }

      if (this.text) {
        return <span class={bem('text')}>{this.text}</span>;
      }
    },

    genContent() {
      if (this.$slots.default) {
        return this.$slots.default();
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
