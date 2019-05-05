import { use } from '../utils';
import { PopupMixin } from '../mixins/popup';

const [sfc, bem] = use('popup');

export default sfc({
  mixins: [PopupMixin],

  props: {
    transition: String,
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

    const { position } = this;
    const emit = eventName => event => this.$emit(eventName, event);
    const transitionName =
      this.transition ||
      (position === 'center' ? 'van-fade' : `van-popup-slide-${position}`);

    return (
      <transition
        name={transitionName}
        onAfterEnter={emit('opened')}
        onAfterLeave={emit('closed')}
      >
        <div
          vShow={this.value}
          class={bem({ [position]: position })}
          onClick={emit('click')}
        >
          {this.slots()}
        </div>
      </transition>
    );
  }
});
