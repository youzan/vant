import ora from 'ora';
import color from 'picocolors';
import consola from 'consola';
import { ROOT } from '../common/constant.js';

export function slimPath(path: string) {
  return color.yellow(path.replace(ROOT, ''));
}

export { ora, consola };
