// Utils
import { createNamespace } from '../../utils';
import { BORDER_BOTTOM } from '../../utils/constant';
// Mixins
import { ParentMixin } from '../../mixins/relation';
import { BindEventMixin } from '../../mixins/bind-event';

const [createComponent, bem, t] = createNamespace('sku-row');

export { bem };

export default createComponent({
  mixins: [
    ParentMixin('vanSkuRows'),
    BindEventMixin(function (bind) {
      if (this.scrollable && this.$refs.scroller) {
        bind(this.$refs.scroller, 'scroll', this.onScroll);
      }
    }),
  ],

  props: {
    skuRow: Object,
  },

  data() {
    return {
      progress: 0,
    };
  },

  computed: {
    scrollable() {
      return this.skuRow.largeImageMode && this.skuRow.v.length > 6;
    },
  },

  methods: {
    onScroll() {
      const { scroller, row } = this.$refs;
      const distance = row.offsetWidth - scroller.offsetWidth;
      this.progress = scroller.scrollLeft / distance;
    },

    genTitle() {
      return (
        <div class={bem('title')}>
          {this.skuRow.k}
          {this.skuRow.is_multiple && (
            <span class={bem('title-multiple')}>（{t('multiple')}）</span>
          )}
        </div>
      );
    },

    genIndicator() {
      if (this.scrollable) {
        const style = {
          transform: `translate3d(${this.progress * 20}px, 0, 0)`,
        };

        return (
          <div class={bem('indicator-wrapper')}>
            <div class={bem('indicator')}>
              <div class={bem('indicator-slider')} style={style} />
            </div>
          </div>
        );
      }
    },

    genContent() {
      const nodes = this.slots();

      if (this.skuRow.largeImageMode) {
        const top = [];
        const bottom = [];

        nodes.forEach((node, index) => {
          const group = Math.floor(index / 3) % 2 === 0 ? top : bottom;
          group.push(node);
        });

        return (
          <div class={bem('scroller')} ref="scroller">
            <div class={bem('row')} ref="row">
              {top}
            </div>
            {bottom.length ? <div class={bem('row')}>{bottom}</div> : null}
          </div>
        );
      }

      return nodes;
    },

    centerItem(selectSkuId) {
      if (!this.skuRow.largeImageMode || !selectSkuId) {
        return;
      }
      const { children = [] } = this;
      const { scroller, row } = this.$refs;
      const child = children.find((it) => +it.skuValue.id === +selectSkuId);
      if (scroller && row && child && child.$el) {
        const target = child.$el;
        const to =
          target.offsetLeft - (scroller.offsetWidth - target.offsetWidth) / 2;
        scroller.scrollLeft = to;
      }
    },
  },

  render() {
    return (
      <div class={[bem(), BORDER_BOTTOM]}>
        {this.genTitle()}
        {this.genContent()}
        {this.genIndicator()}
      </div>
    );
  },
});
