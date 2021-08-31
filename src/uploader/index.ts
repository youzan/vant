import { withInstall } from '../utils';
import _Uploader from './Uploader';

export const Uploader = withInstall(_Uploader);
export default Uploader;
export type {
  UploaderInstance,
  UploaderResultType,
  UploaderFileListItem,
} from './types';
