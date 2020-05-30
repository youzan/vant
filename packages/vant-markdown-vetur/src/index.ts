import glob from 'fast-glob';
import { join } from 'path';
import { mdParser } from './parser';
import { formatter } from './formatter';
import { genWebTypes } from './web-types';
import { readFileSync, outputFileSync } from 'fs-extra';
import { Options, VueTag } from './type';
import { normalizePath } from './utils';
import { genVeturTags, genVeturAttributes } from './vetur';

async function readMarkdown(options: Options) {
  const mds = await glob(normalizePath(`${options.path}/**/*.md`));
  return mds
    .filter(md => options.test.test(md))
    .map(path => readFileSync(path, 'utf-8'));
}

export async function parseAndWrite(options: Options) {
  if (!options.outputDir) {
    throw new Error('outputDir can not be empty.');
  }

  const mds = await readMarkdown(options);
  const datas = mds
    .map(md => formatter(mdParser(md), options.tagPrefix))
    .filter(item => !!item) as VueTag[];

  const webTypes = genWebTypes(datas, options);
  const veturTags = genVeturTags(datas);
  const veturAttributes = genVeturAttributes(datas);

  outputFileSync(
    join(options.outputDir, 'tags.json'),
    JSON.stringify(veturTags, null, 2)
  );
  outputFileSync(
    join(options.outputDir, 'attributes.json'),
    JSON.stringify(veturAttributes, null, 2)
  );
  outputFileSync(
    join(options.outputDir, 'web-types.json'),
    JSON.stringify(webTypes, null, 2)
  );
}

export default { parseAndWrite };
