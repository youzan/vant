import { join } from 'path';
import { render } from 'less';
import { readFileSync } from 'fs-extra';
import { CWD } from '../common/constant';

export async function compileLess(filePath: string) {
  const source = readFileSync(filePath, 'utf-8');
  const { css } = await render(source, {
    filename: filePath,
    paths: [join(CWD, 'node_modules')],
  });

  return css;
}
