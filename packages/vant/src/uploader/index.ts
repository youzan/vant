import { withInstall } from '../utils';
import _Uploader, { UploaderProps } from './Uploader';

export const Uploader = withInstall(_Uploader);
export default Uploader;
export { uploaderProps } from './Uploader';
export type { UploaderProps };
export type {
  UploaderInstance,
  UploaderThemeVars,
  UploaderResultType,
  UploaderFileListItem,
} from './types';

declare module 'vue' {
  export interface GlobalComponents {
    VanUploader: typeof Uploader;
  }
}
