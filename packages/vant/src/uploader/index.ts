import { withInstall } from '../utils';
import _Uploader, { UploaderProps } from './Uploader';

export const Uploader = withInstall(_Uploader);
export default Uploader;
export type { UploaderProps };
export type {
  UploaderInstance,
  UploaderResultType,
  UploaderFileListItem,
} from './types';

// define global components for volar
declare module 'vue' {
  export interface GlobalComponents {
    VanUploader: typeof Uploader;
  }
}
