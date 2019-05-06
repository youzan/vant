import { use } from '../utils';
import Info from '../info';
import { ChildrenMixin } from '../mixins/relation';

const [sfc, bem] = use('sidebar-item');

export default sfc({
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
