import postcss from 'postcss';
import postcssrc from 'postcss-load-config';
import { POSTCSS_CONFIG_FILE } from '../common/constant';

export async function compileCss(source: string | Buffer) {
  const config = await postcssrc({}, POSTCSS_CONFIG_FILE);
  const output = await postcss(config.plugins as any).process(source, {
    from: undefined
  });

  return output;
}
