import postcss from 'postcss';
import postcssrc from 'postcss-load-config';
import CleanCss from 'clean-css';
import { POSTCSS_CONFIG_FILE } from '../common/constant';

const cleanCss = new CleanCss();

export async function compileCss(source: string | Buffer) {
  const config = await postcssrc({}, POSTCSS_CONFIG_FILE);
  const { css } = await postcss(config.plugins as any).process(source, {
    from: undefined,
  });

  return cleanCss.minify(css).styles;
}
