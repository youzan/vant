import { use, isDef, suffixPx } from '../utils';
import Icon from '../icon';

const [sfc, bem] = use('image');

export default sfc({
  props: {
    src: String,
    fit: String,
    alt: String,
    lazyLoad: Boolean,
    width: [String, Number],
    height: [String, Number]
  },

  data() {
    return {
      loading: true,
      error: false
    };
  },

  watch: {
    src() {
      this.loading = true;
      this.error = false;
    }
  },

  computed: {
    style() {
      const style = {};

      if (isDef(this.width)) {
        style.width = suffixPx(this.width);
      }

      if (isDef(this.height)) {
        style.height = suffixPx(this.height);
      }

      return style;
    }
  },

  methods: {
    onLoad(event) {
      this.loading = false;
      this.$emit('load', event);
    },

    onError(event) {
      this.error = true;
      this.loading = false;
      this.$emit('error', event);
    },

    onClick(event) {
      this.$emit('click', event);
    },

    renderPlaceholder() {
      if (this.loading) {
        return (
          <div class={bem('loading')}>
            {this.slots('loading') || <Icon name="photo-o" size="22" />}
          </div>
        );
      }

      if (this.error) {
        return (
          <div class={bem('error')}>
            {this.slots('error') || <Icon name="warning-o" size="22" />}
          </div>
        );
      }
    },

    renderImage() {
      const imgData = {
        class: bem('img'),
        attrs: {
          alt: this.alt
        },
        style: {
          objectFit: this.fit
        },
        on: {
          load: this.onLoad,
          error: this.onError
        }
      };

      if (this.error) {
        return;
      }

      if (this.lazyLoad) {
        return <img vLazy={this.src} {...imgData} />;
      }

      return <img src={this.src} {...imgData} />;
    }
  },

  render(h) {
    return (
      <div class={bem()} style={this.style} onClick={this.onClick}>
        {this.renderImage()}
        {this.renderPlaceholder()}
      </div>
    );
  }
});
