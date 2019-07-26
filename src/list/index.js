import { createNamespace } from '../utils';
import { isHidden } from '../utils/dom/style';
import { BindEventMixin } from '../mixins/bind-event';
import { getScrollEventTarget } from '../utils/dom/scroll';
import Loading from '../loading';

const [createComponent, bem, t] = createNamespace('list');

export default createComponent({
  mixins: [
    BindEventMixin(function (bind) {
      if (!this.scroller) {
        this.scroller = getScrollEventTarget(this.$el);
      }

      bind(this.scroller, 'scroll', this.check);
    })
  ],

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
    if (this.immediateCheck) {
      this.$nextTick(this.check);
    }
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

      const { $el: el, scroller, offset, direction } = this;
      let scrollerRect;

      if (scroller.getBoundingClientRect) {
        scrollerRect = scroller.getBoundingClientRect();
      } else {
        scrollerRect = {
          top: 0,
          bottom: scroller.innerHeight
        };
      }

      const scrollerHeight = scrollerRect.bottom - scrollerRect.top;

      /* istanbul ignore next */
      if (!scrollerHeight || isHidden(el)) {
        return false;
      }

      let isReachEdge = false;
      const placeholderRect = this.$refs.placeholder.getBoundingClientRect();

      if (direction === 'up') {
        isReachEdge = placeholderRect.top - scrollerRect.top <= offset;
      } else {
        isReachEdge = placeholderRect.bottom - scrollerRect.bottom <= offset;
      }

      if (isReachEdge) {
        this.$emit('input', true);
        this.$emit('load');
      }
    },

    clickErrorText() {
      this.$emit('update:error', false);
      this.$nextTick(this.check);
    }
  },

  render() {
    const Placeholder = <div ref="placeholder" class={bem('placeholder')}/>;

    return (
      <div class={bem()} role="feed" aria-busy={this.loading}>
        {this.direction === 'down' ? this.slots() : Placeholder}
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
        {this.direction === 'up' ? this.slots() : Placeholder}
      </div>
    );
  }
});
