import { parse } from 'path';
import { readFileSync, writeFileSync } from 'fs';
import { replaceExt } from '../common';
import { compileCss } from './compile-css';
import { compileLess } from './compile-less';
import { compileSass } from './compile-sass';

async function compileFile(filePath: string) {
  const parsedPath = parse(filePath);

  if (parsedPath.ext === '.less') {
    const source = await compileLess(filePath);
    return compileCss(source);
  }

  if (parsedPath.ext === '.scss') {
    const source = await compileSass(filePath);
    return compileCss(source);
  }

  const source = readFileSync(filePath, 'utf-8');
  return compileCss(source);
}

export async function compileStyle(filePath: string) {
  const css = await compileFile(filePath);

  writeFileSync(replaceExt(filePath, '.css'), css);
}
