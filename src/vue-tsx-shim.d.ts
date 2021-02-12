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
    onFocus?: EventHandler;
    onInput?: EventHandler;
    onClick?: EventHandler;
    onCancel?: EventHandler;
    onClosed?: EventHandler;
    onChange?: EventHandler;
    onToggle?: EventHandler;
    onConfirm?: EventHandler;
    onClickStep?: EventHandler;
  }
}
