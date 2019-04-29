import { use } from '../utils';
import Info from '../info';

const [sfc, bem] = use('sidebar-item');

export default sfc({
  props: {
    url: String,
    info: [String, Number],
    title: String
  },

  inject: ['vanSidebar'],

  created() {
    this.parent.items.push(this);
  },

  beforeDestroy() {
    this.parent.items = this.parent.items.filter(item => item !== this);
  },

  computed: {
    parent() {
      if (process.env.NODE_ENV !== 'production' && !this.vanSidebar) {
        console.error('[Vant] SidebarItem needs to be child of Sidebar');
      }
      return this.vanSidebar;
    },

    select() {
      return this.parent.items.indexOf(this) === +this.parent.activeKey;
    }
  },

  methods: {
    onClick() {
      const index = this.parent.items.indexOf(this);
      this.$emit('click', index);
      this.parent.$emit('change', index);
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
