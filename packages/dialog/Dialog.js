import { use } from '../utils';
import { PopupMixin } from '../mixins/popup';
import Button from '../button';

const [sfc, bem, t] = use('dialog');

export default sfc({
  mixins: [PopupMixin],

  props: {
    title: String,
    message: String,
    className: null,
    callback: Function,
    beforeClose: Function,
    messageAlign: String,
    cancelButtonText: String,
    cancelButtonColor: String,
    confirmButtonText: String,
    confirmButtonColor: String,
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
    onClickOverlay() {
      this.handleAction('overlay');
    },

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
      this.close();

      if (this.callback) {
        this.callback(action);
      }
    }
  },

  render(h) {
    if (!this.shouldRender) {
      return;
    }

    const { title, message, messageAlign } = this;
    const children = this.slots();

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
        {this.showCancelButton && (
          <Button
            size="large"
            class={bem('cancel')}
            loading={this.loading.cancel}
            text={this.cancelButtonText || t('cancel')}
            style={{ color: this.cancelButtonColor }}
            onClick={() => {
              this.handleAction('cancel');
            }}
          />
        )}
        {this.showConfirmButton && (
          <Button
            size="large"
            class={[bem('confirm'), { 'van-hairline--left': hasButtons }]}
            loading={this.loading.confirm}
            text={this.confirmButtonText || t('confirm')}
            style={{ color: this.confirmButtonColor }}
            onClick={() => {
              this.handleAction('confirm');
            }}
          />
        )}
      </div>
    );

    return (
      <transition name="van-dialog-bounce">
        <div vShow={this.value} class={[bem(), this.className]}>
          {Title}
          {Content}
          {ButtonGroup}
        </div>
      </transition>
    );
  }
});
