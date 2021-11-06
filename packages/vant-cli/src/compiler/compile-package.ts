import { build } from 'vite';
import { mergeCustomViteConfig } from '../common/index.js';
import { getViteConfigForPackage } from '../config/vite.package.js';

export async function compilePackage(
  minify: boolean
): ReturnType<typeof build> {
  const config = mergeCustomViteConfig(getViteConfigForPackage(minify));
  return build(config);
}
