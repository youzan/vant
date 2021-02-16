import 'vue';

type EventHandler = (...args: any[]) => void;

declare module 'vue' {
  interface ComponentCustomProps {
    role?: string;
    tabindex?: number;
    // should be removed after Vue supported component events typing
    // see: https://github.com/vuejs/vue-next/issues/1553
    //      https://github.com/vuejs/vue-next/issues/3029
    onBlur?: EventHandler;
    onOpen?: EventHandler;
    onEdit?: EventHandler;
    onClose?: EventHandler;
    onFocus?: EventHandler;
    onInput?: EventHandler;
    onClick?: EventHandler;
    onPress?: EventHandler;
    onCancel?: EventHandler;
    onOpened?: EventHandler;
    onClosed?: EventHandler;
    onChange?: EventHandler;
    onSubmit?: EventHandler;
    onSelect?: EventHandler;
    onToggle?: EventHandler;
    onConfirm?: EventHandler;
    onKeypress?: EventHandler;
    onClickStep?: EventHandler;
    onTouchstart?: EventHandler;
  }
}
