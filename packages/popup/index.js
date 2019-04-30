import { use } from '../utils';
import { PopupMixin } from '../mixins/popup';

const [sfc, bem] = use('popup');

export default sfc({
  mixins: [PopupMixin],

  props: {
    position: String,
    transition: String,
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
    const transitionName = this.transition || (position ? `van-popup-slide-${position}` : 'van-fade');

    return (
      <transition
        name={transitionName}
        onAfterEnter={emit('opened')}
        onAfterLeave={emit('closed')}
      >
        <div vShow={this.value} class={bem({ [position]: position })} onClick={emit('click')}>
          {this.slots()}
        </div>
      </transition>
    );
  }
});
