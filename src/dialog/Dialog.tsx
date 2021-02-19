import { PropType, reactive } from 'vue';

// Utils
import { callInterceptor, Interceptor } from '../utils/interceptor';
import { createNamespace, addUnit, pick, UnknownProp } from '../utils';
import { BORDER_TOP, BORDER_LEFT } from '../utils/constant';

// Components
import Popup, { popupSharedProps } from '../popup';
import Button from '../button';
import ActionBar from '../action-bar';
import ActionBarButton from '../action-bar-button';

const [createComponent, bem, t] = createNamespace('dialog');

export type DialogTheme = 'default' | 'round-button';
export type DialogAction = 'confirm' | 'cancel';
export type DialogMessageAlign = 'left' | 'center' | 'right';

const popupKeys = [
  ...(Object.keys(popupSharedProps) as Array<keyof typeof popupSharedProps>),
  'transition',
  'closeOnPopstate',
] as const;

export default createComponent({
  props: {
    ...popupSharedProps,
    title: String,
    theme: String as PropType<DialogTheme>,
    width: [Number, String],
    message: String,
    callback: Function as PropType<(action?: DialogAction) => void>,
    allowHtml: Boolean,
    className: UnknownProp,
    beforeClose: Function as PropType<Interceptor>,
    messageAlign: String as PropType<DialogMessageAlign>,
    showCancelButton: Boolean,
    cancelButtonText: String,
    cancelButtonColor: String,
    confirmButtonText: String,
    confirmButtonColor: String,
    closeOnClickOverlay: Boolean,
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

  setup(props, { emit, slots }) {
    const loading = reactive({
      confirm: false,
      cancel: false,
    });

    const onUpdateShow = (value: boolean) => {
      emit('update:show', value);
    };

    const close = (action: DialogAction) => {
      onUpdateShow(false);
      if (props.callback) {
        props.callback(action);
      }
    };

    const handleAction = (action: DialogAction) => {
      // should not trigger close event when hidden
      if (!props.show) {
        return;
      }

      emit(action);

      if (props.beforeClose) {
        loading[action] = true;
        callInterceptor({
          interceptor: props.beforeClose,
          args: [action],
          done() {
            close(action);
            loading[action] = false;
          },
          canceled() {
            loading[action] = false;
          },
        });
      } else {
        close(action);
      }
    };

    const renderTitle = () => {
      const title = slots.title ? slots.title() : props.title;
      if (title) {
        return (
          <div
            class={bem('header', {
              isolated: !props.message && !slots.default,
            })}
          >
            {title}
          </div>
        );
      }
    };

    const renderContent = () => {
      if (slots.default) {
        return <div class={bem('content')}>{slots.default()}</div>;
      }

      const { title, message, allowHtml, messageAlign } = props;
      if (message) {
        const hasTitle = title || slots.title;

        return (
          <div
            // add key to force re-render
            // see: https://github.com/youzan/vant/issues/7963
            key={allowHtml ? 1 : 0}
            class={bem('content', { isolated: !hasTitle })}
          >
            <div
              class={bem('message', {
                'has-title': hasTitle,
                [messageAlign as string]: messageAlign,
              })}
              {...{
                [allowHtml ? 'innerHTML' : 'textContent']: message,
              }}
            />
          </div>
        );
      }
    };

    const renderButtons = () => (
      <div class={[BORDER_TOP, bem('footer')]}>
        {props.showCancelButton && (
          <Button
            size="large"
            text={props.cancelButtonText || t('cancel')}
            class={bem('cancel')}
            style={{ color: props.cancelButtonColor }}
            loading={loading.cancel}
            onClick={() => {
              handleAction('cancel');
            }}
          />
        )}
        {props.showConfirmButton && (
          <Button
            size="large"
            text={props.confirmButtonText || t('confirm')}
            class={[bem('confirm'), { [BORDER_LEFT]: props.showCancelButton }]}
            style={{ color: props.confirmButtonColor }}
            loading={loading.confirm}
            onClick={() => {
              handleAction('confirm');
            }}
          />
        )}
      </div>
    );

    const renderRoundButtons = () => (
      <ActionBar class={bem('footer')}>
        {props.showCancelButton && (
          <ActionBarButton
            type="warning"
            text={props.cancelButtonText || t('cancel')}
            class={bem('cancel')}
            color={props.cancelButtonColor}
            loading={loading.cancel}
            onClick={() => {
              handleAction('cancel');
            }}
          />
        )}
        {props.showConfirmButton && (
          <ActionBarButton
            type="danger"
            text={props.confirmButtonText || t('confirm')}
            class={bem('confirm')}
            color={props.confirmButtonColor}
            loading={loading.confirm}
            onClick={() => {
              handleAction('confirm');
            }}
          />
        )}
      </ActionBar>
    );

    return () => {
      const { width, title, theme, message, className } = props;
      return (
        <Popup
          role="dialog"
          class={[bem([theme]), className]}
          style={{ width: addUnit(width) }}
          aria-labelledby={title || message}
          {...{
            ...pick(props, popupKeys),
            'onUpdate:show': onUpdateShow,
          }}
        >
          {renderTitle()}
          {renderContent()}
          {theme === 'round-button' ? renderRoundButtons() : renderButtons()}
        </Popup>
      );
    };
  },
});
