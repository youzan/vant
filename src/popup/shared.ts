import { PropType, CSSProperties, TeleportProps } from 'vue';
import { UnknownProp } from '../utils';

export const popupSharedProps = {
  // whether to show popup
  show: Boolean,
  // z-index
  zIndex: [Number, String],
  // transition duration
  duration: [Number, String],
  // teleport
  teleport: [String, Object] as PropType<TeleportProps['to']>,
  // overlay custom style
  overlayStyle: Object as PropType<CSSProperties>,
  // overlay custom class name
  overlayClass: UnknownProp,
  // Initial rendering animation
  transitionAppear: Boolean,
  // whether to show overlay
  overlay: {
    type: Boolean,
    default: true,
  },
  // prevent body scroll
  lockScroll: {
    type: Boolean,
    default: true,
  },
  // whether to lazy render
  lazyRender: {
    type: Boolean,
    default: true,
  },
  // whether to close popup when overlay is clicked
  closeOnClickOverlay: {
    type: Boolean,
    default: true,
  },
};

export type PopupSharedPropKeys = Array<keyof typeof popupSharedProps>;

export const popupSharedPropKeys = Object.keys(
  popupSharedProps
) as PopupSharedPropKeys;
