import { use } from '../utils';
import PopupMixin from '../mixins/popup';
import { RED, WHITE } from '../utils/color';

const [sfc, bem] = use('notify');

export default sfc({
  mixins: [PopupMixin],

  props: {
    message: [String, Number],
    color: {
      type: String,
      value: WHITE
    },
    background: {
      type: String,
      value: RED
    },
    duration: {
      type: Number,
      value: 3000
    },
    lockScroll: {
      type: Boolean,
      default: false
    }
  },

  render(h) {
    const style = {
      color: this.color,
      background: this.background
    };
    return (
      <transition name="van-slide-down">
        <div v-show={this.value} class={bem()} style={style}>
          {this.message}
        </div>
      </transition>
    );
  }
});
