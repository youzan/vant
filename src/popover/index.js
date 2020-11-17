import { createNamespace } from '../utils';
import { createPopper } from '@popperjs/core';

// Mixins
import { ClickOutsideMixin } from '../mixins/click-outside';

// Components
import Popup from '../popup';

const [createComponent, bem] = createNamespace('popover');

export default createComponent({
  mixins: [
    ClickOutsideMixin({
      event: 'click',
      method: 'onClickOutside',
    }),
  ],

  props: {
    value: Boolean,
    overlay: Boolean,
    placement: String,
    textColor: String,
    backgroundColor: String,
    closeOnClickAction: Boolean,
    offset: {
      type: Array,
      default: () => [0, 8],
    },
    theme: {
      type: String,
      default: 'dark',
    },
    actions: {
      type: Array,
      default: () => [],
    },
    getContainer: {
      type: [String, Function],
      default: 'body',
    },
  },

  data() {
    return {
      location: null,
    };
  },

  watch: {
    value(value) {
      if (value) {
        this.updateLocation();
      }
    },
  },

  mounted() {
    if (this.value) {
      this.updateLocation();
    }
  },

  methods: {
    updateLocation() {
      this.$nextTick(() => {
        createPopper(this.$refs.wrapper, this.$refs.popover.$el, {
          placement: this.placement,
          modifiers: [
            {
              name: 'computeStyles',
              options: {
                adaptive: false,
              },
            },
            {
              name: 'offset',
              options: {
                offset: this.offset,
              },
            },
          ],
        });
      });
    },

    renderAction(action) {
      return <div class={bem('action')}>{action.text}</div>;
    },

    onToggle(value) {
      this.$emit('input', value);
    },

    onClickAction(action, index) {
      this.$emit('select', action, index);

      if (this.closeOnClickAction) {
        this.$emit('input', false);
      }
    },

    onClickOutside() {
      this.$emit('input', false);
    },
  },

  render() {
    return (
      <span ref="wrapper" class={bem('wrapper')}>
        <Popup
          ref="popover"
          value={this.value}
          style={this.location}
          class={bem([this.theme, `placement-${this.placement}`])}
          overlay={this.overlay}
          position=""
          transition="van-popover-zoom"
          lockScroll={false}
          getContainer={this.getContainer}
          onInput={this.onToggle}
        >
          <div class={bem('arrow')} />
          {this.actions.map(this.renderAction)}
        </Popup>
        {this.slots('default')}
      </span>
    );
  },
});
