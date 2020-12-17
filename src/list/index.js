// Utils
import { createNamespace } from '../utils';
import { isHidden } from '../utils/dom/style';
import { getScroller } from '../utils/dom/scroll';

// Mixins
import { BindEventMixin } from '../mixins/bind-event';

// Components
import Loading from '../loading';

const [createComponent, bem, t] = createNamespace('list');

export default createComponent({
  mixins: [
    BindEventMixin(function (bind) {
      if (!this.scroller) {
        this.scroller = getScroller(this.$el);
      }

      bind(this.scroller, 'scroll', this.check);
    }),
  ],

  model: {
    prop: 'loading',
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
      default: true,
    },
    offset: {
      type: [Number, String],
      default: 300,
    },
    direction: {
      type: String,
      default: 'down',
    },
  },

  data() {
    return {
      // use sync innerLoading state to avoid repeated loading in some edge cases
      innerLoading: this.loading,
    };
  },

  updated() {
    this.innerLoading = this.loading;
  },

  mounted() {
    if (this.immediateCheck) {
      this.check();
    }
  },

  watch: {
    loading: 'check',
    finished: 'check',
  },

  methods: {
    // @exposed-api
    check() {
      this.$nextTick(() => {
        if (this.innerLoading || this.finished || this.error) {
          return;
        }

        const { $el: el, scroller, offset, direction } = this;
        let scrollerRect;

        if (scroller.getBoundingClientRect) {
          scrollerRect = scroller.getBoundingClientRect();
        } else {
          scrollerRect = {
            top: 0,
            bottom: scroller.innerHeight,
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
          isReachEdge = scrollerRect.top - placeholderRect.top <= offset;
        } else {
          isReachEdge = placeholderRect.bottom - scrollerRect.bottom <= offset;
        }

        if (isReachEdge) {
          this.innerLoading = true;
          this.$emit('input', true);
          this.$emit('load');
        }
      });
    },

    clickErrorText() {
      this.$emit('update:error', false);
      this.check();
    },

    genLoading() {
      if (this.innerLoading && !this.finished) {
        return (
          <div key="loading" class={bem('loading')}>
            {this.slots('loading') || (
              <Loading size="16">{this.loadingText || t('loading')}</Loading>
            )}
          </div>
        );
      }
    },

    genFinishedText() {
      if (this.finished) {
        const text = this.slots('finished') || this.finishedText;

        if (text) {
          return <div class={bem('finished-text')}>{text}</div>;
        }
      }
    },

    genErrorText() {
      if (this.error) {
        const text = this.slots('error') || this.errorText;

        if (text) {
          return (
            <div onClick={this.clickErrorText} class={bem('error-text')}>
              {text}
            </div>
          );
        }
      }
    },
  },

  render() {
    const Placeholder = (
      <div ref="placeholder" key="placeholder" class={bem('placeholder')} />
    );

    return (
      <div class={bem()} role="feed" aria-busy={this.innerLoading}>
        {this.direction === 'down' ? this.slots() : Placeholder}
        {this.genLoading()}
        {this.genFinishedText()}
        {this.genErrorText()}
        {this.direction === 'up' ? this.slots() : Placeholder}
      </div>
    );
  },
});
