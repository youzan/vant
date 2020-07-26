import { createNamespace, addUnit } from '../utils';
import { BORDER_TOP, BORDER_LEFT } from '../utils/constant';
import Popup from '../popup';
import Button from '../button';

const [createComponent, bem, t] = createNamespace('dialog');

export default createComponent({
  props: {
    show: Boolean,
    title: String,
    width: [Number, String],
    message: String,
    className: null,
    callback: Function,
    lazyRender: Boolean,
    beforeClose: Function,
    messageAlign: String,
    cancelButtonText: String,
    cancelButtonColor: String,
    confirmButtonText: String,
    confirmButtonColor: String,
    showCancelButton: Boolean,
    overlay: {
      type: Boolean,
      default: true,
    },
    allowHtml: {
      type: Boolean,
      default: true,
    },
    transition: {
      type: String,
      default: 'van-dialog-bounce',
    },
    showConfirmButton: {
      type: Boolean,
      default: true,
    },
    closeOnPopstate: {
      type: Boolean,
      default: true,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['opened', 'closed', 'confirm', 'cancel', 'update:show'],

  data() {
    return {
      loading: {
        confirm: false,
        cancel: false,
      },
    };
  },

  methods: {
    onClickOverlay() {
      this.handleAction('overlay');
    },

    handleAction(action) {
      this.$emit(action);

      // show not trigger close event when hidden
      if (!this.show) {
        return;
      }

      if (this.beforeClose) {
        this.loading[action] = true;
        this.beforeClose(action, (state) => {
          if (state !== false && this.loading[action]) {
            this.onClose(action);
          }

          this.loading.confirm = false;
          this.loading.cancel = false;
        });
      } else {
        this.onClose(action);
      }
    },

    onClose(action) {
      this.$emit('update:show', false);

      if (this.callback) {
        this.callback(action);
      }
    },

    onOpened() {
      this.$emit('opened');
    },

    onClosed() {
      this.$emit('closed');
    },

    genButtons() {
      const multiple = this.showCancelButton && this.showConfirmButton;

      return (
        <div class={[BORDER_TOP, bem('footer', { buttons: multiple })]}>
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
              class={[bem('confirm'), { [BORDER_LEFT]: multiple }]}
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
    },

    genContent(hasTitle) {
      if (this.$slots.default) {
        return <div class={bem('content')}>{this.$slots.default()}</div>;
      }

      const { message, messageAlign } = this;
      if (message) {
        const data = {
          class: bem('message', {
            'has-title': hasTitle,
            [messageAlign]: messageAlign,
          }),
          [this.allowHtml ? 'innerHTML' : 'textContent']: message,
        };

        return (
          <div class={bem('content')}>
            <div {...data} />
          </div>
        );
      }
    },
  },

  render() {
    const { message } = this;
    const title = this.$slots.title ? this.$slots.title() : this.title;
    const Title = title && (
      <div
        class={bem('header', { isolated: !message && !this.$slots.default })}
      >
        {title}
      </div>
    );

    return (
      <Popup
        show={this.show}
        role="dialog"
        class={[bem(), this.className]}
        style={{ width: addUnit(this.width) }}
        transition={this.transition}
        lazyRender={this.lazyRender}
        aria-labelledby={this.title || message}
        onOpened={this.onOpened}
        onClosed={this.onClosed}
      >
        {Title}
        {this.genContent(title)}
        {this.genButtons()}
      </Popup>
    );
  },
});
