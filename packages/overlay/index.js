import { use } from '../utils';

const [sfc, bem] = use('overlay');

export default sfc({
  props: {
    zIndex: Number,
    visible: Boolean,
    className: String,
    customStyle: Object
  },

  render(h) {
    const style = {
      zIndex: this.zIndex,
      ...this.customStyle
    };

    return (
      <transition name="van-fade">
        <div
          v-show={this.visible}
          style={style}
          class={[bem(), this.className]}
          onTouchmove={event => {
            event.preventDefault();
            event.stopPropagation();
          }}
          onClick={event => {
            this.$emit('click', event);
          }}
        />
      </transition>
    );
  }
});
