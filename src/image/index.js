import { createNamespace, isDef, addUnit, inBrowser } from '../utils';
import Icon from '../icon';
// eslint-disable-next-line import/no-cycle
import ImagePreview from '../image-preview';


const [createComponent, bem] = createNamespace('image');

export default createComponent({
  props: {
    src: String,
    fit: String,
    alt: String,
    round: Boolean,
    width: [Number, String],
    height: [Number, String],
    radius: [Number, String],
    lazyLoad: Boolean,
    iconPrefix: String,
    showError: {
      type: Boolean,
      default: true,
    },
    showLoading: {
      type: Boolean,
      default: true,
    },
    errorIcon: {
      type: String,
      default: 'photo-fail',
    },
    loadingIcon: {
      type: String,
      default: 'photo',
    },
    sr: {
      type: String,
      default: 's',
    },
  },

  data() {
    return {
      loading: true,
      error: false,
    };
  },

  watch: {
    src() {
      // this.loading = true;
      this.error = false;
    },
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

      if (isDef(this.radius)) {
        style.overflow = 'hidden';
        style.borderRadius = addUnit(this.radius);
      }

      return style;
    },
  },

  created() {
    const { $Lazyload } = this;

    if ($Lazyload && inBrowser) {
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
    getSrc(src) {
      try {
          const tempSrc = JSON.parse(src);
          const tempItem = tempSrc[0];
          return tempItem.url;
      } catch (e) {
          console.log(e);
          return src;
      }
    },
    ifDesigner() {
      return this.$env && this.$env.VUE_APP_DESIGNER;
    },
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
      if (this.$listeners.click) {
        this.$emit('click', event);
      } else {
        if (!this.ifDesigner()) {
          ImagePreview([this.getSrc(this.src)]);
        }
      }
    },

    genPlaceholder() {
      if (this.loading && this.showLoading) {
        return (
          <div class={bem('loading')}>
            {this.slots('loading') || (
              <Icon
                name={this.loadingIcon}
                class={bem('loading-icon')}
                classPrefix={this.iconPrefix}
              />
            )}
          </div>
        );
      }

      if (this.error && this.showError) {
        return (
          <div class={bem('error')}>
            {this.slots('error') || (
              <Icon
                name={this.errorIcon}
                class={bem('error-icon')}
                classPrefix={this.iconPrefix}
              />
            )}
          </div>
        );
      }
    },

    genImage() {
      const imgData = {
        class: bem('img'),
        attrs: {
          alt: this.alt,
        },
        style: {
          objectFit: this.fit,
        },
      };

      if (this.error) {
        return;
      }

      if (this.lazyLoad) {
        return <img ref="image" vLazy={this.getSrc(this.src)} {...imgData} />;
      }
      return (
        <img
          src={this.getSrc(this.src)}
          onLoad={this.onLoad}
          onError={this.onError}
          {...imgData}
        />
      );
    },
  },

  render() {
    return (
      <div
        class={bem({ round: this.sr === 'r' || this.round })}
        style={this.style}
        onClick={this.onClick}
      >
        {this.genImage()}
        {this.genPlaceholder()}
        {this.slots()}
      </div>
    );
  },
});
