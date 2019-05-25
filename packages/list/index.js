import { use } from '../utils';
import Loading from '../loading';
import { on, off } from '../utils/event';
import {
  getScrollTop,
  getElementTop,
  getVisibleHeight,
  getScrollEventTarget
} from '../utils/scroll';

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
    },
    direction: {
      type: String,
      default: 'down'
    }
  },

  mounted() {
    this.scroller = getScrollEventTarget(this.$el);
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
      const scrollerHeight = getVisibleHeight(scroller);

      /* istanbul ignore next */
      if (
        !scrollerHeight ||
        window.getComputedStyle(el).display === 'none' ||
        el.offsetParent === null
      ) {
        return;
      }

      const { offset, direction } = this;

      function isReachEdge() {
        if (el === scroller) {
          const scrollTop = getScrollTop(el);

          if (direction === 'up') {
            return scrollTop <= offset;
          }

          const targetBottom = scrollTop + scrollerHeight;
          return scroller.scrollHeight - targetBottom <= offset;
        }

        if (direction === 'up') {
          return getScrollTop(scroller) - getElementTop(el) <= offset;
        }

        const elBottom = getElementTop(el) + getVisibleHeight(el) - getElementTop(scroller);
        return elBottom - scrollerHeight <= offset;
      }

      if (isReachEdge()) {
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
      <div class={bem()} role="feed" aria-busy={this.loading}>
        {this.direction === 'down' && this.slots()}
        {this.loading && (
          <div class={bem('loading')} key="loading">
            {this.slots('loading') || (
              <Loading size="16">{this.loadingText || t('loading')}</Loading>
            )}
          </div>
        )}
        {this.finished && this.finishedText && (
          <div class={bem('finished-text')}>{this.finishedText}</div>
        )}
        {this.error && this.errorText && (
          <div onClick={this.clickErrorText} class={bem('error-text')}>
            {this.errorText}
          </div>
        )}
        {this.direction === 'up' && this.slots()}
      </div>
    );
  }
});
