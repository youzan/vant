import { withInstall } from '../utils';
import _Image from './Image';

const Image = withInstall<typeof _Image>(_Image);

export default Image;
export { Image };
export type { ImageFit } from './Image';
