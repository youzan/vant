import { createNamespace } from '../utils';
import Info from '../info';
import { ChildrenMixin } from '../mixins/relation';
import { route, routeProps } from '../utils/router';

const [createComponent, bem] = createNamespace('sidebar-item');

export default createComponent({
  mixins: [ChildrenMixin('vanSidebar')],

  props: {
    ...routeProps,
    info: [Number, String],
    title: String
  },

  computed: {
    select() {
      return this.index === +this.parent.activeKey;
    }
  },

  methods: {
    onClick() {
      this.$emit('click', this.index);
      this.parent.$emit('input', this.index);
      this.parent.$emit('change', this.index);
      route(this.$router, this);
    }
  },

  render(h) {
    return (
      <a
        class={[bem({ select: this.select }), 'van-hairline']}
        onClick={this.onClick}
      >
        <div class={bem('text')}>
          {this.title}
          <Info info={this.info} class={bem('info')} />
        </div>
      </a>
    );
  }
});
