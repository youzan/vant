// Utils
import { createNamespace, isDef } from '../utils';
import { lockClick } from './lock-click';

// Components
import Icon from '../icon';
import Popup from '../popup';
import Loading from '../loading';

const [createComponent, bem] = createNamespace('toast');

export default createComponent({
  props: {
    icon: String,
    show: Boolean,
    clear: Function,
    className: null,
    iconPrefix: String,
    loadingType: String,
    forbidClick: Boolean,
    closeOnClick: Boolean,
    message: [Number, String],
    type: {
      type: String,
      default: 'text',
    },
    position: {
      type: String,
      default: 'middle',
    },
    transition: {
      type: String,
      default: 'van-fade',
    },
    lockScroll: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['opened', 'closed', 'update:show'],

  data() {
    return {
      clickable: false,
    };
  },

  mounted() {
    this.toggleClickable();
  },

  unmounted() {
    this.toggleClickable();
  },

  watch: {
    show: 'toggleClickable',
    forbidClick: 'toggleClickable',
  },

  methods: {
    onClick() {
      if (this.closeOnClick) {
        this.close();
      }
    },

    toggleClickable() {
      const clickable = this.show && this.forbidClick;

      if (this.clickable !== clickable) {
        this.clickable = clickable;
        lockClick(clickable);
      }
    },

    /* istanbul ignore next */
    onAfterEnter() {
      this.$emit('opened');

      if (this.onOpened) {
        this.onOpened();
      }
    },

    onAfterLeave() {
      this.$emit('closed');
    },

    genIcon() {
      const { icon, type, iconPrefix, loadingType } = this;
      const hasIcon = icon || type === 'success' || type === 'fail';

      if (hasIcon) {
        return (
          <Icon
            class={bem('icon')}
            classPrefix={iconPrefix}
            name={icon || type}
          />
        );
      }

      if (type === 'loading') {
        return <Loading class={bem('loading')} type={loadingType} />;
      }
    },

    genMessage() {
      const { type, message } = this;

      if (!isDef(message) || message === '') {
        return;
      }

      if (type === 'html') {
        return <div class={bem('text')} innerHTML={message} />;
      }

      return <div class={bem('text')}>{message}</div>;
    },
  },

  render() {
    return (
      <Popup
        show={this.show}
        class={[
          bem([this.position, { [this.type]: !this.icon }]),
          this.className,
        ]}
        transition={this.transition}
        onOpened={this.onAfterEnter}
        onClosed={this.onAfterLeave}
        onClick={this.onClick}
      >
        {this.genIcon()}
        {this.genMessage()}
      </Popup>
    );
  },
});
