import { build } from 'vite';
import { getViteConfigForPackage } from '../config/vite.package';

export async function compilePackage(minify: boolean) {
  return build(getViteConfigForPackage(minify));
}
