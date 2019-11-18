import postcss from 'postcss';
import postcssrc from 'postcss-load-config';
import { parse } from 'path';
import { render as renderLess } from 'less';
import { renderSync as renderSass } from 'sass';
import { readFileSync, writeFileSync } from 'fs';
import { replaceExt } from '../common';
import { POSTCSS_CONFIG_FILE } from '../common/constant';

async function compilePostcss(filePath: string, source: string | Buffer) {
  const config = await postcssrc({}, POSTCSS_CONFIG_FILE);
  const output = await postcss(config.plugins as any).process(source, {
    from: undefined
  });

  writeFileSync(filePath, output);
}

async function compileLess(filePath: string) {
  const source = readFileSync(filePath, 'utf-8');
  const { css } = await renderLess(source, {
    filename: filePath
  });

  return css;
}

async function compileSass(filePath: string) {
  const { css } = renderSass({ file: filePath });
  return css;
}

export async function compileStyle(filePath: string) {
  const parsedPath = parse(filePath);

  if (parsedPath.ext === '.less') {
    const source = await compileLess(filePath);
    await compilePostcss(replaceExt(filePath, '.css'), source);
  } else if (parsedPath.ext === '.scss') {
    const source = await compileSass(filePath);
    await compilePostcss(replaceExt(filePath, '.css'), source);
  } else {
    const source = readFileSync(filePath, 'utf-8');
    await compilePostcss(filePath, source);
  }
}
