import { use, isDef } from '../utils';
import { PopupMixin } from '../mixins/popup';

const [sfc, bem] = use('popup');

export default sfc({
  mixins: [PopupMixin],

  props: {
    transition: String,
    duration: {
      type: Number,
      default: null
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

  render(h) {
    if (!this.shouldRender) {
      return;
    }

    const { position, duration } = this;
    const emit = eventName => event => this.$emit(eventName, event);

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
        onAfterEnter={emit('opened')}
        onAfterLeave={emit('closed')}
      >
        <div
          vShow={this.value}
          style={style}
          class={bem({ [position]: position })}
          onClick={emit('click')}
        >
          {this.slots()}
        </div>
      </transition>
    );
  }
});
