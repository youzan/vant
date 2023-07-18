import { withInstall } from '../utils';
import _FloatingBubble from './FloatingBubble';

export const FloatingBubble = withInstall(_FloatingBubble);
export default FloatingBubble;

export { floatingBubbleProps } from './FloatingBubble';
export type { FloatingBubbleProps } from './FloatingBubble';
export type {
  FloatingBubbleThemeVars,
  FloatingBubbleAxis,
  FloatingBubbleMagnetic,
  FloatingBubbleOffset,
} from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanFloatingBubble: typeof FloatingBubble;
  }
}
