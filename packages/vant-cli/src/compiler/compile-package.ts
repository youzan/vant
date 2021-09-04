import { build } from 'vite';
import { getViteConfigForPackage } from '../config/vite.config.package';

export async function compilePackage(minify: boolean) {
  return build(getViteConfigForPackage(minify));
}
