// Utils
import { createNamespace } from '../../utils';
import { BORDER_BOTTOM } from '../../utils/constant';
import { BindEventMixin } from '../../mixins/bind-event';
import { getScroller } from '../../utils/dom/scroll';

const [createComponent, bem, t] = createNamespace('sku-row');

export default createComponent({
  mixins: [
    BindEventMixin(function (bind) {
      if (!(this.isShowBigPicture && this.hasScrollTab)) {
        return false;
      }

      if (!this.scrollCon) {
        this.scrollCon = getScroller(this.$refs.skuContent);
      }

      bind(this.scrollCon, 'scroll', this.onScroll);
    }),
  ],
  props: {
    skuRow: Object,
    isShowBigPicture: {
      type: Boolean,
      default: false,
    },
    hasScrollTab: {
      type: Boolean,
      default: false,
    },
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
    scrollStyle() {
      if (!(this.isShowBigPicture && this.hasScrollTab)) {
        return false;
      }
      this.tranX = this.present * 20;
      return {
        transform: `translate3d(${this.tranX}px, 0, 0)`,
      };
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
  mounted() {},
  render() {
    const { skuRow, isShowBigPicture, hasScrollTab } = this;
    const multipleNode = skuRow.is_multiple && (
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
      <div class={[bem(), BORDER_BOTTOM, isShowBigPicture && bem('picture')]}>
        <div class={bem('title')}>
          {skuRow.k}
          {multipleNode}
        </div>
        {isShowBigPicture ? SkuContent : this.slots()}
        {isShowBigPicture && hasScrollTab && SkuScroll}
      </div>
    );
  },
});
