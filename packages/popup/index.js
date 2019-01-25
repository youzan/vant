import { use } from '../utils';
import Popup from '../mixins/popup';

const [sfc, bem] = use('popup');

export default sfc({
  mixins: [Popup],

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
    const transitionName = this.transition || (position ? `van-popup-slide-${position}` : 'van-fade');

    return (
      <transition name={transitionName}>
        <div vShow={this.value} class={bem({ [position]: position })}>
          {this.$slots.default}
        </div>
      </transition>
    );
  }
});
