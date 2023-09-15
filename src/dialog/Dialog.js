import { createNamespace, addUnit, noop } from '../utils';
import { BORDER_TOP, BORDER_LEFT } from '../utils/constant';
import { PopupMixin } from '../mixins/popup';
import Button from '../button';
import GoodsAction from '../goods-action';
import GoodsActionButton from '../goods-action-button';

const [createComponent, bem, t] = createNamespace('dialog');

export default createComponent({
  mixins: [PopupMixin()],

  props: {
    title: String,
    theme: String,
    width: [Number, String],
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
      if (!this.value) {
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
      this.close();

      if (this.callback) {
        this.callback(action);
      }
    },

    onOpened() {
      this.$emit('opened');

      this.$nextTick(() => {
        this.$refs.dialog?.focus();
      });
    },

    onClosed() {
      this.$emit('closed');
    },

    onKeydown(event) {
      if (event.key === 'Escape' || event.key === 'Enter') {
        // skip keyboard events of child elements
        if (event.target !== this.$refs.dialog) {
          return;
        }

        const onEventType = {
          Enter: this.showConfirmButton
            ? () => this.handleAction('confirm')
            : noop,
          Escape: this.showCancelButton
            ? () => this.handleAction('cancel')
            : noop,
        };

        onEventType[event.key]();
        this.$emit('keydown', event);
      }
    },

    genRoundButtons() {
      return (
        <GoodsAction class={bem('footer')}>
          {this.showCancelButton && (
            <GoodsActionButton
              size="large"
              type="warning"
              text={this.cancelButtonText || t('cancel')}
              class={bem('cancel')}
              color={this.cancelButtonColor}
              loading={this.loading.cancel}
              onClick={() => {
                this.handleAction('cancel');
              }}
            />
          )}
          {this.showConfirmButton && (
            <GoodsActionButton
              size="large"
              type="danger"
              text={this.confirmButtonText || t('confirm')}
              class={bem('confirm')}
              color={this.confirmButtonColor}
              loading={this.loading.confirm}
              onClick={() => {
                this.handleAction('confirm');
              }}
            />
          )}
        </GoodsAction>
      );
    },

    genButtons() {
      const multiple = this.showCancelButton && this.showConfirmButton;

      return (
        <div class={[BORDER_TOP, bem('footer')]}>
          {this.showCancelButton && (
            <Button
              size="large"
              class={bem('cancel')}
              loading={this.loading.cancel}
              text={this.cancelButtonText || t('cancel')}
              style={{ color: this.cancelButtonColor }}
              nativeType="button"
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
              nativeType="button"
              onClick={() => {
                this.handleAction('confirm');
              }}
            />
          )}
        </div>
      );
    },

    genContent(hasTitle, messageSlot) {
      if (messageSlot) {
        return <div class={bem('content')}>{messageSlot}</div>;
      }

      const { message, messageAlign } = this;
      if (message) {
        const data = {
          class: bem('message', {
            'has-title': hasTitle,
            [messageAlign]: messageAlign,
          }),
          domProps: {
            [this.allowHtml ? 'innerHTML' : 'textContent']: message,
          },
        };

        return (
          <div class={bem('content', { isolated: !hasTitle })}>
            <div {...data} />
          </div>
        );
      }
    },
  },

  render() {
    if (!this.shouldRender) {
      return;
    }

    const { message } = this;
    const messageSlot = this.slots();
    const title = this.slots('title') || this.title;
    const Title = title && (
      <div class={bem('header', { isolated: !message && !messageSlot })}>
        {title}
      </div>
    );

    return (
      <transition
        name={this.transition}
        onAfterEnter={this.onOpened}
        onAfterLeave={this.onClosed}
      >
        <div
          vShow={this.value}
          role="dialog"
          aria-labelledby={this.title || message}
          class={[bem([this.theme]), this.className]}
          style={{ width: addUnit(this.width) }}
          ref="dialog"
          tabIndex={0}
          onKeydown={this.onKeydown}
        >
          {Title}
          {this.genContent(title, messageSlot)}
          {this.theme === 'round-button'
            ? this.genRoundButtons()
            : this.genButtons()}
        </div>
      </transition>
    );
  },
});
