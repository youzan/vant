import { createNamespace, isDef, addUnit } from '../utils';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('image');

export default createComponent({
  props: {
    src: String,
    fit: String,
    alt: String,
    lazyLoad: Boolean,
    width: [Number, String],
    height: [Number, String]
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
        style.width = addUnit(this.width);
      }

      if (isDef(this.height)) {
        style.height = addUnit(this.height);
      }

      return style;
    }
  },

  created() {
    const { $Lazyload } = this;

    if ($Lazyload) {
      $Lazyload.$on('loaded', this.onLazyLoaded);
      $Lazyload.$on('error', this.onLazyLoadError);
    }
  },

  beforeDestroy() {
    const { $Lazyload } = this;

    if ($Lazyload) {
      $Lazyload.$off('loaded', this.onLazyLoaded);
      $Lazyload.$off('error', this.onLazyLoadError);
    }
  },

  methods: {
    onLoad(event) {
      this.loading = false;
      this.$emit('load', event);
    },

    onLazyLoaded({ el }) {
      if (el === this.$refs.image && this.loading) {
        this.onLoad();
      }
    },

    onLazyLoadError({ el }) {
      if (el === this.$refs.image && !this.error) {
        this.onError();
      }
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
        }
      };

      if (this.error) {
        return;
      }

      if (this.lazyLoad) {
        return <img ref="image" vLazy={this.src} {...imgData} />;
      }

      return (
        <img src={this.src} onLoad={this.onLoad} onError={this.onError} {...imgData} />
      );
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
