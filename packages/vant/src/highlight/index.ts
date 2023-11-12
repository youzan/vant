import { withInstall } from '../utils';
import _Highlight from './Highlight';

export const Highlight = withInstall(_Highlight);
export default Highlight;

export { highlightProps } from './Highlight';

export type { HighlightProps } from './Highlight';
export type { HighlightThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    vanHighlight: typeof Highlight;
  }
}
