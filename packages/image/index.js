import { use, isDef, suffixPx } from '../utils';

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
      this.$emit('error', event);
    },

    onClick(event) {
      this.$emit('click', event);
    }
  },

  render(h) {
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

    const Image = this.lazyLoad ? (
      <img vLazy={this.src} {...imgData} />
    ) : (
      <img src={this.src} {...imgData} />
    );

    return (
      <div class={bem()} style={this.style} onClick={this.onClick}>
        {Image}
      </div>
    );
  }
});
