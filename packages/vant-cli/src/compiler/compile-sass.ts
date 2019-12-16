import { renderSync } from 'sass';

export async function compileSass(filePath: string) {
  const { css } = renderSync({ file: filePath });
  return css;
}
