import { renderSync as renderSass } from 'sass';

export async function compileSass(filePath: string) {
  const { css } = renderSass({ file: filePath });
  return css;
}
