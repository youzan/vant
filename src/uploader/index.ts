import { withInstall } from '../utils';
import _Uploader from './Uploader';

const Uploader = withInstall<typeof _Uploader>(_Uploader);

export default Uploader;
export { Uploader };
export type {
  UploaderInstance,
  UploaderResultType,
  UploaderFileListItem,
} from './types';
