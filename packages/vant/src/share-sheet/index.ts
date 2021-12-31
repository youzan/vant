import { withInstall } from '../utils';
import _ShareSheet from './ShareSheet';

export const ShareSheet = withInstall(_ShareSheet);
export default ShareSheet;
export type {
  ShareSheetProps,
  ShareSheetOption,
  ShareSheetOptions,
} from './ShareSheet';

declare module 'vue' {
  export interface GlobalComponents {
    VanShareSheet: typeof ShareSheet;
  }
}
