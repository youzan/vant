import { build } from 'vite';
import { getPackageJson, getVantConfig } from '../common/constant.js';
import { mergeCustomViteConfig } from '../common/index.js';
import { getViteConfigForPackage } from '../config/vite.package.js';
import type { LibraryFormats } from 'vite';

export type BundleOption = {
  minify?: boolean;
  formats: LibraryFormats[];
  external?: string[];
};

export async function compileBundles() {
  const dependencies = getPackageJson().dependencies || {};
  const external = Object.keys(dependencies);

  const DEFAULT_OPTIONS: BundleOption[] = [
    {
      minify: false,
      formats: ['umd'],
    },
    {
      minify: true,
      formats: ['umd'],
    },
    {
      minify: false,
      formats: ['es', 'cjs'],
      external,
    },
  ];

  const bundleOptions: BundleOption[] =
    getVantConfig().build?.bundleOptions || DEFAULT_OPTIONS;

  await Promise.all(
    bundleOptions.map(async (config) =>
      build(
        await mergeCustomViteConfig(
          getViteConfigForPackage(config),
          'production',
        ),
      ),
    ),
  );
}
