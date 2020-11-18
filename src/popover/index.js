import { createPopper } from '@popperjs/core';
import { createNamespace } from '../utils';
import { BORDER_BOTTOM } from '../utils/constant';

// Mixins
import { ClickOutsideMixin } from '../mixins/click-outside';

// Components
import Icon from '../icon';
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
    offset: {
      type: Array,
      default: () => [0, 8],
    },
    theme: {
      type: String,
      default: 'light',
    },
    actions: {
      type: Array,
      default: () => [],
    },
    getContainer: {
      type: [String, Function],
      default: 'body',
    },
    closeOnClickAction: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      location: null,
    };
  },

  watch: {
    placement: 'updateLocation',

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

  beforeDestroy() {
    if (this.popper) {
      this.popper.destroy();
      this.popper = null;
    }
  },

  methods: {
    createPopper() {
      return createPopper(this.$refs.wrapper, this.$refs.popover.$el, {
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
    },

    updateLocation() {
      this.$nextTick(() => {
        if (!this.popper) {
          this.popper = this.createPopper();
        } else {
          this.popper.setOptions({
            placement: this.placement,
          });
        }
      });
    },

    renderAction(action) {
      return (
        <div class={bem('action')} onClick={this.onClickAction}>
          {action.icon && (
            <Icon name={action.icon} class={bem('action-icon')} />
          )}
          <div class={[bem('action-text'), BORDER_BOTTOM]}>{action.text}</div>
        </div>
      );
    },

    onToggle(value) {
      this.$emit('input', value);
    },

    onClick(event) {
      event.stopPropagation();
      this.$emit('click', event);
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
          position={null}
          transition="van-popover-zoom"
          lockScroll={false}
          getContainer={this.getContainer}
          onInput={this.onToggle}
          onClick={this.onClick}
        >
          <div class={bem('arrow')} />
          {this.actions.map(this.renderAction)}
        </Popup>
        {this.slots('default')}
      </span>
    );
  },
});
