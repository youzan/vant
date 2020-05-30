import { createNamespace, isDef } from '../utils';
import { ChildrenMixin } from '../mixins/relation';
import { route, routeProps } from '../utils/router';
import Info from '../info';

const [createComponent, bem] = createNamespace('sidebar-item');

export default createComponent({
  mixins: [ChildrenMixin('vanSidebar')],

  props: {
    ...routeProps,
    dot: Boolean,
    info: [Number, String],
    badge: [Number, String],
    title: String,
    disabled: Boolean,
  },

  computed: {
    select() {
      return this.index === +this.parent.activeKey;
    },
  },

  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }

      this.$emit('click', this.index);
      this.parent.$emit('input', this.index);
      this.parent.setIndex(this.index);
      route(this.$router, this);
    },
  },

  render() {
    return (
      <a
        class={bem({ select: this.select, disabled: this.disabled })}
        onClick={this.onClick}
      >
        <div class={bem('text')}>
          {this.title}
          <Info
            dot={this.dot}
            info={isDef(this.badge) ? this.badge : this.info}
            class={bem('info')}
          />
        </div>
      </a>
    );
  },
});
