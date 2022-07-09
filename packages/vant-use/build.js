const { build } = require('esbuild');

function bundleBundle(format) {
  const ext = format === 'esm' ? '.mjs' : '.js';
  const outfile = `dist/index.${format}${ext}`;
  const finish = () => console.log('Build finished:', outfile);
  const onRebuild = (error) => (error ? console.log(error) : finish());

  build({
    watch: process.argv.includes('-w') && { onRebuild },
    format,
    bundle: true,
    target: ['chrome53'],
    outfile,
    // preserve Chinese character
    charset: 'utf8',
    external: ['vue', 'vant'],
    entryPoints: ['./src/index.ts'],
  }).then(finish);
}

bundleBundle('esm');
bundleBundle('cjs');
