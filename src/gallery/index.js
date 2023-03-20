import { createNamespace, isFunction } from '../utils';
import { formatResult } from '../utils/format/data-source';
import swipe from '../swipe';
import swipeItem from '../swipe-item';

const [createComponent] = createNamespace('gallery');

export default createComponent({
  components: {
    swipe,
    'swipe-item': swipeItem,
  },
  props: {
    dataSource: {
      type: [Array, Object, Function, String],
      default: () => [],
    },
  },
  data() {
    return {
      options: [],
      index: 0,
    };
  },
  computed: {
    total() {
      return this.options?.length;
    },
  },
  watch: {
    dataSource: {
      deep: true,
      handler: 'update',
      immediate: true,
    },
  },
  methods: {
    ifDesigner() {
      return this.$env && this.$env.VUE_APP_DESIGNER;
    },
    getUrl(item) {
      const type = typeof item === 'object';
      if (type) {
        return item.url;
      }
      return item;
    },
    fromValue(value) {
      const reg = /^([^[\]]+)(,([^[\]]+)){0,}$/g;
      if (typeof value === 'string' && reg.test(value)) {
        return value.split(',');
      }
      return formatResult(value);
    },
    async update() {
      if (isFunction(this.dataSource)) {
        try {
          const res = await this.dataSource({
            page: 1,
            size: 1000,
          });
          this.options = formatResult(res);
        } catch (error) {
          console.error(error);
        }
      } else {
        this.options = this.fromValue(this.dataSource);
      }
    },
    onSwipeChange(index) {
      this.index = index;
    },
  },
  render() {
    return (
      <div class="van-gallery">
        <swipe class="swiper" onChange={this.onSwipeChange}>
          {this.options.map((item) => (
            <swipe-item class="swiper-slide">
              <img src={this.getUrl(item)} />
            </swipe-item>
          ))}
          <template slot="indicator">
            {this.total > 0 && (
              <div class="pagi">
                {this.index + 1}/{this.total}
              </div>
            )}
          </template>
        </swipe>
      </div>
    );
  },
});
