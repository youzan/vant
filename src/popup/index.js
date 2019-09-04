import { createNamespace, isDef } from '../utils';
import { PopupMixin } from '../mixins/popup';
import Icon from '../icon';

const [createComponent, bem] = createNamespace('popup');

export default createComponent({
  mixins: [PopupMixin],

  props: {
    round: Boolean,
    duration: Number,
    closeable: Boolean,
    transition: String,
    closeIcon: {
      type: String,
      default: 'cross'
    },
    position: {
      type: String,
      default: 'center'
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  beforeCreate() {
    const createEmitter = eventName => event => this.$emit(eventName, event);

    this.onClick = createEmitter('click');
    this.onOpened = createEmitter('opened');
    this.onClosed = createEmitter('closed');
  },

  render() {
    if (!this.shouldRender) {
      return;
    }

    const { round, position, duration } = this;

    const transitionName =
      this.transition ||
      (position === 'center' ? 'van-fade' : `van-popup-slide-${position}`);

    const style = {};
    if (isDef(duration)) {
      style.transitionDuration = `${duration}s`;
    }

    return (
      <transition
        name={transitionName}
        onAfterEnter={this.onOpened}
        onAfterLeave={this.onClosed}
      >
        <div
          vShow={this.value}
          style={style}
          class={bem({ round, [position]: position })}
          onClick={this.onClick}
        >
          {this.slots()}
          {this.closeable && (
            <Icon name={this.closeIcon} class={bem('close-icon')} onClick={this.close} />
          )}
        </div>
      </transition>
    );
  }
});
