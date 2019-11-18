import { join } from 'path';
import { remove, copy, readdirSync } from 'fs-extra';
import { clean } from './clean';
import { compileJs } from '../compiler/compile-js';
import { compileSfc } from '../compiler/compile-sfc';
import { compileStyle } from '../compiler/compile-style';
import { SRC_DIR, LIB_DIR, ES_DIR } from '../common/constant';
import {
  isDir,
  isSfc,
  isDemoDir,
  isTestDir,
  isScript,
  isStyle
} from '../common';

async function compileDir(dir: string) {
  const files = readdirSync(dir);

  files.forEach(async filename => {
    const filePath = join(dir, filename);

    if (isDemoDir(filePath) || isTestDir(filePath)) {
      await remove(filePath);
    } else if (isDir(filePath)) {
      await compileDir(filePath);
    } else if (isSfc(filePath)) {
      await compileSfc(filePath);
    } else if (isScript(filePath)) {
      await compileJs(filePath);
    } else if (isStyle(filePath)) {
      await compileStyle(filePath);
    } else {
      await remove(filePath);
    }
  });
}

function setModuleEnv(value: string) {
  process.env.BABEL_MODULE = value;
}

export async function build() {
  clean();

  await copy(SRC_DIR, ES_DIR);
  await copy(SRC_DIR, LIB_DIR);

  setModuleEnv('esmodule');
  await compileDir(ES_DIR);

  setModuleEnv('commonjs');
  await compileDir(LIB_DIR);
}
