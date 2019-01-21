import { use } from '../utils';
import utils from '../utils/scroll';
import Loading from '../loading';
import { on, off } from '../utils/event';

const [sfc, bem, t] = use('list');

export default sfc({
  model: {
    prop: 'loading'
  },

  props: {
    error: Boolean,
    loading: Boolean,
    finished: Boolean,
    errorText: String,
    loadingText: String,
    finishedText: String,
    immediateCheck: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 300
    }
  },

  mounted() {
    this.scroller = utils.getScrollEventTarget(this.$el);
    this.handler(true);

    if (this.immediateCheck) {
      this.$nextTick(this.check);
    }
  },

  destroyed() {
    this.handler(false);
  },

  activated() {
    this.handler(true);
  },

  deactivated() {
    this.handler(false);
  },

  watch: {
    loading() {
      this.$nextTick(this.check);
    },

    finished() {
      this.$nextTick(this.check);
    }
  },

  methods: {
    check() {
      if (this.loading || this.finished || this.error) {
        return;
      }

      const el = this.$el;
      const { scroller } = this;
      const scrollerHeight = utils.getVisibleHeight(scroller);

      /* istanbul ignore next */
      if (
        !scrollerHeight ||
        utils.getComputedStyle(el).display === 'none' ||
        el.offsetParent === null
      ) {
        return;
      }

      const scrollTop = utils.getScrollTop(scroller);
      const targetBottom = scrollTop + scrollerHeight;

      let reachBottom = false;

      /* istanbul ignore next */
      if (el === scroller) {
        reachBottom = scroller.scrollHeight - targetBottom < this.offset;
      } else {
        const elBottom =
          utils.getElementTop(el) - utils.getElementTop(scroller) + utils.getVisibleHeight(el);
        reachBottom = elBottom - scrollerHeight < this.offset;
      }

      /* istanbul ignore else */
      if (reachBottom) {
        this.$emit('input', true);
        this.$emit('load');
      }
    },

    clickErrorText() {
      this.$emit('update:error', false);
      this.$nextTick(this.check);
    },

    handler(bind) {
      /* istanbul ignore else */
      if (this.binded !== bind) {
        this.binded = bind;
        (bind ? on : off)(this.scroller, 'scroll', this.check);
      }
    }
  },

  render(h) {
    return (
      <div class={bem()}>
        {this.$slots.default}
        {this.loading && (
          <div class={bem('loading')}>
            {this.$slots.loading || [
              <Loading class={bem('loading-icon')} />,
              <span class={bem('loading-text')}>{this.loadingText || t('loading')}</span>
            ]}
          </div>
        )}
        {this.finished && this.finishedText && (
          <div class={bem('finished-text')}>{this.finishedText}</div>
        )}
        {this.error && this.errorText && (
          <div onClick={this.clickErrorText} class={bem('error-text')}>{this.errorText}</div>
        )}
      </div>
    );
  }
});
