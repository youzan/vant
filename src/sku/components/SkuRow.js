// Utils
import { createNamespace } from '../../utils';
import { BORDER_BOTTOM } from '../../utils/constant';
import { BindEventMixin } from '../../mixins/bind-event';

const [createComponent, bem, t] = createNamespace('sku-row');

export default createComponent({
  mixins: [
    BindEventMixin(function (bind) {
      if (this.scrollable) {
        if (!this.scrollCon) {
          this.scrollCon = this.$refs.skuContent;
        }

        bind(this.scrollCon, 'scroll', this.onScroll);
      }
    }),
  ],

  props: {
    item: Object,
  },

  data() {
    return {
      present: 0,
      contentWidth: 0,
      contentItemWidth: 0,
      scrollLeft: 0,
    };
  },

  computed: {
    scrollable() {
      return this.item.largeImageMode && this.item.v.length > 6;
    },

    scrollStyle() {
      if (this.scrollable) {
        return {
          transform: `translate3d(${this.present * 20}px, 0, 0)`,
        };
      }
    },
  },

  methods: {
    onScroll() {
      this.$nextTick(() => {
        const contentWidth = this.scrollCon.clientWidth;
        const contentItemWidth = this.$refs.skuContentItem.clientWidth;
        const distance = contentItemWidth - contentWidth;
        this.present = this.scrollCon.scrollLeft / distance;
      });
    },
  },

  render() {
    const { item, scrollable } = this;
    const { largeImageMode } = item;

    const multipleNode = item.is_multiple && (
      <span class={bem('title-multiple')}>（{t('multiple')}）</span>
    );

    const SkuScroll = (
      <div class={bem('scroll')}>
        <div class={bem('scroll__content')} ref="skuScroll">
          <div
            class={bem('scroll__content--active')}
            style={this.scrollStyle}
          ></div>
        </div>
      </div>
    );

    const SkuContent = (
      <div class={bem('content')} ref="skuContent">
        <div class={bem('content__top')} ref="skuContentItem">
          {this.slots('sku-item-group-one')}
        </div>
        <div class={bem('content__bottom')}>
          {this.slots('sku-item-group-two')}
        </div>
      </div>
    );

    return (
      <div class={[bem(), BORDER_BOTTOM, largeImageMode && bem('picture')]}>
        <div class={bem('title')}>
          {item.k}
          {multipleNode}
        </div>
        {largeImageMode ? SkuContent : this.slots()}
        {largeImageMode && scrollable && SkuScroll}
      </div>
    );
  },
});
