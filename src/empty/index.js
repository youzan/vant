import { createNamespace } from '../utils';

const [createComponent, bem] = createNamespace('empty');

const PRESETS = ['error', 'search', 'default', 'network'];

export default createComponent({
  props: {
    description: String,
    image: {
      type: String,
      default: 'default',
    },
  },

  computed: {
    url() {
      if (PRESETS.indexOf(this.image) !== -1) {
        return `https://img.yzcdn.cn/vant/empty-image-${this.image}.png`;
      }

      return this.image;
    },
  },

  methods: {
    genImage() {
      const image = this.slots('image') || <img src={this.url} />;
      return <div class={bem('image')}>{image}</div>;
    },

    genDescription() {
      const description = this.slots('description') || this.description;

      if (description) {
        return <p class={bem('description')}>{description}</p>;
      }
    },

    genBottom() {
      const slot = this.slots();

      if (slot) {
        return <div class={bem('bottom')}>{slot}</div>;
      }
    },
  },

  render() {
    return (
      <div class={bem()}>
        {this.genImage()}
        {this.genDescription()}
        {this.genBottom()}
      </div>
    );
  },
});
