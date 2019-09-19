export type GetContainer = () => Element;

export type PopupMixinProps = {
  value: boolean;
  zIndex: string | number;
  overlay?: boolean;
  lockScroll: boolean;
  lazyRender: boolean;
  overlayClass?: any;
  overlayStyle?: object | object[];
  getContainer?: string | GetContainer;
  closeOnClickOverlay?: boolean;
};
