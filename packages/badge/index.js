import Info from '../info';
import create from '../utils/create';

export default create({
  name: 'badge',

  props: {
    url: String,
    info: [String, Number],
    title: String
  },

  inject: ['vanBadgeGroup'],

  created() {
    this.parent.badges.push(this);
  },

  beforeDestroy() {
    this.parent.badges = this.parent.badges.filter(item => item !== this);
  },

  computed: {
    parent() {
      if (process.env.NODE_ENV !== 'production' && !this.vanBadgeGroup) {
        console.error('[Vant] Badge needs to be child of BadgeGroup');
      }
      return this.vanBadgeGroup;
    },

    select() {
      return this.parent.badges.indexOf(this) === +this.parent.activeKey;
    }
  },

  methods: {
    onClick() {
      const index = this.parent.badges.indexOf(this);
      this.$emit('click', index);
      this.parent.$emit('change', index);
    }
  },

  render(h) {
    return (
      <a
        href={this.url}
        class={[this.b({ select: this.select }), 'van-hairline']}
        onClick={this.onClick}
      >
        <div class={this.b('text')}>
          {this.title}
          <Info info={this.info} class={this.b('info')} />
        </div>
      </a>
    );
  }
});
