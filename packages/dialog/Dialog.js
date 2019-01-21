import { use } from '../utils';
import Button from '../button';
import Popup from '../mixins/popup';

const [sfc, bem, t] = use('dialog');

export default sfc({
  mixins: [Popup],

  props: {
    title: String,
    message: String,
    callback: Function,
    className: [String, Object, Array],
    beforeClose: Function,
    messageAlign: String,
    confirmButtonText: String,
    cancelButtonText: String,
    showCancelButton: Boolean,
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      loading: {
        confirm: false,
        cancel: false
      }
    };
  },

  methods: {
    handleAction(action) {
      this.$emit(action);
      if (this.beforeClose) {
        this.loading[action] = true;
        this.beforeClose(action, state => {
          if (state !== false) {
            this.onClose(action);
          }
          this.loading[action] = false;
        });
      } else {
        this.onClose(action);
      }
    },

    onClose(action) {
      this.$emit('input', false);
      this.callback && this.callback(action);
    }
  },

  render(h) {
    if (!this.shouldRender) {
      return;
    }

    const { title, message, messageAlign } = this;
    const children = this.$slots.default;

    const Title = title && (
      <div class={bem('header', { isolated: !message && !children })}>{title}</div>
    );

    const Content = (children || message) && (
      <div class={bem('content')}>
        {children || (
          <div
            domPropsInnerHTML={message}
            class={bem('message', { 'has-title': title, [messageAlign]: messageAlign })}
          />
        )}
      </div>
    );

    const hasButtons = this.showCancelButton && this.showConfirmButton;
    const ButtonGroup = (
      <div class={['van-hairline--top', bem('footer', { buttons: hasButtons })]}>
        <Button
          v-show={this.showCancelButton}
          size="large"
          class={bem('cancel')}
          loading={this.loading.cancel}
          text={this.cancelButtonText || t('cancel')}
          onClick={() => {
            this.handleAction('cancel');
          }}
        />
        <Button
          v-show={this.showConfirmButton}
          size="large"
          class={[bem('confirm'), { 'van-hairline--left': hasButtons }]}
          loading={this.loading.confirm}
          text={this.confirmButtonText || t('confirm')}
          onClick={() => {
            this.handleAction('confirm');
          }}
        />
      </div>
    );

    return (
      <transition name="van-dialog-bounce">
        <div v-show={this.value} class={[bem(), this.className]}>
          {Title}
          {Content}
          {ButtonGroup}
        </div>
      </transition>
    );
  }
});
