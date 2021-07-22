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
    .filter((md) => options.test.test(md))
    .map((path) => readFileSync(path, 'utf-8'));
}

export async function parseAndWrite(options: Options) {
  if (!options.outputDir) {
    throw new Error('outputDir can not be empty.');
  }

  const mds = await readMarkdown(options);
  const vueTags: VueTag[] = [];

  mds.forEach((md) => {
    const parsedMd = mdParser(md);
    formatter(vueTags, parsedMd, options.tagPrefix);
  });

  const webTypes = genWebTypes(vueTags, options);
  const veturTags = genVeturTags(vueTags);
  const veturAttributes = genVeturAttributes(vueTags);

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
