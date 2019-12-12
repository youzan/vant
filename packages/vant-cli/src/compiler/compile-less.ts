import { readFileSync } from 'fs-extra';
import { render as renderLess } from 'less';

export async function compileLess(filePath: string) {
  const source = readFileSync(filePath, 'utf-8');
  const { css } = await renderLess(source, {
    filename: filePath
  });

  return css;
}
