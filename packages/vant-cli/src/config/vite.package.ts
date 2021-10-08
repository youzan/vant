import { join } from 'path';
import type { InlineConfig } from 'vite';
import { setBuildTarget } from '../common';
import { CWD, ES_DIR, getVantConfig, LIB_DIR } from '../common/constant';

export function getViteConfigForPackage(minify: boolean): InlineConfig {
  setBuildTarget('package');

  const { name } = getVantConfig();

  return {
    root: CWD,

    logLevel: 'silent',

    build: {
      lib: {
        name,
        entry: join(ES_DIR, 'index.js'),
        fileName: (format: string) => {
          const suffix = format === 'umd' ? '' : `.${format}`;
          return minify ? `${name}${suffix}.min.js` : `${name}${suffix}.js`;
        },
      },
      // terser has better compression than esbuild
      minify: minify ? 'terser' : false,
      rollupOptions: {
        external: ['vue'],
        output: {
          dir: LIB_DIR,
          exports: 'named',
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
  };
}
