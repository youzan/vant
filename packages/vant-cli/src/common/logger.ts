import color from 'picocolors';
import { ROOT } from '../common/constant.js';

export function slimPath(path: string) {
  return color.yellow(path.replace(ROOT, ''));
}
