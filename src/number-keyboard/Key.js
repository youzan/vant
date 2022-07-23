import { createNamespace } from '../utils';
import { TouchMixin } from '../mixins/touch';
import Loading from '../loading';
import DeleteIcon from './DeleteIcon';
import CollapseIcon from './CollapseIcon';

const [createComponent, bem] = createNamespace('key');

export default createComponent({
  mixins: [TouchMixin],

  props: {
    type: String,
    text: [Number, String],
    color: String,
    wider: Boolean,
    large: Boolean,
    loading: Boolean,
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

    onTouchEnd(event) {
      if (this.active) {
        // eliminate tap delay on safari
        // see: https://github.com/vant-ui/vant/issues/6836
        if (!this.slots('default')) {
          event.preventDefault();
        }
        this.active = false;
        this.$emit('press', this.text, this.type);
      }
    },

    genContent() {
      const isExtra = this.type === 'extra';
      const isDelete = this.type === 'delete';
      const text = this.slots('default') || this.text;

      if (this.loading) {
        return <Loading class={bem('loading-icon')} />;
      }

      if (isDelete) {
        return text || <DeleteIcon class={bem('delete-icon')} />;
      }

      if (isExtra) {
        return text || <CollapseIcon class={bem('collapse-icon')} />;
      }

      return text;
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
          {this.genContent()}
        </div>
      </div>
    );
  },
});
