import { Transition } from 'vue';
import { createNamespace, isDef } from '../utils';
import { PopupMixin } from '../mixins/popup';
import Icon from '../icon';
import Overlay from '../overlay';

const [createComponent, bem] = createNamespace('popup');

export default createComponent({
  mixins: [PopupMixin()],

  inheritAttrs: false,

  props: {
    round: Boolean,
    duration: [Number, String],
    closeable: Boolean,
    transition: String,
    safeAreaInsetBottom: Boolean,
    closeIcon: {
      type: String,
      default: 'cross',
    },
    closeIconPosition: {
      type: String,
      default: 'top-right',
    },
    position: {
      type: String,
      default: 'center',
    },
    overlay: {
      type: Boolean,
      default: true,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
  },

  beforeCreate() {
    const createEmitter = (eventName) => (event) =>
      this.$emit(eventName, event);

    this.onClick = createEmitter('click');
    this.onOpened = createEmitter('opened');
    this.onClosed = createEmitter('closed');
  },

  render() {
    if (!this.shouldRender) {
      return;
    }

    const { round, position, duration } = this;
    const isCenter = position === 'center';

    const transitionName =
      this.transition ||
      (isCenter ? 'van-fade' : `van-popup-slide-${position}`);

    const style = {};
    if (isDef(duration)) {
      const key = isCenter ? 'animationDuration' : 'transitionDuration';
      style[key] = `${duration}s`;
    }

    return (
      <>
        {this.overlay && (
          <Overlay show={this.show} onClick={this.onClickOverlay} />
        )}
        <Transition
          name={transitionName}
          onAfterEnter={this.onOpened}
          onAfterLeave={this.onClosed}
        >
          <div
            vShow={this.show}
            ref="root"
            style={style}
            class={bem({
              round,
              [position]: position,
              'safe-area-inset-bottom': this.safeAreaInsetBottom,
            })}
            onClick={this.onClick}
            {...this.$attrs}
          >
            {this.$slots.default?.()}
            {this.closeable && (
              <Icon
                role="button"
                tabindex="0"
                name={this.closeIcon}
                class={bem('close-icon', this.closeIconPosition)}
                onClick={this.close}
              />
            )}
          </div>
        </Transition>
      </>
    );
  },
});
