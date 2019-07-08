import { createNamespace, addUnit } from '../utils';
import { ChildrenMixin } from '../mixins/relation';
import { route, routeProps } from '../utils/router';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('grid-item');

export default createComponent({
  mixins: [ChildrenMixin('vanGrid')],

  props: {
    ...routeProps,
    icon: String,
    text: String
  },

  computed: {
    style() {
      const { square, gutter, columnNum } = this.parent;
      const percent = `${100 / columnNum}%`;

      const style = {
        flexBasis: percent
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
          height: 'auto'
        };
      }
    }
  },

  methods: {
    onClick(event) {
      this.$emit('click', event);
      route(this.$router, this);
    },

    renderContent() {
      const slot = this.slots();

      if (slot) {
        return slot;
      }

      return [
        this.slots('icon') || (this.icon && <Icon name={this.icon} class={bem('icon')} />),
        this.slots('text') || (this.text && <span class={bem('text')}>{this.text}</span>)
      ];
    }
  },

  render(h) {
    const { center, border, square, gutter, clickable } = this.parent;

    return (
      <div class={[bem({ square })]} style={this.style} onClick={this.onClick}>
        <div
          style={this.contentStyle}
          class={[
            bem('content', {
              center,
              square,
              clickable,
              surround: border && gutter
            }),
            { 'van-hairline': border }
          ]}
        >
          {this.renderContent()}
        </div>
      </div>
    );
  }
});
