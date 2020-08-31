// Utils
import { createNamespace, addUnit, pick } from '../utils';
import { BORDER_TOP, BORDER_LEFT } from '../utils/constant';

// Components
import Popup from '../popup';
import Button from '../button';
import ActionBar from '../action-bar';
import ActionBarButton from '../action-bar-button';

const [createComponent, bem, t] = createNamespace('dialog');

export default createComponent({
  props: {
    show: Boolean,
    title: String,
    theme: String,
    width: [Number, String],
    message: String,
    className: null,
    callback: Function,
    lazyRender: Boolean,
    beforeClose: Function,
    messageAlign: String,
    showCancelButton: Boolean,
    cancelButtonText: String,
    cancelButtonColor: String,
    confirmButtonText: String,
    confirmButtonColor: String,
    closeOnClickOverlay: Boolean,
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
  },

  emits: ['confirm', 'cancel', 'update:show'],

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
      this.onUpdateShow(false);

      if (this.callback) {
        this.callback(action);
      }
    },

    onUpdateShow(value) {
      this.$emit('update:show', value);
    },

    genRoundButtons() {
      return (
        <ActionBar class={bem('footer')}>
          {this.showCancelButton && (
            <ActionBarButton
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
            <ActionBarButton
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
        </ActionBar>
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
        role="dialog"
        class={[bem([this.theme]), this.className]}
        style={{ width: addUnit(this.width) }}
        aria-labelledby={this.title || message}
        {...{
          ...pick(this, [
            'show',
            'overlay',
            'transition',
            'lazyRender',
            'closeOnPopstate',
            'closeOnClickOverlay',
          ]),
          'onUpdate:show': this.onUpdateShow,
        }}
      >
        {Title}
        {this.genContent(title)}
        {this.theme === 'round-button'
          ? this.genRoundButtons()
          : this.genButtons()}
      </Popup>
    );
  },
});
