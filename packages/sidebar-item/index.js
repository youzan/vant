import { createNamespace } from '../utils';
import Info from '../info';
import { ChildrenMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('sidebar-item');

export default createComponent({
  mixins: [ChildrenMixin('vanSidebar')],

  props: {
    url: String,
    info: [String, Number],
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
      this.parent.$emit('change', this.index);
    }
  },

  render(h) {
    return (
      <a
        href={this.url}
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
