import postcss from 'postcss';
import postcssrc from 'postcss-load-config';
import { minify } from 'csso';
import { POSTCSS_CONFIG_FILE } from '../common/constant';

export async function compileCss(source: string | Buffer) {
  const config = await postcssrc({}, POSTCSS_CONFIG_FILE);
  const { css } = await postcss(config.plugins as any).process(source, {
    from: undefined
  });

  return minify(css).css;
}
