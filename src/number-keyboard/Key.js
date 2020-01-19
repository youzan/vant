import { createNamespace } from '../utils';
import { TouchMixin } from '../mixins/touch';
import { BORDER } from '../utils/constant';

const [createComponent, bem] = createNamespace('key');

export default createComponent({
  mixins: [TouchMixin],

  props: {
    type: String,
    text: [Number, String],
    theme: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      active: false,
    };
  },

  computed: {
    className() {
      const classNames = this.theme.slice(0);

      if (this.active) {
        classNames.push('active');
      }

      if (this.type) {
        classNames.push(this.type);
      }

      return bem(classNames);
    },
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
      <i role="button" tabindex="0" class={[BORDER, this.className]}>
        {this.slots('default') || this.text}
      </i>
    );
  },
});
