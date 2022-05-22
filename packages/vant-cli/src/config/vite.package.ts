import { join } from 'path';
import { setBuildTarget } from '../common/index.js';
import { CWD, ES_DIR, getVantConfig, LIB_DIR } from '../common/constant.js';
import type { InlineConfig, LibraryFormats } from 'vite';

export function getViteConfigForPackage({
  minify,
  formats,
  external,
}: {
  minify: boolean;
  formats: LibraryFormats[];
  external: string[];
}): InlineConfig {
  setBuildTarget('package');

  const { name, build } = getVantConfig();
  const entryExtension = build?.extensions?.esm || '.js';
  const entry = join(ES_DIR, `index${entryExtension}`);

  return {
    root: CWD,

    logLevel: 'silent',

    build: {
      lib: {
        name,
        entry,
        formats,
        fileName: (format: string) => {
          const suffix = format === 'umd' ? '' : `.${format}`;
          return minify ? `${name}${suffix}.min.js` : `${name}${suffix}.js`;
        },
      },
      // terser has better compression than esbuild
      minify: minify ? 'terser' : false,
      rollupOptions: {
        external,
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
