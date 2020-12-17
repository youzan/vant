import { createPopper, offsetModifier } from '@vant/popperjs';
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
      event: 'touchstart',
      method: 'onClickOutside',
    }),
  ],

  props: {
    value: Boolean,
    trigger: String,
    overlay: Boolean,
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
    placement: {
      type: String,
      default: 'bottom',
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

  watch: {
    value: 'updateLocation',
    placement: 'updateLocation',
  },

  mounted() {
    this.updateLocation();
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
              gpuAcceleration: false,
            },
          },
          {
            ...offsetModifier,
            options: {
              offset: this.offset,
            },
          },
        ],
      });
    },

    updateLocation() {
      this.$nextTick(() => {
        if (!this.value) {
          return;
        }

        if (!this.popper) {
          this.popper = this.createPopper();
        } else {
          this.popper.setOptions({
            placement: this.placement,
          });
        }
      });
    },

    renderAction(action, index) {
      const { icon, text, disabled, className } = action;
      return (
        <div
          role="menuitem"
          class={[bem('action', { disabled, 'with-icon': icon }), className]}
          onClick={() => this.onClickAction(action, index)}
        >
          {icon && <Icon name={icon} class={bem('action-icon')} />}
          <div class={[bem('action-text'), BORDER_BOTTOM]}>{text}</div>
        </div>
      );
    },

    onToggle(value) {
      this.$emit('input', value);
    },

    onClickWrapper() {
      if (this.trigger === 'click') {
        this.onToggle(!this.value);
      }
    },

    onTouchstart(event) {
      event.stopPropagation();
      this.$emit('touchstart', event);
    },

    onClickAction(action, index) {
      if (action.disabled) {
        return;
      }

      this.$emit('select', action, index);

      if (this.closeOnClickAction) {
        this.$emit('input', false);
      }
    },

    onClickOutside() {
      this.$emit('input', false);
    },

    onOpen() {
      this.$emit('open');
    },

    /* istanbul ignore next */
    onOpened() {
      this.$emit('opened');
    },

    onClose() {
      this.$emit('close');
    },

    /* istanbul ignore next */
    onClosed() {
      this.$emit('closed');
    },
  },

  render() {
    return (
      <span ref="wrapper" class={bem('wrapper')} onClick={this.onClickWrapper}>
        <Popup
          ref="popover"
          value={this.value}
          class={bem([this.theme])}
          overlay={this.overlay}
          position={null}
          transition="van-popover-zoom"
          lockScroll={false}
          getContainer={this.getContainer}
          onOpen={this.onOpen}
          onClose={this.onClose}
          onInput={this.onToggle}
          onOpened={this.onOpened}
          onClosed={this.onClosed}
          nativeOnTouchstart={this.onTouchstart}
        >
          <div class={bem('arrow')} />
          <div class={bem('content')} role="menu">
            {this.slots('default') || this.actions.map(this.renderAction)}
          </div>
        </Popup>
        {this.slots('reference')}
      </span>
    );
  },
});
