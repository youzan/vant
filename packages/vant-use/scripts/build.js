const glob = require('fast-glob');
const { join } = require('path');
const { transformAsync } = require('@babel/core');
const { readFileSync, outputFileSync } = require('fs-extra');

const srcDir = join(__dirname, '..', 'src');
const distDir = join(__dirname, '..', 'dist');
const srcFiles = glob.sync(join(srcDir, '**', '*.ts'), {
  ignore: ['**/node_modules', '**/*.spec.ts'],
});

const compile = (filePath, distDir) =>
  new Promise((resolve, reject) => {
    const code = readFileSync(filePath, 'utf-8');
    const distPath = filePath.replace(srcDir, distDir).replace('.ts', '.js');

    transformAsync(code, { filename: filePath })
      .then((result) => {
        if (result) {
          outputFileSync(distPath, result.code);
          resolve();
        }
      })
      .catch(reject);
  });

async function build() {
  // esm output
  await Promise.all(
    srcFiles.map((srcFile) => compile(srcFile, join(distDir, 'esm')))
  );

  // cjs output
  process.env.BABEL_MODULE = 'commonjs';
  await Promise.all(
    srcFiles.map((srcFile) => compile(srcFile, join(distDir, 'cjs')))
  );
}

build();
