import { PropType, CSSProperties, TeleportProps } from 'vue';
import { TruthyProp, UnknownProp } from '../utils';

export const popupSharedProps = {
  // whether to show popup
  show: Boolean,
  // z-index
  zIndex: [Number, String],
  // whether to show overlay
  overlay: TruthyProp,
  // transition duration
  duration: [Number, String],
  // teleport
  teleport: [String, Object] as PropType<TeleportProps['to']>,
  // prevent body scroll
  lockScroll: TruthyProp,
  // whether to lazy render
  lazyRender: TruthyProp,
  // overlay custom style
  overlayStyle: Object as PropType<CSSProperties>,
  // overlay custom class name
  overlayClass: UnknownProp,
  // Initial rendering animation
  transitionAppear: Boolean,
  // whether to close popup when overlay is clicked
  closeOnClickOverlay: TruthyProp,
};

export type PopupSharedPropKeys = Array<keyof typeof popupSharedProps>;

export const popupSharedPropKeys = Object.keys(
  popupSharedProps
) as PopupSharedPropKeys;
