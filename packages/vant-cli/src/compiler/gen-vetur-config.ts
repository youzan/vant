import markdownVetur from '@vant/markdown-vetur';
import { join } from 'path';
import { get } from 'lodash';
import { SRC_DIR, getVantConfig, ROOT } from '../common/constant';

// generate vetur tags & attributes
export function genVeturConfig() {
  const vantCongig = getVantConfig();
  const options = get(vantCongig, 'build.vetur');

  if (options) {
    markdownVetur.parseAndWrite({
      path: SRC_DIR,
      test: /zh-CN\.md/,
      outputDir: join(ROOT, 'vetur'),
      ...options,
    });
  }
}
