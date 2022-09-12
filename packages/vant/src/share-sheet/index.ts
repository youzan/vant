import { withInstall } from '../utils';
import _ShareSheet from './ShareSheet';

export const ShareSheet = withInstall(_ShareSheet);
export default ShareSheet;
export { shareSheetProps } from './ShareSheet';
export type {
  ShareSheetProps,
  ShareSheetOption,
  ShareSheetOptions,
} from './ShareSheet';
export type { ShareSheetThemeVars } from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanShareSheet: typeof ShareSheet;
  }
}
