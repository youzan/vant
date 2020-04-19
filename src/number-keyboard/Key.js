import { createNamespace } from '../utils';
import { TouchMixin } from '../mixins/touch';

const [createComponent, bem] = createNamespace('key');

export default createComponent({
  mixins: [TouchMixin],

  props: {
    type: String,
    text: [Number, String],
    color: String,
    wider: Boolean,
    large: Boolean,
  },

  data() {
    return {
      active: false,
    };
  },

  mounted() {
    this.bindTouchEvent(this.$el);
  },

  methods: {
    onTouchStart(event) {
      // compatible with Vue 2.6 event bubble bug
      event.stopPropagation();

      this.touchStart(event);
      this.active = true;
    },

    onTouchMove(event) {
      this.touchMove(event);

      if (this.direction) {
        this.active = false;
      }
    },

    onTouchEnd() {
      if (this.active) {
        this.active = false;
        this.$emit('press', this.text, this.type);
      }
    },
  },

  render() {
    return (
      <div class={bem('wrapper', { wider: this.wider })}>
        <div
          role="button"
          tabindex="0"
          class={bem([
            this.color,
            {
              large: this.large,
              active: this.active,
              delete: this.type === 'delete',
            },
          ])}
        >
          {this.slots('default') || this.text}
        </div>
      </div>
    );
  },
});
