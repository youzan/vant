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
    onLoad?: EventHandler;
    onClose?: EventHandler;
    onFocus?: EventHandler;
    onInput?: EventHandler;
    onClick?: EventHandler;
    onPress?: EventHandler;
    onScale?: EventHandler;
    onCancel?: EventHandler;
    onClosed?: EventHandler;
    onChange?: EventHandler;
    onDelete?: EventHandler;
    onOpened?: EventHandler;
    onScroll?: EventHandler;
    onSubmit?: EventHandler;
    onSelect?: EventHandler;
    onToggle?: EventHandler;
    onConfirm?: EventHandler;
    onPreview?: EventHandler;
    onKeypress?: EventHandler;
    onTouchend?: EventHandler;
    onClickStep?: EventHandler;
    onTouchmove?: EventHandler;
    onTouchstart?: EventHandler;
    onTouchcancel?: EventHandler;
    onSelectSearch?: EventHandler;
  }
}
